
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#DockerRequirement
 *
 * Indicates that a workflow component should be run in a
 * [Docker](https://docker.com) or Docker-compatible (such as
 * [Singularity](https://www.sylabs.io/) and [udocker](https://github.com/indigo-dc/udocker)) container environment and
 * specifies how to fetch or build the image.
 * 
 * If a CommandLineTool lists `DockerRequirement` under
 * `hints` (or `requirements`), it may (or must) be run in the specified Docker
 * container.
 * 
 * The platform must first acquire or install the correct Docker image as
 * specified by `dockerPull`, `dockerImport`, `dockerLoad` or `dockerFile`.
 * 
 * The platform must execute the tool in the container using `docker run` with
 * the appropriate Docker image and tool command line.
 * 
 * The workflow platform may provide input files and the designated output
 * directory through the use of volume bind mounts.  The platform should rewrite
 * file paths in the input object to correspond to the Docker bind mounted
 * locations. That is, the platform should rewrite values in the parameter context
 * such as `runtime.outdir`, `runtime.tmpdir` and others to be valid paths
 * within the container. The platform must ensure that `runtime.outdir` and
 * `runtime.tmpdir` are distinct directories.
 * 
 * When running a tool contained in Docker, the workflow platform must not
 * assume anything about the contents of the Docker container, such as the
 * presence or absence of specific software, except to assume that the
 * generated command line represents a valid command within the runtime
 * environment of the container.
 * 
 * A container image may specify an
 * [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint)
 * and/or
 * [CMD](https://docs.docker.com/engine/reference/builder/#cmd).
 * Command line arguments will be appended after all elements of
 * ENTRYPOINT, and will override all elements specified using CMD (in
 * other words, CMD is only used when the CommandLineTool definition
 * produces an empty command line).
 * 
 * Use of implicit ENTRYPOINT or CMD are discouraged due to reproducibility
 * concerns of the implicit hidden execution point (For further discussion, see
 * [https://doi.org/10.12688/f1000research.15140.1](https://doi.org/10.12688/f1000research.15140.1)). Portable
 * CommandLineTool wrappers in which use of a container is optional must not rely on ENTRYPOINT or CMD.
 * CommandLineTools which do rely on ENTRYPOINT or CMD must list `DockerRequirement` in the
 * `requirements` section.
 * 
 * ## Interaction with other requirements
 * 
 * If [EnvVarRequirement](#EnvVarRequirement) is specified alongside a
 * DockerRequirement, the environment variables must be provided to Docker
 * using `--env` or `--env-file` and interact with the container's preexisting
 * environment as defined by Docker.
 * 
 */
export class DockerRequirement extends Saveable implements Internal.DockerRequirementProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'DockerRequirement'
   */
  class_: Internal.DockerRequirement_class

  /**
   * Specify a Docker image to retrieve using `docker pull`. Can contain the
   * immutable digest to ensure an exact container is used:
   * `dockerPull: ubuntu@sha256:45b23dee08af5e43a7fea6c4cf9c25ccf269ee113168c19722f87876677c5cb2`
   * 
   */
  dockerPull?: undefined | string

  /**
   * Specify an HTTP URL from which to download a Docker image using `docker load`.
   */
  dockerLoad?: undefined | string

  /**
   * Supply the contents of a Dockerfile which will be built using `docker build`.
   */
  dockerFile?: undefined | string

  /**
   * Provide HTTP URL to download and gunzip a Docker images using `docker import.
   */
  dockerImport?: undefined | string

  /**
   * The image id that will be used for `docker run`.  May be a
   * human-readable image name or the image identifier hash.  May be skipped
   * if `dockerPull` is specified, in which case the `dockerPull` image id
   * must be used.
   * 
   */
  dockerImageId?: undefined | string

  /**
   * Set the designated output directory to a specific location inside the
   * Docker container.
   * 
   */
  dockerOutputDirectory?: undefined | string


  constructor ({loadingOptions, extensionFields, class_ = Internal.DockerRequirement_class.DOCKERREQUIREMENT, dockerPull, dockerLoad, dockerFile, dockerImport, dockerImageId, dockerOutputDirectory} : {loadingOptions?: LoadingOptions} & Internal.DockerRequirementProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.class_ = class_
    this.dockerPull = dockerPull
    this.dockerLoad = dockerLoad
    this.dockerFile = dockerFile
    this.dockerImport = dockerImport
    this.dockerImageId = dockerImageId
    this.dockerOutputDirectory = dockerOutputDirectory
  }

  /**
   * Used to construct instances of {@link DockerRequirement }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link DockerRequirement }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriDockerRequirement_classLoaderFalseTrueNoneNone,
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

    let dockerPull
    if ('dockerPull' in _doc) {
      try {
        dockerPull = await loadField(_doc.dockerPull, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `dockerPull` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let dockerLoad
    if ('dockerLoad' in _doc) {
      try {
        dockerLoad = await loadField(_doc.dockerLoad, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `dockerLoad` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let dockerFile
    if ('dockerFile' in _doc) {
      try {
        dockerFile = await loadField(_doc.dockerFile, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `dockerFile` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let dockerImport
    if ('dockerImport' in _doc) {
      try {
        dockerImport = await loadField(_doc.dockerImport, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `dockerImport` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let dockerImageId
    if ('dockerImageId' in _doc) {
      try {
        dockerImageId = await loadField(_doc.dockerImageId, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `dockerImageId` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let dockerOutputDirectory
    if ('dockerOutputDirectory' in _doc) {
      try {
        dockerOutputDirectory = await loadField(_doc.dockerOutputDirectory, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `dockerOutputDirectory` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!DockerRequirement.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`dockerPull\`,\`dockerLoad\`,\`dockerFile\`,\`dockerImport\`,\`dockerImageId\`,\`dockerOutputDirectory\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'DockerRequirement'", __errors)
    }

    const schema = new DockerRequirement({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      dockerPull: dockerPull,
      dockerLoad: dockerLoad,
      dockerFile: dockerFile,
      dockerImport: dockerImport,
      dockerImageId: dockerImageId,
      dockerOutputDirectory: dockerOutputDirectory
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
                
    if (this.dockerPull != null) {
      r.dockerPull = save(this.dockerPull, false, baseUrl, relativeUris)
    }
                
    if (this.dockerLoad != null) {
      r.dockerLoad = save(this.dockerLoad, false, baseUrl, relativeUris)
    }
                
    if (this.dockerFile != null) {
      r.dockerFile = save(this.dockerFile, false, baseUrl, relativeUris)
    }
                
    if (this.dockerImport != null) {
      r.dockerImport = save(this.dockerImport, false, baseUrl, relativeUris)
    }
                
    if (this.dockerImageId != null) {
      r.dockerImageId = save(this.dockerImageId, false, baseUrl, relativeUris)
    }
                
    if (this.dockerOutputDirectory != null) {
      r.dockerOutputDirectory = save(this.dockerOutputDirectory, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['class','dockerPull','dockerLoad','dockerFile','dockerImport','dockerImageId','dockerOutputDirectory'])
}
