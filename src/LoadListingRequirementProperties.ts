
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#LoadListingRequirement
 *
 * Specify the desired behavior for loading the `listing` field of
 * a Directory object for use by expressions.
 * 
 */
export interface LoadListingRequirementProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'LoadListingRequirement'
   */
  class_?: Internal.LoadListingRequirement_class
  loadListing?: undefined | Internal.LoadListingEnum
}