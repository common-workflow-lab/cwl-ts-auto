
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#WorkflowOutputParameter
 *
 * Describe an output parameter of a workflow.  The parameter must be
 * connected to one or more parameters defined in the workflow that
 * will provide the value of the output parameter. It is legal to
 * connect a WorkflowInputParameter to a WorkflowOutputParameter.
 * 
 * See [WorkflowStepInput](#WorkflowStepInput) for discussion of
 * `linkMerge` and `pickValue`.
 * 
 */
export interface WorkflowOutputParameterProperties extends Internal.OutputParameterProperties {
                    
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
   * Only valid when `type: File` or is an array of `items: File`.
   * 
   * Provides a pattern or expression specifying files or
   * directories that should be included alongside the primary
   * file.  Secondary files may be required or optional.  When not
   * explicitly specified, secondary files specified for `inputs`
   * are required and `outputs` are optional.  An implementation
   * must include matching Files and Directories in the
   * `secondaryFiles` property of the primary file.  These Files
   * and Directories must be transferred and staged alongside the
   * primary file.  An implementation may fail workflow execution
   * if a required secondary file does not exist.
   * 
   * If the value is an expression, the value of `self` in the expression
   * must be the primary input or output File object to which this binding
   * applies.  The `basename`, `nameroot` and `nameext` fields must be
   * present in `self`.  For `CommandLineTool` outputs the `path` field must
   * also be present.  The expression must return a filename string relative
   * to the path to the primary File, a File or Directory object with either
   * `path` or `location` and `basename` fields set, or an array consisting
   * of strings or File or Directory objects.  It is legal to reference an
   * unchanged File or Directory object taken from input as a secondaryFile.
   * The expression may return "null" in which case there is no secondaryFile
   * from that expression.
   * 
   * To work on non-filename-preserving storage systems, portable tool
   * descriptions should avoid constructing new values from `location`, but
   * should construct relative references using `basename` or `nameroot`
   * instead.
   * 
   * If a value in `secondaryFiles` is a string that is not an expression,
   * it specifies that the following pattern should be applied to the path
   * of the primary file to yield a filename relative to the primary File:
   * 
   *   1. If string ends with `?` character, remove the last `?` and mark
   *     the resulting secondary file as optional.
   *   2. If string begins with one or more caret `^` characters, for each
   *     caret, remove the last file extension from the path (the last
   *     period `.` and all following characters).  If there are no file
   *     extensions, the path is unchanged.
   *   3. Append the remainder of the string to the end of the file path.
   * 
   */
  secondaryFiles?: undefined | Internal.SecondaryFileSchema | Array<Internal.SecondaryFileSchema>

  /**
   * Only valid when `type: File` or is an array of `items: File`.
   * 
   * A value of `true` indicates that the file is read or written
   * sequentially without seeking.  An implementation may use this flag to
   * indicate whether it is valid to stream file contents using a named
   * pipe.  Default: `false`.
   * 
   */
  streamable?: undefined | boolean

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>

  /**
   * Only valid when `type: File` or is an array of `items: File`.
   * 
   * This is the file format that will be assigned to the output
   * File object.
   * 
   */
  format?: undefined | string

  /**
   * Specifies one or more names of an output from a workflow step (in the form 
   * `step_name/output_name` with a `/` separator`), or a workflow input name,
   * that supply their value(s) to the output parameter.
   * the output parameter.  It is valid to reference workflow level inputs
   * here.
   * 
   */
  outputSource?: undefined | string | Array<string>

  /**
   * The method to use to merge multiple sources into a single array.
   * If not specified, the default method is "merge_nested".
   * 
   */
  linkMerge?: undefined | Internal.LinkMergeMethod

  /**
   * The method to use to choose non-null elements among multiple sources.
   * 
   */
  pickValue?: undefined | Internal.PickValueMethod

  /**
   * Specify valid types of data that may be assigned to this parameter.
   * 
   */
  type: Internal.CWLType | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema | string | Array<Internal.CWLType | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema | string>
}