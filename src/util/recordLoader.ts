import { Loader } from './loader'
import { LoadingOptions } from './loadingOptions'
import Saveable from './saveable'

export class RecordLoader implements Loader {
  createrFunc: (doc: any, baseuri: string, loadingOptions: LoadingOptions) => Saveable
  constructor (createrFunc: (doc: any, baseuri: string, loadingOptions: LoadingOptions) => Saveable) {
    this.createrFunc = createrFunc
  }

  load (doc: any, baseuri: string, loadingOptions: LoadingOptions): Saveable {
    return this.createrFunc(doc, baseuri, loadingOptions)
  }
}
