import { LoadingOptions } from './loadingOptions'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default abstract class Saveable {
  static async fromDoc (doc: any, baseuri: string, loadingOptions: LoadingOptions): Promise<Saveable> {
    throw new Error('Not Implemented')
  }
}
