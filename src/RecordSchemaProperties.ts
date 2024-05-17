
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#RecordSchema
 */
export interface RecordSchemaProperties  {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Defines the fields of the record.
   */
  fields?: undefined | Array<Internal.RecordField>

  /**
   * Must be `record`
   */
  type: Internal.Record_name
}