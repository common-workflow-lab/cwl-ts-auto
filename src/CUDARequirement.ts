
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
 * Auto-generated class implementation for http://commonwl.org/cwltool#CUDARequirement
 *
 * Require support for NVIDA CUDA (GPU hardware acceleration).
 * 
 */
export class CUDARequirement extends Saveable implements Internal.CUDARequirementProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * cwltool:CUDARequirement
   */
  class_: string

  /**
   * CUDA hardware capability required to run the software, in X.Y
   * format.
   * 
   * * If this is a single value, it defines only the minimum
   *   compute capability.  GPUs with higher capability are also
   *   accepted.
   * 
   * * If it is an array value, then only select GPUs with compute
   *   capabilities that explicitly appear in the array.
   * 
   */
  cudaComputeCapability: string | Array<string>

  /**
   * Maximum number of GPU devices to request.  If not specified,
   * same as `cudaDeviceCountMin`.
   * 
   */
  cudaDeviceCountMax?: undefined | number | string

  /**
   * Minimum number of GPU devices to request.  If not specified,
   * same as `cudaDeviceCountMax`.  If neither are specified,
   * default 1.
   * 
   */
  cudaDeviceCountMin?: undefined | number | string

  /**
   * Minimum CUDA version to run the software, in X.Y format.  This
   * corresponds to a CUDA SDK release.  When running directly on
   * the host (not in a container) the host must have a compatible
   * CUDA SDK (matching the exact version, or, starting with CUDA
   * 11.3, matching major version).  When run in a container, the
   * container image should provide the CUDA runtime, and the host
   * driver is injected into the container.  In this case, because
   * CUDA drivers are backwards compatible, it is possible to
   * use an older SDK with a newer driver across major versions.
   * 
   * See https://docs.nvidia.com/deploy/cuda-compatibility/ for
   * details.
   * 
   */
  cudaVersionMin: string


  constructor ({loadingOptions, extensionFields, class_ = 'CUDARequirement', cudaComputeCapability, cudaDeviceCountMax, cudaDeviceCountMin, cudaVersionMin} : {loadingOptions?: LoadingOptions} & Internal.CUDARequirementProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.class_ = class_
    this.cudaComputeCapability = cudaComputeCapability
    this.cudaDeviceCountMax = cudaDeviceCountMax
    this.cudaDeviceCountMin = cudaDeviceCountMin
    this.cudaVersionMin = cudaVersionMin
  }

  /**
   * Used to construct instances of {@link CUDARequirement }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link CUDARequirement }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uristrtypeFalseTrueNoneNone,
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

    let cudaComputeCapability
    try {
      cudaComputeCapability = await loadField(_doc.cudaComputeCapability, LoaderInstances.unionOfstrtypeOrarrayOfstrtype,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `cudaComputeCapability` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let cudaDeviceCountMax
    if ('cudaDeviceCountMax' in _doc) {
      try {
        cudaDeviceCountMax = await loadField(_doc.cudaDeviceCountMax, LoaderInstances.unionOfundefinedtypeOrinttypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `cudaDeviceCountMax` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let cudaDeviceCountMin
    if ('cudaDeviceCountMin' in _doc) {
      try {
        cudaDeviceCountMin = await loadField(_doc.cudaDeviceCountMin, LoaderInstances.unionOfundefinedtypeOrinttypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `cudaDeviceCountMin` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let cudaVersionMin
    try {
      cudaVersionMin = await loadField(_doc.cudaVersionMin, LoaderInstances.strtype,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `cudaVersionMin` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!CUDARequirement.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`cudaComputeCapability\`,\`cudaDeviceCountMax\`,\`cudaDeviceCountMin\`,\`cudaVersionMin\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'CUDARequirement'", __errors)
    }

    const schema = new CUDARequirement({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      cudaComputeCapability: cudaComputeCapability,
      cudaDeviceCountMax: cudaDeviceCountMax,
      cudaDeviceCountMin: cudaDeviceCountMin,
      cudaVersionMin: cudaVersionMin
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
                
    if (this.cudaComputeCapability != null) {
      r.cudaComputeCapability = save(this.cudaComputeCapability, false, baseUrl, relativeUris)
    }
                
    if (this.cudaDeviceCountMax != null) {
      r.cudaDeviceCountMax = save(this.cudaDeviceCountMax, false, baseUrl, relativeUris)
    }
                
    if (this.cudaDeviceCountMin != null) {
      r.cudaDeviceCountMin = save(this.cudaDeviceCountMin, false, baseUrl, relativeUris)
    }
                
    if (this.cudaVersionMin != null) {
      r.cudaVersionMin = save(this.cudaVersionMin, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['class','cudaComputeCapability','cudaDeviceCountMax','cudaDeviceCountMin','cudaVersionMin'])
}
