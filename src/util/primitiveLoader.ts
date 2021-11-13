import { Loader } from './loader'
import { ValidationException } from './validationException'

export class PrimitiveLoader implements Loader {
  tp: (val: any) => boolean
  constructor (tp: (val: any) => boolean) {
    this.tp = tp
  }
  // TODO: Better Typing?

  load (doc: any): any {
    if (!this.tp(doc)) {
      throw new ValidationException(`Expected a ${this.tp.name} but got ${(typeof doc)}`)
    }
    return doc
  }
}
