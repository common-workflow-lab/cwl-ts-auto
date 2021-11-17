import { Dictionary, expandUrl, loadField, typeDSLenumd062602be0b4b8fd33e69e29a841317b6ab665bcLoader2, UriUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtypeOrArrayOfUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtypeFalseTrue2, LoadingOptions, Saveable, ValidationException } from './util/internal'

export class ArraySchema extends Saveable {
  items?: any
  type: any
  extensionFields?: Dictionary<any>
  loadingOptions?: LoadingOptions

  constructor (type: any, items?: any, extensionFields?: Dictionary<any>, loadingOptions?: LoadingOptions) {
    super()
    this.extensionFields = extensionFields ?? {}
    this.loadingOptions = loadingOptions ?? new LoadingOptions({})
    this.items = items
    this.type = type
  }

  static override async fromDoc (doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, doc)
    const errors: ValidationException[] = []
    let items
    try {
      items = await loadField(_doc.items, UriUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtypeOrArrayOfUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtypeFalseTrue2, baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        errors.push(new ValidationException('the `items` field is not valid because: ', [e]))
      }
    }

    let type
    try {
      type = await loadField(_doc.type, typeDSLenumd062602be0b4b8fd33e69e29a841317b6ab665bcLoader2, baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        errors.push(new ValidationException('the `type` field is not valid because: ', [e]))
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of _doc) {
      if (!this.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          errors.push(new ValidationException(`invalid field ${key as string}, expected one of: \`items\`, \`type\``))
          break
        }
      }
    }

    if (errors.length > 0) {
      throw new ValidationException("Trying 'ArraySchema'", errors)
    }

    const schema = new ArraySchema(type, items, extensionFields, loadingOptions)
    return schema
  }

  static attr: Set<string> = new Set(['items', 'type'])
}
