
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#SubworkflowFeatureRequirement
 *
 * Indicates that the workflow platform must support nested workflows in
 * the `run` field of [WorkflowStep](#WorkflowStep).
 * 
 */
export interface SubworkflowFeatureRequirementProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'SubworkflowFeatureRequirement'
   */
  class_?: Internal.SubworkflowFeatureRequirement_class
}