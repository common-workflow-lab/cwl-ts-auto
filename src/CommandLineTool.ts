
import {
  Dictionary,
  expandUrl,
  loadField,
  LoaderInstances,
  LoadingOptions,
  Saveable,
  ValidationException,
  prefixUrl,
  save,
  saveRelativeUri
} from './util/Internal'
import { v4 as uuidv4 } from 'uuid'
import * as Internal from './util/Internal'


/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandLineTool
 *
 * This defines the schema of the CWL Command Line Tool Description document.
 * 
 */
export class CommandLineTool extends Saveable implements Internal.CommandLineToolProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * The unique identifier for this object.
   * 
   * Only useful for `$graph` at `Process` level. Should not be exposed
   * to users in graphical or terminal user interfaces.
   * 
   */
  id?: undefined | string
  class_: Internal.CommandLineTool_class

  /**
   * A short, human-readable label of this object.
   */
  label?: undefined | string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>

  /**
   * Defines the input parameters of the process.  The process is ready to
   * run when all required input parameters are associated with concrete
   * values.  Input parameters include a schema for each parameter which is
   * used to validate the input object.  It may also be used to build a user
   * interface for constructing the input object.
   * 
   * When accepting an input object, all input parameters must have a value.
   * If an input parameter is missing from the input object, it must be
   * assigned a value of `null` (or the value of `default` for that
   * parameter, if provided) for the purposes of validation and evaluation
   * of expressions.
   * 
   */
  inputs: Array<Internal.CommandInputParameter>

  /**
   * Defines the parameters representing the output of the process.  May be
   * used to generate and/or validate the output object.
   * 
   */
  outputs: Array<Internal.CommandOutputParameter>

  /**
   * Declares requirements that apply to either the runtime environment or the
   * workflow engine that must be met in order to execute this process.  If
   * an implementation cannot satisfy all requirements, or a requirement is
   * listed which is not recognized by the implementation, it is a fatal
   * error and the implementation must not attempt to run the process,
   * unless overridden at user option.
   * 
   */
  requirements?: undefined | Array<Internal.InlineJavascriptRequirement | Internal.SchemaDefRequirement | Internal.LoadListingRequirement | Internal.DockerRequirement | Internal.SoftwareRequirement | Internal.InitialWorkDirRequirement | Internal.EnvVarRequirement | Internal.ShellCommandRequirement | Internal.ResourceRequirement | Internal.WorkReuse | Internal.NetworkAccess | Internal.InplaceUpdateRequirement | Internal.ToolTimeLimit | Internal.SubworkflowFeatureRequirement | Internal.ScatterFeatureRequirement | Internal.MultipleInputFeatureRequirement | Internal.StepInputExpressionRequirement>

  /**
   * Declares hints applying to either the runtime environment or the
   * workflow engine that may be helpful in executing this process.  It is
   * not an error if an implementation cannot satisfy all hints, however
   * the implementation may report a warning.
   * 
   */
  hints?: undefined | Array<Internal.InlineJavascriptRequirement | Internal.SchemaDefRequirement | Internal.LoadListingRequirement | Internal.DockerRequirement | Internal.SoftwareRequirement | Internal.InitialWorkDirRequirement | Internal.EnvVarRequirement | Internal.ShellCommandRequirement | Internal.ResourceRequirement | Internal.WorkReuse | Internal.NetworkAccess | Internal.InplaceUpdateRequirement | Internal.ToolTimeLimit | Internal.SubworkflowFeatureRequirement | Internal.ScatterFeatureRequirement | Internal.MultipleInputFeatureRequirement | Internal.StepInputExpressionRequirement | any>

  /**
   * CWL document version. Always required at the document root. Not
   * required for a Process embedded inside another Process.
   * 
   */
  cwlVersion?: undefined | Internal.CWLVersion

  /**
   * An identifier for the type of computational operation, of this Process.
   * Especially useful for [`Operation`](Workflow.html#Operation), but can also be used for
   * [`CommandLineTool`](CommandLineTool.html#CommandLineTool),
   * [`Workflow`](Workflow.html#Workflow), or [ExpressionTool](Workflow.html#ExpressionTool).
   * 
   * If provided, then this must be an IRI of a concept node that
   * represents the type of operation, preferably defined within an ontology.
   * 
   * For example, in the domain of bioinformatics, one can use an IRI from
   * the EDAM Ontology's [Operation concept nodes](http://edamontology.org/operation_0004),
   * like [Alignment](http://edamontology.org/operation_2928),
   * or [Clustering](http://edamontology.org/operation_3432); or a more
   * specific Operation concept like
   * [Split read mapping](http://edamontology.org/operation_3199).
   * 
   */
  intent?: undefined | Array<string>

  /**
   * Specifies the program to execute.  If an array, the first element of
   * the array is the command to execute, and subsequent elements are
   * mandatory command line arguments.  The elements in `baseCommand` must
   * appear before any command line bindings from `inputBinding` or
   * `arguments`.
   * 
   * If `baseCommand` is not provided or is an empty array, the first
   * element of the command line produced after processing `inputBinding` or
   * `arguments` must be used as the program to execute.
   * 
   * If the program includes a path separator character it must
   * be an absolute path, otherwise it is an error.  If the program does not
   * include a path separator, search the `$PATH` variable in the runtime
   * environment of the workflow runner find the absolute path of the
   * executable.
   * 
   */
  baseCommand?: undefined | string | Array<string>

  /**
   * Command line bindings which are not directly associated with input
   * parameters. If the value is a string, it is used as a string literal
   * argument. If it is an Expression, the result of the evaluation is used
   * as an argument.
   * 
   */
  arguments_?: undefined | Array<string | Internal.CommandLineBinding>

  /**
   * A path to a file whose contents must be piped into the command's
   * standard input stream.
   * 
   */
  stdin?: undefined | string

  /**
   * Capture the command's standard error stream to a file written to
   * the designated output directory.
   * 
   * If `stderr` is a string, it specifies the file name to use.
   * 
   * If `stderr` is an expression, the expression is evaluated and must
   * return a string with the file name to use to capture stderr.  If the
   * return value is not a string, or the resulting path contains illegal
   * characters (such as the path separator `/`) it is an error.
   * 
   */
  stderr?: undefined | string

  /**
   * Capture the command's standard output stream to a file written to
   * the designated output directory.
   * 
   * If the `CommandLineTool` contains logically chained commands
   * (e.g. `echo a && echo b`) `stdout` must include the output of
   * every command.
   * 
   * If `stdout` is a string, it specifies the file name to use.
   * 
   * If `stdout` is an expression, the expression is evaluated and must
   * return a string with the file name to use to capture stdout.  If the
   * return value is not a string, or the resulting path contains illegal
   * characters (such as the path separator `/`) it is an error.
   * 
   */
  stdout?: undefined | string

  /**
   * Exit codes that indicate the process completed successfully.
   * 
   * If not specified, only exit code 0 is considered success.
   * 
   */
  successCodes?: undefined | Array<number>

  /**
   * Exit codes that indicate the process failed due to a possibly
   * temporary condition, where executing the process with the same
   * runtime environment and inputs may produce different results.
   * 
   * If not specified, no exit codes are considered temporary failure.
   * 
   */
  temporaryFailCodes?: undefined | Array<number>

  /**
   * Exit codes that indicate the process failed due to a permanent logic error, where executing the process with the same runtime environment and same inputs is expected to always fail.
   * If not specified, all exit codes except 0 are considered permanent failure.
   */
  permanentFailCodes?: undefined | Array<number>


  constructor ({loadingOptions, extensionFields, id, class_ = Internal.CommandLineTool_class.COMMANDLINETOOL, label, doc, inputs, outputs, requirements, hints, cwlVersion, intent, baseCommand, arguments_, stdin, stderr, stdout, successCodes, temporaryFailCodes, permanentFailCodes} : {loadingOptions?: LoadingOptions} & Internal.CommandLineToolProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.id = id
    this.class_ = class_
    this.label = label
    this.doc = doc
    this.inputs = inputs
    this.outputs = outputs
    this.requirements = requirements
    this.hints = hints
    this.cwlVersion = cwlVersion
    this.intent = intent
    this.baseCommand = baseCommand
    this.arguments_ = arguments_
    this.stdin = stdin
    this.stderr = stderr
    this.stdout = stdout
    this.successCodes = successCodes
    this.temporaryFailCodes = temporaryFailCodes
    this.permanentFailCodes = permanentFailCodes
  }

  /**
   * Used to construct instances of {@link CommandLineTool }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link CommandLineTool }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let id
    if ('id' in _doc) {
      try {
        id = await loadField(_doc.id, LoaderInstances.uriunionOfundefinedtypeOrstrtypeTrueFalseNoneNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `id` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const originalidIsUndefined = (id === undefined)
    if (originalidIsUndefined ) {
      if (docRoot != null) {
        id = docRoot
      } else {
        id = "_" + uuidv4()
      }
    } else {
      baseuri = id as string
    }
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriCommandLineTool_classLoaderFalseTrueNoneNone,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `class` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let label
    if ('label' in _doc) {
      try {
        label = await loadField(_doc.label, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `label` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let doc
    if ('doc' in _doc) {
      try {
        doc = await loadField(_doc.doc, LoaderInstances.unionOfundefinedtypeOrstrtypeOrarrayOfstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `doc` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let inputs
    try {
      inputs = await loadField(_doc.inputs, LoaderInstances.idmapinputsarrayOfCommandInputParameterLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `inputs` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let outputs
    try {
      outputs = await loadField(_doc.outputs, LoaderInstances.idmapoutputsarrayOfCommandOutputParameterLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `outputs` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let requirements
    if ('requirements' in _doc) {
      try {
        requirements = await loadField(_doc.requirements, LoaderInstances.idmaprequirementsunionOfundefinedtypeOrarrayOfunionOfInlineJavascriptRequirementLoaderOrSchemaDefRequirementLoaderOrLoadListingRequirementLoaderOrDockerRequirementLoaderOrSoftwareRequirementLoaderOrInitialWorkDirRequirementLoaderOrEnvVarRequirementLoaderOrShellCommandRequirementLoaderOrResourceRequirementLoaderOrWorkReuseLoaderOrNetworkAccessLoaderOrInplaceUpdateRequirementLoaderOrToolTimeLimitLoaderOrSubworkflowFeatureRequirementLoaderOrScatterFeatureRequirementLoaderOrMultipleInputFeatureRequirementLoaderOrStepInputExpressionRequirementLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `requirements` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let hints
    if ('hints' in _doc) {
      try {
        hints = await loadField(_doc.hints, LoaderInstances.idmaphintsunionOfundefinedtypeOrarrayOfunionOfInlineJavascriptRequirementLoaderOrSchemaDefRequirementLoaderOrLoadListingRequirementLoaderOrDockerRequirementLoaderOrSoftwareRequirementLoaderOrInitialWorkDirRequirementLoaderOrEnvVarRequirementLoaderOrShellCommandRequirementLoaderOrResourceRequirementLoaderOrWorkReuseLoaderOrNetworkAccessLoaderOrInplaceUpdateRequirementLoaderOrToolTimeLimitLoaderOrSubworkflowFeatureRequirementLoaderOrScatterFeatureRequirementLoaderOrMultipleInputFeatureRequirementLoaderOrStepInputExpressionRequirementLoaderOranyType,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `hints` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let cwlVersion
    if ('cwlVersion' in _doc) {
      try {
        cwlVersion = await loadField(_doc.cwlVersion, LoaderInstances.uriunionOfundefinedtypeOrCWLVersionLoaderFalseTrueNoneNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `cwlVersion` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let intent
    if ('intent' in _doc) {
      try {
        intent = await loadField(_doc.intent, LoaderInstances.uriunionOfundefinedtypeOrarrayOfstrtypeTrueFalseNoneNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `intent` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let baseCommand
    if ('baseCommand' in _doc) {
      try {
        baseCommand = await loadField(_doc.baseCommand, LoaderInstances.unionOfundefinedtypeOrstrtypeOrarrayOfstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `baseCommand` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let arguments_
    if ('arguments' in _doc) {
      try {
        arguments_ = await loadField(_doc.arguments, LoaderInstances.unionOfundefinedtypeOrarrayOfunionOfstrtypeOrExpressionLoaderOrCommandLineBindingLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `arguments` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let stdin
    if ('stdin' in _doc) {
      try {
        stdin = await loadField(_doc.stdin, LoaderInstances.unionOfundefinedtypeOrstrtypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `stdin` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let stderr
    if ('stderr' in _doc) {
      try {
        stderr = await loadField(_doc.stderr, LoaderInstances.unionOfundefinedtypeOrstrtypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `stderr` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let stdout
    if ('stdout' in _doc) {
      try {
        stdout = await loadField(_doc.stdout, LoaderInstances.unionOfundefinedtypeOrstrtypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `stdout` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let successCodes
    if ('successCodes' in _doc) {
      try {
        successCodes = await loadField(_doc.successCodes, LoaderInstances.unionOfundefinedtypeOrarrayOfinttype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `successCodes` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let temporaryFailCodes
    if ('temporaryFailCodes' in _doc) {
      try {
        temporaryFailCodes = await loadField(_doc.temporaryFailCodes, LoaderInstances.unionOfundefinedtypeOrarrayOfinttype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `temporaryFailCodes` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let permanentFailCodes
    if ('permanentFailCodes' in _doc) {
      try {
        permanentFailCodes = await loadField(_doc.permanentFailCodes, LoaderInstances.unionOfundefinedtypeOrarrayOfinttype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `permanentFailCodes` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!CommandLineTool.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`id\`,\`label\`,\`doc\`,\`inputs\`,\`outputs\`,\`requirements\`,\`hints\`,\`cwlVersion\`,\`intent\`,\`class\`,\`baseCommand\`,\`arguments\`,\`stdin\`,\`stderr\`,\`stdout\`,\`successCodes\`,\`temporaryFailCodes\`,\`permanentFailCodes\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'CommandLineTool'", __errors)
    }

    const schema = new CommandLineTool({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      id: id,
      label: label,
      doc: doc,
      inputs: inputs,
      outputs: outputs,
      requirements: requirements,
      hints: hints,
      cwlVersion: cwlVersion,
      intent: intent,
      class_: class_,
      baseCommand: baseCommand,
      arguments_: arguments_,
      stdin: stdin,
      stderr: stderr,
      stdout: stdout,
      successCodes: successCodes,
      temporaryFailCodes: temporaryFailCodes,
      permanentFailCodes: permanentFailCodes
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this.id != null) {
      const u = saveRelativeUri(this.id, baseUrl, true,
                                relativeUris, undefined)
      if (u != null) {
        r.id = u
      }
    }
                
    if (this.class_ != null) {
      const u = saveRelativeUri(this.class_, this.id, false,
                                relativeUris, undefined)
      if (u != null) {
        r.class = u
      }
    }
                
    if (this.label != null) {
      r.label = save(this.label, false, this.id, relativeUris)
    }
                
    if (this.doc != null) {
      r.doc = save(this.doc, false, this.id, relativeUris)
    }
                
    if (this.inputs != null) {
      r.inputs = save(this.inputs, false, this.id, relativeUris)
    }
                
    if (this.outputs != null) {
      r.outputs = save(this.outputs, false, this.id, relativeUris)
    }
                
    if (this.requirements != null) {
      r.requirements = save(this.requirements, false, this.id, relativeUris)
    }
                
    if (this.hints != null) {
      r.hints = save(this.hints, false, this.id, relativeUris)
    }
                
    if (this.cwlVersion != null) {
      const u = saveRelativeUri(this.cwlVersion, this.id, false,
                                relativeUris, undefined)
      if (u != null) {
        r.cwlVersion = u
      }
    }
                
    if (this.intent != null) {
      const u = saveRelativeUri(this.intent, this.id, true,
                                relativeUris, undefined)
      if (u != null) {
        r.intent = u
      }
    }
                
    if (this.baseCommand != null) {
      r.baseCommand = save(this.baseCommand, false, this.id, relativeUris)
    }
                
    if (this.arguments_ != null) {
      r.arguments = save(this.arguments_, false, this.id, relativeUris)
    }
                
    if (this.stdin != null) {
      r.stdin = save(this.stdin, false, this.id, relativeUris)
    }
                
    if (this.stderr != null) {
      r.stderr = save(this.stderr, false, this.id, relativeUris)
    }
                
    if (this.stdout != null) {
      r.stdout = save(this.stdout, false, this.id, relativeUris)
    }
                
    if (this.successCodes != null) {
      r.successCodes = save(this.successCodes, false, this.id, relativeUris)
    }
                
    if (this.temporaryFailCodes != null) {
      r.temporaryFailCodes = save(this.temporaryFailCodes, false, this.id, relativeUris)
    }
                
    if (this.permanentFailCodes != null) {
      r.permanentFailCodes = save(this.permanentFailCodes, false, this.id, relativeUris)
    }
                
    if (top) {
      if (this.loadingOptions.namespaces != null) {
        r.$namespaces = this.loadingOptions.namespaces
      }
      if (this.loadingOptions.schemas != null) {
        r.$schemas = this.loadingOptions.schemas
      }
    }
    return r
  }
            
  static attr: Set<string> = new Set(['id','label','doc','inputs','outputs','requirements','hints','cwlVersion','intent','class','baseCommand','arguments','stdin','stderr','stdout','successCodes','temporaryFailCodes','permanentFailCodes'])
}
