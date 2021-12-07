
import {
  Dictionary,
  expandUrl,
  loadField,
  LoaderInstances,
  LoadingOptions,
  Saveable,
  ValidationException
} from './util/internal'
import { v4 as uuidv4 } from 'uuid'
import * as Internal from './util/internal'

export class SimpleSchema extends Saveable {
  loadingOptions: LoadingOptions
  extensionFields?: Dictionary<any>
  label: undefined | string

  constructor ({ extensionFields, loadingOptions, label }: {extensionFields?: Dictionary<any>, loadingOptions?: LoadingOptions, label: undefined | string }) {
    super()
    this.extensionFields = extensionFields ?? {}
    this.loadingOptions = loadingOptions ?? new LoadingOptions({})
    this.label = label
  }

  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const errors: ValidationException[] = []

    let label
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

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of _doc) {
      if (!this.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`label\``)
          )
          break
        }
      }
    }

    if (errors.length > 0) {
      throw new ValidationException("Trying 'SimpleSchema'", errors)
    }

    const schema = new SimpleSchema({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      label: label
    })
    return schema
  }

  static attr: Set<string> = new Set(['label'])
}
