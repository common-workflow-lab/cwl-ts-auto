
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#CWLArraySchema
 */
export interface CWLArraySchemaProperties extends Internal.ArraySchemaProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Defines the type of the array elements.
   */
  items: Internal.PrimitiveType | Internal.CWLRecordSchema | Internal.EnumSchema | Internal.CWLArraySchema | string | Array<Internal.PrimitiveType | Internal.CWLRecordSchema | Internal.EnumSchema | Internal.CWLArraySchema | string>

  /**
   * Must be `array`
   */
  type: Internal.Array_name
}