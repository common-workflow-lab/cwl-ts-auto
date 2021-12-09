
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandInputRecordSchema
 */
export class CommandInputRecordSchema extends Saveable implements Internal.InputRecordSchema, Internal.CommandInputSchema, Internal.CommandLineBindable {
  loadingOptions: LoadingOptions
  extensionFields?: Dictionary<any>

  /**
   * The identifier for this type
   */
  name: undefined | string

  /**
   * Defines the fields of the record.
   */
  fields: undefined | Array<Internal.CommandInputRecordField>

  /**
   * Must be `record`
   */
  type: string

  /**
   * A short, human-readable label of this object.
   */
  label: undefined | string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc: undefined | string | Array<string>

  /**
   * Describes how to turn this object into command line arguments.
   */
  inputBinding: undefined | Internal.CommandLineBinding


  constructor ({extensionFields, loadingOptions, name, fields, type, label, doc, inputBinding} : {extensionFields?: Dictionary<any>, loadingOptions?: LoadingOptions,  fields: undefined | Array<Internal.CommandInputRecordField>, type: string, label: undefined | string, doc: undefined | string | Array<string>, name: undefined | string, inputBinding: undefined | Internal.CommandLineBinding,}) {
    super()
    this.extensionFields = extensionFields ?? {}
    this.loadingOptions = loadingOptions ?? new LoadingOptions({})
    this.name = name
    this.fields = fields
    this.type = type
    this.label = label
    this.doc = doc
    this.inputBinding = inputBinding
  }

  /**
   * Used to construct instances of {@link CommandInputRecordSchema }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link CommandInputRecordSchema }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const errors: ValidationException[] = []
            
    let name
    if ('name' in _doc) {
      try {
        name = await loadField(_doc.name, LoaderInstances.uriunionOfundefinedtypeOrstrtypeTrueFalseNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `name` field is not valid because: ', [e])
          )
        }
      }
    }

    const originalnameIsUndefined = (name === undefined)
    if (originalnameIsUndefined ) {
      if (docRoot != null) {
        name = docRoot
      } else {
        name = "_" + uuidv4()
      }
    } else {
      baseuri = name as string
    }
            
    let fields
    if ('fields' in _doc) {
      try {
        fields = await loadField(_doc.fields, LoaderInstances.idmapfieldsunionOfundefinedtypeOrarrayOfCommandInputRecordFieldLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `fields` field is not valid because: ', [e])
          )
        }
      }
    }

    let type
    try {
      type = await loadField(_doc.type, LoaderInstances.typedslenum_d9cba076fca539106791a4f46d198c7fcfbdb779Loader2,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        errors.push(
          new ValidationException('the `type` field is not valid because: ', [e])
        )
      }
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

    let inputBinding
    if ('inputBinding' in _doc) {
      try {
        inputBinding = await loadField(_doc.inputBinding, LoaderInstances.unionOfundefinedtypeOrCommandLineBindingLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(
            new ValidationException('the `inputBinding` field is not valid because: ', [e])
          )
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of _doc) {
      if (!this.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`fields\`,\`type\`,\`label\`,\`doc\`,\`name\`,\`inputBinding\``)
          )
          break
        }
      }
    }

    if (errors.length > 0) {
      throw new ValidationException("Trying 'CommandInputRecordSchema'", errors)
    }

    const schema = new CommandInputRecordSchema({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      fields: fields,
      type: type,
      label: label,
      doc: doc,
      name: name,
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
                
    if (this.fields != null) {
      r.fields = save(this.fields, false, this.name, relativeUris)
    }
                
    if (this.type != null) {
      r.type = save(this.type, false, this.name, relativeUris)
    }
                
    if (this.label != null) {
      r.label = save(this.label, false, this.name, relativeUris)
    }
                
    if (this.doc != null) {
      r.doc = save(this.doc, false, this.name, relativeUris)
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
            
  static attr: Set<string> = new Set(['fields','type','label','doc','name','inputBinding'])
}
