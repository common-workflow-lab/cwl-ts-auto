
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for http://commonwl.org/cwltool#Secrets
 */
export interface SecretsProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'Secrets'
   */
  class_?: string

  /**
   * List one or more input parameters that are sensitive (such as passwords)
   * which will be deliberately obscured from logging.
   * 
   */
  secrets: Array<string>
}