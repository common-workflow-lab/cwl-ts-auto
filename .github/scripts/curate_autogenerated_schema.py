#!/usr/bin/env python3

import json
from copy import deepcopy
from itertools import chain
from pathlib import Path
from typing import Dict, List, Any
import sys


def remove_loading_options_and_extension_fields_from_schema(schema_dict: Any) -> Dict:
    """
    Remove loadingOptions from schema recursively
    :param schema_dict:
    :return:
    """

    new_schema_dict = {}

    if isinstance(schema_dict, Dict):
        for key, value in deepcopy(schema_dict).items():
            if isinstance(value, Dict):
                if "loadingOptions" in value:
                    del value["loadingOptions"]
                if "extensionFields" in value:
                    del value["extensionFields"]
                new_schema_dict[key] = remove_loading_options_and_extension_fields_from_schema(value)
            elif isinstance(value, List):
                if "loadingOptions" in value:
                    _ = value.pop(value.index("loadingOptions"))
                if "extensionFields" in value:
                    _ = value.pop(value.index("extensionFields"))
                new_schema_dict[key] = remove_loading_options_and_extension_fields_from_schema(value)
            else:
                new_schema_dict[key] = value
    elif isinstance(schema_dict, List):
        new_schema_dict = list(
            map(
                lambda value_iter: remove_loading_options_and_extension_fields_from_schema(value_iter),
                schema_dict
            )
        )
    else:
        # Item is a list of number
        new_schema_dict = schema_dict

    return new_schema_dict


def fix_unnamed_maps(
    schema_dict: Dict,
    definition_key: str,
    property_name: str,
    allow_type_as_only_input: bool = False,
    allow_type_array_as_only_input: bool = False,
):
    """
    Inputs, Steps, Outputs etc. can use the id as the key.

    So we want to convert

    FROM

    {
      "inputs": {
        "description": ""
                       "Defines the input parameters of the process.  The process is ready to"
                       "run when all required input parameters are associated with concrete"
                       "values.  Input parameters include a schema for each parameter which is"
                       "used to validate the input object.  It may also be used to build a user"
                       "interface for constructing the input object."
                       "When accepting an input object, all input parameters must have a value."
                       "If an input parameter is missing from the input object, it must be"
                       "assigned a value of `null` (or the value of `default` for that"
                       "parameter, if provided) for the purposes of validation and evaluation"
                       "of expressions.",
        "items": {
          "$ref": "#/definitions/WorkflowInputParameter"
        },
        "type": "array"
      }
    }

    TO

    {
      "inputs": {
        "description": ""
                       "Defines the input parameters of the process.  The process is ready to"
                       "run when all required input parameters are associated with concrete"
                       "values.  Input parameters include a schema for each parameter which is"
                       "used to validate the input object.  It may also be used to build a user"
                       "interface for constructing the input object."
                       "When accepting an input object, all input parameters must have a value."
                       "If an input parameter is missing from the input object, it must be"
                       "assigned a value of `null` (or the value of `default` for that"
                       "parameter, if provided) for the purposes of validation and evaluation"
                       "of expressions.",
        "oneOf": [
          {
            "items": {
              "$ref": "#/definitions/WorkflowInputParameter"
            },
            "type": "array"
          },
          {
            "patternProperties": {
              "^[_a-zA-Z][a-zA-Z0-9_-]*$": {
                "$ref": "#/definitions/WorkflowInputParameter"
              }
            },
            "type": "object"
          }
        ]
      }
    }

    :param schema_dict:  The schema dictionary to update
    :param definition_key:  The definition key to update, one of Workflow, ExpressionTool, CommandlineTool
    :param property_name:  The property to update, one of inputs, outputs, steps
    :param allow_type_as_only_input: Allow the type to be the only input, expected to match the 'type' input
    :param allow_type_array_as_only_input:
        Count lines test 4 - https://github.com/common-workflow-language/cwl-v1.2/blob/main/tests/count-lines4-wf.cwl
        file1: [file1, file2] should be support even if I don't recommend this
        Along with
        Count lines test 12 - https://github.com/common-workflow-language/cwl-v1.2/blob/main/tests/count-lines12-wf.cwl
        file1:
          - type: array
            items: File
        file2:
        - type: array
            items: File
        Ew!
    :return:
    """

    # Always do a deepcopy on the input
    schema_dict = deepcopy(schema_dict)

    # Confirm definitions key
    assert_definitions_key(schema_dict)

    # Assert definition_key exists in definitions
    if definition_key not in schema_dict["definitions"]:
        raise ValueError(f"Schema does not contain an '{definition_key}' key in 'definitions'")

    # Confirm that the definition_key has a properties key and the properties key is a dictionary
    if (
            "properties" not in schema_dict["definitions"][definition_key] or
            not isinstance(schema_dict["definitions"][definition_key]["properties"], Dict)
    ):
        raise ValueError(
            f"Schema does not contain a 'properties' key in '{definition_key}.definitions' "
            "or 'properties' is not a dictionary"
        )

    # Confirm that properties has a property_name key
    if property_name not in schema_dict["definitions"][definition_key]["properties"]:
        raise ValueError(f"Schema does not contain an '{property_name}' key in '{definition_key}.properties'")

    # Nest items and array key under oneOf array along with the patternProperties
    property_old = deepcopy(schema_dict["definitions"][definition_key]["properties"][property_name])

    pattern_properties_regex_match_ref = property_old.get("items", {})

    # Sometimes a user might have the following
    # Which I wouldn't recommend btw
    # outputs:
    #   lit: File
    if allow_type_as_only_input:
        type_definition_key = property_old.get("items", {}).get("$ref").replace("#/definitions/", "")
        if "type" in schema_dict["definitions"][type_definition_key]["properties"].keys():
            pattern_properties_regex_match_ref = {
                "oneOf": [
                    {
                        "$ref": property_old.get("items", {}).get("$ref")
                    },
                    schema_dict["definitions"][type_definition_key]["properties"]["type"]
                ]
            }
        else:
            pattern_properties_regex_match_ref = {
                "oneOf": [
                    {
                        "$ref": property_old.get("items", {}).get("$ref")
                    },
                    {
                        "type": "string"
                    }
                ]
            }

        # For situations where the type is defined by a either a single string or an array of items where
        # Each element of the array is equivalent to the 'type' property
        if allow_type_array_as_only_input:
            pattern_properties_regex_match_ref["oneOf"].append(
                {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {
                                "type": "string"
                            },
                            {
                                "$ref": f"#/definitions/{type_definition_key}"
                            }
                        ]
                    }
                }
            )

        # Re-initialise the definitions
        schema_dict["definitions"][definition_key]["properties"][property_name] = {
            "description": property_old.get("description", ""),
            "oneOf": [
                {
                    "items": property_old.get("items", {}),
                    "type": property_old.get("type", {})
                },
                {
                    "patternProperties": {
                        "^[_a-zA-Z][a-zA-Z0-9_-]*$": pattern_properties_regex_match_ref
                    },
                    "type": "object"
                }
            ]
        }
    else:
        # For WorkflowStep, we just allow the patternProperties to match the property_old items type
        # While the property itself is an object
        # Re-initialise the definitions
        schema_dict["definitions"][definition_key]["properties"][property_name] = {
            "description": property_old.get("description", ""),
            "oneOf": [
                {
                    "items": property_old.get("items", {}),
                    "type": property_old.get("type", {})
                },
                {
                    "patternProperties": {
                        "^[_a-zA-Z][a-zA-Z0-9_-]*$": property_old.get("items", {})
                    },
                    "type": "object"
                }
            ]
        }

    return schema_dict


def fix_secondary_file_schema(schema_dict: Dict) -> Dict:
    """
    SecondaryFileSchema should allow for a single string entry to represent the secondary file pattern
    Although not recommended, it is allowed in the CWL spec

    FROM

    {
        "SecondaryFileSchema": {
            "additionalProperties": false,
            "description": "Secondary files are specified using the following micro-DSL for secondary files:\n\n* If the value is a string, it is transformed to an object with two fields\n  `pattern` and `required`\n* By default, the value of `required` is `null`\n  (this indicates default behavior, which may be based on the context)\n* If the value ends with a question mark `?` the question mark is\n  stripped off and the value of the field `required` is set to `False`\n* The remaining value is assigned to the field `pattern`\n\nFor implementation details and examples, please see\n[this section](SchemaSalad.html#Domain_Specific_Language_for_secondary_files)\nin the Schema Salad specification.",
            "properties": {
                "pattern": {
                    "description": "Provides a pattern or expression specifying files or directories that\nshould be included alongside the primary file.\n\nIf the value is an expression, the value of `self` in the\nexpression must be the primary input or output File object to\nwhich this binding applies.  The `basename`, `nameroot` and\n`nameext` fields must be present in `self`.  For\n`CommandLineTool` inputs the `location` field must also be\npresent.  For `CommandLineTool` outputs the `path` field must\nalso be present.  If secondary files were included on an input\nFile object as part of the Process invocation, they must also\nbe present in `secondaryFiles` on `self`.\n\nThe expression must return either: a filename string relative\nto the path to the primary File, a File or Directory object\n(`class: File` or `class: Directory`) with either `location`\n(for inputs) or `path` (for outputs) and `basename` fields\nset, or an array consisting of strings or File or Directory\nobjects as previously described.\n\nIt is legal to use `location` from a File or Directory object\npassed in as input, including `location` from secondary files\non `self`.  If an expression returns a File object with the\nsame `location` but a different `basename` as a secondary file\nthat was passed in, the expression result takes precedence.\nSetting the basename with an expression this way affects the\n`path` where the secondary file will be staged to in the\nCommandLineTool.\n\nThe expression may return \"null\" in which case there is no\nsecondary file from that expression.\n\nTo work on non-filename-preserving storage systems, portable\ntool descriptions should treat `location` as an\n[opaque identifier](#opaque-strings) and avoid constructing new\nvalues from `location`, but should construct relative references\nusing `basename` or `nameroot` instead, or propagate `location`\nfrom defined inputs.\n\nIf a value in `secondaryFiles` is a string that is not an expression,\nit specifies that the following pattern should be applied to the path\nof the primary file to yield a filename relative to the primary File:\n\n  1. If string ends with `?` character, remove the last `?` and mark\n    the resulting secondary file as optional.\n  2. If string begins with one or more caret `^` characters, for each\n    caret, remove the last file extension from the path (the last\n    period `.` and all following characters).  If there are no file\n    extensions, the path is unchanged.\n  3. Append the remainder of the string to the end of the file path.",
                    "type": "string"
                },
                "required": {
                    "description": "An implementation must not fail workflow execution if `required` is\nset to `false` and the expected secondary file does not exist.\nDefault value for `required` field is `true` for secondary files on\ninput and `false` for secondary files on output.",
                    "type": [
                        "string",
                        "boolean"
                    ]
                }
            },
            "required": [
                "pattern"
            ],
            "type": "object"
        }
    }

    TO

    {
        "SecondaryFileSchema": {
            "additionalProperties": false,
            "description": "Secondary files are specified using the following micro-DSL for secondary files:\n\n* If the value is a string, it is transformed to an object with two fields\n  `pattern` and `required`\n* By default, the value of `required` is `null`\n  (this indicates default behavior, which may be based on the context)\n* If the value ends with a question mark `?` the question mark is\n  stripped off and the value of the field `required` is set to `False`\n* The remaining value is assigned to the field `pattern`\n\nFor implementation details and examples, please see\n[this section](SchemaSalad.html#Domain_Specific_Language_for_secondary_files)\nin the Schema Salad specification.",
            "oneOf": [
                {
                    "properties": {
                        "pattern": {
                            "description": "Provides a pattern or expression specifying files or directories that\nshould be included alongside the primary file.\n\nIf the value is an expression, the value of `self` in the\nexpression must be the primary input or output File object to\nwhich this binding applies.  The `basename`, `nameroot` and\n`nameext` fields must be present in `self`.  For\n`CommandLineTool` inputs the `location` field must also be\npresent.  For `CommandLineTool` outputs the `path` field must\nalso be present.  If secondary files were included on an input\nFile object as part of the Process invocation, they must also\nbe present in `secondaryFiles` on `self`.\n\nThe expression must return either: a filename string relative\nto the path to the primary File, a File or Directory object\n(`class: File` or `class: Directory`) with either `location`\n(for inputs) or `path` (for outputs) and `basename` fields\nset, or an array consisting of strings or File or Directory\nobjects as previously described.\n\nIt is legal to use `location` from a File or Directory object\npassed in as input, including `location` from secondary files\non `self`.  If an expression returns a File object with the\nsame `location` but a different `basename` as a secondary file\nthat was passed in, the expression result takes precedence.\nSetting the basename with an expression this way affects the\n`path` where the secondary file will be staged to in the\nCommandLineTool.\n\nThe expression may return \"null\" in which case there is no\nsecondary file from that expression.\n\nTo work on non-filename-preserving storage systems, portable\ntool descriptions should treat `location` as an\n[opaque identifier](#opaque-strings) and avoid constructing new\nvalues from `location`, but should construct relative references\nusing `basename` or `nameroot` instead, or propagate `location`\nfrom defined inputs.\n\nIf a value in `secondaryFiles` is a string that is not an expression,\nit specifies that the following pattern should be applied to the path\nof the primary file to yield a filename relative to the primary File:\n\n  1. If string ends with `?` character, remove the last `?` and mark\n    the resulting secondary file as optional.\n  2. If string begins with one or more caret `^` characters, for each\n    caret, remove the last file extension from the path (the last\n    period `.` and all following characters).  If there are no file\n    extensions, the path is unchanged.\n  3. Append the remainder of the string to the end of the file path.",
                            "type": "string"
                        },
                        "required": {
                            "description": "An implementation must not fail workflow execution if `required` is\nset to `false` and the expected secondary file does not exist.\nDefault value for `required` field is `true` for secondary files on\ninput and `false` for secondary files on output.",
                            "type": [
                                "string",
                                "boolean"
                            ]
                        }
                    },
                    "required": [
                        "pattern"
                    ],
                    "type": "object"
                },
                {
                    "type": "string"
                }
            ]
        }
    }

    :param schema_dict:
    :return:
    """

    # Always do a deepcopy on the input
    schema_dict = deepcopy(schema_dict)

    # Confirm definitions key
    assert_definitions_key(schema_dict)

    # Confirm definition_key exists in definitions
    if "SecondaryFileSchema" not in schema_dict["definitions"]:
        raise ValueError("Schema does not contain an 'SecondaryFileSchema' key in 'definitions'")

    # Confirm that the definition_key has a properties key and the properties key is a dictionary
    if (
            "properties" not in schema_dict["definitions"]["SecondaryFileSchema"] or
            not isinstance(schema_dict["definitions"]["SecondaryFileSchema"]["properties"], Dict)
    ):
        raise ValueError(
            "Schema does not contain a 'properties' key in 'SecondaryFileSchema.definitions' "
            "or 'properties' is not a dictionary"
        )

    # Move 'properties', 'required' and 'type' under 'oneOf' array for the SecondaryFileSchema definition
    # We also need to drop the additional properties to be under the oneOf object type
    schema_dict["definitions"]["SecondaryFileSchema"] = {
        "description": schema_dict["definitions"]["SecondaryFileSchema"]["description"],
        "oneOf": [
            {
                "additionalProperties": schema_dict["definitions"]["SecondaryFileSchema"]["additionalProperties"],
                "properties": schema_dict["definitions"]["SecondaryFileSchema"]["properties"],
                "required": schema_dict["definitions"]["SecondaryFileSchema"]["required"],
                "type": "object"
            },
            {
                "type": "string"
            }
        ]
    }

    # Return the schema dictionary
    return schema_dict


def fix_record_field_maps(schema_dict: Dict, definition_key: str) -> Dict:
    """
    For each of the record field maps,
    Duplicate the record field map but remove 'name' from the required list
    And name the key InputRecordFieldMap

    We also need to allow for the InputRecordField to be of type 'array' where each item represents the 'type'
    We can pull this anyOf from the 'type' field from the InputRecordField

    For example

    FROM

    {
        "CommandInputRecordField": {
            "additionalProperties": false,
            "oneOf": [
                {
                    ...
                    "required": [
                        "name",
                        "type"
                    ],
                    "type": "object"
                },
                {
                    "type" "array",
                    "items": {
                        "anyOf": [
                            {
                                "$ref": "#/definitions/InputRecordSchema"
                            },
                            {
                                "$ref": "#/definitions/InputEnumSchema"
                            },
                            {
                                "$ref": "#/definitions/InputArraySchema"
                            },
                            {
                                "type": "string"
                            }
                        ]
                    }
                }
            ]
        }
    }

    TO


    {
        "CommandInputRecordField": {
            "additionalProperties": false,
            ...
            "required": [
                "name",
                "type"
            ],
            "type": "object"
        },
        "CommandInputRecordFieldMap": {
            "additionalProperties": false,
            ...
            "required": [
                "type"
            ],
            "type": "object"
        }
    }


    :param schema_dict:
    :param definition_key:
    :return:
    """

    # Always do a deepcopy on the input
    schema_dict = deepcopy(schema_dict)

    # Confirm definitions key
    assert_definitions_key(schema_dict)

    # Confirm definition_key exists in definitions
    if definition_key not in schema_dict["definitions"]:
        raise ValueError(f"Schema does not contain an '{definition_key}' key in 'definitions'")

    # Confirm that the definition_key has a required key and the required key is an array
    if (
            "required" not in schema_dict["definitions"][definition_key] or
            not isinstance(schema_dict["definitions"][definition_key]["required"], List)
    ):
        raise ValueError(
            f"Schema does not contain a 'required' key in '{definition_key}.definitions' "
            "or 'required' is not a list"
        )

    # Update the record field type to be of the array type where each item represents the 'type'
    schema_dict["definitions"][definition_key] = {
        "description": schema_dict["definitions"][definition_key].get("description", ""),
        "oneOf": [
            {
                **{
                    key: value
                    for key, value in schema_dict["definitions"][definition_key].items()
                    if key not in ["description"]
                }
            },
            {
                "type": "array",
                "items": schema_dict["definitions"][definition_key]["properties"].get("type", {})
            }
        ]
    }

    # Create the new key in the definitions with the Map suffix and remove the 'name' from the required list
    schema_dict["definitions"][definition_key + "Map"] = {
        "description": schema_dict["definitions"][definition_key].get("description", ""),
        "oneOf": [
            {
                **{
                    key: value
                    for key, value in schema_dict["definitions"][definition_key]["oneOf"][0].items()
                    if key not in ["description", "required"]
                },
                "required": list(
                    filter(
                        lambda required_iter: required_iter != "name",
                        schema_dict["definitions"][definition_key]["oneOf"][0].get("required", [])
                    )
                )
            },
            {
                "type": "array",
                "items": schema_dict["definitions"][definition_key]["oneOf"][0]["properties"].get("type", {})
            },
            {
                # In situations where the type is defined by a single string
                # Again, wouldn't recommend this. But it is allowed in the CWL spec
                "type": "string"
            }
        ]
    }

    # Return the updated schema
    return schema_dict


def fix_schema_field_maps(schema_dict: Dict, definition_key: str, record_reference: str) -> Dict:
    """
    Update the schema field to allow for mapped fields - that use the name as the key

    From:

    {
        "CommandInputRecordSchema": {
            "additionalProperties": false,
            "description": "Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandInputRecordSchema",
            "properties": {
                ...
                "fields": {
                    "description": "Defines the fields of the record.",
                    "items": {
                        "$ref": "#/definitions/CommandInputRecordField"
                    },
                    "type": "array"
                },
                ...
            },
            "required": [
                "type"
            ],
            "type": "object"
        }
    }

    TO

    {
        "CommandInputRecordSchema": {
            "additionalProperties": false,
            "description": "Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandInputRecordSchema",
            "properties": {
                ...
                "fields": {
                    "description": "Defines the fields of the record.",
                    "oneOf": [
                        {
                            "items": {
                                "$ref": "#/definitions/CommandInputRecordField"
                            },
                            "type": "array"
                        },
                        {
                            "patternProperties": {
                                "^[_a-zA-Z][a-zA-Z0-9_-]*$": {
                                    "$ref": "#/definitions/CommandInputRecordFieldMap"
                                }
                            },
                            "type": "object"
                        }
                    ]

                },
                ...
            },
            "required": [
                "type"
            ],
            "type": "object"
        }
    }

    :param schema_dict:  The schema dict
    :param definition_key:  One of CommandInputRecordSchema or InputRecordSchema
    :param record_reference:  One of CommandInputRecordFieldMap or InputRecordFieldMap
    :return:
    """

    # Always do a deepcopy on the input
    schema_dict = deepcopy(schema_dict)

    # Confirm definitions key
    assert_definitions_key(schema_dict)

    # Confirm definition_key exists in definitions
    if definition_key not in schema_dict["definitions"]:
        raise ValueError(f"Schema does not contain an '{definition_key}' key in 'definitions'")

    # Confirm that the definition_key has a properties key and the properties key is a dictionary
    if (
            "properties" not in schema_dict["definitions"][definition_key] or
            not isinstance(schema_dict["definitions"][definition_key]["properties"], Dict)
    ):
        raise ValueError(
            f"Schema does not contain a 'properties' key in '{definition_key}.definitions' "
            "or 'properties' is not a dictionary"
        )

    # Confirm that properties has a fields key
    if "fields" not in schema_dict["definitions"][definition_key]["properties"]:
        raise ValueError(f"Schema does not contain an 'fields' key in '{definition_key}.properties'")

    # Confirm that fields is of type array and has an items key
    if (
            "type" not in schema_dict["definitions"][definition_key]["properties"]["fields"]
            or
            not schema_dict["definitions"][definition_key]["properties"]["fields"]["type"] == "array"
            or
            "items" not in schema_dict["definitions"][definition_key]["properties"]["fields"]
    ):
        raise ValueError(
            f"Schema does not contain an 'fields' key in '{definition_key}.properties' "
            "of type array with an 'items' key"
        )

    # Nest items and array key under oneOf array along with the patternProperties
    property_old = deepcopy(schema_dict["definitions"][definition_key]["properties"]["fields"])

    # Re-initialise the definitions
    schema_dict["definitions"][definition_key]["properties"]["fields"] = {
        "description": property_old.get("description", ""),
        "oneOf": [
            {
                "items": property_old.get("items", {}),
                "type": property_old.get("type", {})
            },
            {
                "patternProperties": {
                    "^[_a-zA-Z][a-zA-Z0-9_-]*$": {
                        "$ref": f"#/definitions/{record_reference}Map"
                    }
                },
                "type": "object"
            }
        ]
    }

    # Set the additionalProperties to false since we nest through reference classes
    # Additional properties is set to false in subclasses - resolves https://stoic-agnesi-d0ac4a.netlify.app/37
    # _ = schema_dict["definitions"][definition_key].pop("additionalProperties", None)

    # Return the updated schema
    return schema_dict


def fix_named_maps(schema_dict: Dict, definition_key: str, property_name: str) -> Dict:
    """
    For hints and requirements, which have a named list of values we want to convert from
    We also need to duplicate the Requirements and Hints properties
    to allow for the map objects to not have the 'class' key

    {
      "requirements": {
        "description": ""
                       "Declares requirements that apply to either the runtime environment or the"
                       "workflow engine that must be met in order to execute this process.  If"
                       "an implementation cannot satisfy all requirements, or a requirement is"
                       "listed which is not recognized by the implementation, it is a fatal"
                       "error and the implementation must not attempt to run the process,"
                       "unless overridden at user option.",
        "items": {
          "anyOf": [
            {
              "$ref": "#/definitions/InlineJavascriptRequirement"
            },
            ...
          ]
        },
        "type": "array"
      }
    }

    TO

    {
      "requirements": {
        "description": ""
                       "Declares requirements that apply to either the runtime environment or the"
                       "workflow engine that must be met in order to execute this process.  If"
                       "an implementation cannot satisfy all requirements, or a requirement is"
                       "listed which is not recognized by the implementation, it is a fatal"
                       "error and the implementation must not attempt to run the process,"
                       "unless overridden at user option.",
        "oneOf": [
          {
            "items": {
              "anyOf": [
                {
                  "$ref": "#/definitions/InlineJavascriptRequirement"
                },
                ...
              ]
            },
            "type": "array"
          },
          {
            "type": "object",
            "properties": {
              "InlineJavascriptRequirement": {
                "oneOf": [
                    {
                        "$ref": "#/definitions/InlineJavascriptRequirementMap"
                    },
                    // Empty object
                    {
                      "type": "object",
                      "properties": {},
                      "additionalProperties": false
                    }
                ]
              },
              ...
            }
          }
        ]
      }
    }

    AND add the Map definition by duplicating the original definition and removing the 'class' key from properties
    and remove the class item from the removed map definition

    FROM

    {
      "InlineJavascriptRequirement": {
        "type": "object",
        "properties": {
          "class": {
            "enum": [
              "InlineJavascriptRequirement"
            ]
          },
          "expressionLib": {
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "class",
          "expressionLib"
        ]
      },
      ...
    }

    TO

    {
      "InlineJavascriptRequirement": {
        "type": "object",
        "properties": {
          "expressionLib": {
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "class",
          "expressionLib"
        ]
      },
      "InlineJavascriptRequirementMap": {
        "type": "object",
        "properties": {
          "expressionLib": {
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "expressionLib"
        ]
      },
      ...
    }

    :param schema_dict:  The schema definition
    :param definition_key: One of Workflow, CommandlineTool or ExpressionTool
    :param property_name: One of requirements or hints
    :return:
    """

    # Always do a deepcopy on the input
    schema_dict = deepcopy(schema_dict)

    # Assert that definitions key exists
    assert_definitions_key(schema_dict)

    # Confirm definitions key exists
    if definition_key not in schema_dict["definitions"]:
        raise ValueError(f"Schema does not contain an '{definition_key}' key in 'definitions'")

    # Confirm that the definition_key has a properties key and the properties key is a dictionary
    if (
            "properties" not in schema_dict["definitions"][definition_key] or
            not isinstance(schema_dict["definitions"][definition_key]["properties"], Dict)
    ):
        raise ValueError(
            f"Schema does not contain a 'properties' key in '{definition_key}.definitions' "
            "or 'properties' is not a dictionary"
        )

    # Confirm that properties has a property_name key
    if property_name not in schema_dict["definitions"][definition_key]["properties"]:
        raise ValueError(f"Schema does not contain an '{property_name}' key in '{definition_key}.properties'")

    # Confirm that property_name is of type array and has an items key
    if (
            "type" not in schema_dict["definitions"][definition_key]["properties"][property_name]
            or
            not schema_dict["definitions"][definition_key]["properties"][property_name]["type"] == "array"
            or
            "items" not in schema_dict["definitions"][definition_key]["properties"][property_name]
    ):
        raise ValueError(
            f"Schema does not contain an '{property_name}' key in '{definition_key}.properties' "
            "of type array with an 'items' key"
        )

    # If items is an empty object, we just convert from empty items of type array to
    # oneOf array with an empty object or type object with patternProperties
    # This is important for hints
    if len(schema_dict["definitions"][definition_key]["properties"][property_name]["items"]) == 0:
        schema_dict["definitions"][definition_key]["properties"][property_name] = {
            "description": schema_dict["definitions"][definition_key]["properties"][property_name].get(
                "description", ""
            ),
            "additionalProperties": False,
            "oneOf": [
                {
                    "items": schema_dict["definitions"][definition_key]["properties"][property_name].get("items", {}),
                    "type": schema_dict["definitions"][definition_key]["properties"][property_name].get("type", {})
                },
                {
                    "type": "object",
                    "patternProperties": {
                        "^[_a-zA-Z][a-zA-Z0-9_-]*$": {
                            "type": "object"
                        }
                    }
                }
            ]
        }

        return schema_dict

    # Confirm that property.items has an anyOf key and the anyOf key is an array
    if (
            "anyOf" not in schema_dict["definitions"][definition_key]["properties"][property_name]["items"]
            or
            not isinstance(
                schema_dict["definitions"][definition_key]["properties"][property_name]["items"]["anyOf"],
                List
            )
    ):
        raise ValueError(
            f"Schema does not contain an 'anyOf' key in '{definition_key}.properties.{property_name}.items' "
            "or 'anyOf' is not a list"
        )

    # Nest items and array key under oneOf array along with and object type
    property_old = deepcopy(schema_dict["definitions"][definition_key]["properties"][property_name])

    schema_dict["definitions"][definition_key]["properties"][property_name] = {
        "description": property_old.get("description", ""),
        "oneOf": [
            {
                "items": {
                    "anyOf": (
                        # prepend $import to the list of possible items
                        # https://github.com/common-workflow-language/cwl-v1.2/blob/main/tests/schemadef-wf.cwl
                            [
                                {
                                    "$ref": "#/definitions/CWLImportManual"
                                }
                            ] +
                            property_old.get("items")["anyOf"]
                    )
                },
                "type": property_old.get("type", {})
            },
            {
                "type": "object",
                "properties": dict(
                    map(
                        # requirements_iter will be a dict looking like this
                        # {
                        #    "$ref": "#/definitions/InlineJavascriptRequirement"
                        # }
                        # We need to convert to
                        # "InlineJavascriptRequirement": {
                        #   "oneOf": [
                        #       {
                        #           "$ref": "#/definitions/InlineJavascriptRequirementMap"
                        #       },
                        #       // Empty object
                        #       {
                        #         "type": "object",
                        #         "properties": {},
                        #         "additionalProperties": false
                        #       }
                        #   ]
                        # }
                        lambda requirement_dict_iter: (
                            requirement_dict_iter.get("$ref").split("#/definitions/")[1],
                            {
                                "anyOf": [
                                    {
                                        "$ref": f"#/definitions/{requirement_dict_iter.get('$ref').split('#/definitions/')[1]}Map"
                                    },
                                    {
                                        "type": "object",
                                        "properties": {},
                                        "additionalProperties": False
                                    }
                                ]
                            }
                        ),
                        property_old.get("items", {}).get("anyOf", [])
                    )
                ),
                "additionalProperties": False
            }
        ]
    }

    for requirement_iter in property_old.get("items", {}).get("anyOf", []):
        requirement_name = requirement_iter.get("$ref").split("#/definitions/")[1]
        schema_dict["definitions"][requirement_name + "Map"] = {
            "type": "object",
            "properties": dict(
                map(
                    lambda requirement_property_iter: (
                        requirement_property_iter,
                        schema_dict["definitions"][requirement_name]["properties"][requirement_property_iter]
                    ),
                    filter(
                        lambda requirement_property_iter: requirement_property_iter != "class",
                        schema_dict["definitions"][requirement_name].get("properties", {})
                    )
                )
            ),
            "required": list(
                filter(
                    lambda requirement_property_iter: requirement_property_iter != "class",
                    schema_dict["definitions"][requirement_name].get("required", [])
                )
            ),
            "description": schema_dict["definitions"][requirement_name].get("description", "")
        }

    return schema_dict


def read_schema_in_from_file(file_path: Path) -> Dict:
    """
    Read in the auto-generated schema from the file
    :param file_path:
    :return:
    """
    if not file_path.exists():
        raise FileNotFoundError(f"File {file_path} does not exist")

    with open(file_path, "r") as file_h:
        return json.load(file_h)


def assert_definitions_key(schema_dict: Dict):
    """
    Ensure that the definitions key is part of the schema dictionary and is itself is a dictionary
    :param schema_dict:
    :return:
    """
    if "definitions" not in schema_dict.keys() and not isinstance(schema_dict["definitions"], Dict):
        raise ValueError("Schema does not contain a 'definitions' key or 'definitions' is not a dictionary")


def add_import_and_include_to_schema(schema_dict) -> Dict:
    """
    Under the definitions section, add in the $import and $include definitions
    Copied from https://github.com/common-workflow-language/cwl-v1.2/blob/76bdf9b55e2378432e0e6380ccedebb4a94ce483/json-schema/cwl.yaml#L57-L72

    {
      "CWLImportManual": {
        "description": \"\"\"
           Represents an '$import' directive that should point toward another compatible CWL file to import
           where specified.
           The contents of the imported file should be relevant contextually where it is being imported
          \"\"\",
        "$comment": \"\"\"
          The schema validation of the CWL will not itself perform the '$import' to resolve and validate its contents.
          Therefore, the complete schema will not be validated entirely, and could still be partially malformed.
          To ensure proper and exhaustive validation of a CWL definition with this schema, all '$import' directives
          should be resolved and extended beforehand.
        \"\"\",
        "type": "object",
        "properties": {
          "$import": {
            "type": "string"
          }
        },
        "required": [
          "$import"
        ],
        "additionalProperties": false
      }
    }

    Ditto for $include directive

    {
      "CWLIncludeManual": {
        "description": "
           Represents an '$include' directive that should point toward another compatible CWL file to import
           where specified.
           The contents of the imported file should be relevant contextually where it is being imported
          ",
        "$comment": "
          The schema validation of the CWL will not itself perform the '$include' to resolve and validate its contents.
          Therefore, the complete schema will not be validated entirely, and could still be partially malformed.
          To ensure proper and exhaustive validation of a CWL definition with this schema, all '$include' directives
          should be resolved and extended beforehand.
        ",
        "type": "object",
        "properties": {
          "$include": {
            "type": "string"
          }
        },
        "required": [
          "$include"
        ],
        "additionalProperties": false
      }
    }


    :param schema_dict:
    :return:
    """

    # Always do a deepcopy on the input
    schema_dict = deepcopy(schema_dict)

    # Confirm definitions key
    assert_definitions_key(schema_dict)

    # Add in the $import and $include to the definitions
    schema_dict["definitions"].update(
        {
            "CWLImportManual": {
                "description": ""
                               "Represents an '$import' directive that should point toward another compatible "
                               "CWL file to import where specified. The contents of the imported file should be "
                               "relevant contextually where it is being imported",
                "$comment": ""
                            "The schema validation of the CWL will not itself perform the '$import' to resolve and "
                            "validate its contents. Therefore, the complete schema will not be validated entirely, "
                            "and could still be partially malformed. "
                            "To ensure proper and exhaustive validation of a CWL definition with this schema, "
                            "all '$import' directives should be resolved and extended beforehand",
                "type": "object",
                "properties": {
                    "$import": {
                        "type": "string"
                    }
                },
                "required": [
                    "$import"
                ],
                "additionalProperties": False
            },
            "CWLIncludeManual": {
                "description": ""
                               "Represents an '$include' directive that should point toward another compatible "
                               "CWL file to import where specified. The contents of the imported file should be "
                               "relevant contextually where it is being imported",
                "$comment": ""
                            "The schema validation of the CWL will not itself perform the '$include' to resolve and "
                            "validate its contents. Therefore, the complete schema will not be validated entirely, "
                            "and could still be partially malformed. "
                            "To ensure proper and exhaustive validation of a CWL definition with this schema, "
                            "all '$include' directives should be resolved and extended beforehand",
                "type": "object",
                "properties": {
                    "$include": {
                        "type": "string"
                    }
                },
                "required": [
                    "$include"
                ],
                "additionalProperties": False
            }
        }
    )

    return schema_dict


def fix_inline_javascript_requirement(schema_dict: Dict) -> Dict:
    """
    Fix the InlineJavascriptRequirement.expressionLib array to allow for $include

    FROM

    {
      "InlineJavascriptRequirement": {
        "additionalProperties": false,
        "description": "Auto-generated class implementation for https://w3id.org/cwl/cwl#InlineJavascriptRequirement\n\nIndicates that the workflow platform must support inline Javascript expressions.\nIf this requirement is not present, the workflow platform must not perform expression\ninterpolation.",
        "properties": {
          "class": {
            "const": "InlineJavascriptRequirement",
            "description": "Always 'InlineJavascriptRequirement'",
            "type": "string"
          },
          "expressionLib": {
            "description": "Additional code fragments that will also be inserted\nbefore executing the expression code.  Allows for function definitions that may\nbe called from CWL expressions.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "extensionFields": {
            "$ref": "#/definitions/Dictionary<any>"
          },
          "loadingOptions": {
            "$ref": "#/definitions/LoadingOptions"
          }
        },
        "required": [
          "class"
        ],
        "type": "object"
      }
    }

    TO

    {
      "InlineJavascriptRequirement": {
        "additionalProperties": false,
        "description": "Auto-generated class implementation for https://w3id.org/cwl/cwl#InlineJavascriptRequirement\n\nIndicates that the workflow platform must support inline Javascript expressions.\nIf this requirement is not present, the workflow platform must not perform expression\ninterpolation.",
        "properties": {
          "class": {
            "const": "InlineJavascriptRequirement",
            "description": "Always 'InlineJavascriptRequirement'",
            "type": "string"
          },
          "expressionLib": {
            "description": "Additional code fragments that will also be inserted\nbefore executing the expression code.  Allows for function definitions that may\nbe called from CWL expressions.",
            "items": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                    "$ref": "#/definitions/CWLIncludeManual"
                }
              ]
            },
            "type": "array"
          },
          "extensionFields": {
            "$ref": "#/definitions/Dictionary<any>"
          }
        },
        "required": [
          "class"
        ],
        "type": "object"
      }
    }

    """

    # Always do a deepcopy on the input
    schema_dict = deepcopy(schema_dict)

    # Confirm definitions key
    assert_definitions_key(schema_dict)

    # Assert InlineJavascriptRequirement exists in definitions
    if "InlineJavascriptRequirement" not in schema_dict["definitions"]:
        raise ValueError("Schema does not contain an 'InlineJavascriptRequirement' key in 'definitions'")

    # Confirm that the InlineJavascriptRequirement has a properties key and the properties key is a dictionary
    if (
            "properties" not in schema_dict["definitions"]["InlineJavascriptRequirement"] or
            not isinstance(schema_dict["definitions"]["InlineJavascriptRequirement"]["properties"], Dict)
    ):
        raise ValueError(
            "Schema does not contain a 'properties' key in 'InlineJavascriptRequirement.definitions' "
            "or 'properties' is not a dictionary"
        )

    # Confirm that properties has an expressionLib key
    if "expressionLib" not in schema_dict["definitions"]["InlineJavascriptRequirement"]["properties"]:
        raise ValueError("Schema does not contain an 'expressionLib' key in 'InlineJavascriptRequirement.properties'")

    # Confirm that expressionLib is of type array and has an items key
    if (
            "type" not in schema_dict["definitions"]["InlineJavascriptRequirement"]["properties"]["expressionLib"]
            or
            not schema_dict["definitions"]["InlineJavascriptRequirement"]["properties"]["expressionLib"][
                    "type"] == "array"
            or
            "items" not in schema_dict["definitions"]["InlineJavascriptRequirement"]["properties"]["expressionLib"]
    ):
        raise ValueError(
            "Schema does not contain an 'expressionLib' key in 'InlineJavascriptRequirement.properties' "
            "of type array with an 'items' key"
        )

    # Allow for $include in the expressionLib array by updating the the expressionLib items to be a anyOf array
    schema_dict["definitions"]["InlineJavascriptRequirement"]["properties"]["expressionLib"]["items"] = {
        "anyOf": [
            {
                "type": "string"
            },
            {
                "$ref": "#/definitions/CWLIncludeManual"
            }
        ]
    }

    return schema_dict


def fix_schema_def_requirement(schema_dict: Dict) -> Dict:
    """
    Allow SchemaDefRequirement.types array to be $import type

    FROM

    {
      "SchemaDefRequirement": {
        "additionalProperties": false,
        "description": ""
                       "Auto-generated class implementation for https://w3id.org/cwl/cwl#SchemaDefRequirement"
                       "This field consists of an array of type definitions which must be used when"
                       "interpreting the `inputs` and `outputs` fields.  When a `type` field"
                       "contains a IRI, the implementation must check if the type is defined in"
                       "`schemaDefs` and use that definition.  If the type is not found in"
                       "`schemaDefs`, it is an error.  The entries in `schemaDefs` must be"
                       "processed in the order listed such that later schema definitions may refer"
                       "to earlier schema definitions."
                       "- **Type definitions are allowed for `enum` and `record` types only.**"
                       "- Type definitions may be shared by defining them in a file and then"
                       "  `$include`-ing them in the `types` field.\n- A file can contain a list of type definitions",
        "properties": {
          "class": {
            "const": "SchemaDefRequirement",
            "description": "Always 'SchemaDefRequirement'",
            "type": "string"
          },
          "extensionFields": {
            "$ref": "#/definitions/Dictionary<any>"
          },
          "loadingOptions": {
            "$ref": "#/definitions/LoadingOptions"
          },
          "types": {
            "description": "The list of type definitions.",
            "items": {
              "anyOf": [
                {
                  "$ref": "#/definitions/CommandInputArraySchema"
                },
                {
                  "$ref": "#/definitions/CommandInputRecordSchema"
                },
                {
                  "$ref": "#/definitions/CommandInputEnumSchema"
                }
              ]
            },
            "type": "array"
          }
        },
        "required": [
          "class",
          "types"
        ],
        "type": "object"
      }
    }

    TO

    {
      "SchemaDefRequirement": {
        "additionalProperties": false,
        "description": ""
                       "Auto-generated class implementation for https://w3id.org/cwl/cwl#SchemaDefRequirement"
                       "This field consists of an array of type definitions which must be used when"
                       "interpreting the `inputs` and `outputs` fields.  When a `type` field"
                       "contains a IRI, the implementation must check if the type is defined in"
                       "`schemaDefs` and use that definition.  If the type is not found in"
                       "`schemaDefs`, it is an error.  The entries in `schemaDefs` must be"
                       "processed in the order listed such that later schema definitions may refer"
                       "to earlier schema definitions."
                       "- **Type definitions are allowed for `enum` and `record` types only.**"
                       "- Type definitions may be shared by defining them in a file and then"
                       "  `$include`-ing them in the `types` field.\n- A file can contain a list of type definitions",
        "properties": {
          "class": {
            "const": "SchemaDefRequirement",
            "description": "Always 'SchemaDefRequirement'",
            "type": "string"
          },
          "extensionFields": {
            "$ref": "#/definitions/Dictionary<any>"
          },
          "loadingOptions": {
            "$ref": "#/definitions/LoadingOptions"
          },
          "types": {
            "description": "The list of type definitions.",
            "items": {
              "anyOf": [
                {
                  "$ref": "#/definitions/CommandInputArraySchema"
                },
                {
                  "$ref": "#/definitions/CommandInputRecordSchema"
                },
                {
                  "$ref": "#/definitions/CommandInputEnumSchema"
                },
                {
                  "$ref": "#/definitions/CWLImportManual"
                }
              ]
            },
            "type": "array"
          }
        },
        "required": [
          "class",
          "types"
        ],
        "type": "object"
      }
    }

    :param schema_dict:
    :return:
    """

    # Always do a deepcopy on the input
    schema_dict = deepcopy(schema_dict)

    # Confirm definitions key
    assert_definitions_key(schema_dict)

    # Assert SchemaDefRequirement exists in definitions
    if "SchemaDefRequirement" not in schema_dict["definitions"]:
        raise ValueError("Schema does not contain an 'SchemaDefRequirement' key in 'definitions'")

    # Confirm that the SchemaDefRequirement has a properties key and the properties key is a dictionary
    if (
            "properties" not in schema_dict["definitions"]["SchemaDefRequirement"] or
            not isinstance(schema_dict["definitions"]["SchemaDefRequirement"]["properties"], Dict)
    ):
        raise ValueError(
            "Schema does not contain a 'properties' key in 'SchemaDefRequirement.definitions' "
            "or 'properties' is not a dictionary"
        )

    # Confirm that properties has a types key
    if "types" not in schema_dict["definitions"]["SchemaDefRequirement"]["properties"]:
        raise ValueError("Schema does not contain an 'types' key in 'SchemaDefRequirement.properties'")

    # Confirm that types is of type array and has an items key
    if (
            "type" not in schema_dict["definitions"]["SchemaDefRequirement"]["properties"]["types"]
            or
            not schema_dict["definitions"]["SchemaDefRequirement"]["properties"]["types"]["type"] == "array"
            or
            "items" not in schema_dict["definitions"]["SchemaDefRequirement"]["properties"]["types"]
    ):
        raise ValueError(
            "Schema does not contain an 'types' key in 'SchemaDefRequirement.properties' "
            "of type array with an 'items' key"
        )

    # Confirm that the types items has an anyOf key and the anyOf key is an array
    if (
            "anyOf" not in schema_dict["definitions"]["SchemaDefRequirement"]["properties"]["types"]["items"]
            or
            not isinstance(schema_dict["definitions"]["SchemaDefRequirement"]["properties"]["types"]["items"]["anyOf"],
                           List)
    ):
        raise ValueError(
            "Schema does not contain an 'anyOf' key in 'SchemaDefRequirement.properties.types.items' "
            "or 'anyOf' is not a list"
        )

    # Allow for $import in the types array by updating the types items to be a anyOf array
    schema_dict["definitions"]["SchemaDefRequirement"]["properties"]["types"]["items"]["anyOf"].append(
        {
            "$ref": "#/definitions/CWLImportManual"
        }
    )

    return schema_dict


def fix_env_var_requirement(schema_dict: Dict) -> Dict:
    """
    Go from

    FROM
    {
        "EnvVarRequirement": {
            "additionalProperties": false,
            "description": "Define a list of environment variables which will be set in the\nexecution environment of the tool.  See `EnvironmentDef` for details.",
            "properties": {
                "class": {
                    "const": "EnvVarRequirement",
                    "description": "Always 'EnvVarRequirement'",
                    "type": "string"
                },
                "envDef": {
                    "description": "The list of environment variables.",
                    "items": {
                        "$ref": "#/definitions/EnvironmentDef"
                    },
                    "type": "array"
                }
            },
            "required": [
                "class",
                "envDef"
            ],
            "type": "object"
        }
    }

    TO
    {
        "EnvVarRequirement": {
            "additionalProperties": false,
            "description": "Define a list of environment variables which will be set in the\nexecution environment of the tool.  See `EnvironmentDef` for details.",
            "properties": {
                "class": {
                    "const": "EnvVarRequirement",
                    "description": "Always 'EnvVarRequirement'",
                    "type": "string"
                },
                "envDef": {
                    "description": "The list of environment variables.",
                    "oneOf": [
                        {
                            "items": {
                                "$ref": "#/definitions/EnvironmentDef"
                            },
                            "type": "array"
                        },
                        {
                            "patternProperties": {
                                "^[_a-zA-Z][a-zA-Z0-9_-]*$": {
                                    "type": "string"
                                }
                            }
                        }
                    ]
                }
            },
            "required": [
                "class",
                "envDef"
            ],
            "type": "object"
        }
    }


    :param schema_dict:
    :return:
    """

    # Always do a deepcopy on the input
    schema_dict = deepcopy(schema_dict)

    # Confirm definitions key
    assert_definitions_key(schema_dict)

    # Confirm EnvVarRequirement exists in definitions
    if "EnvVarRequirement" not in schema_dict["definitions"]:
        raise ValueError("Schema does not contain an 'EnvVarRequirement' key in 'definitions'")

    # Confirm that the EnvVarRequirement has a properties key and the properties key is a dictionary
    if (
            "properties" not in schema_dict["definitions"]["EnvVarRequirement"] or
            not isinstance(schema_dict["definitions"]["EnvVarRequirement"]["properties"], Dict)
    ):
        raise ValueError(
            "Schema does not contain a 'properties' key in 'EnvVarRequirement.definitions' "
            "or 'properties' is not a dictionary"
        )

    # Confirm that properties has a envDef key
    if "envDef" not in schema_dict["definitions"]["EnvVarRequirement"]["properties"]:
        raise ValueError("Schema does not contain an 'envDef' key in 'EnvVarRequirement.properties'")

    # Confirm that envDef is of type array and has an items key
    if (
            "type" not in schema_dict["definitions"]["EnvVarRequirement"]["properties"]["envDef"]
            or
            not schema_dict["definitions"]["EnvVarRequirement"]["properties"]["envDef"]["type"] == "array"
            or
            "items" not in schema_dict["definitions"]["EnvVarRequirement"]["properties"]["envDef"]
    ):
        raise ValueError(
            "Schema does not contain an 'envDef' key in 'EnvVarRequirement.properties' "
            "of type array with an 'items' key"
        )

    # Allow for patternProperties in the envDef array by updating the envDef to be a oneOf array
    schema_dict["definitions"]["EnvVarRequirement"]["properties"]["envDef"] = {
        "description": schema_dict["definitions"]["EnvVarRequirement"]["properties"]["envDef"].get("description", ""),
        "oneOf": [
            {
                "items": schema_dict["definitions"]["EnvVarRequirement"]["properties"]["envDef"].get("items", {}),
                "type": schema_dict["definitions"]["EnvVarRequirement"]["properties"]["envDef"].get("type", {})
            },
            {
                "patternProperties": {
                    "^[_a-zA-Z][a-zA-Z0-9_-]*$": {
                        "type": "string"
                    }
                }
            }
        ]
    }

    # Return schema dict
    return schema_dict


def add_cwl_metadata_to_schema(schema_dict: Dict) -> Dict:
    """
    Add in the CWL metadata to the schema
    Derived from https://github.com/common-workflow-language/cwl-v1.2/blob/76bdf9b55e2378432e0e6380ccedebb4a94ce483/json-schema/cwl.yaml#L2231-L2241
    :param schema_dict:
    :return:
    """

    # Always do a deepcopy on the input
    schema_dict = deepcopy(schema_dict)

    # Assert defintions
    assert_definitions_key(schema_dict)

    # Add in the CWL metadata to the definitions
    schema_dict["definitions"].update(
        {
            "CWLDocumentMetadata": {
                "description": "Metadata for a CWL document",
                "type": "object",
                "properties": {
                    "$namespaces": {
                        "description": "The namespaces used in the document",
                        "type": "object",
                        "patternProperties": {
                            "^[_a-zA-Z][a-zA-Z0-9_-]*$": {
                                "type": "string"
                            }
                        }
                    },
                    "$schemas": {
                        "description": "The schemas used in the document",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                },
                "patternProperties": {
                    "^s:.*$": {
                        "type": "object"
                    },
                    # Or the full version
                    "^https://schema.org/.*$": {
                        "type": "object"
                    },
                    # dct terms should also be permitted
                    # see https://github.com/common-workflow-language/cwl-v1.2/blob/main/tests/metadata.cwl
                    "^dct:.*$": {
                        "type": "object"
                    },
                    "^http://purl.org/dc/terms/.*$": {
                        "type": "object"
                    }
                },
                "additionalProperties": False,
                "required": []
            }
        }
    )
    return schema_dict


def write_schema_out_to_file(schema_dict: Dict, file_path: Path):
    """
    Write out the schema to the file
    :param schema_dict:
    :param file_path:
    :return:
    """
    with open(file_path, "w") as file_h:
        json.dump(schema_dict, file_h, indent=4)


def rename_all_keys_with_trailing_underscore(schema_dict: Any) -> Dict:
    """
    Keys such as class_, type_ etc. are renames from TypeScript. We need to rename them in the JSON schema back
    to their original names to generate a valid CWL JSON schema
    :param schema_dict:
    :return:
    """

    new_schema_dict = {}

    if isinstance(schema_dict, Dict):
        for key, value in deepcopy(schema_dict).items():
            key = key.rstrip("_")
            if isinstance(value, Dict):
                new_schema_dict[key] = rename_all_keys_with_trailing_underscore(value)
            elif isinstance(value, List):
                new_schema_dict[key] = rename_all_keys_with_trailing_underscore(value)
            else:
                new_schema_dict[key] = value
    elif isinstance(schema_dict, List):
        new_schema_dict = list(
            map(lambda value_iter: rename_all_keys_with_trailing_underscore(value_iter), schema_dict))
    else:
        # Item is a value
        new_schema_dict = schema_dict.rstrip("_")

    return new_schema_dict


def add_cwl_file(schema_dict: Dict) -> Dict:
    """
    Large updates to the actual file body

    Can come in two forms, File and Graph.

    In File form, can be of type Workflow, ExpressionTool or CommandLineTool,
    In Graph form, we have the $graph property which then has elements of type CWLFile

    Both can have the metadata objects such as $namespaces and $schemas 
    
    We initialise both objects. 
    
    Then state that the file can be a file or a graph

    :param schema_dict:
    :return:
    """
    # Always deep copy the input
    schema_dict = deepcopy(schema_dict)

    # Assert $ref key
    if "$ref" not in schema_dict:
        raise ValueError("Schema does not contain a '$ref' key")

    # Assert $ref value is "#/definitions/Workflow"
    if schema_dict["$ref"] != "#/definitions/Workflow":
        raise ValueError("Schema does not contain a '$ref' value of '#/definitions/Workflow'")

    # Update the schema to use 'if-else' for CommandlineTool and Expression
    schema_dict.update(
        {
            "$ref": "#/definitions/CWLFile",
        }
    )

    schema_dict["definitions"].update(
        {
            # First create the yaml option
            # Which is either a workflow, commandline tool or expression tool
            "CWLFile": {
                "type": "object",
                "additionalProperties": False,
                "allOf": [
                    {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/Workflow"
                            },
                            {
                                "$ref": "#/definitions/CommandLineTool"
                            },
                            {
                                "$ref": "#/definitions/ExpressionTool"
                            }
                        ]
                    },
                    {
                        "oneOf": [
                            {
                                "$ref": "#/definitions/CWLDocumentMetadata"
                            }
                        ]
                    }
                ]
            }
        }
    )

    return schema_dict


def add_cwl_graph(schema_dict: Dict) -> Dict:
    """
    Large updates to the actual file body

    Can come in two forms, File and Graph.

    In File form, can be of type Workflow, ExpressionTool or CommandLineTool,
    In Graph form, we have the $graph property which then has elements of type CWLFile

    Both can have the metadata objects such as $namespaces and $schemas

    We initialise both objects.

    Then state that the file can be a file or a graph

    :param schema_dict:
    :return:
    """
    # Always deep copy the input
    schema_dict = deepcopy(schema_dict)

    # Assert $ref key
    if "$ref" not in schema_dict:
        raise ValueError("Schema does not contain a '$ref' key")

    # Update the schema
    schema_dict.update(
        {
            "$ref": "#/definitions/CWLGraphWithMetadata",
        }
    )

    # Update definitions
    schema_dict["definitions"].update(
        {
            # Now create the graph option
            "CWLGraph": {
                "type": "object",
                "properties": {
                    "$graph": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/CWLFile"
                        }
                    },
                    # Copy from Workflow
                    "cwlVersion": schema_dict["definitions"]["Workflow"]["properties"]["cwlVersion"]
                },
                "required": [
                    "$graph"
                ]
            },
            "CWLGraphWithMetadata": {
                "type": "object",
                "additionalProperties": False,
                "allOf": [
                    {
                        "$ref": "#/definitions/CWLGraph"
                    },
                    {
                        "$ref": "#/definitions/CWLDocumentMetadata"
                    }
                ]
            }
        }
    )

    return schema_dict


def fix_descriptions(schema_dict: Dict) -> Dict:
    """
    Fix the descriptions for all definitions by removing the 'Auto-generated' class implementation ...
    Means that users will see helpful descriptions in the schema
    :param schema_dict:
    :return:
    """
    # Always deep copy the input
    schema_dict = deepcopy(schema_dict)

    # Assert definitions
    assert_definitions_key(schema_dict)

    # Iterate over all definitions and remove the 'Auto-generated' class implementation
    for schema_def_name, schema_def_dict in schema_dict.get("definitions", {}).items():
        if "description" not in schema_def_dict:
            continue
        schema_dict["definitions"][schema_def_name]["description"] = (
            schema_def_dict.get("description", "").split("\n\n", 1)[-1]
        )

    # Update top level description
    schema_dict["description"] = schema_dict.get("description", "").split("\n\n", 1)[-1]

    return schema_dict


def fix_additional_properties(schema_dict: Dict, top_definition: str, sub_definition_keys: List) -> Dict:
    """
    Fix the additionalProperties issues demonstrated in https://stoic-agnesi-d0ac4a.netlify.app/37
    :param schema_dict:
    :return:
    """
    # Always copy the input
    schema_dict = deepcopy(schema_dict)

    # Part 1, drop additionalProperties: false from Workflow, CommandLineTool and ExpressionTool definitions
    for definition_key in sub_definition_keys:
        _ = schema_dict["definitions"][definition_key].pop("additionalProperties", None)

    # Part 2
    # For CWLFileorGraph definition, add in the collective set of properties keys defined under
    # Workflow, CommandLineTool, ExpressionTool, $graph and CWLMetadata
    # And for each property key set the value to true -
    property_keys = []
    for definition_key in sub_definition_keys:
        if "properties" not in schema_dict["definitions"][definition_key]:
            continue
        property_keys.append(list(schema_dict["definitions"][definition_key]["properties"].keys()))
    property_keys = list(set(chain(*property_keys)))

    schema_dict["definitions"][top_definition]["properties"] = dict(
        map(
            lambda property_key_iter: (property_key_iter, True),
            property_keys
        )
    )

    # Part 2a, copy over patternProperties
    pattern_property_objects = {}
    for definition_key in sub_definition_keys:
        if "patternProperties" not in schema_dict["definitions"][definition_key]:
            continue
        pattern_property_objects.update(
            schema_dict["definitions"][definition_key]["patternProperties"]
        )

    schema_dict["definitions"][top_definition]["patternProperties"] = pattern_property_objects

    # Make additionalProperties false to this top CWLDocumentMetadata
    schema_dict["definitions"][top_definition]["additionalProperties"] = False

    return schema_dict


def fix_hints(schema_dict, definition_key):
    """
    Hints property should be the same as requirements for the given key
    :param schema_dict:
    :param definition_key:
    :return:
    """

    # Always do a deepcopy on the input
    schema_dict = deepcopy(schema_dict)

    # Assert definitions key
    assert_definitions_key(schema_dict)

    # Confirm definitions key exists
    if definition_key not in schema_dict["definitions"]:
        raise ValueError(f"Schema does not contain an '{definition_key}' key in 'definitions'")

    # Confirm that the definition_key has a properties key and the properties key is a dictionary
    if (
            "properties" not in schema_dict["definitions"][definition_key] or
            not isinstance(schema_dict["definitions"][definition_key]["properties"], Dict)
    ):
        raise ValueError(
            f"Schema does not contain a 'properties' key in '{definition_key}.definitions' "
            "or 'properties' is not a dictionary"
        )

    # Confirm that properties has a requirements key
    if "requirements" not in schema_dict["definitions"][definition_key]["properties"]:
        raise ValueError(f"Schema does not contain an 'requirements' key in '{definition_key}.properties'")

    # Copy requirements to hints
    schema_dict["definitions"][definition_key]["properties"]["hints"] = \
    schema_dict["definitions"][definition_key]["properties"]["requirements"]

    return schema_dict


def main():
    # Step 1 - read in existing schema
    schema_dict = read_schema_in_from_file(Path(sys.argv[1]))

    # Remove loading options from schema
    schema_dict = remove_loading_options_and_extension_fields_from_schema(schema_dict)

    # Rename all keys with trailing underscore
    schema_dict = rename_all_keys_with_trailing_underscore(schema_dict)

    # Add in $import and $include definitions to the schema
    schema_dict = add_import_and_include_to_schema(schema_dict)

    # Add metadata to definitions list
    schema_dict = add_cwl_metadata_to_schema(schema_dict)

    # Fix InlineJavascriptRequirement.expressionLib array to allow for $include
    schema_dict = fix_inline_javascript_requirement(schema_dict)

    # Allow SchemaDefRequirement.types array to be $import type
    schema_dict = fix_schema_def_requirement(schema_dict)

    # Fix EnvVarRequirement.envDef array to allow for string type not just array type
    schema_dict = fix_env_var_requirement(schema_dict)

    # Fix secondaryfile schema
    schema_dict = fix_secondary_file_schema(schema_dict)

    # Fix record fields
    for record_field_definition_key in (
            [
                "CommandInputRecordField", "InputRecordField",
                "CommandOutputRecordField", "OutputRecordField"
            ]
    ):
        schema_dict = fix_record_field_maps(schema_dict, record_field_definition_key)

    # Fix schema fields
    for schema_field_definition_key in (
            [
                "CommandInputRecordSchema", "InputRecordSchema",
                "CommandOutputRecordSchema", "OutputRecordSchema",
            ]
    ):
        schema_dict = fix_schema_field_maps(
            schema_dict,
            schema_field_definition_key,
            schema_field_definition_key.replace("Schema", "Field")
        )

    # Add unnamed maps for inputs, outputs, and steps
    for definition_key in ["Workflow", "ExpressionTool", "CommandLineTool", "Operation"]:
        for property_name in ["inputs", "outputs", "steps"]:
            # Only Workflow has the steps property
            if not definition_key == "Workflow" and property_name == "steps":
                continue
            if property_name == 'steps':
                # Step items must be objects
                schema_dict = fix_unnamed_maps(
                    schema_dict,
                    definition_key,
                    property_name,
                    allow_type_as_only_input=False
                )
            else:
                # Inputs / Outputs can allow for type to be the only attribute in the patternProperties
                schema_dict = fix_unnamed_maps(
                    schema_dict,
                    definition_key,
                    property_name,
                    allow_type_as_only_input=True,
                    allow_type_array_as_only_input=True
                )

        for property_name in ["requirements", "hints"]:
            # Add named maps for hints and requirements
            schema_dict = fix_named_maps(schema_dict, definition_key, property_name)

    # Also fix for 'in' for WorkflowStep
    schema_dict = fix_unnamed_maps(
        schema_dict,
        "WorkflowStep",
        "in",
        allow_type_as_only_input=True,
        allow_type_array_as_only_input=True
    )

    # And named maps for WorkflowStep
    for property_name in ["requirements"]:
        schema_dict = fix_named_maps(schema_dict, "WorkflowStep", property_name)

    # Hints should map to requirements
    for definition_key in ["Workflow", "ExpressionTool", "CommandLineTool", "Operation"]:
        schema_dict = fix_hints(schema_dict, definition_key)

    # Update the schema to use 'if-else' for CommandlineTool and Expression
    schema_dict = add_cwl_file(schema_dict)

    # Fix descriptions
    schema_dict = fix_descriptions(schema_dict)

    # Remove workflow description from top object as this is now any workflow description
    _ = schema_dict.pop("description")

    # Fix additionalProperties issues
    # https://stoic-agnesi-d0ac4a.netlify.app/37
    schema_dict = fix_additional_properties(
        schema_dict,
        "CWLFile",
        ["Workflow", "CommandLineTool", "ExpressionTool", "CWLDocumentMetadata"]
    )

    # Write out the new schema
    write_schema_out_to_file(schema_dict, Path(sys.argv[2]))

    # Update with graph
    schema_dict = add_cwl_graph(schema_dict)
    schema_dict = fix_additional_properties(
        schema_dict,
        "CWLGraphWithMetadata",
        ["Workflow", "CommandLineTool", "ExpressionTool", "CWLDocumentMetadata", "CWLFile", "CWLGraph"]
    )

    # Write out graph to the new schema
    write_schema_out_to_file(schema_dict, Path(sys.argv[3]))


if __name__ == "__main__":
    main()
