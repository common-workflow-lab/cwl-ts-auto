
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#InputBinding
 */
export interface InputBindingProperties  {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Use of `loadContents` in `InputBinding` is deprecated.
   * Preserved for v1.0 backwards compatability.  Will be removed in
   * CWL v2.0.  Use `InputParameter.loadContents` instead.
   * 
   */
  loadContents?: undefined | boolean
}