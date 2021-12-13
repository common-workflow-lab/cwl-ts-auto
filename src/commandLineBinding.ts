
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
} from './util/internal'
import { v4 as uuidv4 } from 'uuid'
import * as Internal from './util/internal'


/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandLineBinding
 *
 * 
 * When listed under `inputBinding` in the input schema, the term
 * "value" refers to the the corresponding value in the input object.  For
 * binding objects listed in `CommandLineTool.arguments`, the term "value"
 * refers to the effective value after evaluating `valueFrom`.
 * 
 * The binding behavior when building the command line depends on the data
 * type of the value.  If there is a mismatch between the type described by
 * the input schema and the effective value, such as resulting from an
 * expression evaluation, an implementation must use the data type of the
 * effective value.
 * 
 *   - **string**: Add `prefix` and the string to the command line.
 * 
 *   - **number**: Add `prefix` and decimal representation to command line.
 * 
 *   - **boolean**: If true, add `prefix` to the command line.  If false, add
 *       nothing.
 * 
 *   - **File**: Add `prefix` and the value of
 *     [`File.path`](#File) to the command line.
 * 
 *   - **Directory**: Add `prefix` and the value of
 *     [`Directory.path`](#Directory) to the command line.
 * 
 *   - **array**: If `itemSeparator` is specified, add `prefix` and the join
 *       the array into a single string with `itemSeparator` separating the
 *       items.  Otherwise first add `prefix`, then recursively process
 *       individual elements.
 *       If the array is empty, it does not add anything to command line.
 * 
 *   - **object**: Add `prefix` only, and recursively add object fields for
 *       which `inputBinding` is specified.
 * 
 *   - **null**: Add nothing.
 * 
 */
export class CommandLineBinding extends Saveable implements Internal.InputBinding {
  loadingOptions: LoadingOptions
  extensionFields?: Dictionary<any>

  /**
   * Use of `loadContents` in `InputBinding` is deprecated.
   * Preserved for v1.0 backwards compatability.  Will be removed in
   * CWL v2.0.  Use `InputParameter.loadContents` instead.
   * 
   */
  loadContents: undefined | boolean

  /**
   * The sorting key.  Default position is 0. If a [CWL Parameter Reference](#Parameter_references)
   * or [CWL Expression](#Expressions_(Optional)) is used and if the
   * inputBinding is associated with an input parameter, then the value of
   * `self` will be the value of the input parameter.  Input parameter
   * defaults (as specified by the `InputParameter.default` field) must be
   * applied before evaluating the expression. Expressions must return a
   * single value of type int or a null.
   * 
   */
  position: undefined | number | string

  /**
   * Command line prefix to add before the value.
   */
  prefix: undefined | string

  /**
   * If true (default), then the prefix and value must be added as separate
   * command line arguments; if false, prefix and value must be concatenated
   * into a single command line argument.
   * 
   */
  separate: undefined | boolean

  /**
   * Join the array elements into a single string with the elements
   * separated by by `itemSeparator`.
   * 
   */
  itemSeparator: undefined | string

  /**
   * If `valueFrom` is a constant string value, use this as the value and
   * apply the binding rules above.
   * 
   * If `valueFrom` is an expression, evaluate the expression to yield the
   * actual value to use to build the command line and apply the binding
   * rules above.  If the inputBinding is associated with an input
   * parameter, the value of `self` in the expression will be the value of
   * the input parameter.  Input parameter defaults (as specified by the
   * `InputParameter.default` field) must be applied before evaluating the
   * expression.
   * 
   * If the value of the associated input parameter is `null`, `valueFrom` is
   * not evaluated and nothing is added to the command line.
   * 
   * When a binding is part of the `CommandLineTool.arguments` field,
   * the `valueFrom` field is required.
   * 
   */
  valueFrom: undefined | string

  /**
   * If `ShellCommandRequirement` is in the requirements for the current command,
   * this controls whether the value is quoted on the command line (default is true).
   * Use `shellQuote: false` to inject metacharacters for operations such as pipes.
   * 
   * If `shellQuote` is true or not provided, the implementation must not
   * permit interpretation of any shell metacharacters or directives.
   * 
   */
  shellQuote: undefined | boolean


  constructor ({extensionFields, loadingOptions, loadContents, position, prefix, separate, itemSeparator, valueFrom, shellQuote} : {extensionFields?: Dictionary<any>, loadingOptions?: LoadingOptions,  loadContents: undefined | boolean, position: undefined | number | string, prefix: undefined | string, separate: undefined | boolean, itemSeparator: undefined | string, valueFrom: undefined | string, shellQuote: undefined | boolean,}) {
    super()
    this.extensionFields = extensionFields ?? {}
    this.loadingOptions = loadingOptions ?? new LoadingOptions({})
    this.loadContents = loadContents
    this.position = position
    this.prefix = prefix
    this.separate = separate
    this.itemSeparator = itemSeparator
    this.valueFrom = valueFrom
    this.shellQuote = shellQuote
  }

  /**
   * Used to construct instances of {@link CommandLineBinding }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link CommandLineBinding }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const errors: ValidationException[] = []
            
    let loadContents
    if ('loadContents' in _doc) {
      try {
        loadContents = await loadField(_doc.loadContents, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `loadContents` field is not valid because: ', [e])
          )
        }
      }
    }

    let position
    if ('position' in _doc) {
      try {
        position = await loadField(_doc.position, LoaderInstances.unionOfundefinedtypeOrinttypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `position` field is not valid because: ', [e])
          )
        }
      }
    }

    let prefix
    if ('prefix' in _doc) {
      try {
        prefix = await loadField(_doc.prefix, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `prefix` field is not valid because: ', [e])
          )
        }
      }
    }

    let separate
    if ('separate' in _doc) {
      try {
        separate = await loadField(_doc.separate, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `separate` field is not valid because: ', [e])
          )
        }
      }
    }

    let itemSeparator
    if ('itemSeparator' in _doc) {
      try {
        itemSeparator = await loadField(_doc.itemSeparator, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `itemSeparator` field is not valid because: ', [e])
          )
        }
      }
    }

    let valueFrom
    if ('valueFrom' in _doc) {
      try {
        valueFrom = await loadField(_doc.valueFrom, LoaderInstances.unionOfundefinedtypeOrstrtypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `valueFrom` field is not valid because: ', [e])
          )
        }
      }
    }

    let shellQuote
    if ('shellQuote' in _doc) {
      try {
        shellQuote = await loadField(_doc.shellQuote, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `shellQuote` field is not valid because: ', [e])
          )
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!CommandLineBinding.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`loadContents\`,\`position\`,\`prefix\`,\`separate\`,\`itemSeparator\`,\`valueFrom\`,\`shellQuote\``)
          )
          break
        }
      }
    }

    if (errors.length > 0) {
      throw new ValidationException("Trying 'CommandLineBinding'", errors)
    }

    const schema = new CommandLineBinding({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      loadContents: loadContents,
      position: position,
      prefix: prefix,
      separate: separate,
      itemSeparator: itemSeparator,
      valueFrom: valueFrom,
      shellQuote: shellQuote
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this.loadContents != null) {
      r.loadContents = save(this.loadContents, false, baseUrl, relativeUris)
    }
                
    if (this.position != null) {
      r.position = save(this.position, false, baseUrl, relativeUris)
    }
                
    if (this.prefix != null) {
      r.prefix = save(this.prefix, false, baseUrl, relativeUris)
    }
                
    if (this.separate != null) {
      r.separate = save(this.separate, false, baseUrl, relativeUris)
    }
                
    if (this.itemSeparator != null) {
      r.itemSeparator = save(this.itemSeparator, false, baseUrl, relativeUris)
    }
                
    if (this.valueFrom != null) {
      r.valueFrom = save(this.valueFrom, false, baseUrl, relativeUris)
    }
                
    if (this.shellQuote != null) {
      r.shellQuote = save(this.shellQuote, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['loadContents','position','prefix','separate','itemSeparator','valueFrom','shellQuote'])
}
