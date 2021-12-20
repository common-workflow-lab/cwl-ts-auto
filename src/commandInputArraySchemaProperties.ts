
import * as Internal from './util/internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#CommandInputArraySchema
 */
export interface CommandInputArraySchemaProperties extends Internal.InputArraySchemaProperties, Internal.CommandInputSchemaProperties, Internal.CommandLineBindableProperties {
                    
  extensionFields?: Internal.Dictionary<any>
                    
  /**
   * The identifier for this type
   */
  name?: undefined | string

  /**
   * Defines the type of the array elements.
   */
  items: string | Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema | Array<string | Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema>

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

  /**
   * Describes how to turn this object into command line arguments.
   */
  inputBinding?: undefined | Internal.CommandLineBinding
}