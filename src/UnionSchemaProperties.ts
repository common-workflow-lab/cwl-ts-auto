
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#UnionSchema
 */
export interface UnionSchemaProperties  {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Defines the type of the union elements.
   */
  names: Internal.PrimitiveType | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Internal.MapSchema | Internal.UnionSchema | string | Array<Internal.PrimitiveType | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Internal.MapSchema | Internal.UnionSchema | string>

  /**
   * Must be `union`
   */
  type: Internal.Union_name
}