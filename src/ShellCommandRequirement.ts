
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#ShellCommandRequirement
 *
 * Modify the behavior of CommandLineTool to generate a single string
 * containing a shell command line.  Each item in the `arguments` list must
 * be joined into a string separated by single spaces and quoted to prevent
 * interpretation by the shell, unless `CommandLineBinding` for that argument
 * contains `shellQuote: false`.  If `shellQuote: false` is specified, the
 * argument is joined into the command string without quoting, which allows
 * the use of shell metacharacters such as `|` for pipes.
 * 
 */
export class ShellCommandRequirement extends Saveable implements Internal.ShellCommandRequirementProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'ShellCommandRequirement'
   */
  class_: Internal.ShellCommandRequirement_class


  constructor ({loadingOptions, extensionFields, class_ = Internal.ShellCommandRequirement_class.SHELLCOMMANDREQUIREMENT} : {loadingOptions?: LoadingOptions} & Internal.ShellCommandRequirementProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.class_ = class_
  }

  /**
   * Used to construct instances of {@link ShellCommandRequirement }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link ShellCommandRequirement }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriShellCommandRequirement_classLoaderFalseTrueNoneNone,
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

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!ShellCommandRequirement.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'ShellCommandRequirement'", __errors)
    }

    const schema = new ShellCommandRequirement({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_
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
            
  static attr: Set<string> = new Set(['class'])
}
