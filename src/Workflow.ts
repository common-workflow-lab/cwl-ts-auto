
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
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#Workflow
 *
 * A workflow describes a set of **steps** and the **dependencies** between
 * those steps.  When a step produces output that will be consumed by a
 * second step, the first step is a dependency of the second step.
 * 
 * When there is a dependency, the workflow engine must execute the preceding
 * step and wait for it to successfully produce output before executing the
 * dependent step.  If two steps are defined in the workflow graph that
 * are not directly or indirectly dependent, these steps are **independent**,
 * and may execute in any order or execute concurrently.  A workflow is
 * complete when all steps have been executed.
 * 
 * Dependencies between parameters are expressed using the `source`
 * field on [workflow step input parameters](#WorkflowStepInput) and
 * `outputSource` field on [workflow output
 * parameters](#WorkflowOutputParameter).
 * 
 * The `source` field on each workflow step input parameter expresses
 * the data links that contribute to the value of the step input
 * parameter (the "sink").  A workflow step can only begin execution
 * when every data link connected to a step has been fulfilled.
 * 
 * The `outputSource` field on each workflow step input parameter
 * expresses the data links that contribute to the value of the
 * workflow output parameter (the "sink").  Workflow execution cannot
 * complete successfully until every data link connected to an output
 * parameter has been fulfilled.
 * 
 * ## Workflow success and failure
 * 
 * A completed step must result in one of `success`, `temporaryFailure` or
 * `permanentFailure` states.  An implementation may choose to retry a step
 * execution which resulted in `temporaryFailure`.  An implementation may
 * choose to either continue running other steps of a workflow, or terminate
 * immediately upon `permanentFailure`.
 * 
 * * If any step of a workflow execution results in `permanentFailure`, then
 * the workflow status is `permanentFailure`.
 * 
 * * If one or more steps result in `temporaryFailure` and all other steps
 * complete `success` or are not executed, then the workflow status is
 * `temporaryFailure`.
 * 
 * * If all workflow steps are executed and complete with `success`, then the
 * workflow status is `success`.
 * 
 * # Extensions
 * 
 * [ScatterFeatureRequirement](#ScatterFeatureRequirement) and
 * [SubworkflowFeatureRequirement](#SubworkflowFeatureRequirement) are
 * available as standard [extensions](#Extensions_and_Metadata) to core
 * workflow semantics.
 * 
 */
export class Workflow extends Saveable implements Internal.WorkflowProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * The unique identifier for this object.
   * 
   * Only useful for `$graph` at `Process` level. Should not be exposed
   * to users in graphical or terminal user interfaces.
   * 
   */
  id?: undefined | string
  class_: Internal.Workflow_class

  /**
   * A short, human-readable label of this object.
   */
  label?: undefined | string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>

  /**
   * Defines the input parameters of the process.  The process is ready to
   * run when all required input parameters are associated with concrete
   * values.  Input parameters include a schema for each parameter which is
   * used to validate the input object.  It may also be used to build a user
   * interface for constructing the input object.
   * 
   * When accepting an input object, all input parameters must have a value.
   * If an input parameter is missing from the input object, it must be
   * assigned a value of `null` (or the value of `default` for that
   * parameter, if provided) for the purposes of validation and evaluation
   * of expressions.
   * 
   */
  inputs: Array<Internal.WorkflowInputParameter>

  /**
   * Defines the parameters representing the output of the process.  May be
   * used to generate and/or validate the output object.
   * 
   */
  outputs: Array<Internal.WorkflowOutputParameter>

  /**
   * Declares requirements that apply to either the runtime environment or the
   * workflow engine that must be met in order to execute this process.  If
   * an implementation cannot satisfy all requirements, or a requirement is
   * listed which is not recognized by the implementation, it is a fatal
   * error and the implementation must not attempt to run the process,
   * unless overridden at user option.
   * 
   */
  requirements?: undefined | Array<Internal.InlineJavascriptRequirement | Internal.SchemaDefRequirement | Internal.LoadListingRequirement | Internal.DockerRequirement | Internal.SoftwareRequirement | Internal.InitialWorkDirRequirement | Internal.EnvVarRequirement | Internal.ShellCommandRequirement | Internal.ResourceRequirement | Internal.WorkReuse | Internal.NetworkAccess | Internal.InplaceUpdateRequirement | Internal.ToolTimeLimit | Internal.SubworkflowFeatureRequirement | Internal.ScatterFeatureRequirement | Internal.MultipleInputFeatureRequirement | Internal.StepInputExpressionRequirement>

  /**
   * Declares hints applying to either the runtime environment or the
   * workflow engine that may be helpful in executing this process.  It is
   * not an error if an implementation cannot satisfy all hints, however
   * the implementation may report a warning.
   * 
   */
  hints?: undefined | Array<Internal.InlineJavascriptRequirement | Internal.SchemaDefRequirement | Internal.LoadListingRequirement | Internal.DockerRequirement | Internal.SoftwareRequirement | Internal.InitialWorkDirRequirement | Internal.EnvVarRequirement | Internal.ShellCommandRequirement | Internal.ResourceRequirement | Internal.WorkReuse | Internal.NetworkAccess | Internal.InplaceUpdateRequirement | Internal.ToolTimeLimit | Internal.SubworkflowFeatureRequirement | Internal.ScatterFeatureRequirement | Internal.MultipleInputFeatureRequirement | Internal.StepInputExpressionRequirement | any>

  /**
   * CWL document version. Always required at the document root. Not
   * required for a Process embedded inside another Process.
   * 
   */
  cwlVersion?: undefined | Internal.CWLVersion

  /**
   * An identifier for the type of computational operation, of this Process.
   * Especially useful for [`Operation`](Workflow.html#Operation), but can also be used for
   * [`CommandLineTool`](CommandLineTool.html#CommandLineTool),
   * [`Workflow`](Workflow.html#Workflow), or [ExpressionTool](Workflow.html#ExpressionTool).
   * 
   * If provided, then this must be an IRI of a concept node that
   * represents the type of operation, preferably defined within an ontology.
   * 
   * For example, in the domain of bioinformatics, one can use an IRI from
   * the EDAM Ontology's [Operation concept nodes](http://edamontology.org/operation_0004),
   * like [Alignment](http://edamontology.org/operation_2928),
   * or [Clustering](http://edamontology.org/operation_3432); or a more
   * specific Operation concept like
   * [Split read mapping](http://edamontology.org/operation_3199).
   * 
   */
  intent?: undefined | Array<string>

  /**
   * The individual steps that make up the workflow.  Each step is executed when all of its
   * input data links are fulfilled.  An implementation may choose to execute
   * the steps in a different order than listed and/or execute steps
   * concurrently, provided that dependencies between steps are met.
   * 
   */
  steps: Array<Internal.WorkflowStep>


  constructor ({loadingOptions, extensionFields, id, class_ = Internal.Workflow_class.WORKFLOW, label, doc, inputs, outputs, requirements, hints, cwlVersion, intent, steps} : {loadingOptions?: LoadingOptions} & Internal.WorkflowProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.id = id
    this.class_ = class_
    this.label = label
    this.doc = doc
    this.inputs = inputs
    this.outputs = outputs
    this.requirements = requirements
    this.hints = hints
    this.cwlVersion = cwlVersion
    this.intent = intent
    this.steps = steps
  }

  /**
   * Used to construct instances of {@link Workflow }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link Workflow }
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
            
    let class_
    try {
      class_ = await loadField(_doc.class, LoaderInstances.uriWorkflow_classLoaderFalseTrueNoneNone,
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

    let inputs
    try {
      inputs = await loadField(_doc.inputs, LoaderInstances.idmapinputsarrayOfWorkflowInputParameterLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `inputs` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let outputs
    try {
      outputs = await loadField(_doc.outputs, LoaderInstances.idmapoutputsarrayOfWorkflowOutputParameterLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `outputs` field is not valid because: ', [e])
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
        hints = await loadField(_doc.hints, LoaderInstances.idmaphintsunionOfundefinedtypeOrarrayOfunionOfInlineJavascriptRequirementLoaderOrSchemaDefRequirementLoaderOrLoadListingRequirementLoaderOrDockerRequirementLoaderOrSoftwareRequirementLoaderOrInitialWorkDirRequirementLoaderOrEnvVarRequirementLoaderOrShellCommandRequirementLoaderOrResourceRequirementLoaderOrWorkReuseLoaderOrNetworkAccessLoaderOrInplaceUpdateRequirementLoaderOrToolTimeLimitLoaderOrSubworkflowFeatureRequirementLoaderOrScatterFeatureRequirementLoaderOrMultipleInputFeatureRequirementLoaderOrStepInputExpressionRequirementLoaderOranyType,
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

    let cwlVersion
    if ('cwlVersion' in _doc) {
      try {
        cwlVersion = await loadField(_doc.cwlVersion, LoaderInstances.uriunionOfundefinedtypeOrCWLVersionLoaderFalseTrueNoneNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `cwlVersion` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let intent
    if ('intent' in _doc) {
      try {
        intent = await loadField(_doc.intent, LoaderInstances.uriunionOfundefinedtypeOrarrayOfstrtypeTrueFalseNoneNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `intent` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let steps
    try {
      steps = await loadField(_doc.steps, LoaderInstances.idmapstepsunionOfarrayOfWorkflowStepLoader,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `steps` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!Workflow.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`id\`,\`label\`,\`doc\`,\`inputs\`,\`outputs\`,\`requirements\`,\`hints\`,\`cwlVersion\`,\`intent\`,\`class\`,\`steps\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'Workflow'", __errors)
    }

    const schema = new Workflow({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      id: id,
      label: label,
      doc: doc,
      inputs: inputs,
      outputs: outputs,
      requirements: requirements,
      hints: hints,
      cwlVersion: cwlVersion,
      intent: intent,
      class_: class_,
      steps: steps
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
                
    if (this.class_ != null) {
      const u = saveRelativeUri(this.class_, this.id, false,
                                relativeUris, undefined)
      if (u != null) {
        r.class = u
      }
    }
                
    if (this.label != null) {
      r.label = save(this.label, false, this.id, relativeUris)
    }
                
    if (this.doc != null) {
      r.doc = save(this.doc, false, this.id, relativeUris)
    }
                
    if (this.inputs != null) {
      r.inputs = save(this.inputs, false, this.id, relativeUris)
    }
                
    if (this.outputs != null) {
      r.outputs = save(this.outputs, false, this.id, relativeUris)
    }
                
    if (this.requirements != null) {
      r.requirements = save(this.requirements, false, this.id, relativeUris)
    }
                
    if (this.hints != null) {
      r.hints = save(this.hints, false, this.id, relativeUris)
    }
                
    if (this.cwlVersion != null) {
      const u = saveRelativeUri(this.cwlVersion, this.id, false,
                                relativeUris, undefined)
      if (u != null) {
        r.cwlVersion = u
      }
    }
                
    if (this.intent != null) {
      const u = saveRelativeUri(this.intent, this.id, true,
                                relativeUris, undefined)
      if (u != null) {
        r.intent = u
      }
    }
                
    if (this.steps != null) {
      r.steps = save(this.steps, false, this.id, relativeUris)
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
            
  static attr: Set<string> = new Set(['id','label','doc','inputs','outputs','requirements','hints','cwlVersion','intent','class','steps'])
}
