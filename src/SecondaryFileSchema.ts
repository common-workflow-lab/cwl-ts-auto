
import {
  Dictionary,
  expandUrl,
  loadField,
  LoaderInstances,
  LoadingOptions,
  Saveable,
  ValidationException,
  prefixUrl,
  save,
  saveRelativeUri
} from './util/Internal'
import { v4 as uuidv4 } from 'uuid'
import * as Internal from './util/Internal'


/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#SecondaryFileSchema
 *
 * Secondary files are specified using the following micro-DSL for secondary files:
 * 
 * * If the value is a string, it is transformed to an object with two fields
 *   `pattern` and `required`
 * * By default, the value of `required` is `null`
 *   (this indicates default behavior, which may be based on the context)
 * * If the value ends with a question mark `?` the question mark is
 *   stripped off and the value of the field `required` is set to `False`
 * * The remaining value is assigned to the field `pattern`
 * 
 * For implementation details and examples, please see
 * [this section](SchemaSalad.html#Domain_Specific_Language_for_secondary_files)
 * in the Schema Salad specification.
 * 
 */
export class SecondaryFileSchema extends Saveable implements Internal.SecondaryFileSchemaProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * Provides a pattern or expression specifying files or directories that
   * should be included alongside the primary file.
   * 
   * If the value is an expression, the value of `self` in the
   * expression must be the primary input or output File object to
   * which this binding applies.  The `basename`, `nameroot` and
   * `nameext` fields must be present in `self`.  For
   * `CommandLineTool` inputs the `location` field must also be
   * present.  For `CommandLineTool` outputs the `path` field must
   * also be present.  If secondary files were included on an input
   * File object as part of the Process invocation, they must also
   * be present in `secondaryFiles` on `self`.
   * 
   * The expression must return either: a filename string relative
   * to the path to the primary File, a File or Directory object
   * (`class: File` or `class: Directory`) with either `location`
   * (for inputs) or `path` (for outputs) and `basename` fields
   * set, or an array consisting of strings or File or Directory
   * objects as previously described.
   * 
   * It is legal to use `location` from a File or Directory object
   * passed in as input, including `location` from secondary files
   * on `self`.  If an expression returns a File object with the
   * same `location` but a different `basename` as a secondary file
   * that was passed in, the expression result takes precedence.
   * Setting the basename with an expression this way affects the
   * `path` where the secondary file will be staged to in the
   * CommandLineTool.
   * 
   * The expression may return "null" in which case there is no
   * secondary file from that expression.
   * 
   * To work on non-filename-preserving storage systems, portable
   * tool descriptions should treat `location` as an
   * [opaque identifier](#opaque-strings) and avoid constructing new
   * values from `location`, but should construct relative references
   * using `basename` or `nameroot` instead, or propagate `location`
   * from defined inputs.
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
  pattern: string

  /**
   * An implementation must not fail workflow execution if `required` is
   * set to `false` and the expected secondary file does not exist.
   * Default value for `required` field is `true` for secondary files on
   * input and `false` for secondary files on output.
   * 
   */
  required?: undefined | boolean | string


  constructor ({loadingOptions, extensionFields, pattern, required} : {loadingOptions?: LoadingOptions} & Internal.SecondaryFileSchemaProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.pattern = pattern
    this.required = required
  }

  /**
   * Used to construct instances of {@link SecondaryFileSchema }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link SecondaryFileSchema }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let pattern
    try {
      pattern = await loadField(_doc.pattern, LoaderInstances.unionOfstrtypeOrExpressionLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `pattern` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let required
    if ('required' in _doc) {
      try {
        required = await loadField(_doc.required, LoaderInstances.unionOfundefinedtypeOrbooltypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `required` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!SecondaryFileSchema.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`pattern\`,\`required\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'SecondaryFileSchema'", __errors)
    }

    const schema = new SecondaryFileSchema({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      pattern: pattern,
      required: required
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this.pattern != null) {
      r.pattern = save(this.pattern, false, baseUrl, relativeUris)
    }
                
    if (this.required != null) {
      r.required = save(this.required, false, baseUrl, relativeUris)
    }
                
    if (top) {
      if (this.loadingOptions.namespaces != null) {
        r.$namespaces = this.loadingOptions.namespaces
      }
      if (this.loadingOptions.schemas != null) {
        r.$schemas = this.loadingOptions.schemas
      }
    }
    return r
  }
            
  static attr: Set<string> = new Set(['pattern','required'])
}
