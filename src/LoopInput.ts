
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
 * Auto-generated class implementation for http://commonwl.org/cwltool#LoopInput
 */
export class LoopInput extends Saveable implements Internal.LoopInputProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * It must reference the `id` of one of the elements in the `in` field of the step.
   */
  id?: undefined | string

  /**
   * The default value for this parameter to use if either there is no
   * `source` field, or the value produced by the `source` is `null`.  The
   * default must be applied prior to scattering or evaluating `valueFrom`.
   * 
   */
  default_?: undefined | any

  /**
   * The method to use to merge multiple inbound links into a single array.
   * If not specified, the default method is "merge_nested".
   * 
   */
  linkMerge?: undefined | Internal.LinkMergeMethod

  /**
   * Specifies one or more of the step output parameters that will
   * provide input to the loop iterations after the first one (inputs
   * of the first iteration are the step input parameters).
   * 
   */
  loopSource?: undefined | string | Array<string>

  /**
   * The method to use to choose non-null elements among multiple sources.
   * 
   */
  pickValue?: undefined | Internal.PickValueMethod

  /**
   * To use valueFrom, [StepInputExpressionRequirement](#StepInputExpressionRequirement) must
   * be specified in the workflow or workflow step requirements.
   * 
   * If `valueFrom` is a constant string value, use this as the value for
   * this input parameter.
   * 
   * If `valueFrom` is a parameter reference or expression, it must be
   * evaluated to yield the actual value to be assigned to the input field.
   * 
   * The `self` value in the parameter reference or expression must be
   * `null` if there is no `loopSource` field, or the value of the
   * parameter(s) specified in the `loopSource` field.
   * 
   * The value of `inputs` in the parameter reference or expression must be
   * the input object to the previous iteration of the workflow step (or the initial
   * inputs for the first iteration).
   * 
   */
  valueFrom?: undefined | string


  constructor ({loadingOptions, extensionFields, id, default_, linkMerge, loopSource, pickValue, valueFrom} : {loadingOptions?: LoadingOptions} & Internal.LoopInputProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.id = id
    this.default_ = default_
    this.linkMerge = linkMerge
    this.loopSource = loopSource
    this.pickValue = pickValue
    this.valueFrom = valueFrom
  }

  /**
   * Used to construct instances of {@link LoopInput }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link LoopInput }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let id
    if ('id' in _doc) {
      try {
        id = await loadField(_doc.id, LoaderInstances.uriunionOfundefinedtypeOrstrtypeTrueFalseNoneNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `id` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const originalidIsUndefined = (id === undefined)
    if (originalidIsUndefined ) {
      if (docRoot != null) {
        id = docRoot
      } else {
        id = "_" + uuidv4()
      }
    } else {
      baseuri = id as string
    }
            
    let default_
    if ('default' in _doc) {
      try {
        default_ = await loadField(_doc.default, LoaderInstances.unionOfundefinedtypeOranyType,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `default` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let linkMerge
    if ('linkMerge' in _doc) {
      try {
        linkMerge = await loadField(_doc.linkMerge, LoaderInstances.unionOfundefinedtypeOrLinkMergeMethodLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `linkMerge` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let loopSource
    if ('loopSource' in _doc) {
      try {
        loopSource = await loadField(_doc.loopSource, LoaderInstances.uriunionOfundefinedtypeOrstrtypeOrarrayOfstrtypeFalseFalse1None,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `loopSource` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let pickValue
    if ('pickValue' in _doc) {
      try {
        pickValue = await loadField(_doc.pickValue, LoaderInstances.unionOfundefinedtypeOrPickValueMethodLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `pickValue` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let valueFrom
    if ('valueFrom' in _doc) {
      try {
        valueFrom = await loadField(_doc.valueFrom, LoaderInstances.unionOfundefinedtypeOrstrtypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `valueFrom` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!LoopInput.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`default\`,\`id\`,\`linkMerge\`,\`loopSource\`,\`pickValue\`,\`valueFrom\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'LoopInput'", __errors)
    }

    const schema = new LoopInput({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      default_: default_,
      id: id,
      linkMerge: linkMerge,
      loopSource: loopSource,
      pickValue: pickValue,
      valueFrom: valueFrom
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this.id != null) {
      const u = saveRelativeUri(this.id, baseUrl, true,
                                relativeUris, undefined)
      if (u != null) {
        r.id = u
      }
    }
                
    if (this.default_ != null) {
      r.default = save(this.default_, false, this.id, relativeUris)
    }
                
    if (this.linkMerge != null) {
      r.linkMerge = save(this.linkMerge, false, this.id, relativeUris)
    }
                
    if (this.loopSource != null) {
      const u = saveRelativeUri(this.loopSource, this.id, false,
                                relativeUris, 1)
      if (u != null) {
        r.loopSource = u
      }
    }
                
    if (this.pickValue != null) {
      r.pickValue = save(this.pickValue, false, this.id, relativeUris)
    }
                
    if (this.valueFrom != null) {
      r.valueFrom = save(this.valueFrom, false, this.id, relativeUris)
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
            
  static attr: Set<string> = new Set(['default','id','linkMerge','loopSource','pickValue','valueFrom'])
}
