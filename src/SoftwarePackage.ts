
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#SoftwarePackage
 */
export class SoftwarePackage extends Saveable implements Internal.SoftwarePackageProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * The name of the software to be made available. If the name is
   * common, inconsistent, or otherwise ambiguous it should be combined with
   * one or more identifiers in the `specs` field.
   * 
   */
  package_: string

  /**
   * The (optional) versions of the software that are known to be
   * compatible.
   * 
   */
  version?: undefined | Array<string>

  /**
   * One or more [IRI](https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier)s
   * identifying resources for installing or enabling the software named in
   * the `package` field. Implementations may provide resolvers which map
   * these software identifier IRIs to some configuration action; or they can
   * use only the name from the `package` field on a best effort basis.
   * 
   * For example, the IRI https://packages.debian.org/bowtie could
   * be resolved with `apt-get install bowtie`. The IRI
   * https://anaconda.org/bioconda/bowtie could be resolved with `conda
   * install -c bioconda bowtie`.
   * 
   * IRIs can also be system independent and used to map to a specific
   * software installation or selection mechanism.
   * Using [RRID](https://www.identifiers.org/rrid/) as an example:
   * https://identifiers.org/rrid/RRID:SCR_005476
   * could be fulfilled using the above-mentioned Debian or bioconda
   * package, a local installation managed by [Environment Modules](https://modules.sourceforge.net/),
   * or any other mechanism the platform chooses. IRIs can also be from
   * identifier sources that are discipline specific yet still system
   * independent. As an example, the equivalent [ELIXIR Tools and Data
   * Service Registry](https://bio.tools) IRI to the previous RRID example is
   * https://bio.tools/tool/bowtie2/version/2.2.8.
   * If supported by a given registry, implementations are encouraged to
   * query these system independent software identifier IRIs directly for
   * links to packaging systems.
   * 
   * A site specific IRI can be listed as well. For example, an academic
   * computing cluster using Environment Modules could list the IRI
   * `https://hpc.example.edu/modules/bowtie-tbb/1.22` to indicate that
   * `module load bowtie-tbb/1.1.2` should be executed to make available
   * `bowtie` version 1.1.2 compiled with the TBB library prior to running
   * the accompanying Workflow or CommandLineTool. Note that the example IRI
   * is specific to a particular institution and computing environment as
   * the Environment Modules system does not have a common namespace or
   * standardized naming convention.
   * 
   * This last example is the least portable and should only be used if
   * mechanisms based off of the `package` field or more generic IRIs are
   * unavailable or unsuitable. While harmless to other sites, site specific
   * software IRIs should be left out of shared CWL descriptions to avoid
   * clutter.
   * 
   */
  specs?: undefined | Array<string>


  constructor ({loadingOptions, extensionFields, package_, version, specs} : {loadingOptions?: LoadingOptions} & Internal.SoftwarePackageProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.package_ = package_
    this.version = version
    this.specs = specs
  }

  /**
   * Used to construct instances of {@link SoftwarePackage }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link SoftwarePackage }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let package_
    try {
      package_ = await loadField(_doc.package, LoaderInstances.strtype,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `package` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let version
    if ('version' in _doc) {
      try {
        version = await loadField(_doc.version, LoaderInstances.unionOfundefinedtypeOrarrayOfstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `version` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let specs
    if ('specs' in _doc) {
      try {
        specs = await loadField(_doc.specs, LoaderInstances.uriunionOfundefinedtypeOrarrayOfstrtypeFalseFalseNoneTrue,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `specs` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!SoftwarePackage.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`package\`,\`version\`,\`specs\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'SoftwarePackage'", __errors)
    }

    const schema = new SoftwarePackage({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      package_: package_,
      version: version,
      specs: specs
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this.package_ != null) {
      r.package = save(this.package_, false, baseUrl, relativeUris)
    }
                
    if (this.version != null) {
      r.version = save(this.version, false, baseUrl, relativeUris)
    }
                
    if (this.specs != null) {
      const u = saveRelativeUri(this.specs, baseUrl, false,
                                relativeUris, undefined)
      if (u != null) {
        r.specs = u
      }
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
            
  static attr: Set<string> = new Set(['package','version','specs'])
}
