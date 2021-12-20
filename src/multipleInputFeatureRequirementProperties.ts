
import * as Internal from './util/internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#MultipleInputFeatureRequirement
 *
 * Indicates that the workflow platform must support multiple inbound data links
 * listed in the `source` field of [WorkflowStepInput](#WorkflowStepInput).
 * 
 */
export interface MultipleInputFeatureRequirementProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>
                    
  /**
   * Always 'MultipleInputFeatureRequirement'
   */
  class_: string
}