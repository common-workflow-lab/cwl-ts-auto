
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for http://commonwl.org/cwltool#Loop
 *
 * Prototype to enable workflow-level looping of a step.
 * 
 * Valid only under `requirements` of a https://www.commonwl.org/v1.2/Workflow.html#WorkflowStep.
 * Unlike other CWL requirements, Loop requirement is not propagated to inner steps.
 * 
 * `loopWhen` is an expansion of the CWL v1.2 `when` construct which controls
 * conditional execution.
 * 
 * Using `loopWhen` and `when` for the same step will produce an error.
 * 
 * `loopWhen` is not compatible with `scatter` at this time and combining the
 * two in the same step will produce an error.
 * 
 */
export interface LoopProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * cwltool:Loop
   */
  class_?: string

  /**
   * Defines the input parameters of the loop iterations after the first one
   * (inputs of the first iteration are the step input parameters). If no
   * `loop` rule is specified for a given step `in` field, the initial value
   * is kept constant among all iterations.
   * 
   */
  loop: Array<Internal.LoopInput>

  /**
   * Only run the step while the expression evaluates to `true`.
   * If `false` and no iteration has been performed, the step is skipped.
   * 
   * A skipped step produces a `null` on each output.
   * 
   * The `inputs` value in the expression must be the step input object.
   * 
   * It is an error if this expression returns a value other than `true` or `false`.
   * 
   */
  loopWhen: string

  /**
   * - Specify the desired method of dealing with loop outputs
   * - Default. Propagates only the last computed element to the subsequent steps when the loop terminates.
   * - Propagates a single array with all output values to the subsequent steps when the loop terminates.
   * 
   */
  outputMethod: Internal.LoopOutputModes
}