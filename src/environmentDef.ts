
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
} from './util/internal'
import { v4 as uuidv4 } from 'uuid'
import * as Internal from './util/internal'


/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#EnvironmentDef
 *
 * Define an environment variable that will be set in the runtime environment
 * by the workflow platform when executing the command line tool.  May be the
 * result of executing an expression, such as getting a parameter from input.
 * 
 */
export class EnvironmentDef extends Saveable implements Internal.EnvironmentDefProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * The environment variable name
   */
  envName: string

  /**
   * The environment variable value
   */
  envValue: string


  constructor ({loadingOptions, extensionFields, envName, envValue} : {loadingOptions?: LoadingOptions} & Internal.EnvironmentDefProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.envName = envName
    this.envValue = envValue
  }

  /**
   * Used to construct instances of {@link EnvironmentDef }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link EnvironmentDef }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let envName
    try {
      envName = await loadField(_doc.envName, LoaderInstances.strtype,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `envName` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let envValue
    try {
      envValue = await loadField(_doc.envValue, LoaderInstances.unionOfstrtypeOrExpressionLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `envValue` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!EnvironmentDef.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`envName\`,\`envValue\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'EnvironmentDef'", __errors)
    }

    const schema = new EnvironmentDef({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      envName: envName,
      envValue: envValue
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this.envName != null) {
      r.envName = save(this.envName, false, baseUrl, relativeUris)
    }
                
    if (this.envValue != null) {
      r.envValue = save(this.envValue, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['envName','envValue'])
}
