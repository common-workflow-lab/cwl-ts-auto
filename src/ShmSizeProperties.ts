
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for http://commonwl.org/cwltool#ShmSize
 */
export interface ShmSizeProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * cwltool:ShmSize
   */
  class_?: string

  /**
   * Size of /dev/shm. The format is `<number><unit>`. <number> must be greater
   * than 0. Unit is optional and can be `b` (bytes), `k` (kilobytes), `m`
   * (megabytes), or `g` (gigabytes). If you omit the unit, the default is
   * bytes. If you omit the size entirely, the value is `64m`."
   * 
   */
  shmSize: string
}