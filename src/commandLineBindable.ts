
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandLineBindable
 */
export class CommandLineBindable extends Saveable {
  loadingOptions: LoadingOptions
  extensionFields?: Dictionary<any>

  /**
   * Describes how to turn this object into command line arguments.
   */
  inputBinding: undefined | Internal.CommandLineBinding


  constructor ({extensionFields, loadingOptions, inputBinding} : {extensionFields?: Dictionary<any>, loadingOptions?: LoadingOptions,  inputBinding: undefined | Internal.CommandLineBinding,}) {
    super()
    this.extensionFields = extensionFields ?? {}
    this.loadingOptions = loadingOptions ?? new LoadingOptions({})
    this.inputBinding = inputBinding
  }

  /**
   * Used to construct instances of {@link CommandLineBindable }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link CommandLineBindable }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const errors: ValidationException[] = []
            
    let inputBinding
    if ('inputBinding' in _doc) {
      try {
        inputBinding = await loadField(_doc.inputBinding, LoaderInstances.unionOfundefinedtypeOrCommandLineBindingLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `inputBinding` field is not valid because: ', [e])
          )
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!CommandLineBindable.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`inputBinding\``)
          )
          break
        }
      }
    }

    if (errors.length > 0) {
      throw new ValidationException("Trying 'CommandLineBindable'", errors)
    }

    const schema = new CommandLineBindable({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      inputBinding: inputBinding
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this.inputBinding != null) {
      r.inputBinding = save(this.inputBinding, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['inputBinding'])
}
