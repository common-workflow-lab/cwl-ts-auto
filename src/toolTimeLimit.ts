
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#ToolTimeLimit
 *
 * Set an upper limit on the execution time of a CommandLineTool.
 * A CommandLineTool whose execution duration exceeds the time
 * limit may be preemptively terminated and considered failed.
 * May also be used by batch systems to make scheduling decisions.
 * The execution duration excludes external operations, such as
 * staging of files, pulling a docker image etc, and only counts
 * wall-time for the execution of the command line itself.
 * 
 */
export class ToolTimeLimit extends Saveable implements Internal.ProcessRequirement {
  loadingOptions: LoadingOptions
  extensionFields?: Dictionary<any>

  /**
   * Always 'ToolTimeLimit'
   */
  class_: string

  /**
   * The time limit, in seconds.  A time limit of zero means no
   * time limit.  Negative time limits are an error.
   * 
   */
  timelimit: number | string


  constructor ({extensionFields, loadingOptions, class_, timelimit} : {extensionFields?: Dictionary<any>, loadingOptions?: LoadingOptions,  class_: string, timelimit: number | string,}) {
    super()
    this.extensionFields = extensionFields ?? {}
    this.loadingOptions = loadingOptions ?? new LoadingOptions({})
    this.class_ = class_
    this.timelimit = timelimit
  }

  /**
   * Used to construct instances of {@link ToolTimeLimit }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link ToolTimeLimit }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriToolTimeLimit_classLoaderFalseTrueNone,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        errors.push(
          new ValidationException('the `class` field is not valid because: ', [e])
        )
      }
    }

    let timelimit
    try {
      timelimit = await loadField(_doc.timelimit, LoaderInstances.unionOfinttypeOrExpressionLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        errors.push(
          new ValidationException('the `timelimit` field is not valid because: ', [e])
        )
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of _doc) {
      if (!this.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`timelimit\``)
          )
          break
        }
      }
    }

    if (errors.length > 0) {
      throw new ValidationException("Trying 'ToolTimeLimit'", errors)
    }

    const schema = new ToolTimeLimit({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      timelimit: timelimit
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
                
    if (this.timelimit != null) {
      r.timelimit = save(this.timelimit, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['class','timelimit'])
}
