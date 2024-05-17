
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#WorkflowInputParameter
 */
export class WorkflowInputParameter extends Saveable implements Internal.WorkflowInputParameterProperties {
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
  type: Internal.CWLType | Internal.InputRecordSchema | Internal.InputEnumSchema | Internal.InputArraySchema | string | Array<Internal.CWLType | Internal.InputRecordSchema | Internal.InputEnumSchema | Internal.InputArraySchema | string>

  /**
   * Deprecated.  Preserved for v1.0 backwards compatibility.  Will be removed in
   * CWL v2.0.  Use `WorkflowInputParameter.loadContents` instead.
   * 
   */
  inputBinding?: undefined | Internal.InputBinding


  constructor ({loadingOptions, extensionFields, id, label, secondaryFiles, streamable, doc, format, loadContents, loadListing, default_, type, inputBinding} : {loadingOptions?: LoadingOptions} & Internal.WorkflowInputParameterProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.id = id
    this.label = label
    this.secondaryFiles = secondaryFiles
    this.streamable = streamable
    this.doc = doc
    this.format = format
    this.loadContents = loadContents
    this.loadListing = loadListing
    this.default_ = default_
    this.type = type
    this.inputBinding = inputBinding
  }

  /**
   * Used to construct instances of {@link WorkflowInputParameter }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link WorkflowInputParameter }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let id
    if ('id' in _doc) {
      try {
        id = await loadField(_doc.id, LoaderInstances.uriunionOfundefinedtypeOrstrtypeTrueFalseNoneNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `id` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const originalidIsUndefined = (id === undefined)
    if (originalidIsUndefined ) {
      if (docRoot != null) {
        id = docRoot
      } else {
        id = "_" + uuidv4()
      }
    } else {
      baseuri = id as string
    }
            
    let label
    if ('label' in _doc) {
      try {
        label = await loadField(_doc.label, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `label` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let secondaryFiles
    if ('secondaryFiles' in _doc) {
      try {
        secondaryFiles = await loadField(_doc.secondaryFiles, LoaderInstances.secondaryfilesdslunionOfundefinedtypeOrSecondaryFileSchemaLoaderOrarrayOfSecondaryFileSchemaLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `secondaryFiles` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let streamable
    if ('streamable' in _doc) {
      try {
        streamable = await loadField(_doc.streamable, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `streamable` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let doc
    if ('doc' in _doc) {
      try {
        doc = await loadField(_doc.doc, LoaderInstances.unionOfundefinedtypeOrstrtypeOrarrayOfstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `doc` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let format
    if ('format' in _doc) {
      try {
        format = await loadField(_doc.format, LoaderInstances.uriunionOfundefinedtypeOrstrtypeOrarrayOfstrtypeOrExpressionLoaderTrueFalseNoneTrue,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `format` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let loadContents
    if ('loadContents' in _doc) {
      try {
        loadContents = await loadField(_doc.loadContents, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `loadContents` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let loadListing
    if ('loadListing' in _doc) {
      try {
        loadListing = await loadField(_doc.loadListing, LoaderInstances.unionOfundefinedtypeOrLoadListingEnumLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `loadListing` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let default_
    if ('default' in _doc) {
      try {
        default_ = await loadField(_doc.default, LoaderInstances.unionOfundefinedtypeOrCWLObjectTypeLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `default` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let type
    try {
      type = await loadField(_doc.type, LoaderInstances.typedslunionOfCWLTypeLoaderOrInputRecordSchemaLoaderOrInputEnumSchemaLoaderOrInputArraySchemaLoaderOrstrtypeOrarrayOfunionOfCWLTypeLoaderOrInputRecordSchemaLoaderOrInputEnumSchemaLoaderOrInputArraySchemaLoaderOrstrtype2,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `type` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let inputBinding
    if ('inputBinding' in _doc) {
      try {
        inputBinding = await loadField(_doc.inputBinding, LoaderInstances.unionOfundefinedtypeOrInputBindingLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `inputBinding` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!WorkflowInputParameter.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`label\`,\`secondaryFiles\`,\`streamable\`,\`doc\`,\`id\`,\`format\`,\`loadContents\`,\`loadListing\`,\`default\`,\`type\`,\`inputBinding\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'WorkflowInputParameter'", __errors)
    }

    const schema = new WorkflowInputParameter({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      label: label,
      secondaryFiles: secondaryFiles,
      streamable: streamable,
      doc: doc,
      id: id,
      format: format,
      loadContents: loadContents,
      loadListing: loadListing,
      default_: default_,
      type: type,
      inputBinding: inputBinding
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this.id != null) {
      const u = saveRelativeUri(this.id, baseUrl, true,
                                relativeUris, undefined)
      if (u != null) {
        r.id = u
      }
    }
                
    if (this.label != null) {
      r.label = save(this.label, false, this.id, relativeUris)
    }
                
    if (this.secondaryFiles != null) {
      r.secondaryFiles = save(this.secondaryFiles, false, this.id, relativeUris)
    }
                
    if (this.streamable != null) {
      r.streamable = save(this.streamable, false, this.id, relativeUris)
    }
                
    if (this.doc != null) {
      r.doc = save(this.doc, false, this.id, relativeUris)
    }
                
    if (this.format != null) {
      const u = saveRelativeUri(this.format, this.id, true,
                                relativeUris, undefined)
      if (u != null) {
        r.format = u
      }
    }
                
    if (this.loadContents != null) {
      r.loadContents = save(this.loadContents, false, this.id, relativeUris)
    }
                
    if (this.loadListing != null) {
      r.loadListing = save(this.loadListing, false, this.id, relativeUris)
    }
                
    if (this.default_ != null) {
      r.default = save(this.default_, false, this.id, relativeUris)
    }
                
    if (this.type != null) {
      r.type = save(this.type, false, this.id, relativeUris)
    }
                
    if (this.inputBinding != null) {
      r.inputBinding = save(this.inputBinding, false, this.id, relativeUris)
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
            
  static attr: Set<string> = new Set(['label','secondaryFiles','streamable','doc','id','format','loadContents','loadListing','default','type','inputBinding'])
}
