import { RVOCAB, VOCAB } from './vocabs'

export class LoadingOptions {
  // TODO: Fetcher
  idx: Map<string, Map<string, any>>
  fileUri?: string
  namespaces?: Map<string, string>
  schemas?: Map<string, string>
  copyFrom?: LoadingOptions
  originalDoc: any
  vocab: Map<string, string>
  rvocab: Map<string, string>

  constructor (fileUri?: string, namespaces?: Map<string, string>, schemas?: Map<string, string>, originalDoc?: any, copyFrom?: LoadingOptions) {
    this.idx = new Map<string, Map<string, any>>()
    this.fileUri = fileUri
    this.namespaces = namespaces
    this.schemas = schemas
    this.originalDoc = originalDoc

    if (copyFrom != null) {
      this.idx = new Map(copyFrom.idx)
      // TODO: Fetcher
      if (fileUri === undefined) {
        this.fileUri = copyFrom.fileUri
      }
      if (namespaces === undefined) {
        this.namespaces = copyFrom.namespaces === undefined ? undefined : new Map(copyFrom.namespaces)
      }
      if (schemas === undefined) {
        this.schemas = copyFrom.schemas === undefined ? undefined : new Map(copyFrom.schemas)
      }
    }

    this.vocab = VOCAB
    this.rvocab = RVOCAB

    if (namespaces !== undefined) {
      this.vocab = new Map(this.vocab)
      this.rvocab = new Map(this.rvocab)
      namespaces.forEach((v, k) => {
        this.vocab.set(k, v)
        this.rvocab.set(v, k)
      })
    }
  }
}
