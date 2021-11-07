// TODO
/* eslint-disable */
interface Fetcher {

}

export interface LoadingOptions {
  fetcher: Fetcher
  fileUri: string
  namespaces: {[key: string]: string}
  schemas: {[key: string]: string}
  idx: {[key: string]: any}
  vocab: {[key: string]: string}
  rvocab: {[key: string]: string}
}
