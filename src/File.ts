
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#File
 *
 * Represents a file (or group of files when `secondaryFiles` is provided) that
 * will be accessible by tools using standard POSIX file system call API such as
 * open(2) and read(2).
 * 
 * Files are represented as objects with `class` of `File`.  File objects have
 * a number of properties that provide metadata about the file.
 * 
 * The `location` property of a File is a IRI that uniquely identifies the
 * file.  Implementations must support the `file://` IRI scheme and may support
 * other schemes such as `http://` and `https://`.  The value of `location` may also be a
 * relative reference, in which case it must be resolved relative to the IRI
 * of the document it appears in.  Alternately to `location`, implementations
 * must also accept the `path` property on File, which must be a filesystem
 * path available on the same host as the CWL runner (for inputs) or the
 * runtime environment of a command line tool execution (for command line tool
 * outputs).
 * 
 * If no `location` or `path` is specified, a file object must specify
 * `contents` with the UTF-8 text content of the file.  This is a "file
 * literal".  File literals do not correspond to external resources, but are
 * created on disk with `contents` with when needed for executing a tool.
 * Where appropriate, expressions can return file literals to define new files
 * on a runtime.  The maximum size of `contents` is 64 kilobytes.
 * 
 * The `basename` property defines the filename on disk where the file is
 * staged.  This may differ from the resource name.  If not provided,
 * `basename` must be computed from the last path part of `location` and made
 * available to expressions.
 * 
 * The `secondaryFiles` property is a list of File or Directory objects that
 * must be staged in the same directory as the primary file.  It is an error
 * for file names to be duplicated in `secondaryFiles`.
 * 
 * The `size` property is the size in bytes of the File.  It must be computed
 * from the resource and made available to expressions.  The `checksum` field
 * contains a cryptographic hash of the file content for use it verifying file
 * contents.  Implementations may, at user option, enable or disable
 * computation of the `checksum` field for performance or other reasons.
 * However, the ability to compute output checksums is required to pass the
 * CWL conformance test suite.
 * 
 * When executing a CommandLineTool, the files and secondary files may be
 * staged to an arbitrary directory, but must use the value of `basename` for
 * the filename.  The `path` property must be file path in the context of the
 * tool execution runtime (local to the compute node, or within the executing
 * container).  All computed properties should be available to expressions.
 * File literals also must be staged and `path` must be set.
 * 
 * When collecting CommandLineTool outputs, `glob` matching returns file paths
 * (with the `path` property) and the derived properties. This can all be
 * modified by `outputEval`.  Alternately, if the file `cwl.output.json` is
 * present in the output, `outputBinding` is ignored.
 * 
 * File objects in the output must provide either a `location` IRI or a `path`
 * property in the context of the tool execution runtime (local to the compute
 * node, or within the executing container).
 * 
 * When evaluating an ExpressionTool, file objects must be referenced via
 * `location` (the expression tool does not have access to files on disk so
 * `path` is meaningless) or as file literals.  It is legal to return a file
 * object with an existing `location` but a different `basename`.  The
 * `loadContents` field of ExpressionTool inputs behaves the same as on
 * CommandLineTool inputs, however it is not meaningful on the outputs.
 * 
 * An ExpressionTool may forward file references from input to output by using
 * the same value for `location`.
 * 
 */
export class File extends Saveable implements Internal.FileProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * Must be `File` to indicate this object describes a file.
   */
  class_: Internal.File_class

  /**
   * An IRI that identifies the file resource.  This may be a relative
   * reference, in which case it must be resolved using the base IRI of the
   * document.  The location may refer to a local or remote resource; the
   * implementation must use the IRI to retrieve file content.  If an
   * implementation is unable to retrieve the file content stored at a
   * remote resource (due to unsupported protocol, access denied, or other
   * issue) it must signal an error.
   * 
   * If the `location` field is not provided, the `contents` field must be
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
   * The local host path where the File is available when a CommandLineTool is
   * executed.  This field must be set by the implementation.  The final
   * path component must match the value of `basename`.  This field
   * must not be used in any other context.  The command line tool being
   * executed must be able to access the file at `path` using the POSIX
   * `open(2)` syscall.
   * 
   * As a special case, if the `path` field is provided but the `location`
   * field is not, an implementation may assign the value of the `path`
   * field to `location`, and remove the `path` field.
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
   * The base name of the file, that is, the name of the file without any
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
   * The name of the directory containing file, that is, the path leading up
   * to the final slash in the path such that `dirname + '/' + basename ==
   * path`.
   * 
   * The implementation must set this field based on the value of `path`
   * prior to evaluating parameter references or expressions in a
   * CommandLineTool document.  This field must not be used in any other
   * context.
   * 
   */
  dirname?: undefined | string

  /**
   * The basename root such that `nameroot + nameext == basename`, and
   * `nameext` is empty or begins with a period and contains at most one
   * period.  For the purposes of path splitting leading periods on the
   * basename are ignored; a basename of `.cshrc` will have a nameroot of
   * `.cshrc`.
   * 
   * The implementation must set this field automatically based on the value
   * of `basename` prior to evaluating parameter references or expressions.
   * 
   */
  nameroot?: undefined | string

  /**
   * The basename extension such that `nameroot + nameext == basename`, and
   * `nameext` is empty or begins with a period and contains at most one
   * period.  Leading periods on the basename are ignored; a basename of
   * `.cshrc` will have an empty `nameext`.
   * 
   * The implementation must set this field automatically based on the value
   * of `basename` prior to evaluating parameter references or expressions.
   * 
   */
  nameext?: undefined | string

  /**
   * Optional hash code for validating file integrity.  Currently, must be in the form
   * "sha1$ + hexadecimal string" using the SHA-1 algorithm.
   * 
   */
  checksum?: undefined | string

  /**
   * Optional file size (in bytes)
   */
  size?: undefined | number

  /**
   * A list of additional files or directories that are associated with the
   * primary file and must be transferred alongside the primary file.
   * Examples include indexes of the primary file, or external references
   * which must be included when loading primary document.  A file object
   * listed in `secondaryFiles` may itself include `secondaryFiles` for
   * which the same rules apply.
   * 
   */
  secondaryFiles?: undefined | Array<Internal.File | Internal.Directory>

  /**
   * The format of the file: this must be an IRI of a concept node that
   * represents the file format, preferably defined within an ontology.
   * If no ontology is available, file formats may be tested by exact match.
   * 
   * Reasoning about format compatibility must be done by checking that an
   * input file format is the same, `owl:equivalentClass` or
   * `rdfs:subClassOf` the format required by the input parameter.
   * `owl:equivalentClass` is transitive with `rdfs:subClassOf`, e.g. if
   * `<B> owl:equivalentClass <C>` and `<B> owl:subclassOf <A>` then infer
   * `<C> owl:subclassOf <A>`.
   * 
   * File format ontologies may be provided in the "$schemas" metadata at the
   * root of the document.  If no ontologies are specified in `$schemas`, the
   * runtime may perform exact file format matches.
   * 
   */
  format?: undefined | string

  /**
   * File contents literal.
   * 
   * If neither `location` nor `path` is provided, `contents` must be
   * non-null.  The implementation must assign a unique identifier for the
   * `location` field.  When the file is staged as input to CommandLineTool,
   * the value of `contents` must be written to a file.
   * 
   * If `contents` is set as a result of a Javascript expression,
   * an `entry` in `InitialWorkDirRequirement`, or read in from
   * `cwl.output.json`, there is no specified upper limit on the
   * size of `contents`.  Implementations may have practical limits
   * on the size of `contents` based on memory and storage
   * available to the workflow runner or other factors.
   * 
   * If the `loadContents` field of an `InputParameter` or
   * `OutputParameter` is true, and the input or output File object
   * `location` is valid, the file must be a UTF-8 text file 64 KiB
   * or smaller, and the implementation must read the entire
   * contents of the file and place it in the `contents` field.  If
   * the size of the file is greater than 64 KiB, the
   * implementation must raise a fatal error.
   * 
   */
  contents?: undefined | string


  constructor ({loadingOptions, extensionFields, class_ = Internal.File_class.FILE, location, path, basename, dirname, nameroot, nameext, checksum, size, secondaryFiles, format, contents} : {loadingOptions?: LoadingOptions} & Internal.FileProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.class_ = class_
    this.location = location
    this.path = path
    this.basename = basename
    this.dirname = dirname
    this.nameroot = nameroot
    this.nameext = nameext
    this.checksum = checksum
    this.size = size
    this.secondaryFiles = secondaryFiles
    this.format = format
    this.contents = contents
  }

  /**
   * Used to construct instances of {@link File }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link File }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriFile_classLoaderFalseTrueNoneNone,
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

    let dirname
    if ('dirname' in _doc) {
      try {
        dirname = await loadField(_doc.dirname, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `dirname` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let nameroot
    if ('nameroot' in _doc) {
      try {
        nameroot = await loadField(_doc.nameroot, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `nameroot` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let nameext
    if ('nameext' in _doc) {
      try {
        nameext = await loadField(_doc.nameext, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `nameext` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let checksum
    if ('checksum' in _doc) {
      try {
        checksum = await loadField(_doc.checksum, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `checksum` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let size
    if ('size' in _doc) {
      try {
        size = await loadField(_doc.size, LoaderInstances.unionOfundefinedtypeOrinttype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `size` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let secondaryFiles
    if ('secondaryFiles' in _doc) {
      try {
        secondaryFiles = await loadField(_doc.secondaryFiles, LoaderInstances.secondaryfilesdslunionOfundefinedtypeOrarrayOfunionOfFileLoaderOrDirectoryLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `secondaryFiles` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let format
    if ('format' in _doc) {
      try {
        format = await loadField(_doc.format, LoaderInstances.uriunionOfundefinedtypeOrstrtypeTrueFalseNoneTrue,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `format` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let contents
    if ('contents' in _doc) {
      try {
        contents = await loadField(_doc.contents, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `contents` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!File.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`location\`,\`path\`,\`basename\`,\`dirname\`,\`nameroot\`,\`nameext\`,\`checksum\`,\`size\`,\`secondaryFiles\`,\`format\`,\`contents\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'File'", __errors)
    }

    const schema = new File({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      location: location,
      path: path,
      basename: basename,
      dirname: dirname,
      nameroot: nameroot,
      nameext: nameext,
      checksum: checksum,
      size: size,
      secondaryFiles: secondaryFiles,
      format: format,
      contents: contents
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
                
    if (this.dirname != null) {
      r.dirname = save(this.dirname, false, baseUrl, relativeUris)
    }
                
    if (this.nameroot != null) {
      r.nameroot = save(this.nameroot, false, baseUrl, relativeUris)
    }
                
    if (this.nameext != null) {
      r.nameext = save(this.nameext, false, baseUrl, relativeUris)
    }
                
    if (this.checksum != null) {
      r.checksum = save(this.checksum, false, baseUrl, relativeUris)
    }
                
    if (this.size != null) {
      r.size = save(this.size, false, baseUrl, relativeUris)
    }
                
    if (this.secondaryFiles != null) {
      r.secondaryFiles = save(this.secondaryFiles, false, baseUrl, relativeUris)
    }
                
    if (this.format != null) {
      const u = saveRelativeUri(this.format, baseUrl, true,
                                relativeUris, undefined)
      if (u != null) {
        r.format = u
      }
    }
                
    if (this.contents != null) {
      r.contents = save(this.contents, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['class','location','path','basename','dirname','nameroot','nameext','checksum','size','secondaryFiles','format','contents'])
}
