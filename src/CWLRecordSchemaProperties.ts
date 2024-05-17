
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#CWLRecordSchema
 */
export interface CWLRecordSchemaProperties extends Internal.RecordSchemaProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Defines the fields of the record.
   */
  fields?: undefined | Array<Internal.CWLRecordField>

  /**
   * Must be `record`
   */
  type: Internal.Record_name
}