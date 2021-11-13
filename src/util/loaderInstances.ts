import { PrimitiveLoader } from './primitiveLoader'
import { UnionLoader } from './UnionLoader'
import * as Typeguards from './typeguards'
import { Simple_schema } from '../simpleSchema'
import { RecordLoader } from './recordLoader'

export const strtype = new PrimitiveLoader(Typeguards.String)
export const NoneType = new PrimitiveLoader(Typeguards.Undefined)
export const unionOfNoneTypeOrStrtype = new UnionLoader([strtype, NoneType])
export const simpleSchemaLoader = new RecordLoader(Simple_schema.fromDoc)
