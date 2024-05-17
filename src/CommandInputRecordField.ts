
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandInputRecordField
 */
export class CommandInputRecordField extends Saveable implements Internal.CommandInputRecordFieldProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * The name of the field
   * 
   */
  name: string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>

  /**
   * The field type
   * 
   */
  type: Internal.CWLType | Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema | string | Array<Internal.CWLType | Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema | string>

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
   * Describes how to turn this object into command line arguments.
   */
  inputBinding?: undefined | Internal.CommandLineBinding


  constructor ({loadingOptions, extensionFields, name, doc, type, label, secondaryFiles, streamable, format, loadContents, loadListing, inputBinding} : {loadingOptions?: LoadingOptions} & Internal.CommandInputRecordFieldProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.name = name
    this.doc = doc
    this.type = type
    this.label = label
    this.secondaryFiles = secondaryFiles
    this.streamable = streamable
    this.format = format
    this.loadContents = loadContents
    this.loadListing = loadListing
    this.inputBinding = inputBinding
  }

  /**
   * Used to construct instances of {@link CommandInputRecordField }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link CommandInputRecordField }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let name
    if ('name' in _doc) {
      try {
        name = await loadField(_doc.name, LoaderInstances.uristrtypeTrueFalseNoneNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `name` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const originalnameIsUndefined = (name === undefined)
    if (originalnameIsUndefined ) {
      if (docRoot != null) {
        name = docRoot
      } else {
        throw new ValidationException("Missing name")
      }
    } else {
      baseuri = name as string
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

    let type
    try {
      type = await loadField(_doc.type, LoaderInstances.typedslunionOfCWLTypeLoaderOrCommandInputRecordSchemaLoaderOrCommandInputEnumSchemaLoaderOrCommandInputArraySchemaLoaderOrstrtypeOrarrayOfunionOfCWLTypeLoaderOrCommandInputRecordSchemaLoaderOrCommandInputEnumSchemaLoaderOrCommandInputArraySchemaLoaderOrstrtype2,
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

    let inputBinding
    if ('inputBinding' in _doc) {
      try {
        inputBinding = await loadField(_doc.inputBinding, LoaderInstances.unionOfundefinedtypeOrCommandLineBindingLoader,
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
      if (!CommandInputRecordField.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`doc\`,\`name\`,\`type\`,\`label\`,\`secondaryFiles\`,\`streamable\`,\`format\`,\`loadContents\`,\`loadListing\`,\`inputBinding\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'CommandInputRecordField'", __errors)
    }

    const schema = new CommandInputRecordField({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      doc: doc,
      name: name,
      type: type,
      label: label,
      secondaryFiles: secondaryFiles,
      streamable: streamable,
      format: format,
      loadContents: loadContents,
      loadListing: loadListing,
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

    if (this.name != null) {
      const u = saveRelativeUri(this.name, baseUrl, true,
                                relativeUris, undefined)
      if (u != null) {
        r.name = u
      }
    }
                
    if (this.doc != null) {
      r.doc = save(this.doc, false, this.name, relativeUris)
    }
                
    if (this.type != null) {
      r.type = save(this.type, false, this.name, relativeUris)
    }
                
    if (this.label != null) {
      r.label = save(this.label, false, this.name, relativeUris)
    }
                
    if (this.secondaryFiles != null) {
      r.secondaryFiles = save(this.secondaryFiles, false, this.name, relativeUris)
    }
                
    if (this.streamable != null) {
      r.streamable = save(this.streamable, false, this.name, relativeUris)
    }
                
    if (this.format != null) {
      const u = saveRelativeUri(this.format, this.name, true,
                                relativeUris, undefined)
      if (u != null) {
        r.format = u
      }
    }
                
    if (this.loadContents != null) {
      r.loadContents = save(this.loadContents, false, this.name, relativeUris)
    }
                
    if (this.loadListing != null) {
      r.loadListing = save(this.loadListing, false, this.name, relativeUris)
    }
                
    if (this.inputBinding != null) {
      r.inputBinding = save(this.inputBinding, false, this.name, relativeUris)
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
            
  static attr: Set<string> = new Set(['doc','name','type','label','secondaryFiles','streamable','format','loadContents','loadListing','inputBinding'])
}
