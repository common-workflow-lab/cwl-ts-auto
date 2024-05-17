
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#InitialWorkDirRequirement
 *
 * Define a list of files and subdirectories that must be staged by the workflow platform prior to executing the command line tool.
 * Normally files are staged within the designated output directory. However, when running inside containers, files may be staged at arbitrary locations, see discussion for [`Dirent.entryname`](#Dirent). Together with `DockerRequirement.dockerOutputDirectory` it is possible to control the locations of both input and output files when running in containers.
 */
export class InitialWorkDirRequirement extends Saveable implements Internal.InitialWorkDirRequirementProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * InitialWorkDirRequirement
   */
  class_: Internal.InitialWorkDirRequirement_class

  /**
   * The list of files or subdirectories that must be staged prior
   * to executing the command line tool.
   * 
   * Return type of each expression must validate as `["null",
   * File, Directory, Dirent, {type: array, items: [File,
   * Directory]}]`.
   * 
   * Each `File` or `Directory` that is returned by an Expression
   * must be added to the designated output directory prior to
   * executing the tool.
   * 
   * Each `Dirent` record that is listed or returned by an
   * expression specifies a file to be created or staged in the
   * designated output directory prior to executing the tool.
   * 
   * Expressions may return null, in which case they have no effect.
   * 
   * Files or Directories which are listed in the input parameters
   * and appear in the `InitialWorkDirRequirement` listing must
   * have their `path` set to their staged location.  If the same
   * File or Directory appears more than once in the
   * `InitialWorkDirRequirement` listing, the implementation must
   * choose exactly one value for `path`; how this value is chosen
   * is undefined.
   * 
   */
  listing?: string | Array<undefined | Internal.Dirent | string | Internal.File | Internal.Directory | Array<Internal.File | Internal.Directory>>


  constructor ({loadingOptions, extensionFields, class_ = Internal.InitialWorkDirRequirement_class.INITIALWORKDIRREQUIREMENT, listing} : {loadingOptions?: LoadingOptions} & Internal.InitialWorkDirRequirementProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.class_ = class_
    this.listing = listing
  }

  /**
   * Used to construct instances of {@link InitialWorkDirRequirement }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link InitialWorkDirRequirement }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriInitialWorkDirRequirement_classLoaderFalseTrueNoneNone,
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

    let listing
    try {
      listing = await loadField(_doc.listing, LoaderInstances.unionOfExpressionLoaderOrarrayOfunionOfundefinedtypeOrDirentLoaderOrExpressionLoaderOrFileLoaderOrDirectoryLoaderOrarrayOfunionOfFileLoaderOrDirectoryLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `listing` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!InitialWorkDirRequirement.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`listing\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'InitialWorkDirRequirement'", __errors)
    }

    const schema = new InitialWorkDirRequirement({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      listing: listing
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
                
    if (this.listing != null) {
      r.listing = save(this.listing, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['class','listing'])
}
