
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#InplaceUpdateRequirement
 *
 * 
 * If `inplaceUpdate` is true, then an implementation supporting this
 * feature may permit tools to directly update files with `writable:
 * true` in InitialWorkDirRequirement.  That is, as an optimization,
 * files may be destructively modified in place as opposed to copied
 * and updated.
 * 
 * An implementation must ensure that only one workflow step may
 * access a writable file at a time.  It is an error if a file which
 * is writable by one workflow step file is accessed (for reading or
 * writing) by any other workflow step running independently.
 * However, a file which has been updated in a previous completed
 * step may be used as input to multiple steps, provided it is
 * read-only in every step.
 * 
 * Workflow steps which modify a file must produce the modified file
 * as output.  Downstream steps which further process the file must
 * use the output of previous steps, and not refer to a common input
 * (this is necessary for both ordering and correctness).
 * 
 * Workflow authors should provide this in the `hints` section.  The
 * intent of this feature is that workflows produce the same results
 * whether or not InplaceUpdateRequirement is supported by the
 * implementation, and this feature is primarily available as an
 * optimization for particular environments.
 * 
 * Users and implementers should be aware that workflows that
 * destructively modify inputs may not be repeatable or reproducible.
 * In particular, enabling this feature implies that WorkReuse should
 * not be enabled.
 * 
 */
export class InplaceUpdateRequirement extends Saveable implements Internal.InplaceUpdateRequirementProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'InplaceUpdateRequirement'
   */
  class_: Internal.InplaceUpdateRequirement_class
  inplaceUpdate: boolean


  constructor ({loadingOptions, extensionFields, class_ = Internal.InplaceUpdateRequirement_class.INPLACEUPDATEREQUIREMENT, inplaceUpdate} : {loadingOptions?: LoadingOptions} & Internal.InplaceUpdateRequirementProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.class_ = class_
    this.inplaceUpdate = inplaceUpdate
  }

  /**
   * Used to construct instances of {@link InplaceUpdateRequirement }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link InplaceUpdateRequirement }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriInplaceUpdateRequirement_classLoaderFalseTrueNoneNone,
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

    let inplaceUpdate
    try {
      inplaceUpdate = await loadField(_doc.inplaceUpdate, LoaderInstances.booltype,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `inplaceUpdate` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!InplaceUpdateRequirement.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`inplaceUpdate\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'InplaceUpdateRequirement'", __errors)
    }

    const schema = new InplaceUpdateRequirement({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      inplaceUpdate: inplaceUpdate
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
                
    if (this.inplaceUpdate != null) {
      r.inplaceUpdate = save(this.inplaceUpdate, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['class','inplaceUpdate'])
}
