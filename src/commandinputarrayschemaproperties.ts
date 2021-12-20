
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
  items: Internal.CWLType | Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema | string | Array<Internal.CWLType | Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema | string>

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

  /**
   * Describes how to turn this object into command line arguments.
   */
  inputBinding?: undefined | Internal.CommandLineBinding
}