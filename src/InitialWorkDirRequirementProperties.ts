
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#InitialWorkDirRequirement
 *
 * Define a list of files and subdirectories that must be staged by the workflow platform prior to executing the command line tool.
 * Normally files are staged within the designated output directory. However, when running inside containers, files may be staged at arbitrary locations, see discussion for `Dirent.entryname`. Together with `DockerRequirement.dockerOutputDirectory` this it possible to control the locations of both input and output files when running in containers.
 */
export interface InitialWorkDirRequirementProperties extends Internal.ProcessRequirementProperties {
                    
  extensionFields?: Internal.Dictionary<any>
                    
  /**
   * InitialWorkDirRequirement
   */
  class_: Internal.InitialWorkDirRequirement_class

  /**
   * The list of files or subdirectories that must be staged prior
   * to executing the command line tool.
   * 
   * Return type of each expression must validate as `["null",
   * File, Directory, Dirent, {type: array, items: [File,
   * Directory]}]`.
   * 
   * Each `File` or `Directory` that is returned by an Expression
   * must be added to the designated output directory prior to
   * executing the tool.
   * 
   * Each `Dirent` record that is listed or returned by an
   * expression specifies a file to be created or staged in the
   * designated output directory prior to executing the tool.
   * 
   * Expressions may return null, in which case they have no effect.
   * 
   * Files or Directories which are listed in the input parameters
   * and appear in the `InitialWorkDirRequirement` listing must
   * have their `path` set to their staged location.  If the same
   * File or Directory appears more than once in the
   * `InitialWorkDirRequirement` listing, the implementation must
   * choose exactly one value for `path`; how this value is chosen
   * is undefined.
   * 
   */
  listing?: string | Array<undefined | Internal.Dirent | string | Internal.File | Internal.Directory | Array<Internal.File | Internal.Directory>>
}