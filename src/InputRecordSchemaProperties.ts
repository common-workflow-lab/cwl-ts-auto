
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#InputRecordSchema
 */
export interface InputRecordSchemaProperties extends Internal.CWLRecordSchemaProperties, Internal.InputSchemaProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * The identifier for this type
   */
  name?: undefined | string

  /**
   * Defines the fields of the record.
   */
  fields?: undefined | Array<Internal.InputRecordField>

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