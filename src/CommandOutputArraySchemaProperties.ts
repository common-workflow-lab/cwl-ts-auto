
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#CommandOutputArraySchema
 */
export interface CommandOutputArraySchemaProperties extends Internal.OutputArraySchemaProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * The identifier for this type
   */
  name?: undefined | string

  /**
   * Defines the type of the array elements.
   */
  items: Internal.CWLType | Internal.CommandOutputRecordSchema | Internal.CommandOutputEnumSchema | Internal.CommandOutputArraySchema | string | Array<Internal.CWLType | Internal.CommandOutputRecordSchema | Internal.CommandOutputEnumSchema | Internal.CommandOutputArraySchema | string>

  /**
   * Must be `array`
   */
  type: Internal.Array_name

  /**
   * A short, human-readable label of this object.
   */
  label?: undefined | string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>
}