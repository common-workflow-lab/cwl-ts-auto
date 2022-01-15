
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#StepInputExpressionRequirement
 *
 * Indicate that the workflow platform must support the `valueFrom` field
 * of [WorkflowStepInput](#WorkflowStepInput).
 * 
 */
export interface StepInputExpressionRequirementProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'StepInputExpressionRequirement'
   */
  class_?: Internal.StepInputExpressionRequirement_class
}