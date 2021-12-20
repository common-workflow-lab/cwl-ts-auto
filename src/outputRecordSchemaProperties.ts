
import * as Internal from './util/internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#OutputRecordSchema
 */
export interface OutputRecordSchemaProperties extends Internal.RecordSchemaProperties, Internal.OutputSchemaProperties {
                    
  extensionFields?: Internal.Dictionary<any>
                    
  /**
   * The identifier for this type
   */
  name?: undefined | string

  /**
   * Defines the fields of the record.
   */
  fields?: undefined | Array<Internal.OutputRecordField>

  /**
   * Must be `record`
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