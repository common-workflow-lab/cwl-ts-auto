import { LoadingOptions } from './loadingOptions'

export interface Loader {
  load: (doc: any, baseuri: string, loadingOptions: LoadingOptions) => any
}

export function loadField (val: any, fieldType: Loader, baseuri: string, loadingOptions: LoadingOptions): any {
  // TODO: $import/include (instance of mutablemapping)
  return fieldType.load(val, baseuri, loadingOptions)
}

/*
console.log(simple_schema_loader.load({ label: 'test' })) // prints simple_schema { label: 'test' }
*/
