
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#NetworkAccess
 *
 * Indicate whether a process requires outgoing IPv4/IPv6 network
 * access.  Choice of IPv4 or IPv6 is implementation and site
 * specific, correct tools must support both.
 * 
 * If `networkAccess` is false or not specified, tools must not
 * assume network access, except for localhost (the loopback device).
 * 
 * If `networkAccess` is true, the tool must be able to make outgoing
 * connections to network resources.  Resources may be on a private
 * subnet or the public Internet.  However, implementations and sites
 * may apply their own security policies to restrict what is
 * accessible by the tool.
 * 
 * Enabling network access does not imply a publicly routable IP
 * address or the ability to accept inbound connections.
 * 
 */
export class NetworkAccess extends Saveable implements Internal.NetworkAccessProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'NetworkAccess'
   */
  class_: Internal.NetworkAccess_class
  networkAccess: boolean | string


  constructor ({loadingOptions, extensionFields, class_ = Internal.NetworkAccess_class.NETWORKACCESS, networkAccess} : {loadingOptions?: LoadingOptions} & Internal.NetworkAccessProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.class_ = class_
    this.networkAccess = networkAccess
  }

  /**
   * Used to construct instances of {@link NetworkAccess }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link NetworkAccess }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriNetworkAccess_classLoaderFalseTrueNoneNone,
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

    let networkAccess
    try {
      networkAccess = await loadField(_doc.networkAccess, LoaderInstances.unionOfbooltypeOrExpressionLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `networkAccess` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!NetworkAccess.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`networkAccess\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'NetworkAccess'", __errors)
    }

    const schema = new NetworkAccess({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      networkAccess: networkAccess
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
                
    if (this.networkAccess != null) {
      r.networkAccess = save(this.networkAccess, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['class','networkAccess'])
}
