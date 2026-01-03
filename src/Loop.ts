
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
 * Auto-generated class implementation for http://commonwl.org/cwltool#Loop
 *
 * Prototype to enable workflow-level looping of a step.
 * 
 * Valid only under `requirements` of a https://www.commonwl.org/v1.2/Workflow.html#WorkflowStep.
 * Unlike other CWL requirements, Loop requirement is not propagated to inner steps.
 * 
 * `loopWhen` is an expansion of the CWL v1.2 `when` construct which controls
 * conditional execution.
 * 
 * Using `loopWhen` and `when` for the same step will produce an error.
 * 
 * `loopWhen` is not compatible with `scatter` at this time and combining the
 * two in the same step will produce an error.
 * 
 */
export class Loop extends Saveable implements Internal.LoopProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * cwltool:Loop
   */
  class_: string

  /**
   * Defines the input parameters of the loop iterations after the first one
   * (inputs of the first iteration are the step input parameters). If no
   * `loop` rule is specified for a given step `in` field, the initial value
   * is kept constant among all iterations.
   * 
   */
  loop: Array<Internal.LoopInput>

  /**
   * Only run the step while the expression evaluates to `true`.
   * If `false` and no iteration has been performed, the step is skipped.
   * 
   * A skipped step produces a `null` on each output.
   * 
   * The `inputs` value in the expression must be the step input object.
   * 
   * It is an error if this expression returns a value other than `true` or `false`.
   * 
   */
  loopWhen: string

  /**
   * - Specify the desired method of dealing with loop outputs
   * - Default. Propagates only the last computed element to the subsequent steps when the loop terminates.
   * - Propagates a single array with all output values to the subsequent steps when the loop terminates.
   * 
   */
  outputMethod: Internal.LoopOutputModes


  constructor ({loadingOptions, extensionFields, class_ = 'Loop', loop, loopWhen, outputMethod} : {loadingOptions?: LoadingOptions} & Internal.LoopProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.class_ = class_
    this.loop = loop
    this.loopWhen = loopWhen
    this.outputMethod = outputMethod
  }

  /**
   * Used to construct instances of {@link Loop }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link Loop }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uristrtypeFalseTrueNoneNone,
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

    let loop
    try {
      loop = await loadField(_doc.loop, LoaderInstances.idmaplooparrayOfLoopInputLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `loop` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let loopWhen
    try {
      loopWhen = await loadField(_doc.loopWhen, LoaderInstances.ExpressionLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `loopWhen` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let outputMethod
    try {
      outputMethod = await loadField(_doc.outputMethod, LoaderInstances.LoopOutputModesLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `outputMethod` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!Loop.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`class\`,\`loop\`,\`loopWhen\`,\`outputMethod\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'Loop'", __errors)
    }

    const schema = new Loop({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      class_: class_,
      loop: loop,
      loopWhen: loopWhen,
      outputMethod: outputMethod
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
                
    if (this.loop != null) {
      r.loop = save(this.loop, false, baseUrl, relativeUris)
    }
                
    if (this.loopWhen != null) {
      r.loopWhen = save(this.loopWhen, false, baseUrl, relativeUris)
    }
                
    if (this.outputMethod != null) {
      r.outputMethod = save(this.outputMethod, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['class','loop','loopWhen','outputMethod'])
}
