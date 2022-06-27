
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#CommandLineBinding
 *
 * 
 * When listed under `inputBinding` in the input schema, the term
 * "value" refers to the the corresponding value in the input object.  For
 * binding objects listed in `CommandLineTool.arguments`, the term "value"
 * refers to the effective value after evaluating `valueFrom`.
 * 
 * The binding behavior when building the command line depends on the data
 * type of the value.  If there is a mismatch between the type described by
 * the input schema and the effective value, such as resulting from an
 * expression evaluation, an implementation must use the data type of the
 * effective value.
 * 
 *   - **string**: Add `prefix` and the string to the command line.
 * 
 *   - **number**: Add `prefix` and decimal representation to command line.
 * 
 *   - **boolean**: If true, add `prefix` to the command line.  If false, add
 *       nothing.
 * 
 *   - **File**: Add `prefix` and the value of
 *     [`File.path`](#File) to the command line.
 * 
 *   - **Directory**: Add `prefix` and the value of
 *     [`Directory.path`](#Directory) to the command line.
 * 
 *   - **array**: If `itemSeparator` is specified, add `prefix` and the join
 *       the array into a single string with `itemSeparator` separating the
 *       items.  Otherwise first add `prefix`, then recursively process
 *       individual elements.
 *       If the array is empty, it does not add anything to command line.
 * 
 *   - **object**: Add `prefix` only, and recursively add object fields for
 *       which `inputBinding` is specified.
 * 
 *   - **null**: Add nothing.
 * 
 */
export interface CommandLineBindingProperties extends Internal.InputBindingProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Use of `loadContents` in `InputBinding` is deprecated.
   * Preserved for v1.0 backwards compatibility.  Will be removed in
   * CWL v2.0.  Use `InputParameter.loadContents` instead.
   * 
   */
  loadContents?: undefined | boolean

  /**
   * The sorting key.  Default position is 0. If a [CWL Parameter Reference](#Parameter_references)
   * or [CWL Expression](#Expressions_(Optional)) is used and if the
   * inputBinding is associated with an input parameter, then the value of
   * `self` will be the value of the input parameter.  Input parameter
   * defaults (as specified by the `InputParameter.default` field) must be
   * applied before evaluating the expression. Expressions must return a
   * single value of type int or a null.
   * 
   */
  position?: undefined | number | string

  /**
   * Command line prefix to add before the value.
   */
  prefix?: undefined | string

  /**
   * If true (default), then the prefix and value must be added as separate
   * command line arguments; if false, prefix and value must be concatenated
   * into a single command line argument.
   * 
   */
  separate?: undefined | boolean

  /**
   * Join the array elements into a single string with the elements
   * separated by by `itemSeparator`.
   * 
   */
  itemSeparator?: undefined | string

  /**
   * If `valueFrom` is a constant string value, use this as the value and
   * apply the binding rules above.
   * 
   * If `valueFrom` is an expression, evaluate the expression to yield the
   * actual value to use to build the command line and apply the binding
   * rules above.  If the inputBinding is associated with an input
   * parameter, the value of `self` in the expression will be the value of
   * the input parameter.  Input parameter defaults (as specified by the
   * `InputParameter.default` field) must be applied before evaluating the
   * expression.
   * 
   * If the value of the associated input parameter is `null`, `valueFrom` is
   * not evaluated and nothing is added to the command line.
   * 
   * When a binding is part of the `CommandLineTool.arguments` field,
   * the `valueFrom` field is required.
   * 
   */
  valueFrom?: undefined | string

  /**
   * If `ShellCommandRequirement` is in the requirements for the current command,
   * this controls whether the value is quoted on the command line (default is true).
   * Use `shellQuote: false` to inject metacharacters for operations such as pipes.
   * 
   * If `shellQuote` is true or not provided, the implementation must not
   * permit interpretation of any shell metacharacters or directives.
   * 
   */
  shellQuote?: undefined | boolean
}