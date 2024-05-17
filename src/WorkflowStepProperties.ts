
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#WorkflowStep
 *
 * A workflow step is an executable element of a workflow.  It specifies the
 * underlying process implementation (such as `CommandLineTool` or another
 * `Workflow`) in the `run` field and connects the input and output parameters
 * of the underlying process to workflow parameters.
 * 
 * # Scatter/gather
 * 
 * To use scatter/gather,
 * [ScatterFeatureRequirement](#ScatterFeatureRequirement) must be specified
 * in the workflow or workflow step requirements.
 * 
 * A "scatter" operation specifies that the associated workflow step or
 * subworkflow should execute separately over a list of input elements.  Each
 * job making up a scatter operation is independent and may be executed
 * concurrently.
 * 
 * The `scatter` field specifies one or more input parameters which will be
 * scattered.  An input parameter may be listed more than once.  The declared
 * type of each input parameter implicitly becomes an array of items of the
 * input parameter type.  If a parameter is listed more than once, it becomes
 * a nested array.  As a result, upstream parameters which are connected to
 * scattered parameters must be arrays.
 * 
 * All output parameter types are also implicitly wrapped in arrays.  Each job
 * in the scatter results in an entry in the output array.
 * 
 * If any scattered parameter runtime value is an empty array, all outputs are
 * set to empty arrays and no work is done for the step, according to
 * applicable scattering rules.
 * 
 * If `scatter` declares more than one input parameter, `scatterMethod`
 * describes how to decompose the input into a discrete set of jobs.
 * 
 *   * **dotproduct** specifies that each of the input arrays are aligned and one
 *       element taken from each array to construct each job.  It is an error
 *       if all input arrays are not the same length.
 * 
 *   * **nested_crossproduct** specifies the Cartesian product of the inputs,
 *       producing a job for every combination of the scattered inputs.  The
 *       output must be nested arrays for each level of scattering, in the
 *       order that the input arrays are listed in the `scatter` field.
 * 
 *   * **flat_crossproduct** specifies the Cartesian product of the inputs,
 *       producing a job for every combination of the scattered inputs.  The
 *       output arrays must be flattened to a single level, but otherwise listed in the
 *       order that the input arrays are listed in the `scatter` field.
 * 
 * # Conditional execution (Optional)
 * 
 * Conditional execution makes execution of a step conditional on an
 * expression.  A step that is not executed is "skipped".  A skipped
 * step produces `null` for all output parameters.
 * 
 * The condition is evaluated after `scatter`, using the input object
 * of each individual scatter job.  This means over a set of scatter
 * jobs, some may be executed and some may be skipped.  When the
 * results are gathered, skipped steps must be `null` in the output
 * arrays.
 * 
 * The `when` field controls conditional execution.  This is an
 * expression that must be evaluated with `inputs` bound to the step
 * input object (or individual scatter job), and returns a boolean
 * value.  It is an error if this expression returns a value other
 * than `true` or `false`.
 * 
 * Conditionals in CWL are an optional feature and are not required
 * to be implemented by all consumers of CWL documents.  An
 * implementation that does not support conditionals must return a
 * fatal error when attempting to execute a workflow that uses
 * conditional constructs the implementation does not support.
 * 
 * # Subworkflows
 * 
 * To specify a nested workflow as part of a workflow step,
 * [SubworkflowFeatureRequirement](#SubworkflowFeatureRequirement) must be
 * specified in the workflow or workflow step requirements.
 * 
 * It is a fatal error if a workflow directly or indirectly invokes itself as
 * a subworkflow (recursive workflows are not allowed).
 * 
 */
export interface WorkflowStepProperties extends Internal.IdentifiedProperties, Internal.LabeledProperties, Internal.DocumentedProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * The unique identifier for this object.
   */
  id?: undefined | string

  /**
   * A short, human-readable label of this object.
   */
  label?: undefined | string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>

  /**
   * Defines the input parameters of the workflow step.  The process is ready to
   * run when all required input parameters are associated with concrete
   * values.  Input parameters include a schema for each parameter which is
   * used to validate the input object.  It may also be used build a user
   * interface for constructing the input object.
   * 
   */
  in_: Array<Internal.WorkflowStepInput>

  /**
   * Defines the parameters representing the output of the process.  May be
   * used to generate and/or validate the output object.
   * 
   */
  out: Array<string | Internal.WorkflowStepOutput>

  /**
   * Declares requirements that apply to either the runtime environment or the
   * workflow engine that must be met in order to execute this workflow step.  If
   * an implementation cannot satisfy all requirements, or a requirement is
   * listed which is not recognized by the implementation, it is a fatal
   * error and the implementation must not attempt to run the process,
   * unless overridden at user option.
   * 
   */
  requirements?: undefined | Array<Internal.InlineJavascriptRequirement | Internal.SchemaDefRequirement | Internal.LoadListingRequirement | Internal.DockerRequirement | Internal.SoftwareRequirement | Internal.InitialWorkDirRequirement | Internal.EnvVarRequirement | Internal.ShellCommandRequirement | Internal.ResourceRequirement | Internal.WorkReuse | Internal.NetworkAccess | Internal.InplaceUpdateRequirement | Internal.ToolTimeLimit | Internal.SubworkflowFeatureRequirement | Internal.ScatterFeatureRequirement | Internal.MultipleInputFeatureRequirement | Internal.StepInputExpressionRequirement>

  /**
   * Declares hints applying to either the runtime environment or the
   * workflow engine that may be helpful in executing this workflow step.  It is
   * not an error if an implementation cannot satisfy all hints, however
   * the implementation may report a warning.
   * 
   */
  hints?: undefined | Array<any>

  /**
   * Specifies the process to run.  If `run` is a string, it must be an absolute IRI
   * or a relative path from the primary document.
   * 
   */
  run: string | Internal.CommandLineTool | Internal.ExpressionTool | Internal.Workflow | Internal.Operation

  /**
   * If defined, only run the step when the expression evaluates to
   * `true`.  If `false` the step is skipped.  A skipped step
   * produces a `null` on each output.
   * 
   */
  when?: undefined | string
  scatter?: undefined | string | Array<string>

  /**
   * Required if `scatter` is an array of more than one element.
   * 
   */
  scatterMethod?: undefined | Internal.ScatterMethod
}