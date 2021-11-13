import { simpleSchemaLoader } from './util/loaderInstances'
import { documentLoad } from './util/rootloader'
import * as yaml from 'js-yaml'
import * as fs from 'fs'
import { ValidationException } from './util/validationException'
import { LoadingOptions } from './util/loadingOptions'

try {
  const yamlFile = yaml.load(fs.readFileSync('./test.yaml', 'utf-8'))
  documentLoad(simpleSchemaLoader, yamlFile, '', new LoadingOptions({})).then((res) => console.log(res)).catch((err) => console.log(err))
} catch (e) {
  if (e instanceof ValidationException) {
    console.log(e.toString())
  }
}
