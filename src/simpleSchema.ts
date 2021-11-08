import { loadField } from './util/loader'
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

  static fromDoc (doc: any, baseuri: string, loadingOptions: LoadingOptions): Saveable {
    // TODO: Copy doc, hasattr doc, lc
    const errors = new Array<ValidationException>()
    if ('label' in doc) {
      try {
        var label: string | undefined = loadField(doc.label, unionOfNoneTypeOrStrtype, '', loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(new ValidationException('the `label` field is not valid because: ', [e]))
        }
      }
    }

    const extensionFields = new Map<string, any>()
    for (const [key, value] of doc.values()) {
      if (!this.attr.has(key)) {
        if ((key as string).includes(':')) {
          // Todo: expand url
          const ex = ''
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
