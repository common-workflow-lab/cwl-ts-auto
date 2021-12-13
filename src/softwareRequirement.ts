
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#SoftwareRequirement
 *
 * A list of software packages that should be configured in the environment of
 * the defined process.
 * 
 */
export class SoftwareRequirement extends Saveable implements Internal.ProcessRequirement {
  loadingOptions: LoadingOptions
  extensionFields?: Dictionary<any>

  /**
   * Always 'SoftwareRequirement'
   */
  class_: string

  /**
   * The list of software to be configured.
   */
  packages: Array<Internal.SoftwarePackage>


  constructor ({extensionFields, loadingOptions, class_, packages} : {extensionFields?: Dictionary<any>, loadingOptions?: LoadingOptions,  class_: string, packages: Array<Internal.SoftwarePackage>,}) {
    super()
    this.extensionFields = extensionFields ?? {}
    this.loadingOptions = loadingOptions ?? new LoadingOptions({})
    this.class_ = class_
    this.packages = packages
  }

  /**
   * Used to construct instances of {@link SoftwareRequirement }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link SoftwareRequirement }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriSoftwareRequirement_classLoaderFalseTrueNone,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        errors.push(
          new ValidationException('the `class` field is not valid because: ', [e])
        )
      }
    }

    let packages
    try {
      packages = await loadField(_doc.packages, LoaderInstances.idmappackagesarrayOfSoftwarePackageLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        errors.push(
          new ValidationException('the `packages` field is not valid because: ', [e])
        )
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!SoftwareRequirement.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`packages\``)
          )
          break
        }
      }
    }

    if (errors.length > 0) {
      throw new ValidationException("Trying 'SoftwareRequirement'", errors)
    }

    const schema = new SoftwareRequirement({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      packages: packages
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
                
    if (this.packages != null) {
      r.packages = save(this.packages, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['class','packages'])
}
