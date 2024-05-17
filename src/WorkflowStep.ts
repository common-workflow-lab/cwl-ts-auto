
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#WorkflowStep
 *
 * A workflow step is an executable element of a workflow.  It specifies the
 * underlying process implementation (such as `CommandLineTool` or another
 * `Workflow`) in the `run` field and connects the input and output parameters
 * of the underlying process to workflow parameters.
 * 
 * # Scatter/gather
 * 
 * To use scatter/gather,
 * [ScatterFeatureRequirement](#ScatterFeatureRequirement) must be specified
 * in the workflow or workflow step requirements.
 * 
 * A "scatter" operation specifies that the associated workflow step or
 * subworkflow should execute separately over a list of input elements.  Each
 * job making up a scatter operation is independent and may be executed
 * concurrently.
 * 
 * The `scatter` field specifies one or more input parameters which will be
 * scattered.  An input parameter may be listed more than once.  The declared
 * type of each input parameter implicitly becomes an array of items of the
 * input parameter type.  If a parameter is listed more than once, it becomes
 * a nested array.  As a result, upstream parameters which are connected to
 * scattered parameters must be arrays.
 * 
 * All output parameter types are also implicitly wrapped in arrays.  Each job
 * in the scatter results in an entry in the output array.
 * 
 * If any scattered parameter runtime value is an empty array, all outputs are
 * set to empty arrays and no work is done for the step, according to
 * applicable scattering rules.
 * 
 * If `scatter` declares more than one input parameter, `scatterMethod`
 * describes how to decompose the input into a discrete set of jobs.
 * 
 *   * **dotproduct** specifies that each of the input arrays are aligned and one
 *       element taken from each array to construct each job.  It is an error
 *       if all input arrays are not the same length.
 * 
 *   * **nested_crossproduct** specifies the Cartesian product of the inputs,
 *       producing a job for every combination of the scattered inputs.  The
 *       output must be nested arrays for each level of scattering, in the
 *       order that the input arrays are listed in the `scatter` field.
 * 
 *   * **flat_crossproduct** specifies the Cartesian product of the inputs,
 *       producing a job for every combination of the scattered inputs.  The
 *       output arrays must be flattened to a single level, but otherwise listed in the
 *       order that the input arrays are listed in the `scatter` field.
 * 
 * # Conditional execution (Optional)
 * 
 * Conditional execution makes execution of a step conditional on an
 * expression.  A step that is not executed is "skipped".  A skipped
 * step produces `null` for all output parameters.
 * 
 * The condition is evaluated after `scatter`, using the input object
 * of each individual scatter job.  This means over a set of scatter
 * jobs, some may be executed and some may be skipped.  When the
 * results are gathered, skipped steps must be `null` in the output
 * arrays.
 * 
 * The `when` field controls conditional execution.  This is an
 * expression that must be evaluated with `inputs` bound to the step
 * input object (or individual scatter job), and returns a boolean
 * value.  It is an error if this expression returns a value other
 * than `true` or `false`.
 * 
 * Conditionals in CWL are an optional feature and are not required
 * to be implemented by all consumers of CWL documents.  An
 * implementation that does not support conditionals must return a
 * fatal error when attempting to execute a workflow that uses
 * conditional constructs the implementation does not support.
 * 
 * # Subworkflows
 * 
 * To specify a nested workflow as part of a workflow step,
 * [SubworkflowFeatureRequirement](#SubworkflowFeatureRequirement) must be
 * specified in the workflow or workflow step requirements.
 * 
 * It is a fatal error if a workflow directly or indirectly invokes itself as
 * a subworkflow (recursive workflows are not allowed).
 * 
 */
export class WorkflowStep extends Saveable implements Internal.WorkflowStepProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * The unique identifier for this object.
   */
  id?: undefined | string

  /**
   * A short, human-readable label of this object.
   */
  label?: undefined | string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>

  /**
   * Defines the input parameters of the workflow step.  The process is ready to
   * run when all required input parameters are associated with concrete
   * values.  Input parameters include a schema for each parameter which is
   * used to validate the input object.  It may also be used build a user
   * interface for constructing the input object.
   * 
   */
  in_: Array<Internal.WorkflowStepInput>

  /**
   * Defines the parameters representing the output of the process.  May be
   * used to generate and/or validate the output object.
   * 
   */
  out: Array<string | Internal.WorkflowStepOutput>

  /**
   * Declares requirements that apply to either the runtime environment or the
   * workflow engine that must be met in order to execute this workflow step.  If
   * an implementation cannot satisfy all requirements, or a requirement is
   * listed which is not recognized by the implementation, it is a fatal
   * error and the implementation must not attempt to run the process,
   * unless overridden at user option.
   * 
   */
  requirements?: undefined | Array<Internal.InlineJavascriptRequirement | Internal.SchemaDefRequirement | Internal.LoadListingRequirement | Internal.DockerRequirement | Internal.SoftwareRequirement | Internal.InitialWorkDirRequirement | Internal.EnvVarRequirement | Internal.ShellCommandRequirement | Internal.ResourceRequirement | Internal.WorkReuse | Internal.NetworkAccess | Internal.InplaceUpdateRequirement | Internal.ToolTimeLimit | Internal.SubworkflowFeatureRequirement | Internal.ScatterFeatureRequirement | Internal.MultipleInputFeatureRequirement | Internal.StepInputExpressionRequirement>

  /**
   * Declares hints applying to either the runtime environment or the
   * workflow engine that may be helpful in executing this workflow step.  It is
   * not an error if an implementation cannot satisfy all hints, however
   * the implementation may report a warning.
   * 
   */
  hints?: undefined | Array<any>

  /**
   * Specifies the process to run.  If `run` is a string, it must be an absolute IRI
   * or a relative path from the primary document.
   * 
   */
  run: string | Internal.CommandLineTool | Internal.ExpressionTool | Internal.Workflow | Internal.Operation

  /**
   * If defined, only run the step when the expression evaluates to
   * `true`.  If `false` the step is skipped.  A skipped step
   * produces a `null` on each output.
   * 
   */
  when?: undefined | string
  scatter?: undefined | string | Array<string>

  /**
   * Required if `scatter` is an array of more than one element.
   * 
   */
  scatterMethod?: undefined | Internal.ScatterMethod


  constructor ({loadingOptions, extensionFields, id, label, doc, in_, out, requirements, hints, run, when, scatter, scatterMethod} : {loadingOptions?: LoadingOptions} & Internal.WorkflowStepProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.id = id
    this.label = label
    this.doc = doc
    this.in_ = in_
    this.out = out
    this.requirements = requirements
    this.hints = hints
    this.run = run
    this.when = when
    this.scatter = scatter
    this.scatterMethod = scatterMethod
  }

  /**
   * Used to construct instances of {@link WorkflowStep }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link WorkflowStep }
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

    let doc
    if ('doc' in _doc) {
      try {
        doc = await loadField(_doc.doc, LoaderInstances.unionOfundefinedtypeOrstrtypeOrarrayOfstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `doc` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let in_
    try {
      in_ = await loadField(_doc.in, LoaderInstances.idmapin_arrayOfWorkflowStepInputLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `in` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let out
    try {
      out = await loadField(_doc.out, LoaderInstances.uriunionOfarrayOfunionOfstrtypeOrWorkflowStepOutputLoaderTrueFalseNoneNone,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `out` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let requirements
    if ('requirements' in _doc) {
      try {
        requirements = await loadField(_doc.requirements, LoaderInstances.idmaprequirementsunionOfundefinedtypeOrarrayOfunionOfInlineJavascriptRequirementLoaderOrSchemaDefRequirementLoaderOrLoadListingRequirementLoaderOrDockerRequirementLoaderOrSoftwareRequirementLoaderOrInitialWorkDirRequirementLoaderOrEnvVarRequirementLoaderOrShellCommandRequirementLoaderOrResourceRequirementLoaderOrWorkReuseLoaderOrNetworkAccessLoaderOrInplaceUpdateRequirementLoaderOrToolTimeLimitLoaderOrSubworkflowFeatureRequirementLoaderOrScatterFeatureRequirementLoaderOrMultipleInputFeatureRequirementLoaderOrStepInputExpressionRequirementLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `requirements` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let hints
    if ('hints' in _doc) {
      try {
        hints = await loadField(_doc.hints, LoaderInstances.idmaphintsunionOfundefinedtypeOrarrayOfanyType,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `hints` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let run
    try {
      run = await loadField(_doc.run, LoaderInstances.uriunionOfstrtypeOrCommandLineToolLoaderOrExpressionToolLoaderOrWorkflowLoaderOrOperationLoaderFalseFalseNoneNone,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `run` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let when
    if ('when' in _doc) {
      try {
        when = await loadField(_doc.when, LoaderInstances.unionOfundefinedtypeOrExpressionLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `when` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let scatter
    if ('scatter' in _doc) {
      try {
        scatter = await loadField(_doc.scatter, LoaderInstances.uriunionOfundefinedtypeOrstrtypeOrarrayOfstrtypeFalseFalse0None,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `scatter` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let scatterMethod
    if ('scatterMethod' in _doc) {
      try {
        scatterMethod = await loadField(_doc.scatterMethod, LoaderInstances.uriunionOfundefinedtypeOrScatterMethodLoaderFalseTrueNoneNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `scatterMethod` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!WorkflowStep.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`id\`,\`label\`,\`doc\`,\`in\`,\`out\`,\`requirements\`,\`hints\`,\`run\`,\`when\`,\`scatter\`,\`scatterMethod\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'WorkflowStep'", __errors)
    }

    const schema = new WorkflowStep({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      id: id,
      label: label,
      doc: doc,
      in_: in_,
      out: out,
      requirements: requirements,
      hints: hints,
      run: run,
      when: when,
      scatter: scatter,
      scatterMethod: scatterMethod
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
                
    if (this.label != null) {
      r.label = save(this.label, false, this.id, relativeUris)
    }
                
    if (this.doc != null) {
      r.doc = save(this.doc, false, this.id, relativeUris)
    }
                
    if (this.in_ != null) {
      r.in = save(this.in_, false, this.id, relativeUris)
    }
                
    if (this.out != null) {
      const u = saveRelativeUri(this.out, this.id, true,
                                relativeUris, undefined)
      if (u != null) {
        r.out = u
      }
    }
                
    if (this.requirements != null) {
      r.requirements = save(this.requirements, false, this.id, relativeUris)
    }
                
    if (this.hints != null) {
      r.hints = save(this.hints, false, this.id, relativeUris)
    }
                
    if (this.run != null) {
      const u = saveRelativeUri(this.run, this.id, false,
                                relativeUris, undefined)
      if (u != null) {
        r.run = u
      }
    }
                
    if (this.when != null) {
      r.when = save(this.when, false, this.id, relativeUris)
    }
                
    if (this.scatter != null) {
      const u = saveRelativeUri(this.scatter, this.id, false,
                                relativeUris, 0)
      if (u != null) {
        r.scatter = u
      }
    }
                
    if (this.scatterMethod != null) {
      const u = saveRelativeUri(this.scatterMethod, this.id, false,
                                relativeUris, undefined)
      if (u != null) {
        r.scatterMethod = u
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
            
  static attr: Set<string> = new Set(['id','label','doc','in','out','requirements','hints','run','when','scatter','scatterMethod'])
}
