
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#InplaceUpdateRequirement
 *
 * 
 * If `inplaceUpdate` is true, then an implementation supporting this
 * feature may permit tools to directly update files with `writable:
 * true` in InitialWorkDirRequirement.  That is, as an optimization,
 * files may be destructively modified in place as opposed to copied
 * and updated.
 * 
 * An implementation must ensure that only one workflow step may
 * access a writable file at a time.  It is an error if a file which
 * is writable by one workflow step file is accessed (for reading or
 * writing) by any other workflow step running independently.
 * However, a file which has been updated in a previous completed
 * step may be used as input to multiple steps, provided it is
 * read-only in every step.
 * 
 * Workflow steps which modify a file must produce the modified file
 * as output.  Downstream steps which futher process the file must
 * use the output of previous steps, and not refer to a common input
 * (this is necessary for both ordering and correctness).
 * 
 * Workflow authors should provide this in the `hints` section.  The
 * intent of this feature is that workflows produce the same results
 * whether or not InplaceUpdateRequirement is supported by the
 * implementation, and this feature is primarily available as an
 * optimization for particular environments.
 * 
 * Users and implementers should be aware that workflows that
 * destructively modify inputs may not be repeatable or reproducible.
 * In particular, enabling this feature implies that WorkReuse should
 * not be enabled.
 * 
 */
export interface InplaceUpdateRequirementProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'InplaceUpdateRequirement'
   */
  class_: Internal.InplaceUpdateRequirement_class
  inplaceUpdate: boolean
}