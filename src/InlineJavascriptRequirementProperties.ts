
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#InlineJavascriptRequirement
 *
 * Indicates that the workflow platform must support inline Javascript expressions.
 * If this requirement is not present, the workflow platform must not perform expression
 * interpolatation.
 * 
 */
export interface InlineJavascriptRequirementProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>
                    
  /**
   * Always 'InlineJavascriptRequirement'
   */
  class_: Internal.InlineJavascriptRequirement_class

  /**
   * Additional code fragments that will also be inserted
   * before executing the expression code.  Allows for function definitions that may
   * be called from CWL expressions.
   * 
   */
  expressionLib?: undefined | Array<string>
}