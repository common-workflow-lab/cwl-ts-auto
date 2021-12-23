
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#EnvVarRequirement
 *
 * Define a list of environment variables which will be set in the
 * execution environment of the tool.  See `EnvironmentDef` for details.
 * 
 */
export interface EnvVarRequirementProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'EnvVarRequirement'
   */
  class_: Internal.EnvVarRequirement_class

  /**
   * The list of environment variables.
   */
  envDef: Array<Internal.EnvironmentDef>
}