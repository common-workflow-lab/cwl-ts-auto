import { ValidationException, LoadingOptions, RecordSchema } from './util/internal'

try {
  // const yamlFile = yaml.load(fs.readFileSync('./test.yaml', 'utf-8'))
  // documentLoad(simpleSchemaLoader, yamlFile, '', new LoadingOptions({})).then((res) => console.log(res)).catch((err) => console.log(err)
  const doc = {
    type: 'record',
    fields: [{ name: 'hello', doc: 'Hello test case', type: 'string' }]
  }
  RecordSchema.fromDoc(doc, 'http://example.com', new LoadingOptions({})).then((val) => console.log((val as RecordSchema).fields)).catch((e) => console.log((e as ValidationException).toString()))
} catch (e) {
  if (e instanceof ValidationException) {
    console.log(e.toString())
  }
}
