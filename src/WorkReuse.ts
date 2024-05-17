
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#WorkReuse
 *
 * For implementations that support reusing output from past work (on
 * the assumption that same code and same input produce same
 * results), control whether to enable or disable the reuse behavior
 * for a particular tool or step (to accommodate situations where that
 * assumption is incorrect).  A reused step is not executed but
 * instead returns the same output as the original execution.
 * 
 * If `WorkReuse` is not specified, correct tools should assume it
 * is enabled by default.
 * 
 */
export class WorkReuse extends Saveable implements Internal.WorkReuseProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'WorkReuse'
   */
  class_: Internal.WorkReuse_class
  enableReuse: boolean | string


  constructor ({loadingOptions, extensionFields, class_ = Internal.WorkReuse_class.WORKREUSE, enableReuse} : {loadingOptions?: LoadingOptions} & Internal.WorkReuseProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.class_ = class_
    this.enableReuse = enableReuse
  }

  /**
   * Used to construct instances of {@link WorkReuse }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link WorkReuse }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriWorkReuse_classLoaderFalseTrueNoneNone,
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

    let enableReuse
    try {
      enableReuse = await loadField(_doc.enableReuse, LoaderInstances.unionOfbooltypeOrExpressionLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `enableReuse` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!WorkReuse.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`enableReuse\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'WorkReuse'", __errors)
    }

    const schema = new WorkReuse({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      enableReuse: enableReuse
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this.class_ != null) {
      const u = saveRelativeUri(this.class_, baseUrl, false,
                                relativeUris, undefined)
      if (u != null) {
        r.class = u
      }
    }
                
    if (this.enableReuse != null) {
      r.enableReuse = save(this.enableReuse, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['class','enableReuse'])
}
