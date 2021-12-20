
import * as Internal from './util/internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#SchemaDefRequirement
 *
 * This field consists of an array of type definitions which must be used when
 * interpreting the `inputs` and `outputs` fields.  When a `type` field
 * contains a IRI, the implementation must check if the type is defined in
 * `schemaDefs` and use that definition.  If the type is not found in
 * `schemaDefs`, it is an error.  The entries in `schemaDefs` must be
 * processed in the order listed such that later schema definitions may refer
 * to earlier schema definitions.
 * 
 * - **Type definitions are allowed for `enum` and `record` types only.**
 * - Type definitions may be shared by defining them in a file and then
 *   `$include`-ing them in the `types` field.
 * - A file can contain a list of type definitions
 * 
 */
export interface SchemaDefRequirementProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>
                    
  /**
   * Always 'SchemaDefRequirement'
   */
  class_: Internal.SchemaDefRequirement_class

  /**
   * The list of type definitions.
   */
  types: Array<Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema>
}