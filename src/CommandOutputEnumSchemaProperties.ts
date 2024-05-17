
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#CommandOutputEnumSchema
 */
export interface CommandOutputEnumSchemaProperties extends Internal.OutputEnumSchemaProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * The identifier for this type
   */
  name?: undefined | string

  /**
   * Defines the set of valid symbols.
   */
  symbols: Array<string>

  /**
   * Must be `enum`
   */
  type: Internal.Enum_name

  /**
   * A short, human-readable label of this object.
   */
  label?: undefined | string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>
}