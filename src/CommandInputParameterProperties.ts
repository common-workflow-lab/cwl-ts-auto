
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#CommandInputParameter
 *
 * An input parameter for a CommandLineTool.
 */
export interface CommandInputParameterProperties extends Internal.InputParameterProperties {
                    
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
   * This must be one or more IRIs of concept nodes
   * that represents file formats which are allowed as input to this
   * parameter, preferably defined within an ontology.  If no ontology is
   * available, file formats may be tested by exact match.
   * 
   */
  format?: undefined | string | Array<string>

  /**
   * Only valid when `type: File` or is an array of `items: File`.
   * 
   * If true, the file (or each file in the array) must be a UTF-8
   * text file 64 KiB or smaller, and the implementation must read
   * the entire contents of the file (or file array) and place it
   * in the `contents` field of the File object for use by
   * expressions.  If the size of the file is greater than 64 KiB,
   * the implementation must raise a fatal error.
   * 
   */
  loadContents?: undefined | boolean

  /**
   * Only valid when `type: Directory` or is an array of `items: Directory`.
   * 
   * Specify the desired behavior for loading the `listing` field of
   * a Directory object for use by expressions.
   * 
   * The order of precedence for loadListing is:
   * 
   *   1. `loadListing` on an individual parameter
   *   2. Inherited from `LoadListingRequirement`
   *   3. By default: `no_listing`
   * 
   */
  loadListing?: undefined | Internal.LoadListingEnum

  /**
   * The default value to use for this parameter if the parameter is missing
   * from the input object, or if the value of the parameter in the input
   * object is `null`.  Default values are applied before evaluating expressions
   * (e.g. dependent `valueFrom` fields).
   * 
   */
  default_?: undefined | any

  /**
   * Specify valid types of data that may be assigned to this parameter.
   * 
   */
  type: Internal.CWLType | Internal.stdin | Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema | string | Array<Internal.CWLType | Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema | string>

  /**
   * Describes how to turn the input parameters of a process into
   * command line arguments.
   * 
   */
  inputBinding?: undefined | Internal.CommandLineBinding
}