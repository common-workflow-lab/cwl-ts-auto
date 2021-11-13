import { expandUrl, loadField } from './util/loader'
import { unionOfNoneTypeOrStrtype } from './util/loaderInstances'
import { LoadingOptions } from './util/loadingOptions'
import Saveable from './util/saveable'
import { ValidationException } from './util/validationException'

export class Simple_schema extends Saveable {
  loadingOptions: LoadingOptions
  label?: string
  extensionFields?: Map<string, any>

  constructor (loadingOptions: LoadingOptions, label?: string, extensionFields?: Map<string, any>) {
    super()
    this.loadingOptions = loadingOptions
    this.label = label
    this.extensionFields = extensionFields
  }

  static async fromDoc (doc: any, baseuri: string, loadingOptions: LoadingOptions): Promise<Saveable> {
    const _doc = Object.assign({}, doc)

    const errors = new Array<ValidationException>()
    if ('label' in _doc) {
      try {
        var label: string | undefined = await loadField(_doc.label, unionOfNoneTypeOrStrtype, '', loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(new ValidationException('the `label` field is not valid because: ', [e]))
        }
      }
    }

    const extensionFields = new Map<string, any>()
    for (const [key, value] of _doc) {
      if (!this.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields.set(ex, value)
        } else {
          errors.push(new ValidationException(`invalid field ${key as string}, expected one of: "label"`))
          break
        }
      }
    }

    if (errors.length >= 1) {
      throw new ValidationException("Trying 'Simple_schema'", errors)
    }

    const schema = new Simple_schema(loadingOptions, label, extensionFields)
    return schema
  }

  static attr: Set<string> = new Set(['label'])
}
