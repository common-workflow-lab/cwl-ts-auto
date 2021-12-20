
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#WorkReuse
 *
 * For implementations that support reusing output from past work (on
 * the assumption that same code and same input produce same
 * results), control whether to enable or disable the reuse behavior
 * for a particular tool or step (to accomodate situations where that
 * assumption is incorrect).  A reused step is not executed but
 * instead returns the same output as the original execution.
 * 
 * If `WorkReuse` is not specified, correct tools should assume it
 * is enabled by default.
 * 
 */
export interface WorkReuseProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>
                    
  /**
   * Always 'WorkReuse'
   */
  class_: Internal.WorkReuse_class
  enableReuse: boolean | string
}