
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#EnumSchema
 *
 * Define an enumerated type.
 * 
 */
export interface EnumSchemaProperties  {
                    
  extensionFields?: Internal.Dictionary<any>
  name?: undefined | string

  /**
   * Defines the set of valid symbols.
   */
  symbols: Array<string>

  /**
   * Must be `enum`
   */
  type: Internal.Enum_name
}