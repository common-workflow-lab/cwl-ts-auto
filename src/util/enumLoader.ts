import { Loader } from './loader'
import { LoadingOptions } from './loadingOptions'
import { ValidationException } from './validationException'

export class EnumLoader implements Loader {
  symbols: string[]

  constructor (symbols: string[]) {
    this.symbols = symbols
  }

  async load (doc: string, baseuri: string, loadingOptions: LoadingOptions): Promise<any> {
    if (this.symbols.includes(doc)) {
      return doc
    } else {
      throw new ValidationException(`Expected one of ${this.symbols.toString()}`)
    }
  }
}
