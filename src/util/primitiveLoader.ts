import { Loader, LoadingOptions, ValidationException } from './internal'

export class PrimitiveLoader implements Loader {
  tp: (val: any) => boolean

  constructor (tp: (val: any) => boolean) {
    this.tp = tp
  }

  // TODO: Better Typing?
  async load (doc: any, baseuri: string, loadingOptions: LoadingOptions): Promise<any> {
    if (!this.tp(doc)) {
      throw new ValidationException(`Expected a ${this.tp.name} but got ${(typeof doc)}`)
    }
    return doc
  }
}
