
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#OutputArraySchema
 */
export interface OutputArraySchemaProperties extends Internal.ArraySchemaProperties, Internal.OutputSchemaProperties {
                    
  extensionFields?: Internal.Dictionary<any>
                    
  /**
   * The identifier for this type
   */
  name?: undefined | string

  /**
   * Defines the type of the array elements.
   */
  items: Internal.CWLType | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema | string | Array<Internal.CWLType | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema | string>

  /**
   * Must be `array`
   */
  type: Internal.enum_d062602be0b4b8fd33e69e29a841317b6ab665bc

  /**
   * A short, human-readable label of this object.
   */
  label?: undefined | string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>
}