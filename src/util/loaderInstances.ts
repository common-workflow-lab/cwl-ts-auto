import { Simple_schema } from '../simpleSchema'
import { PrimitiveLoader } from './primitiveLoader'
import { RecordLoader } from './recordLoader'
import { UnionLoader } from './UnionLoader'
import * as Typeguards from './typeguards'

export const strtype = new PrimitiveLoader(Typeguards.String)
export const NoneType = new PrimitiveLoader(Typeguards.Undefined)
export const unionOfNoneTypeOrStrtype = new UnionLoader([strtype, NoneType])
export const simpleSchemaLoader = new RecordLoader(Simple_schema.fromDoc)
