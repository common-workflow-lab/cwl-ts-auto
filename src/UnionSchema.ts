
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
 * Auto-generated class implementation for https://w3id.org/cwl/salad#UnionSchema
 */
export class UnionSchema extends Saveable implements Internal.UnionSchemaProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * Defines the type of the union elements.
   */
  names: Internal.PrimitiveType | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Internal.MapSchema | Internal.UnionSchema | string | Array<Internal.PrimitiveType | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Internal.MapSchema | Internal.UnionSchema | string>

  /**
   * Must be `union`
   */
  type: Internal.Union_name


  constructor ({loadingOptions, extensionFields, names, type} : {loadingOptions?: LoadingOptions} & Internal.UnionSchemaProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.names = names
    this.type = type
  }

  /**
   * Used to construct instances of {@link UnionSchema }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link UnionSchema }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let names
    try {
      names = await loadField(_doc.names, LoaderInstances.uriunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrMapSchemaLoaderOrUnionSchemaLoaderOrstrtypeOrarrayOfunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrMapSchemaLoaderOrUnionSchemaLoaderOrstrtypeFalseTrue2None,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `names` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let type
    try {
      type = await loadField(_doc.type, LoaderInstances.typedslUnion_nameLoader2,
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

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!UnionSchema.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`names\`,\`type\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'UnionSchema'", __errors)
    }

    const schema = new UnionSchema({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      names: names,
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

    if (this.names != null) {
      const u = saveRelativeUri(this.names, baseUrl, false,
                                relativeUris, 2)
      if (u != null) {
        r.names = u
      }
    }
                
    if (this.type != null) {
      r.type = save(this.type, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['names','type'])
}
