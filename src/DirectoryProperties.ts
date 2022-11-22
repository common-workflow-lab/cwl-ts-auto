
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/cwl#Directory
 *
 * Represents a directory to present to a command line tool.
 * 
 * Directories are represented as objects with `class` of `Directory`.  Directory objects have
 * a number of properties that provide metadata about the directory.
 * 
 * The `location` property of a Directory is a URI that uniquely identifies
 * the directory.  Implementations must support the file:// URI scheme and may
 * support other schemes such as http://.  Alternately to `location`,
 * implementations must also accept the `path` property on Directory, which
 * must be a filesystem path available on the same host as the CWL runner (for
 * inputs) or the runtime environment of a command line tool execution (for
 * command line tool outputs).
 * 
 * A Directory object may have a `listing` field.  This is a list of File and
 * Directory objects that are contained in the Directory.  For each entry in
 * `listing`, the `basename` property defines the name of the File or
 * Subdirectory when staged to disk.  If `listing` is not provided, the
 * implementation must have some way of fetching the Directory listing at
 * runtime based on the `location` field.
 * 
 * If a Directory does not have `location`, it is a Directory literal.  A
 * Directory literal must provide `listing`.  Directory literals must be
 * created on disk at runtime as needed.
 * 
 * The resources in a Directory literal do not need to have any implied
 * relationship in their `location`.  For example, a Directory listing may
 * contain two files located on different hosts.  It is the responsibility of
 * the runtime to ensure that those files are staged to disk appropriately.
 * Secondary files associated with files in `listing` must also be staged to
 * the same Directory.
 * 
 * When executing a CommandLineTool, Directories must be recursively staged
 * first and have local values of `path` assigned.
 * 
 * Directory objects in CommandLineTool output must provide either a
 * `location` URI or a `path` property in the context of the tool execution
 * runtime (local to the compute node, or within the executing container).
 * 
 * An ExpressionTool may forward file references from input to output by using
 * the same value for `location`.
 * 
 * Name conflicts (the same `basename` appearing multiple times in `listing`
 * or in any entry in `secondaryFiles` in the listing) is a fatal error.
 * 
 */
export interface DirectoryProperties  {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * Must be `Directory` to indicate this object describes a Directory.
   */
  class_?: Internal.Directory_class

  /**
   * An IRI that identifies the directory resource.  This may be a relative
   * reference, in which case it must be resolved using the base IRI of the
   * document.  The location may refer to a local or remote resource.  If
   * the `listing` field is not set, the implementation must use the
   * location IRI to retrieve directory listing.  If an implementation is
   * unable to retrieve the directory listing stored at a remote resource (due to
   * unsupported protocol, access denied, or other issue) it must signal an
   * error.
   * 
   * If the `location` field is not provided, the `listing` field must be
   * provided.  The implementation must assign a unique identifier for
   * the `location` field.
   * 
   * If the `path` field is provided but the `location` field is not, an
   * implementation may assign the value of the `path` field to `location`,
   * then follow the rules above.
   * 
   */
  location?: undefined | string

  /**
   * The local path where the Directory is made available prior to executing a
   * CommandLineTool.  This must be set by the implementation.  This field
   * must not be used in any other context.  The command line tool being
   * executed must be able to access the directory at `path` using the POSIX
   * `opendir(2)` syscall.
   * 
   * If the `path` contains [POSIX shell metacharacters](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_02)
   * (`|`,`&`, `;`, `<`, `>`, `(`,`)`, `$`,`` ` ``, `\`, `"`, `'`,
   * `<space>`, `<tab>`, and `<newline>`) or characters
   * [not allowed](http://www.iana.org/assignments/idna-tables-6.3.0/idna-tables-6.3.0.xhtml)
   * for [Internationalized Domain Names for Applications](https://tools.ietf.org/html/rfc6452)
   * then implementations may terminate the process with a
   * `permanentFailure`.
   * 
   */
  path?: undefined | string

  /**
   * The base name of the directory, that is, the name of the file without any
   * leading directory path.  The base name must not contain a slash `/`.
   * 
   * If not provided, the implementation must set this field based on the
   * `location` field by taking the final path component after parsing
   * `location` as an IRI.  If `basename` is provided, it is not required to
   * match the value from `location`.
   * 
   * When this file is made available to a CommandLineTool, it must be named
   * with `basename`, i.e. the final component of the `path` field must match
   * `basename`.
   * 
   */
  basename?: undefined | string

  /**
   * List of files or subdirectories contained in this directory.  The name
   * of each file or subdirectory is determined by the `basename` field of
   * each `File` or `Directory` object.  It is an error if a `File` shares a
   * `basename` with any other entry in `listing`.  If two or more
   * `Directory` object share the same `basename`, this must be treated as
   * equivalent to a single subdirectory with the listings recursively
   * merged.
   * 
   */
  listing?: undefined | Array<Internal.File | Internal.Directory>
}