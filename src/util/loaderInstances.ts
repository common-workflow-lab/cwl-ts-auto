import { RecordSchema, PrimitiveLoader, UnionLoader, RecordLoader, Simple_schema, URILoader, ArrayLoader, EnumLoader, RecordField, IdMapLoader, TypeDSLLoader, EnumSchema, ArraySchema, TypeGuards } from './internal'

export const NoneType = new PrimitiveLoader(TypeGuards.Undefined)
export const strtype = new PrimitiveLoader(TypeGuards.String)
export const unionOfNoneTypeOrStrtype = new UnionLoader([strtype, NoneType])
export const simpleSchemaLoader = new RecordLoader(Simple_schema.fromDoc)
export const RecordFieldLoader = new RecordLoader(RecordField.fromDoc)

export const EnumSchemaLoader = new RecordLoader(EnumSchema.fromDoc)
export const ArraySchemaLoader = new RecordLoader(ArraySchema.fromDoc)

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

export const uriStrtypeTrueFalseNone = new URILoader(strtype, true, false, undefined)
export const uriArrayOfStrTypeTrueFalseNone = new URILoader(arrayOfStrType, true, false, undefined)
export const unionOfNoneTypeOrStrTypeOrArrayOfStrType = new UnionLoader([NoneType, strtype, arrayOfStrType])

export const arrayOfRecordFieldLoader = new ArrayLoader([RecordFieldLoader])
export const unionOfNoneTypeOrArrayOfRecordFieldLoader = new UnionLoader([NoneType, arrayOfRecordFieldLoader])
export const idmapFieldsUnionOfNoneTypeOrArrayOfRecordFieldLoader = new IdMapLoader(unionOfNoneTypeOrArrayOfRecordFieldLoader, 'name', 'type')
export const enumd9cba076fca539106791a4f46d198c7fcfbdb779Loader = new EnumLoader(['record'])
export const typeDSLEnumd9cba076fca539106791a4f46d198c7fcfbdb779Loader2 = new TypeDSLLoader(enumd9cba076fca539106791a4f46d198c7fcfbdb779Loader, 2)
export const enumd961d79c225752b9fadb617367615ab176b47d77Loader = new EnumLoader(['enum'])
export const typeDSLEnumd961d79c225752b9fadb617367615ab176b47d77Loader2 = new TypeDSLLoader(enumd961d79c225752b9fadb617367615ab176b47d77Loader, 2)
export const enumd062602be0b4b8fd33e69e29a841317b6ab665bcLoader = new EnumLoader(['array'])
export const typeDSLenumd062602be0b4b8fd33e69e29a841317b6ab665bcLoader2 = new TypeDSLLoader(enumd062602be0b4b8fd33e69e29a841317b6ab665bcLoader, 2)
export const RecordSchemaLoader = new RecordLoader(RecordSchema.fromDoc)

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
