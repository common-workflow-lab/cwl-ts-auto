
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#ResourceRequirement
 *
 * Specify basic hardware resource requirements.
 * 
 * "min" is the minimum amount of a resource that must be reserved to
 * schedule a job. If "min" cannot be satisfied, the job should not
 * be run.
 * 
 * "max" is the maximum amount of a resource that the job shall be
 * allocated. If a node has sufficient resources, multiple jobs may
 * be scheduled on a single node provided each job's "max" resource
 * requirements are met. If a job attempts to exceed its resource
 * allocation, an implementation may deny additional resources, which
 * may result in job failure.
 * 
 * If both "min" and "max" are specified, an implementation may
 * choose to allocate any amount between "min" and "max", with the
 * actual allocation provided in the `runtime` object.
 * 
 * If "min" is specified but "max" is not, then "max" == "min"
 * If "max" is specified by "min" is not, then "min" == "max".
 * 
 * It is an error if max < min.
 * 
 * It is an error if the value of any of these fields is negative.
 * 
 * If neither "min" nor "max" is specified for a resource, use the default values below.
 * 
 */
export class ResourceRequirement extends Saveable implements Internal.ResourceRequirementProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * Always 'ResourceRequirement'
   */
  class_: Internal.ResourceRequirement_class

  /**
   * Minimum reserved number of CPU cores (default is 1).
   * 
   * May be a fractional value to indicate to a scheduling
   * algorithm that one core can be allocated to multiple
   * jobs. For example, a value of 0.25 indicates that up to 4
   * jobs may run in parallel on 1 core.  A value of 1.25 means
   * that up to 3 jobs can run on a 4 core system (4/1.25 ≈ 3).
   * 
   * Processes can only share a core allocation if the sum of each
   * of their `ramMax`, `tmpdirMax`, and `outdirMax` requests also
   * do not exceed the capacity of the node.
   * 
   * Processes sharing a core must have the same level of isolation
   * (typically a container or VM) that they would normally have.
   * 
   * The reported number of CPU cores reserved for the process,
   * which is available to expressions on the CommandLineTool as
   * `runtime.cores`, must be a non-zero integer, and may be
   * calculated by rounding up the cores request to the next whole
   * number.
   * 
   * Scheduling systems may allocate fractional CPU resources by
   * setting quotas or scheduling weights.  Scheduling systems that
   * do not support fractional CPUs may round up the request to the
   * next whole number.
   * 
   */
  coresMin?: undefined | number | string

  /**
   * Maximum reserved number of CPU cores.
   * 
   * See `coresMin` for discussion about fractional CPU requests.
   * 
   */
  coresMax?: undefined | number | string

  /**
   * Minimum reserved RAM in mebibytes (2**20) (default is 256)
   * 
   * May be a fractional value.  If so, the actual RAM request must
   * be rounded up to the next whole number.  The reported amount of
   * RAM reserved for the process, which is available to
   * expressions on the CommandLineTool as `runtime.ram`, must be a
   * non-zero integer.
   * 
   */
  ramMin?: undefined | number | string

  /**
   * Maximum reserved RAM in mebibytes (2**20)
   * 
   * See `ramMin` for discussion about fractional RAM requests.
   * 
   */
  ramMax?: undefined | number | string

  /**
   * Minimum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20) (default is 1024)
   * 
   * May be a fractional value.  If so, the actual storage request
   * must be rounded up to the next whole number.  The reported
   * amount of storage reserved for the process, which is available
   * to expressions on the CommandLineTool as `runtime.tmpdirSize`,
   * must be a non-zero integer.
   * 
   */
  tmpdirMin?: undefined | number | string

  /**
   * Maximum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20)
   * 
   * See `tmpdirMin` for discussion about fractional storage requests.
   * 
   */
  tmpdirMax?: undefined | number | string

  /**
   * Minimum reserved filesystem based storage for the designated output directory, in mebibytes (2**20) (default is 1024)
   * 
   * May be a fractional value.  If so, the actual storage request
   * must be rounded up to the next whole number.  The reported
   * amount of storage reserved for the process, which is available
   * to expressions on the CommandLineTool as `runtime.outdirSize`,
   * must be a non-zero integer.
   * 
   */
  outdirMin?: undefined | number | string

  /**
   * Maximum reserved filesystem based storage for the designated output directory, in mebibytes (2**20)
   * 
   * See `outdirMin` for discussion about fractional storage requests.
   * 
   */
  outdirMax?: undefined | number | string


  constructor ({loadingOptions, extensionFields, class_ = Internal.ResourceRequirement_class.RESOURCEREQUIREMENT, coresMin, coresMax, ramMin, ramMax, tmpdirMin, tmpdirMax, outdirMin, outdirMax} : {loadingOptions?: LoadingOptions} & Internal.ResourceRequirementProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.class_ = class_
    this.coresMin = coresMin
    this.coresMax = coresMax
    this.ramMin = ramMin
    this.ramMax = ramMax
    this.tmpdirMin = tmpdirMin
    this.tmpdirMax = tmpdirMax
    this.outdirMin = outdirMin
    this.outdirMax = outdirMax
  }

  /**
   * Used to construct instances of {@link ResourceRequirement }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link ResourceRequirement }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriResourceRequirement_classLoaderFalseTrueNoneNone,
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

    let coresMin
    if ('coresMin' in _doc) {
      try {
        coresMin = await loadField(_doc.coresMin, LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `coresMin` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let coresMax
    if ('coresMax' in _doc) {
      try {
        coresMax = await loadField(_doc.coresMax, LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `coresMax` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let ramMin
    if ('ramMin' in _doc) {
      try {
        ramMin = await loadField(_doc.ramMin, LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `ramMin` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let ramMax
    if ('ramMax' in _doc) {
      try {
        ramMax = await loadField(_doc.ramMax, LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `ramMax` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let tmpdirMin
    if ('tmpdirMin' in _doc) {
      try {
        tmpdirMin = await loadField(_doc.tmpdirMin, LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `tmpdirMin` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let tmpdirMax
    if ('tmpdirMax' in _doc) {
      try {
        tmpdirMax = await loadField(_doc.tmpdirMax, LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `tmpdirMax` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let outdirMin
    if ('outdirMin' in _doc) {
      try {
        outdirMin = await loadField(_doc.outdirMin, LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `outdirMin` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let outdirMax
    if ('outdirMax' in _doc) {
      try {
        outdirMax = await loadField(_doc.outdirMax, LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `outdirMax` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!ResourceRequirement.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`coresMin\`,\`coresMax\`,\`ramMin\`,\`ramMax\`,\`tmpdirMin\`,\`tmpdirMax\`,\`outdirMin\`,\`outdirMax\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'ResourceRequirement'", __errors)
    }

    const schema = new ResourceRequirement({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      coresMin: coresMin,
      coresMax: coresMax,
      ramMin: ramMin,
      ramMax: ramMax,
      tmpdirMin: tmpdirMin,
      tmpdirMax: tmpdirMax,
      outdirMin: outdirMin,
      outdirMax: outdirMax
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
                
    if (this.coresMin != null) {
      r.coresMin = save(this.coresMin, false, baseUrl, relativeUris)
    }
                
    if (this.coresMax != null) {
      r.coresMax = save(this.coresMax, false, baseUrl, relativeUris)
    }
                
    if (this.ramMin != null) {
      r.ramMin = save(this.ramMin, false, baseUrl, relativeUris)
    }
                
    if (this.ramMax != null) {
      r.ramMax = save(this.ramMax, false, baseUrl, relativeUris)
    }
                
    if (this.tmpdirMin != null) {
      r.tmpdirMin = save(this.tmpdirMin, false, baseUrl, relativeUris)
    }
                
    if (this.tmpdirMax != null) {
      r.tmpdirMax = save(this.tmpdirMax, false, baseUrl, relativeUris)
    }
                
    if (this.outdirMin != null) {
      r.outdirMin = save(this.outdirMin, false, baseUrl, relativeUris)
    }
                
    if (this.outdirMax != null) {
      r.outdirMax = save(this.outdirMax, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['class','coresMin','coresMax','ramMin','ramMax','tmpdirMin','tmpdirMax','outdirMin','outdirMax'])
}
