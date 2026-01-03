
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for http://commonwl.org/cwltool#CUDARequirement
 *
 * Require support for NVIDA CUDA (GPU hardware acceleration).
 * 
 */
export interface CUDARequirementProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * cwltool:CUDARequirement
   */
  class_?: string

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
}