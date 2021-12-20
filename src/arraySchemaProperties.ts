
import * as Internal from './util/internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#ArraySchema
 */
export interface ArraySchemaProperties  {
                    
  extensionFields?: Internal.Dictionary<any>
                    
  /**
   * Defines the type of the array elements.
   */
  items: string | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Array<string | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema>

  /**
   * Must be `array`
   */
  type: string
}