import { Loader } from './loader'
import { LoadingOptions } from './loadingOptions'
import Saveable from './saveable'
import { ValidationException } from './validationException'

export class UnionLoader implements Loader {
  alternates: Loader[]

  constructor (alternates: Loader[]) {
    this.alternates = alternates
  }

  load (doc: any, baseuri: string, loadingOptions: LoadingOptions): Saveable {
    const errors = new Array<ValidationException>()
    for (const t of this.alternates) {
      try {
        return t.load(doc, baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          errors.push(new ValidationException('tried' + t.constructor.name + ' but', [e]))
        }
      }
    }
    throw new ValidationException('', errors).withBullet('-')
  }
}
