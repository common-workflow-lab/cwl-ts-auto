
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#ArraySchema
 */
export interface ArraySchemaProperties  {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Defines the type of the array elements.
   */
  items: Internal.PrimitiveType | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Internal.MapSchema | Internal.UnionSchema | string | Array<Internal.PrimitiveType | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Internal.MapSchema | Internal.UnionSchema | string>

  /**
   * Must be `array`
   */
  type: Internal.Array_name
}