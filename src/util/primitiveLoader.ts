import { Loader } from './loader'
import { ValidationException } from './validationException'

export class PrimitiveLoader implements Loader {
  tp: (num: any) => boolean
  constructor (tp: (num: any) => boolean) {
    this.tp = tp
  }

  load (doc: any): any {
    if (!this.tp(doc)) {
      throw new ValidationException(`Expected a ${this.tp.name} but got ${(typeof doc)}`)
    }
    return doc
  }
}
