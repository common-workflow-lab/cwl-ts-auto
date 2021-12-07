import {
  _AnyLoader,
  _ExpressionLoader,
  _PrimitiveLoader,
  _UnionLoader,
  _RecordLoader,
  _URILoader,
  _ArrayLoader,
  _EnumLoader,
  _IdMapLoader,
  _TypeDSLLoader,
  _SecondaryDSLLoader,
  TypeGuards,
  SimpleSchema
} from './internal'

export const strtype = new _PrimitiveLoader(TypeGuards.String)
export const inttype = new _PrimitiveLoader(TypeGuards.Int)
export const floattype = new _PrimitiveLoader(TypeGuards.Float)
export const booltype = new _PrimitiveLoader(TypeGuards.Bool)
export const undefinedtype = new _PrimitiveLoader(TypeGuards.Undefined)
export const anyType = new _AnyLoader()
export const SimpleSchemaLoader = new _RecordLoader(SimpleSchema.fromDoc)
export const unionOfundefinedtypeOrstrtype = new _UnionLoader([undefinedtype, strtype])
export const unionOfSimpleSchemaLoader = new _UnionLoader([SimpleSchemaLoader])
export const arrayOfunionOfSimpleSchemaLoader = new _ArrayLoader([unionOfSimpleSchemaLoader])
export const unionOfSimpleSchemaLoaderOrarrayOfunionOfSimpleSchemaLoader = new _UnionLoader([SimpleSchemaLoader, arrayOfunionOfSimpleSchemaLoader])
