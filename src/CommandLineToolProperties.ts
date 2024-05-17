
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#CommandLineTool
 *
 * This defines the schema of the CWL Command Line Tool Description document.
 * 
 */
export interface CommandLineToolProperties extends Internal.ProcessProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * The unique identifier for this object.
   * 
   * Only useful for `$graph` at `Process` level. Should not be exposed
   * to users in graphical or terminal user interfaces.
   * 
   */
  id?: undefined | string
  class_?: Internal.CommandLineTool_class

  /**
   * A short, human-readable label of this object.
   */
  label?: undefined | string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>

  /**
   * Defines the input parameters of the process.  The process is ready to
   * run when all required input parameters are associated with concrete
   * values.  Input parameters include a schema for each parameter which is
   * used to validate the input object.  It may also be used to build a user
   * interface for constructing the input object.
   * 
   * When accepting an input object, all input parameters must have a value.
   * If an input parameter is missing from the input object, it must be
   * assigned a value of `null` (or the value of `default` for that
   * parameter, if provided) for the purposes of validation and evaluation
   * of expressions.
   * 
   */
  inputs: Array<Internal.CommandInputParameter>

  /**
   * Defines the parameters representing the output of the process.  May be
   * used to generate and/or validate the output object.
   * 
   */
  outputs: Array<Internal.CommandOutputParameter>

  /**
   * Declares requirements that apply to either the runtime environment or the
   * workflow engine that must be met in order to execute this process.  If
   * an implementation cannot satisfy all requirements, or a requirement is
   * listed which is not recognized by the implementation, it is a fatal
   * error and the implementation must not attempt to run the process,
   * unless overridden at user option.
   * 
   */
  requirements?: undefined | Array<Internal.InlineJavascriptRequirement | Internal.SchemaDefRequirement | Internal.LoadListingRequirement | Internal.DockerRequirement | Internal.SoftwareRequirement | Internal.InitialWorkDirRequirement | Internal.EnvVarRequirement | Internal.ShellCommandRequirement | Internal.ResourceRequirement | Internal.WorkReuse | Internal.NetworkAccess | Internal.InplaceUpdateRequirement | Internal.ToolTimeLimit | Internal.SubworkflowFeatureRequirement | Internal.ScatterFeatureRequirement | Internal.MultipleInputFeatureRequirement | Internal.StepInputExpressionRequirement>

  /**
   * Declares hints applying to either the runtime environment or the
   * workflow engine that may be helpful in executing this process.  It is
   * not an error if an implementation cannot satisfy all hints, however
   * the implementation may report a warning.
   * 
   */
  hints?: undefined | Array<Internal.InlineJavascriptRequirement | Internal.SchemaDefRequirement | Internal.LoadListingRequirement | Internal.DockerRequirement | Internal.SoftwareRequirement | Internal.InitialWorkDirRequirement | Internal.EnvVarRequirement | Internal.ShellCommandRequirement | Internal.ResourceRequirement | Internal.WorkReuse | Internal.NetworkAccess | Internal.InplaceUpdateRequirement | Internal.ToolTimeLimit | Internal.SubworkflowFeatureRequirement | Internal.ScatterFeatureRequirement | Internal.MultipleInputFeatureRequirement | Internal.StepInputExpressionRequirement | any>

  /**
   * CWL document version. Always required at the document root. Not
   * required for a Process embedded inside another Process.
   * 
   */
  cwlVersion?: undefined | Internal.CWLVersion

  /**
   * An identifier for the type of computational operation, of this Process.
   * Especially useful for [`Operation`](Workflow.html#Operation), but can also be used for
   * [`CommandLineTool`](CommandLineTool.html#CommandLineTool),
   * [`Workflow`](Workflow.html#Workflow), or [ExpressionTool](Workflow.html#ExpressionTool).
   * 
   * If provided, then this must be an IRI of a concept node that
   * represents the type of operation, preferably defined within an ontology.
   * 
   * For example, in the domain of bioinformatics, one can use an IRI from
   * the EDAM Ontology's [Operation concept nodes](http://edamontology.org/operation_0004),
   * like [Alignment](http://edamontology.org/operation_2928),
   * or [Clustering](http://edamontology.org/operation_3432); or a more
   * specific Operation concept like
   * [Split read mapping](http://edamontology.org/operation_3199).
   * 
   */
  intent?: undefined | Array<string>

  /**
   * Specifies the program to execute.  If an array, the first element of
   * the array is the command to execute, and subsequent elements are
   * mandatory command line arguments.  The elements in `baseCommand` must
   * appear before any command line bindings from `inputBinding` or
   * `arguments`.
   * 
   * If `baseCommand` is not provided or is an empty array, the first
   * element of the command line produced after processing `inputBinding` or
   * `arguments` must be used as the program to execute.
   * 
   * If the program includes a path separator character it must
   * be an absolute path, otherwise it is an error.  If the program does not
   * include a path separator, search the `$PATH` variable in the runtime
   * environment of the workflow runner find the absolute path of the
   * executable.
   * 
   */
  baseCommand?: undefined | string | Array<string>

  /**
   * Command line bindings which are not directly associated with input
   * parameters. If the value is a string, it is used as a string literal
   * argument. If it is an Expression, the result of the evaluation is used
   * as an argument.
   * 
   */
  arguments_?: undefined | Array<string | Internal.CommandLineBinding>

  /**
   * A path to a file whose contents must be piped into the command's
   * standard input stream.
   * 
   */
  stdin?: undefined | string

  /**
   * Capture the command's standard error stream to a file written to
   * the designated output directory.
   * 
   * If `stderr` is a string, it specifies the file name to use.
   * 
   * If `stderr` is an expression, the expression is evaluated and must
   * return a string with the file name to use to capture stderr.  If the
   * return value is not a string, or the resulting path contains illegal
   * characters (such as the path separator `/`) it is an error.
   * 
   */
  stderr?: undefined | string

  /**
   * Capture the command's standard output stream to a file written to
   * the designated output directory.
   * 
   * If the `CommandLineTool` contains logically chained commands
   * (e.g. `echo a && echo b`) `stdout` must include the output of
   * every command.
   * 
   * If `stdout` is a string, it specifies the file name to use.
   * 
   * If `stdout` is an expression, the expression is evaluated and must
   * return a string with the file name to use to capture stdout.  If the
   * return value is not a string, or the resulting path contains illegal
   * characters (such as the path separator `/`) it is an error.
   * 
   */
  stdout?: undefined | string

  /**
   * Exit codes that indicate the process completed successfully.
   * 
   * If not specified, only exit code 0 is considered success.
   * 
   */
  successCodes?: undefined | Array<number>

  /**
   * Exit codes that indicate the process failed due to a possibly
   * temporary condition, where executing the process with the same
   * runtime environment and inputs may produce different results.
   * 
   * If not specified, no exit codes are considered temporary failure.
   * 
   */
  temporaryFailCodes?: undefined | Array<number>

  /**
   * Exit codes that indicate the process failed due to a permanent logic error, where executing the process with the same runtime environment and same inputs is expected to always fail.
   * If not specified, all exit codes except 0 are considered permanent failure.
   */
  permanentFailCodes?: undefined | Array<number>
}