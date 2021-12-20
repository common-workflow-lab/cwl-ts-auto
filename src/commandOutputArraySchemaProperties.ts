
import * as Internal from './util/internal'


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
  items: string | Internal.CommandOutputRecordSchema | Internal.CommandOutputEnumSchema | Internal.CommandOutputArraySchema | Array<string | Internal.CommandOutputRecordSchema | Internal.CommandOutputEnumSchema | Internal.CommandOutputArraySchema>

  /**
   * Must be `array`
   */
  type: string

  /**
   * A short, human-readable label of this object.
   */
  label?: undefined | string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>
}