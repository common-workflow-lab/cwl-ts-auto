import { Dictionary, Documented, expandUrl, loadField, LoadingOptions, Saveable, ValidationException, LoaderInstances } from './util/internal'

export class RecordField extends Documented {
  name: any
  type: any
  doc?: any
  extensionFields?: Dictionary<any>
  loadingOptions?: LoadingOptions

  constructor (name: any, type: any, doc?: any, extensionFields?: Dictionary<any>, loadingOptions?: LoadingOptions) {
    super()
    this.name = name
    this.type = type
    this.doc = doc
    this.extensionFields = extensionFields ?? {}
    this.loadingOptions = loadingOptions ?? new LoadingOptions({})
  }

  static override async fromDoc (doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, doc)
    const errors: ValidationException[] = []
    if ('name' in _doc) {
      try {
        var name: string|undefined = await loadField(_doc.name, LoaderInstances.uriStrtypeTrueFalseNone, baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(new ValidationException('the `name` field is not valid because: ', [e]))
        }
      }
    }

    const originalNameIsUndefined = (name === undefined)
    if (originalNameIsUndefined) {
      if (docRoot != null) {
        name = docRoot
      } else {
        throw new ValidationException('Missing name')
      }
    } else {
      baseuri = name as string
    }

    if ('doc' in _doc) {
      try {
        doc = await loadField(_doc.doc, LoaderInstances.unionOfNoneTypeOrStrTypeOrArrayOfStrType, baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(new ValidationException('the `doc` field is not valid because:', [e]))
        }
      }
    } else {
      doc = undefined
    }
    let type
    try {
      type = await loadField(_doc.type, LoaderInstances.typedslUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtypeOrArrayOfUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtype2, baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        errors.push(new ValidationException('The `type` field is not valid because: ', [e]))
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of _doc) {
      if (!this.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          errors.push(new ValidationException(`invalid field ${key as string}, expected one of: \`doc\`, \`name\`, \`type\``))
          break
        }
      }
    }

    if (errors.length > 0) {
      throw new ValidationException("Trying 'RecordField'", errors)
    }

    const schema = new RecordField(name, type, doc, extensionFields, loadingOptions)
    return schema
  }

  static attr: Set<string> = new Set(['doc', 'name', 'type'])
}
