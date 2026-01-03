
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for http://commonwl.org/cwltool#LoopInput
 */
export interface LoopInputProperties  {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * It must reference the `id` of one of the elements in the `in` field of the step.
   */
  id?: undefined | string

  /**
   * The default value for this parameter to use if either there is no
   * `source` field, or the value produced by the `source` is `null`.  The
   * default must be applied prior to scattering or evaluating `valueFrom`.
   * 
   */
  default_?: undefined | any

  /**
   * The method to use to merge multiple inbound links into a single array.
   * If not specified, the default method is "merge_nested".
   * 
   */
  linkMerge?: undefined | Internal.LinkMergeMethod

  /**
   * Specifies one or more of the step output parameters that will
   * provide input to the loop iterations after the first one (inputs
   * of the first iteration are the step input parameters).
   * 
   */
  loopSource?: undefined | string | Array<string>

  /**
   * The method to use to choose non-null elements among multiple sources.
   * 
   */
  pickValue?: undefined | Internal.PickValueMethod

  /**
   * To use valueFrom, [StepInputExpressionRequirement](#StepInputExpressionRequirement) must
   * be specified in the workflow or workflow step requirements.
   * 
   * If `valueFrom` is a constant string value, use this as the value for
   * this input parameter.
   * 
   * If `valueFrom` is a parameter reference or expression, it must be
   * evaluated to yield the actual value to be assigned to the input field.
   * 
   * The `self` value in the parameter reference or expression must be
   * `null` if there is no `loopSource` field, or the value of the
   * parameter(s) specified in the `loopSource` field.
   * 
   * The value of `inputs` in the parameter reference or expression must be
   * the input object to the previous iteration of the workflow step (or the initial
   * inputs for the first iteration).
   * 
   */
  valueFrom?: undefined | string
}