import { Loader } from './loader'
import { LoadingOptions } from './loadingOptions'
import Saveable from './saveable'

export class RecordLoader implements Loader {
  createrFunc: (doc: any, baseuri: string, loadingOptions: LoadingOptions) => Promise<Saveable>
  constructor (createrFunc: (doc: any, baseuri: string, loadingOptions: LoadingOptions) => Promise<Saveable>) {
    this.createrFunc = createrFunc
  }

  // TODO check if doc is Dict

  async load (doc: any, baseuri: string, loadingOptions: LoadingOptions): Promise<Saveable> {
    return await this.createrFunc(doc, baseuri, loadingOptions)
  }
}
