
import * as Internal from './util/internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#Sink
 */
export interface SinkProperties  {
                    
  /**
   * Specifies one or more workflow parameters that will provide input to
   * the underlying step parameter.
   * 
   */
  source?: undefined | string | Array<string>

  /**
   * The method to use to merge multiple inbound links into a single array.
   * If not specified, the default method is "merge_nested".
   * 
   */
  linkMerge?: undefined | string

  /**
   * The method to use to choose non-null elements among multiple sources.
   * 
   */
  pickValue?: undefined | string
}