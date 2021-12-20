
import * as Internal from './util/internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#InputArraySchema
 */
export interface InputArraySchemaProperties extends Internal.ArraySchemaProperties, Internal.InputSchemaProperties {
                    
  extensionFields?: Internal.Dictionary<any>
                    
  /**
   * The identifier for this type
   */
  name?: undefined | string

  /**
   * Defines the type of the array elements.
   */
  items: string | Internal.InputRecordSchema | Internal.InputEnumSchema | Internal.InputArraySchema | Array<string | Internal.InputRecordSchema | Internal.InputEnumSchema | Internal.InputArraySchema>

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