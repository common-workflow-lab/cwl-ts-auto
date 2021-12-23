
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#NetworkAccess
 *
 * Indicate whether a process requires outgoing IPv4/IPv6 network
 * access.  Choice of IPv4 or IPv6 is implementation and site
 * specific, correct tools must support both.
 * 
 * If `networkAccess` is false or not specified, tools must not
 * assume network access, except for localhost (the loopback device).
 * 
 * If `networkAccess` is true, the tool must be able to make outgoing
 * connections to network resources.  Resources may be on a private
 * subnet or the public Internet.  However, implementations and sites
 * may apply their own security policies to restrict what is
 * accessible by the tool.
 * 
 * Enabling network access does not imply a publically routable IP
 * address or the ability to accept inbound connections.
 * 
 */
export interface NetworkAccessProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'NetworkAccess'
   */
  class_: Internal.NetworkAccess_class
  networkAccess: boolean | string
}