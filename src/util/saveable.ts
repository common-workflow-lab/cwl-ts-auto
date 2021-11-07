
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default abstract class Saveable {
  static fromDoc (doc: any): Saveable {
    throw new Error('Not Implemented')
  }
}
