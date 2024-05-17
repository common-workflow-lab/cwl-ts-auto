
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#WorkflowStepInput
 *
 * The input of a workflow step connects an upstream parameter (from the
 * workflow inputs, or the outputs of other workflows steps) with the input
 * parameters of the process specified by the `run` field. Only input parameters
 * declared by the target process will be passed through at runtime to the process
 * though additional parameters may be specified (for use within `valueFrom`
 * expressions for instance) - unconnected or unused parameters do not represent an
 * error condition.
 * 
 * # Input object
 * 
 * A WorkflowStepInput object must contain an `id` field in the form
 * `#fieldname` or `#prefix/fieldname`.  When the `id` field contains a slash
 * `/` the field name consists of the characters following the final slash
 * (the prefix portion may contain one or more slashes to indicate scope).
 * This defines a field of the workflow step input object with the value of
 * the `source` parameter(s).
 * 
 * # Merging multiple inbound data links
 * 
 * To merge multiple inbound data links,
 * [MultipleInputFeatureRequirement](#MultipleInputFeatureRequirement) must be specified
 * in the workflow or workflow step requirements.
 * 
 * If the sink parameter is an array, or named in a [workflow
 * scatter](#WorkflowStep) operation, there may be multiple inbound
 * data links listed in the `source` field.  The values from the
 * input links are merged depending on the method specified in the
 * `linkMerge` field.  If both `linkMerge` and `pickValue` are null
 * or not specified, and there is more than one element in the
 * `source` array, the default method is "merge_nested".
 * 
 * If both `linkMerge` and `pickValue` are null or not specified, and
 * there is only a single element in the `source`, then the input
 * parameter takes the scalar value from the single input link (it is
 * *not* wrapped in a single-list).
 * 
 * * **merge_nested**
 * 
 *   The input must be an array consisting of exactly one entry for each
 *   input link.  If "merge_nested" is specified with a single link, the value
 *   from the link must be wrapped in a single-item list.
 * 
 * * **merge_flattened**
 * 
 *   1. The source and sink parameters must be compatible types, or the source
 *      type must be compatible with single element from the "items" type of
 *      the destination array parameter.
 *   2. Source parameters which are arrays are concatenated.
 *      Source parameters which are single element types are appended as
 *      single elements.
 * 
 * # Picking non-null values among inbound data links
 * 
 * If present, `pickValue` specifies how to pick non-null values among inbound data links.
 * 
 * `pickValue` is evaluated
 *   1. Once all source values from upstream step or parameters are available.
 *   2. After `linkMerge`.
 *   3. Before `scatter` or `valueFrom`.
 * 
 * This is specifically intended to be useful in combination with
 * [conditional execution](#WorkflowStep), where several upstream
 * steps may be connected to a single input (`source` is a list), and
 * skipped steps produce null values.
 * 
 * Static type checkers should check for type consistency after inferring what the type
 * will be after `pickValue` is applied, just as they do currently for `linkMerge`.
 * 
 * * **first_non_null**
 * 
 *   For the first level of a list input, pick the first non-null element.  The result is a scalar.
 *   It is an error if there is no non-null element.  Examples:
 *   * `[null, x, null, y] -> x`
 *   * `[null, [null], null, y] -> [null]`
 *   * `[null, null, null] -> Runtime Error`
 * 
 *   *Intended use case*: If-else pattern where the
 *   value comes either from a conditional step or from a default or
 *   fallback value. The conditional step(s) should be placed first in
 *   the list.
 * 
 * * **the_only_non_null**
 * 
 *   For the first level of a list input, pick the single non-null element.  The result is a scalar.
 *   It is an error if there is more than one non-null element.  Examples:
 * 
 *   * `[null, x, null] -> x`
 *   * `[null, x, null, y] -> Runtime Error`
 *   * `[null, [null], null] -> [null]`
 *   * `[null, null, null] -> Runtime Error`
 * 
 *   *Intended use case*: Switch type patterns where developer considers
 *   more than one active code path as a workflow error
 *   (possibly indicating an error in writing `when` condition expressions).
 * 
 * * **all_non_null**
 * 
 *   For the first level of a list input, pick all non-null values.
 *   The result is a list, which may be empty.  Examples:
 * 
 *   * `[null, x, null] -> [x]`
 *   * `[x, null, y] -> [x, y]`
 *   * `[null, [x], [null]] -> [[x], [null]]`
 *   * `[null, null, null] -> []`
 * 
 *   *Intended use case*: It is valid to have more than one source, but
 *    sources are conditional, so null sources (from skipped steps)
 *    should be filtered out.
 * 
 */
export class WorkflowStepInput extends Saveable implements Internal.WorkflowStepInputProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * The unique identifier for this object.
   */
  id?: undefined | string

  /**
   * Specifies one or more workflow parameters that will provide input to
   * the underlying step parameter.
   * 
   */
  source?: undefined | string | Array<string>

  /**
   * The method to use to merge multiple inbound links into a single array.
   * If not specified, the default method is "merge_nested".
   * 
   */
  linkMerge?: undefined | Internal.LinkMergeMethod

  /**
   * The method to use to choose non-null elements among multiple sources.
   * 
   */
  pickValue?: undefined | Internal.PickValueMethod

  /**
   * Only valid when `type: File` or is an array of `items: File`.
   * 
   * If true, the file (or each file in the array) must be a UTF-8
   * text file 64 KiB or smaller, and the implementation must read
   * the entire contents of the file (or file array) and place it
   * in the `contents` field of the File object for use by
   * expressions.  If the size of the file is greater than 64 KiB,
   * the implementation must raise a fatal error.
   * 
   */
  loadContents?: undefined | boolean

  /**
   * Only valid when `type: Directory` or is an array of `items: Directory`.
   * 
   * Specify the desired behavior for loading the `listing` field of
   * a Directory object for use by expressions.
   * 
   * The order of precedence for loadListing is:
   * 
   *   1. `loadListing` on an individual parameter
   *   2. Inherited from `LoadListingRequirement`
   *   3. By default: `no_listing`
   * 
   */
  loadListing?: undefined | Internal.LoadListingEnum

  /**
   * A short, human-readable label of this object.
   */
  label?: undefined | string

  /**
   * The default value for this parameter to use if either there is no
   * `source` field, or the value produced by the `source` is `null`.  The
   * default must be applied prior to scattering or evaluating `valueFrom`.
   * 
   */
  default_?: undefined | any

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
   * 1. `null` if there is no `source` field
   * 2. the value of the parameter(s) specified in the `source` field when this
   * workflow input parameter **is not** specified in this workflow step's `scatter` field.
   * 3. an element of the parameter specified in the `source` field when this workflow input
   * parameter **is** specified in this workflow step's `scatter` field.
   * 
   * The value of `inputs` in the parameter reference or expression must be
   * the input object to the workflow step after assigning the `source`
   * values, applying `default`, and then scattering.  The order of
   * evaluating `valueFrom` among step input parameters is undefined and the
   * result of evaluating `valueFrom` on a parameter must not be visible to
   * evaluation of `valueFrom` on other parameters.
   * 
   */
  valueFrom?: undefined | string


  constructor ({loadingOptions, extensionFields, id, source, linkMerge, pickValue, loadContents, loadListing, label, default_, valueFrom} : {loadingOptions?: LoadingOptions} & Internal.WorkflowStepInputProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.id = id
    this.source = source
    this.linkMerge = linkMerge
    this.pickValue = pickValue
    this.loadContents = loadContents
    this.loadListing = loadListing
    this.label = label
    this.default_ = default_
    this.valueFrom = valueFrom
  }

  /**
   * Used to construct instances of {@link WorkflowStepInput }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link WorkflowStepInput }
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
            
    let source
    if ('source' in _doc) {
      try {
        source = await loadField(_doc.source, LoaderInstances.uriunionOfundefinedtypeOrstrtypeOrarrayOfstrtypeFalseFalse2None,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `source` field is not valid because: ', [e])
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

    let loadContents
    if ('loadContents' in _doc) {
      try {
        loadContents = await loadField(_doc.loadContents, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `loadContents` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let loadListing
    if ('loadListing' in _doc) {
      try {
        loadListing = await loadField(_doc.loadListing, LoaderInstances.unionOfundefinedtypeOrLoadListingEnumLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `loadListing` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let label
    if ('label' in _doc) {
      try {
        label = await loadField(_doc.label, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `label` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let default_
    if ('default' in _doc) {
      try {
        default_ = await loadField(_doc.default, LoaderInstances.unionOfundefinedtypeOrCWLObjectTypeLoader,
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
      if (!WorkflowStepInput.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`id\`,\`source\`,\`linkMerge\`,\`pickValue\`,\`loadContents\`,\`loadListing\`,\`label\`,\`default\`,\`valueFrom\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'WorkflowStepInput'", __errors)
    }

    const schema = new WorkflowStepInput({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      id: id,
      source: source,
      linkMerge: linkMerge,
      pickValue: pickValue,
      loadContents: loadContents,
      loadListing: loadListing,
      label: label,
      default_: default_,
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
                
    if (this.source != null) {
      const u = saveRelativeUri(this.source, this.id, false,
                                relativeUris, 2)
      if (u != null) {
        r.source = u
      }
    }
                
    if (this.linkMerge != null) {
      r.linkMerge = save(this.linkMerge, false, this.id, relativeUris)
    }
                
    if (this.pickValue != null) {
      r.pickValue = save(this.pickValue, false, this.id, relativeUris)
    }
                
    if (this.loadContents != null) {
      r.loadContents = save(this.loadContents, false, this.id, relativeUris)
    }
                
    if (this.loadListing != null) {
      r.loadListing = save(this.loadListing, false, this.id, relativeUris)
    }
                
    if (this.label != null) {
      r.label = save(this.label, false, this.id, relativeUris)
    }
                
    if (this.default_ != null) {
      r.default = save(this.default_, false, this.id, relativeUris)
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
            
  static attr: Set<string> = new Set(['id','source','linkMerge','pickValue','loadContents','loadListing','label','default','valueFrom'])
}
