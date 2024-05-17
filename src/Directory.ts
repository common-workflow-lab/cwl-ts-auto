
import {
  Dictionary,
  expandUrl,
  loadField,
  LoaderInstances,
  LoadingOptions,
  Saveable,
  ValidationException,
  prefixUrl,
  save,
  saveRelativeUri
} from './util/Internal'
import { v4 as uuidv4 } from 'uuid'
import * as Internal from './util/Internal'


/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#Directory
 *
 * Represents a directory to present to a command line tool.
 * 
 * Directories are represented as objects with `class` of `Directory`.  Directory objects have
 * a number of properties that provide metadata about the directory.
 * 
 * The `location` property of a Directory is a IRI that uniquely identifies
 * the directory.  Implementations must support the file:// IRI scheme and may
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
 * `location` IRI or a `path` property in the context of the tool execution
 * runtime (local to the compute node, or within the executing container).
 * 
 * An ExpressionTool may forward file references from input to output by using
 * the same value for `location`.
 * 
 * Name conflicts (the same `basename` appearing multiple times in `listing`
 * or in any entry in `secondaryFiles` in the listing) is a fatal error.
 * 
 */
export class Directory extends Saveable implements Internal.DirectoryProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * Must be `Directory` to indicate this object describes a Directory.
   */
  class_: Internal.Directory_class

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


  constructor ({loadingOptions, extensionFields, class_ = Internal.Directory_class.DIRECTORY, location, path, basename, listing} : {loadingOptions?: LoadingOptions} & Internal.DirectoryProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.class_ = class_
    this.location = location
    this.path = path
    this.basename = basename
    this.listing = listing
  }

  /**
   * Used to construct instances of {@link Directory }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link Directory }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriDirectory_classLoaderFalseTrueNoneNone,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `class` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let location
    if ('location' in _doc) {
      try {
        location = await loadField(_doc.location, LoaderInstances.uriunionOfundefinedtypeOrstrtypeFalseFalseNoneNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `location` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let path
    if ('path' in _doc) {
      try {
        path = await loadField(_doc.path, LoaderInstances.uriunionOfundefinedtypeOrstrtypeFalseFalseNoneNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `path` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let basename
    if ('basename' in _doc) {
      try {
        basename = await loadField(_doc.basename, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `basename` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let listing
    if ('listing' in _doc) {
      try {
        listing = await loadField(_doc.listing, LoaderInstances.unionOfundefinedtypeOrarrayOfunionOfFileLoaderOrDirectoryLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `listing` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!Directory.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`location\`,\`path\`,\`basename\`,\`listing\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'Directory'", __errors)
    }

    const schema = new Directory({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      location: location,
      path: path,
      basename: basename,
      listing: listing
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this.class_ != null) {
      const u = saveRelativeUri(this.class_, baseUrl, false,
                                relativeUris, undefined)
      if (u != null) {
        r.class = u
      }
    }
                
    if (this.location != null) {
      const u = saveRelativeUri(this.location, baseUrl, false,
                                relativeUris, undefined)
      if (u != null) {
        r.location = u
      }
    }
                
    if (this.path != null) {
      const u = saveRelativeUri(this.path, baseUrl, false,
                                relativeUris, undefined)
      if (u != null) {
        r.path = u
      }
    }
                
    if (this.basename != null) {
      r.basename = save(this.basename, false, baseUrl, relativeUris)
    }
                
    if (this.listing != null) {
      r.listing = save(this.listing, false, baseUrl, relativeUris)
    }
                
    if (top) {
      if (this.loadingOptions.namespaces != null) {
        r.$namespaces = this.loadingOptions.namespaces
      }
      if (this.loadingOptions.schemas != null) {
        r.$schemas = this.loadingOptions.schemas
      }
    }
    return r
  }
            
  static attr: Set<string> = new Set(['class','location','path','basename','listing'])
}
