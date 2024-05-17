
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#CommandOutputRecordSchema
 */
export interface CommandOutputRecordSchemaProperties extends Internal.OutputRecordSchemaProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * The identifier for this type
   */
  name?: undefined | string

  /**
   * Defines the fields of the record.
   */
  fields?: undefined | Array<Internal.CommandOutputRecordField>

  /**
   * Must be `record`
   */
  type: Internal.Record_name

  /**
   * A short, human-readable label of this object.
   */
  label?: undefined | string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>
}