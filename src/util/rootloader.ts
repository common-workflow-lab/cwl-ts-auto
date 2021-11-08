import { LoadingOptions } from './loadingOptions'
import { pathToFileURL } from 'url'
import { resolve } from 'path'

export function loadDocument (doc: {[key: string]: string}, baseUri_: string, loadingOptions?: LoadingOptions): void {
  throw Error('Not Implemented')
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ensureBaseUri (baseUri?: string): string {
  if (baseUri === undefined) {
    return pathToFileURL(resolve('./')).toString() + '/'
  }

  return baseUri
}
