
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#MapSchema
 */
export interface MapSchemaProperties  {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Must be `map`
   */
  type: Internal.Map_name

  /**
   * Defines the type of the map elements.
   */
  values: Internal.PrimitiveType | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Internal.MapSchema | Internal.UnionSchema | string | Array<Internal.PrimitiveType | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Internal.MapSchema | Internal.UnionSchema | string>
}