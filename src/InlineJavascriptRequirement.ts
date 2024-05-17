
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#InlineJavascriptRequirement
 *
 * Indicates that the workflow platform must support inline Javascript expressions.
 * If this requirement is not present, the workflow platform must not perform expression
 * interpolation.
 * 
 */
export class InlineJavascriptRequirement extends Saveable implements Internal.InlineJavascriptRequirementProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'InlineJavascriptRequirement'
   */
  class_: Internal.InlineJavascriptRequirement_class

  /**
   * Additional code fragments that will also be inserted
   * before executing the expression code.  Allows for function definitions that may
   * be called from CWL expressions.
   * 
   */
  expressionLib?: undefined | Array<string>


  constructor ({loadingOptions, extensionFields, class_ = Internal.InlineJavascriptRequirement_class.INLINEJAVASCRIPTREQUIREMENT, expressionLib} : {loadingOptions?: LoadingOptions} & Internal.InlineJavascriptRequirementProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.class_ = class_
    this.expressionLib = expressionLib
  }

  /**
   * Used to construct instances of {@link InlineJavascriptRequirement }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link InlineJavascriptRequirement }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriInlineJavascriptRequirement_classLoaderFalseTrueNoneNone,
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

    let expressionLib
    if ('expressionLib' in _doc) {
      try {
        expressionLib = await loadField(_doc.expressionLib, LoaderInstances.unionOfundefinedtypeOrarrayOfstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `expressionLib` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!InlineJavascriptRequirement.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`expressionLib\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'InlineJavascriptRequirement'", __errors)
    }

    const schema = new InlineJavascriptRequirement({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      expressionLib: expressionLib
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
                
    if (this.expressionLib != null) {
      r.expressionLib = save(this.expressionLib, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['class','expressionLib'])
}
