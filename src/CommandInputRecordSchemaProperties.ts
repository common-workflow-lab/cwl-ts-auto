
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#CommandInputRecordSchema
 */
export interface CommandInputRecordSchemaProperties extends Internal.InputRecordSchemaProperties, Internal.CommandInputSchemaProperties, Internal.CommandLineBindableProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * The identifier for this type
   */
  name?: undefined | string

  /**
   * Defines the fields of the record.
   */
  fields?: undefined | Array<Internal.CommandInputRecordField>

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

  /**
   * Describes how to turn this object into command line arguments.
   */
  inputBinding?: undefined | Internal.CommandLineBinding
}