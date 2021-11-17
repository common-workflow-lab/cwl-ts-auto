import { Dictionary, expandUrl, loadField, typeDSLEnumd961d79c225752b9fadb617367615ab176b47d77Loader2, uriArrayOfStrTypeTrueFalseNone, LoadingOptions, Saveable, ValidationException } from './util/internal'

export class EnumSchema extends Saveable {
  symbols?: any
  type: any
  extensionFields?: Dictionary<any>
  loadingOptions?: LoadingOptions

  constructor (type: any, symbols?: any, extensionFields?: Dictionary<any>, loadingOptions?: LoadingOptions) {
    super()
    this.extensionFields = extensionFields ?? {}
    this.loadingOptions = loadingOptions ?? new LoadingOptions({})
    this.symbols = symbols
    this.type = type
  }

  static override async fromDoc (doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, doc)
    const errors: ValidationException[] = []
    let symbols
    try {
      symbols = await loadField(_doc.symbols, uriArrayOfStrTypeTrueFalseNone, baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        errors.push(new ValidationException('the `symbols` field is not valid because: ', [e]))
      }
    }

    let type
    try {
      type = await loadField(_doc.type, typeDSLEnumd961d79c225752b9fadb617367615ab176b47d77Loader2, baseuri, loadingOptions)
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
          errors.push(new ValidationException(`invalid field ${key as string}, expected one of: \`symbols\`, \`type\``))
          break
        }
      }
    }

    if (errors.length >= 1) {
      throw new ValidationException("Trying 'EnumSchema'", errors)
    }

    const schema = new EnumSchema(type, symbols, extensionFields, loadingOptions)
    return schema
  }

  static attr: Set<string> = new Set(['symbols', 'type'])
}
