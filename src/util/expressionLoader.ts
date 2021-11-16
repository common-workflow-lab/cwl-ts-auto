import { Loader } from './loader'
import { LoadingOptions } from './loadingOptions'
import { ValidationException } from './validationException'

export class ExpressionLoader implements Loader {
  items: string[]

  constructor (items: string[]) {
    this.items = items
  }

  async load (doc: string, baseuri: string, loadingOptions: LoadingOptions): Promise<any> {
    if (typeof doc !== 'string') {
      throw new ValidationException('Expected a str')
    }
    return doc
  }
}
