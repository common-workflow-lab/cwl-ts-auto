
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#InputArraySchema
 */
export class InputArraySchema extends Saveable implements Internal.InputArraySchemaProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * The identifier for this type
   */
  name?: undefined | string

  /**
   * Defines the type of the array elements.
   */
  items: Internal.CWLType | Internal.InputRecordSchema | Internal.InputEnumSchema | Internal.InputArraySchema | string | Array<Internal.CWLType | Internal.InputRecordSchema | Internal.InputEnumSchema | Internal.InputArraySchema | string>

  /**
   * Must be `array`
   */
  type: Internal.Array_name

  /**
   * A short, human-readable label of this object.
   */
  label?: undefined | string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>


  constructor ({loadingOptions, extensionFields, name, items, type, label, doc} : {loadingOptions?: LoadingOptions} & Internal.InputArraySchemaProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.name = name
    this.items = items
    this.type = type
    this.label = label
    this.doc = doc
  }

  /**
   * Used to construct instances of {@link InputArraySchema }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link InputArraySchema }
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
        name = await loadField(_doc.name, LoaderInstances.uriunionOfundefinedtypeOrstrtypeTrueFalseNoneNone,
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
        name = "_" + uuidv4()
      }
    } else {
      baseuri = name as string
    }
            
    let items
    try {
      items = await loadField(_doc.items, LoaderInstances.uriunionOfCWLTypeLoaderOrInputRecordSchemaLoaderOrInputEnumSchemaLoaderOrInputArraySchemaLoaderOrstrtypeOrarrayOfunionOfCWLTypeLoaderOrInputRecordSchemaLoaderOrInputEnumSchemaLoaderOrInputArraySchemaLoaderOrstrtypeFalseTrue2None,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `items` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let type
    try {
      type = await loadField(_doc.type, LoaderInstances.typedslArray_nameLoader2,
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

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!InputArraySchema.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`items\`,\`type\`,\`label\`,\`doc\`,\`name\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'InputArraySchema'", __errors)
    }

    const schema = new InputArraySchema({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      items: items,
      type: type,
      label: label,
      doc: doc,
      name: name
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
                
    if (this.items != null) {
      const u = saveRelativeUri(this.items, this.name, false,
                                relativeUris, 2)
      if (u != null) {
        r.items = u
      }
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
            
  static attr: Set<string> = new Set(['items','type','label','doc','name'])
}
