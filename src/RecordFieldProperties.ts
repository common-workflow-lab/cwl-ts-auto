
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#RecordField
 *
 * A field of a record.
 */
export interface RecordFieldProperties extends Internal.DocumentedProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * The name of the field
   * 
   */
  name: string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>

  /**
   * The field type. If it is an array, it indicates
   * that the field type is a union type of its elements.
   * Its elements may be duplicated.
   * 
   */
  type: Internal.PrimitiveType | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Internal.MapSchema | Internal.UnionSchema | string | Array<Internal.PrimitiveType | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Internal.MapSchema | Internal.UnionSchema | string>
}