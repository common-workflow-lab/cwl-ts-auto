
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#CWLRecordField
 */
export interface CWLRecordFieldProperties extends Internal.RecordFieldProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * The name of the field
   * 
   */
  name: string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>

  /**
   * The field type
   * 
   */
  type: Internal.PrimitiveType | Internal.CWLRecordSchema | Internal.EnumSchema | Internal.CWLArraySchema | string | Array<Internal.PrimitiveType | Internal.CWLRecordSchema | Internal.EnumSchema | Internal.CWLArraySchema | string>
}