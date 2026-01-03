
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for http://commonwl.org/cwltool#MPIRequirement
 *
 * Indicates that a process requires an MPI runtime.
 * 
 */
export interface MPIRequirementProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'MPIRequirement'
   */
  class_?: string

  /**
   * The number of MPI processes to start. If you give a string,
   * this will be evaluated as a CWL Expression and it must
   * evaluate to an integer.
   * 
   */
  processes: number | string
}