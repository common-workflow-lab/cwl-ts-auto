import { PrimitiveLoader } from './primitiveLoader'
import { UnionLoader } from './UnionLoader'
import * as Typeguards from './typeguards'
import { Simple_schema } from '../simpleSchema'
import { RecordLoader } from './recordLoader'
import { URILoader } from './uriLoader'
import { ArrayLoader } from './arrayLoader'
import { EnumLoader } from './enumLoader'
import { RecordField } from '../recordField'
import { IdMapLoader } from './idMapLoader'
import { TypeDSLLoader } from './typeDSLLoader'
import { RecordSchema } from '../recordSchema'
import { EnumSchema } from '../enumSchema'
import { ArraySchema } from '../arraySchema'

export const strtype = new PrimitiveLoader(Typeguards.String)
export const PrimitiveTypeLoader = new EnumLoader(
  [
    'null',
    'boolean',
    'int',
    'long',
    'float',
    'double',
    'string'
  ]
)
export const arrayOfStrType = new ArrayLoader([strtype])
export const NoneType = new PrimitiveLoader(Typeguards.Undefined)
export const uriStrtypeTrueFalseNone = new URILoader(strtype, true, false, undefined)
export const uriArrayOfStrTypeTrueFalseNone = new URILoader(arrayOfStrType, true, false, undefined)
export const unionOfNoneTypeOrStrTypeOrArrayOfStrType = new UnionLoader([NoneType, strtype, arrayOfStrType])
export const unionOfNoneTypeOrStrtype = new UnionLoader([strtype, NoneType])
export const simpleSchemaLoader = new RecordLoader(Simple_schema.fromDoc)
export const RecordFieldLoader = new RecordLoader(RecordField.fromDoc)
export const RecordSchemaLoader = new RecordLoader(RecordSchema.fromDoc)
export const EnumSchemaLoader = new RecordLoader(EnumSchema.fromDoc)
export const ArraySchemaLoader = new RecordLoader(ArraySchema.fromDoc)
export const arrayOfRecordFieldLoader = new ArrayLoader([RecordFieldLoader])
export const unionOfNoneTypeOrArrayOfRecordFieldLoader = new UnionLoader([NoneType, arrayOfRecordFieldLoader])
export const idmapFieldsUnionOfNoneTypeOrArrayOfRecordFieldLoader = new IdMapLoader(unionOfNoneTypeOrArrayOfRecordFieldLoader, 'name', 'type')
export const enumd9cba076fca539106791a4f46d198c7fcfbdb779Loader = new EnumLoader(['record'])
export const typeDSLEnumd9cba076fca539106791a4f46d198c7fcfbdb779Loader2 = new TypeDSLLoader(enumd9cba076fca539106791a4f46d198c7fcfbdb779Loader, 2)
export const enumd961d79c225752b9fadb617367615ab176b47d77Loader = new EnumLoader(['enum'])
export const typeDSLEnumd961d79c225752b9fadb617367615ab176b47d77Loader2 = new TypeDSLLoader(enumd961d79c225752b9fadb617367615ab176b47d77Loader, 2)
export const enumd062602be0b4b8fd33e69e29a841317b6ab665bcLoader = new EnumLoader(['array'])
export const typeDSLenumd062602be0b4b8fd33e69e29a841317b6ab665bcLoader2 = new TypeDSLLoader(enumd062602be0b4b8fd33e69e29a841317b6ab665bcLoader, 2)
export const unionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtype = new UnionLoader([
  PrimitiveTypeLoader,
  RecordSchemaLoader,
  EnumSchemaLoader,
  ArraySchemaLoader,
  strtype
])
export const arrayOfUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtype = new ArrayLoader([
  unionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtype
])
export const unionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtypeOrArrayOfUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtype = new UnionLoader([
  PrimitiveTypeLoader,
  RecordSchemaLoader,
  EnumSchemaLoader,
  ArraySchemaLoader,
  strtype,
  arrayOfUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtype
])
export const UriUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtypeOrArrayOfUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtypeFalseTrue2 = new URILoader(
  unionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtypeOrArrayOfUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtype,
  false,
  true,
  2)
export const typedslUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtypeOrArrayOfUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtype2 = new TypeDSLLoader(
  unionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtypeOrArrayOfUnionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrStrtype,
  2
)
