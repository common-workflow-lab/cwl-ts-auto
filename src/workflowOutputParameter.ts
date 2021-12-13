
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
} from './util/internal'
import { v4 as uuidv4 } from 'uuid'
import * as Internal from './util/internal'


/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#WorkflowOutputParameter
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
export class WorkflowOutputParameter extends Saveable implements Internal.OutputParameter {
  loadingOptions: LoadingOptions
  extensionFields?: Dictionary<any>

  /**
   * The unique identifier for this object.
   */
  id: undefined | string

  /**
   * A short, human-readable label of this object.
   */
  label: undefined | string

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
  secondaryFiles: undefined | Internal.SecondaryFileSchema | Array<Internal.SecondaryFileSchema>

  /**
   * Only valid when `type: File` or is an array of `items: File`.
   * 
   * A value of `true` indicates that the file is read or written
   * sequentially without seeking.  An implementation may use this flag to
   * indicate whether it is valid to stream file contents using a named
   * pipe.  Default: `false`.
   * 
   */
  streamable: undefined | boolean

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc: undefined | string | Array<string>

  /**
   * Only valid when `type: File` or is an array of `items: File`.
   * 
   * This is the file format that will be assigned to the output
   * File object.
   * 
   */
  format: undefined | string

  /**
   * Specifies one or more workflow parameters that supply the value of to
   * the output parameter.
   * 
   */
  outputSource: undefined | string | Array<string>

  /**
   * The method to use to merge multiple sources into a single array.
   * If not specified, the default method is "merge_nested".
   * 
   */
  linkMerge: undefined | string

  /**
   * The method to use to choose non-null elements among multiple sources.
   * 
   */
  pickValue: undefined | string

  /**
   * Specify valid types of data that may be assigned to this parameter.
   * 
   */
  type: string | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema | Array<string | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema>


  constructor ({extensionFields, loadingOptions, id, label, secondaryFiles, streamable, doc, format, outputSource, linkMerge, pickValue, type} : {extensionFields?: Dictionary<any>, loadingOptions?: LoadingOptions,  label: undefined | string, secondaryFiles: undefined | Internal.SecondaryFileSchema | Array<Internal.SecondaryFileSchema>, streamable: undefined | boolean, doc: undefined | string | Array<string>, id: undefined | string, format: undefined | string, outputSource: undefined | string | Array<string>, linkMerge: undefined | string, pickValue: undefined | string, type: string | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema | Array<string | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema>,}) {
    super()
    this.extensionFields = extensionFields ?? {}
    this.loadingOptions = loadingOptions ?? new LoadingOptions({})
    this.id = id
    this.label = label
    this.secondaryFiles = secondaryFiles
    this.streamable = streamable
    this.doc = doc
    this.format = format
    this.outputSource = outputSource
    this.linkMerge = linkMerge
    this.pickValue = pickValue
    this.type = type
  }

  /**
   * Used to construct instances of {@link WorkflowOutputParameter }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link WorkflowOutputParameter }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const errors: ValidationException[] = []
            
    let id
    if ('id' in _doc) {
      try {
        id = await loadField(_doc.id, LoaderInstances.uriunionOfundefinedtypeOrstrtypeTrueFalseNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `id` field is not valid because: ', [e])
          )
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
          errors.push(
            new ValidationException('the `label` field is not valid because: ', [e])
          )
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
          errors.push(
            new ValidationException('the `secondaryFiles` field is not valid because: ', [e])
          )
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
          errors.push(
            new ValidationException('the `streamable` field is not valid because: ', [e])
          )
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
          errors.push(
            new ValidationException('the `doc` field is not valid because: ', [e])
          )
        }
      }
    }

    let format
    if ('format' in _doc) {
      try {
        format = await loadField(_doc.format, LoaderInstances.uriunionOfundefinedtypeOrstrtypeOrExpressionLoaderTrueFalseNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `format` field is not valid because: ', [e])
          )
        }
      }
    }

    let outputSource
    if ('outputSource' in _doc) {
      try {
        outputSource = await loadField(_doc.outputSource, LoaderInstances.uriunionOfundefinedtypeOrstrtypeOrarrayOfstrtypeFalseFalse0,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `outputSource` field is not valid because: ', [e])
          )
        }
      }
    }

    let linkMerge
    if ('linkMerge' in _doc) {
      try {
        linkMerge = await loadField(_doc.linkMerge, LoaderInstances.unionOfundefinedtypeOrLinkMergeMethodLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `linkMerge` field is not valid because: ', [e])
          )
        }
      }
    }

    let pickValue
    if ('pickValue' in _doc) {
      try {
        pickValue = await loadField(_doc.pickValue, LoaderInstances.unionOfundefinedtypeOrPickValueMethodLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `pickValue` field is not valid because: ', [e])
          )
        }
      }
    }

    let type
    try {
      type = await loadField(_doc.type, LoaderInstances.typedslunionOfCWLTypeLoaderOrOutputRecordSchemaLoaderOrOutputEnumSchemaLoaderOrOutputArraySchemaLoaderOrstrtypeOrarrayOfunionOfCWLTypeLoaderOrOutputRecordSchemaLoaderOrOutputEnumSchemaLoaderOrOutputArraySchemaLoaderOrstrtype2,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        errors.push(
          new ValidationException('the `type` field is not valid because: ', [e])
        )
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!WorkflowOutputParameter.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`label\`,\`secondaryFiles\`,\`streamable\`,\`doc\`,\`id\`,\`format\`,\`outputSource\`,\`linkMerge\`,\`pickValue\`,\`type\``)
          )
          break
        }
      }
    }

    if (errors.length > 0) {
      throw new ValidationException("Trying 'WorkflowOutputParameter'", errors)
    }

    const schema = new WorkflowOutputParameter({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      label: label,
      secondaryFiles: secondaryFiles,
      streamable: streamable,
      doc: doc,
      id: id,
      format: format,
      outputSource: outputSource,
      linkMerge: linkMerge,
      pickValue: pickValue,
      type: type
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
                
    if (this.outputSource != null) {
      const u = saveRelativeUri(this.outputSource, this.id, false,
                                relativeUris, 0)
      if (u != null) {
        r.outputSource = u
      }
    }
                
    if (this.linkMerge != null) {
      r.linkMerge = save(this.linkMerge, false, this.id, relativeUris)
    }
                
    if (this.pickValue != null) {
      r.pickValue = save(this.pickValue, false, this.id, relativeUris)
    }
                
    if (this.type != null) {
      r.type = save(this.type, false, this.id, relativeUris)
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
            
  static attr: Set<string> = new Set(['label','secondaryFiles','streamable','doc','id','format','outputSource','linkMerge','pickValue','type'])
}
