
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#SoftwareRequirement
 *
 * A list of software packages that should be configured in the environment of
 * the defined process.
 * 
 */
export interface SoftwareRequirementProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'SoftwareRequirement'
   */
  class_?: Internal.SoftwareRequirement_class

  /**
   * The list of software to be configured.
   */
  packages: Array<Internal.SoftwarePackage>
}