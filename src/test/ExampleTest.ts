
import { loadDocument, loadDocumentByString } from '../'
import fs from 'fs'
import url from 'url'

describe('Example Tests', () => {

    it('valid_stage_unprovided_file', async () => {
        await loadDocument(__dirname + '/data/examples/valid_stage-unprovided-file.cwl')
    })
    it('valid_stage_unprovided_file by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_stage-unprovided-file.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_linkfile', async () => {
        await loadDocument(__dirname + '/data/examples/valid_linkfile.cwl')
    })
    it('valid_linkfile by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_linkfile.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_fileobjs1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-fileobjs1.cwl')
    })
    it('valid_iwd_fileobjs1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-fileobjs1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_wc_tool_shortcut', async () => {
        await loadDocument(__dirname + '/data/examples/valid_wc-tool-shortcut.cwl')
    })
    it('valid_wc_tool_shortcut by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_wc-tool-shortcut.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_record_outputeval', async () => {
        await loadDocument(__dirname + '/data/examples/valid_record_outputeval.cwl')
    })
    it('valid_record_outputeval by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_record_outputeval.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_output_arrays_int_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_output-arrays-int-wf.cwl')
    })
    it('valid_output_arrays_int_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_output-arrays-int-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat3_from_dir', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat3-from-dir.cwl')
    })
    it('valid_cat3_from_dir by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat3-from-dir.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_pass_unconnected', async () => {
        await loadDocument(__dirname + '/data/examples/valid_pass-unconnected.cwl')
    })
    it('valid_pass_unconnected by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_pass-unconnected.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_output_arrays_int', async () => {
        await loadDocument(__dirname + '/data/examples/valid_output-arrays-int.cwl')
    })
    it('valid_output_arrays_int by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_output-arrays-int.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines7_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines7-wf.cwl')
    })
    it('valid_count_lines7_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines7-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_passthrough3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-passthrough3.cwl')
    })
    it('valid_iwd_passthrough3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-passthrough3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_007', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-007.cwl')
    })
    it('valid_cond_wf_007 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-007.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_symlink_legal', async () => {
        await loadDocument(__dirname + '/data/examples/valid_symlink-legal.cwl')
    })
    it('valid_symlink_legal by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_symlink-legal.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_any_type_compat', async () => {
        await loadDocument(__dirname + '/data/examples/valid_any-type-compat.cwl')
    })
    it('valid_any_type_compat by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_any-type-compat.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_docker_output_dir', async () => {
        await loadDocument(__dirname + '/data/examples/valid_docker-output-dir.cwl')
    })
    it('valid_docker_output_dir by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_docker-output-dir.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_011', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-011.cwl')
    })
    it('valid_cond_wf_011 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-011.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_record_output_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_record-output-wf.cwl')
    })
    it('valid_record_output_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_record-output-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_scatter_valuefrom_wf3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_scatter-valuefrom-wf3.cwl')
    })
    it('valid_scatter_valuefrom_wf3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_scatter-valuefrom-wf3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_record_output', async () => {
        await loadDocument(__dirname + '/data/examples/valid_record-output.cwl')
    })
    it('valid_record_output by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_record-output.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_wf_loadContents2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_wf-loadContents2.cwl')
    })
    it('valid_wf_loadContents2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_wf-loadContents2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_timelimit2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_timelimit2.cwl')
    })
    it('valid_timelimit2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_timelimit2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_anon_enum_inside_array_inside_schemadef', async () => {
        await loadDocument(__dirname + '/data/examples/valid_anon_enum_inside_array_inside_schemadef.cwl')
    })
    it('valid_anon_enum_inside_array_inside_schemadef by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_anon_enum_inside_array_inside_schemadef.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat-tool.cwl')
    })
    it('valid_cat_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_imported_hint', async () => {
        await loadDocument(__dirname + '/data/examples/valid_imported-hint.cwl')
    })
    it('valid_imported_hint by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_imported-hint.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_timelimit3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_timelimit3.cwl')
    })
    it('valid_timelimit3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_timelimit3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_wf_loadContents4', async () => {
        await loadDocument(__dirname + '/data/examples/valid_wf-loadContents4.cwl')
    })
    it('valid_wf_loadContents4 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_wf-loadContents4.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_docker_array_secondaryfiles', async () => {
        await loadDocument(__dirname + '/data/examples/valid_docker-array-secondaryfiles.cwl')
    })
    it('valid_docker_array_secondaryfiles by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_docker-array-secondaryfiles.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_wc2_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_wc2-tool.cwl')
    })
    it('valid_wc2_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_wc2-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_passthrough1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-passthrough1.cwl')
    })
    it('valid_iwd_passthrough1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-passthrough1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_stderr', async () => {
        await loadDocument(__dirname + '/data/examples/valid_stderr.cwl')
    })
    it('valid_stderr by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_stderr.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_wf_loadContents3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_wf-loadContents3.cwl')
    })
    it('valid_wf_loadContents3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_wf-loadContents3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_fileobjs2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-fileobjs2.cwl')
    })
    it('valid_iwd_fileobjs2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-fileobjs2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_schemadef_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_schemadef-tool.cwl')
    })
    it('valid_schemadef_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_schemadef-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_stderr_mediumcut', async () => {
        await loadDocument(__dirname + '/data/examples/valid_stderr-mediumcut.cwl')
    })
    it('valid_stderr_mediumcut by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_stderr-mediumcut.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwdr_entry', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwdr-entry.cwl')
    })
    it('valid_iwdr_entry by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwdr-entry.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines17_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines17-wf.cwl')
    })
    it('valid_count_lines17_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines17-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_updatedir_inplace', async () => {
        await loadDocument(__dirname + '/data/examples/valid_updatedir_inplace.cwl')
    })
    it('valid_updatedir_inplace by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_updatedir_inplace.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_storage_float', async () => {
        await loadDocument(__dirname + '/data/examples/valid_storage_float.cwl')
    })
    it('valid_storage_float by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_storage_float.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_sum_wf_noET', async () => {
        await loadDocument(__dirname + '/data/examples/valid_sum-wf-noET.cwl')
    })
    it('valid_sum_wf_noET by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_sum-wf-noET.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines2_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines2-wf.cwl')
    })
    it('valid_count_lines2_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines2-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_wf_ren', async () => {
        await loadDocument(__dirname + '/data/examples/valid_wf_ren.cwl')
    })
    it('valid_wf_ren by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_wf_ren.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines14_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines14-wf.cwl')
    })
    it('valid_count_lines14_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines14-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_009_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-009_nojs.cwl')
    })
    it('valid_cond_wf_009_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-009_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_env_wf3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_env-wf3.cwl')
    })
    it('valid_env_wf3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_env-wf3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines6_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines6-wf.cwl')
    })
    it('valid_count_lines6_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines6-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_vf_concat', async () => {
        await loadDocument(__dirname + '/data/examples/valid_vf-concat.cwl')
    })
    it('valid_vf_concat by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_vf-concat.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_002', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-002.cwl')
    })
    it('valid_cond_wf_002 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-002.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_listing_deep1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_listing_deep1.cwl')
    })
    it('valid_listing_deep1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_listing_deep1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_scatter_valuefrom_wf5', async () => {
        await loadDocument(__dirname + '/data/examples/valid_scatter-valuefrom-wf5.cwl')
    })
    it('valid_scatter_valuefrom_wf5 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_scatter-valuefrom-wf5.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_recursive_input_directory', async () => {
        await loadDocument(__dirname + '/data/examples/valid_recursive-input-directory.cwl')
    })
    it('valid_recursive_input_directory by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_recursive-input-directory.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines9_wf_noET', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines9-wf-noET.cwl')
    })
    it('valid_count_lines9_wf_noET by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines9-wf-noET.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_formattest3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_formattest3.cwl')
    })
    it('valid_formattest3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_formattest3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_synth_file', async () => {
        await loadDocument(__dirname + '/data/examples/valid_synth-file.cwl')
    })
    it('valid_synth_file by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_synth-file.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat3_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat3-tool.cwl')
    })
    it('valid_cat3_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat3-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_operation', async () => {
        await loadDocument(__dirname + '/data/examples/valid_operation.cwl')
    })
    it('valid_operation by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_operation.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_container_entryname1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-container-entryname1.cwl')
    })
    it('valid_iwd_container_entryname1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-container-entryname1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_rename_inputs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_rename-inputs.cwl')
    })
    it('valid_rename_inputs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_rename-inputs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_js_quote', async () => {
        await loadDocument(__dirname + '/data/examples/valid_js-quote.cwl')
    })
    it('valid_js_quote by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_js-quote.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_writable_dir', async () => {
        await loadDocument(__dirname + '/data/examples/valid_writable-dir.cwl')
    })
    it('valid_writable_dir by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_writable-dir.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_colon:test', async () => {
        await loadDocument(__dirname + '/data/examples/valid_colon:test.cwl')
    })
    it('valid_colon:test by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_colon:test.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_null_expression2_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_null-expression2-tool.cwl')
    })
    it('valid_null_expression2_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_null-expression2-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_no_outputs_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_no-outputs-wf.cwl')
    })
    it('valid_no_outputs_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_no-outputs-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines3_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines3-wf.cwl')
    })
    it('valid_count_lines3_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines3-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_scatter_valuefrom_wf4', async () => {
        await loadDocument(__dirname + '/data/examples/valid_scatter-valuefrom-wf4.cwl')
    })
    it('valid_scatter_valuefrom_wf4 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_scatter-valuefrom-wf4.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines11_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines11-wf.cwl')
    })
    it('valid_count_lines11_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines11-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwdr_with_nested_dirs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwdr_with_nested_dirs.cwl')
    })
    it('valid_iwdr_with_nested_dirs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwdr_with_nested_dirs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines1_wf_noET', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines1-wf-noET.cwl')
    })
    it('valid_count_lines1_wf_noET by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines1-wf-noET.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_echo_tool_default', async () => {
        await loadDocument(__dirname + '/data/examples/valid_echo-tool-default.cwl')
    })
    it('valid_echo_tool_default by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_echo-tool-default.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_003_1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-003.1.cwl')
    })
    it('valid_cond_wf_003_1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-003.1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_004_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-004_nojs.cwl')
    })
    it('valid_cond_wf_004_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-004_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_glob_path_error', async () => {
        await loadDocument(__dirname + '/data/examples/valid_glob-path-error.cwl')
    })
    it('valid_glob_path_error by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_glob-path-error.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_fail_unspecified_input', async () => {
        await loadDocument(__dirname + '/data/examples/valid_fail-unspecified-input.cwl')
    })
    it('valid_fail_unspecified_input by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_fail-unspecified-input.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_inline_js', async () => {
        await loadDocument(__dirname + '/data/examples/valid_inline-js.cwl')
    })
    it('valid_inline_js by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_inline-js.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines16_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines16-wf.cwl')
    })
    it('valid_count_lines16_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines16-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_wc_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_wc-tool.cwl')
    })
    it('valid_wc_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_wc-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_steplevel_resreq', async () => {
        await loadDocument(__dirname + '/data/examples/valid_steplevel-resreq.cwl')
    })
    it('valid_steplevel_resreq by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_steplevel-resreq.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_jsondump3_nl', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-jsondump3-nl.cwl')
    })
    it('valid_iwd_jsondump3_nl by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-jsondump3-nl.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_io_int_default_tool_and_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_io-int-default-tool-and-wf.cwl')
    })
    it('valid_io_int_default_tool_and_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_io-int-default-tool-and-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_nested_array', async () => {
        await loadDocument(__dirname + '/data/examples/valid_nested-array.cwl')
    })
    it('valid_nested_array by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_nested-array.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_no_inputs_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_no-inputs-tool.cwl')
    })
    it('valid_no_inputs_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_no-inputs-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_stderr_shortcut', async () => {
        await loadDocument(__dirname + '/data/examples/valid_stderr-shortcut.cwl')
    })
    it('valid_stderr_shortcut by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_stderr-shortcut.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_007_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-007_nojs.cwl')
    })
    it('valid_cond_wf_007_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-007_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_record_in_secondaryFiles_missing_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_record-in-secondaryFiles-missing-wf.cwl')
    })
    it('valid_record_in_secondaryFiles_missing_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_record-in-secondaryFiles-missing-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_011_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-011_nojs.cwl')
    })
    it('valid_cond_wf_011_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-011_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_networkaccess2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_networkaccess2.cwl')
    })
    it('valid_networkaccess2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_networkaccess2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_bash_line_continuation_with_expression', async () => {
        await loadDocument(__dirname + '/data/examples/valid_bash-line-continuation-with-expression.cwl')
    })
    it('valid_bash_line_continuation_with_expression by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_bash-line-continuation-with-expression.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_mkdir', async () => {
        await loadDocument(__dirname + '/data/examples/valid_mkdir.cwl')
    })
    it('valid_mkdir by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_mkdir.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_valueFrom_constant', async () => {
        await loadDocument(__dirname + '/data/examples/valid_valueFrom-constant.cwl')
    })
    it('valid_valueFrom_constant by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_valueFrom-constant.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_test_cwl_out2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_test-cwl-out2.cwl')
    })
    it('valid_test_cwl_out2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_test-cwl-out2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_metadata', async () => {
        await loadDocument(__dirname + '/data/examples/valid_metadata.cwl')
    })
    it('valid_metadata by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_metadata.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_foo', async () => {
        await loadDocument(__dirname + '/data/examples/valid_foo.cwl')
    })
    it('valid_foo by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_foo.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines9_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines9-wf.cwl')
    })
    it('valid_count_lines9_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines9-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_io_any_wf_1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_io-any-wf-1.cwl')
    })
    it('valid_io_any_wf_1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_io-any-wf-1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_io_file_default_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_io-file-default-wf.cwl')
    })
    it('valid_io_file_default_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_io-file-default-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_empty_array_input', async () => {
        await loadDocument(__dirname + '/data/examples/valid_empty-array-input.cwl')
    })
    it('valid_empty_array_input by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_empty-array-input.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_inpdir_update_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_inpdir_update_wf.cwl')
    })
    it('valid_inpdir_update_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_inpdir_update_wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_wc3_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_wc3-tool.cwl')
    })
    it('valid_wc3_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_wc3-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dir7', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dir7.cwl')
    })
    it('valid_dir7 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dir7.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_binding_test', async () => {
        await loadDocument(__dirname + '/data/examples/valid_binding-test.cwl')
    })
    it('valid_binding_test by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_binding-test.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_output_reference_workflow_input', async () => {
        await loadDocument(__dirname + '/data/examples/valid_output_reference_workflow_input.cwl')
    })
    it('valid_output_reference_workflow_input by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_output_reference_workflow_input.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines5_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines5-wf.cwl')
    })
    it('valid_count_lines5_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines5-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_networkaccess', async () => {
        await loadDocument(__dirname + '/data/examples/valid_networkaccess.cwl')
    })
    it('valid_networkaccess by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_networkaccess.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat3_tool_docker', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat3-tool-docker.cwl')
    })
    it('valid_cat3_tool_docker by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat3-tool-docker.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_optional_output', async () => {
        await loadDocument(__dirname + '/data/examples/valid_optional-output.cwl')
    })
    it('valid_optional_output by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_optional-output.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines8_wf_noET', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines8-wf-noET.cwl')
    })
    it('valid_count_lines8_wf_noET by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines8-wf-noET.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_scatter_valuefrom_wf2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_scatter-valuefrom-wf2.cwl')
    })
    it('valid_scatter_valuefrom_wf2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_scatter-valuefrom-wf2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_touch', async () => {
        await loadDocument(__dirname + '/data/examples/valid_touch.cwl')
    })
    it('valid_touch by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_touch.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat1_testcli', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat1-testcli.cwl')
    })
    it('valid_cat1_testcli by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat1-testcli.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dir2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dir2.cwl')
    })
    it('valid_dir2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dir2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_io_any_1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_io-any-1.cwl')
    })
    it('valid_io_any_1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_io-any-1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_revtool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_revtool.cwl')
    })
    it('valid_revtool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_revtool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat_tool_shortcut', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat-tool-shortcut.cwl')
    })
    it('valid_cat_tool_shortcut by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat-tool-shortcut.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_002_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-002_nojs.cwl')
    })
    it('valid_cond_wf_002_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-002_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_bool_empty_inputbinding', async () => {
        await loadDocument(__dirname + '/data/examples/valid_bool-empty-inputbinding.cwl')
    })
    it('valid_bool_empty_inputbinding by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_bool-empty-inputbinding.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_env_tool1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_env-tool1.cwl')
    })
    it('valid_env_tool1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_env-tool1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_timelimit3_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_timelimit3-wf.cwl')
    })
    it('valid_timelimit3_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_timelimit3-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_colon_test_output', async () => {
        await loadDocument(__dirname + '/data/examples/valid_colon_test_output.cwl')
    })
    it('valid_colon_test_output by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_colon_test_output.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_anon_enum_inside_array', async () => {
        await loadDocument(__dirname + '/data/examples/valid_anon_enum_inside_array.cwl')
    })
    it('valid_anon_enum_inside_array by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_anon_enum_inside_array.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_no_outputs_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_no-outputs-tool.cwl')
    })
    it('valid_no_outputs_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_no-outputs-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_echo_wf_default', async () => {
        await loadDocument(__dirname + '/data/examples/valid_echo-wf-default.cwl')
    })
    it('valid_echo_wf_default by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_echo-wf-default.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_io_int_optional_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_io-int-optional-wf.cwl')
    })
    it('valid_io_int_optional_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_io-int-optional-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_001', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-001.cwl')
    })
    it('valid_cond_wf_001 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-001.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat3_tool_shortcut', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat3-tool-shortcut.cwl')
    })
    it('valid_cat3_tool_shortcut by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat3-tool-shortcut.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_012_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-012_nojs.cwl')
    })
    it('valid_cond_wf_012_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-012_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_013_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-013_nojs.cwl')
    })
    it('valid_cond_wf_013_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-013_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines11_extra_step_wf_noET', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines11-extra-step-wf-noET.cwl')
    })
    it('valid_count_lines11_extra_step_wf_noET by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines11-extra-step-wf-noET.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_001_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-001_nojs.cwl')
    })
    it('valid_cond_wf_001_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-001_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_sum_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_sum-wf.cwl')
    })
    it('valid_sum_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_sum-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_stage_file_array', async () => {
        await loadDocument(__dirname + '/data/examples/valid_stage_file_array.cwl')
    })
    it('valid_stage_file_array by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_stage_file_array.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_003', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-003.cwl')
    })
    it('valid_cond_wf_003 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-003.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_initialworkdir_glob_fullpath', async () => {
        await loadDocument(__dirname + '/data/examples/valid_initialworkdir-glob-fullpath.cwl')
    })
    it('valid_initialworkdir_glob_fullpath by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_initialworkdir-glob-fullpath.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines11_null_step_wf_noET', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines11-null-step-wf-noET.cwl')
    })
    it('valid_count_lines11_null_step_wf_noET by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines11-null-step-wf-noET.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_container_entryname4', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-container-entryname4.cwl')
    })
    it('valid_iwd_container_entryname4 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-container-entryname4.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_echo_position_expr', async () => {
        await loadDocument(__dirname + '/data/examples/valid_echo-position-expr.cwl')
    })
    it('valid_echo_position_expr by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_echo-position-expr.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_scatter_wf4', async () => {
        await loadDocument(__dirname + '/data/examples/valid_scatter-wf4.cwl')
    })
    it('valid_scatter_wf4 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_scatter-wf4.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_env_wf2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_env-wf2.cwl')
    })
    it('valid_env_wf2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_env-wf2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_no_inputs_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_no-inputs-wf.cwl')
    })
    it('valid_no_inputs_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_no-inputs-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_scatter_wf2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_scatter-wf2.cwl')
    })
    it('valid_scatter_wf2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_scatter-wf2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_013', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-013.cwl')
    })
    it('valid_cond_wf_013 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-013.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_runtime_outdir', async () => {
        await loadDocument(__dirname + '/data/examples/valid_runtime-outdir.cwl')
    })
    it('valid_runtime_outdir by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_runtime-outdir.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_010', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-010.cwl')
    })
    it('valid_cond_wf_010 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-010.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_tool_v12', async () => {
        await loadDocument(__dirname + '/data/examples/valid_tool-v12.cwl')
    })
    it('valid_tool_v12 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_tool-v12.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_glob_expr_list', async () => {
        await loadDocument(__dirname + '/data/examples/valid_glob-expr-list.cwl')
    })
    it('valid_glob_expr_list by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_glob-expr-list.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_runtime_paths_distinct', async () => {
        await loadDocument(__dirname + '/data/examples/valid_runtime-paths-distinct.cwl')
    })
    it('valid_runtime_paths_distinct by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_runtime-paths-distinct.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_scatter_valuefrom_wf1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_scatter-valuefrom-wf1.cwl')
    })
    it('valid_scatter_valuefrom_wf1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_scatter-valuefrom-wf1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_scatter_valuefrom_inputs_wf1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_scatter-valuefrom-inputs-wf1.cwl')
    })
    it('valid_scatter_valuefrom_inputs_wf1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_scatter-valuefrom-inputs-wf1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines10_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines10-wf.cwl')
    })
    it('valid_count_lines10_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines10-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_glob_directory', async () => {
        await loadDocument(__dirname + '/data/examples/valid_glob_directory.cwl')
    })
    it('valid_glob_directory by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_glob_directory.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_import_schema_def', async () => {
        await loadDocument(__dirname + '/data/examples/valid_import_schema-def.cwl')
    })
    it('valid_import_schema_def by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_import_schema-def.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_docker_run_cmd', async () => {
        await loadDocument(__dirname + '/data/examples/valid_docker-run-cmd.cwl')
    })
    it('valid_docker_run_cmd by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_docker-run-cmd.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_schemadef_types_with_import_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_schemadef_types_with_import-wf.cwl')
    })
    it('valid_schemadef_types_with_import_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_schemadef_types_with_import-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_003_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-003_nojs.cwl')
    })
    it('valid_cond_wf_003_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-003_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_glob_test', async () => {
        await loadDocument(__dirname + '/data/examples/valid_glob_test.cwl')
    })
    it('valid_glob_test by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_glob_test.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_basename_fields_test', async () => {
        await loadDocument(__dirname + '/data/examples/valid_basename-fields-test.cwl')
    })
    it('valid_basename_fields_test by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_basename-fields-test.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_import_schema_def2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_import_schema-def2.cwl')
    })
    it('valid_import_schema_def2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_import_schema-def2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_echo_tool_packed2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_echo-tool-packed2.cwl')
    })
    it('valid_echo_tool_packed2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_echo-tool-packed2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_wf_loadContents', async () => {
        await loadDocument(__dirname + '/data/examples/valid_wf-loadContents.cwl')
    })
    it('valid_wf_loadContents by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_wf-loadContents.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_record_in_secondaryFiles', async () => {
        await loadDocument(__dirname + '/data/examples/valid_record-in-secondaryFiles.cwl')
    })
    it('valid_record_in_secondaryFiles by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_record-in-secondaryFiles.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_writable_dir_docker', async () => {
        await loadDocument(__dirname + '/data/examples/valid_writable-dir-docker.cwl')
    })
    it('valid_writable_dir_docker by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_writable-dir-docker.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_env_tool2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_env-tool2.cwl')
    })
    it('valid_env_tool2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_env-tool2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_search', async () => {
        await loadDocument(__dirname + '/data/examples/valid_search.cwl')
    })
    it('valid_search by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_search.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_echo_tool_packed', async () => {
        await loadDocument(__dirname + '/data/examples/valid_echo-tool-packed.cwl')
    })
    it('valid_echo_tool_packed by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_echo-tool-packed.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines11_null_step_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines11-null-step-wf.cwl')
    })
    it('valid_count_lines11_null_step_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines11-null-step-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines1_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines1-wf.cwl')
    })
    it('valid_count_lines1_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines1-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_stage_array', async () => {
        await loadDocument(__dirname + '/data/examples/valid_stage-array.cwl')
    })
    it('valid_stage_array by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_stage-array.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_params_input_length_non_array', async () => {
        await loadDocument(__dirname + '/data/examples/valid_params_input_length_non_array.cwl')
    })
    it('valid_params_input_length_non_array by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_params_input_length_non_array.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cwloutput_nolimit', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cwloutput-nolimit.cwl')
    })
    it('valid_cwloutput_nolimit by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cwloutput-nolimit.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_envvar3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_envvar3.cwl')
    })
    it('valid_envvar3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_envvar3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_rename', async () => {
        await loadDocument(__dirname + '/data/examples/valid_rename.cwl')
    })
    it('valid_rename by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_rename.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_env_wf1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_env-wf1.cwl')
    })
    it('valid_env_wf1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_env-wf1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_bar', async () => {
        await loadDocument(__dirname + '/data/examples/valid_bar.cwl')
    })
    it('valid_bar by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_bar.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines12_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines12-wf.cwl')
    })
    it('valid_count_lines12_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines12-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_io_union_input_default_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_io-union-input-default-wf.cwl')
    })
    it('valid_io_union_input_default_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_io-union-input-default-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_nolimit', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-nolimit.cwl')
    })
    it('valid_iwd_nolimit by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-nolimit.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines13_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines13-wf.cwl')
    })
    it('valid_count_lines13_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines13-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_listing_shallow1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_listing_shallow1.cwl')
    })
    it('valid_listing_shallow1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_listing_shallow1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_scatter_valuefrom_wf6', async () => {
        await loadDocument(__dirname + '/data/examples/valid_scatter-valuefrom-wf6.cwl')
    })
    it('valid_scatter_valuefrom_wf6 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_scatter-valuefrom-wf6.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dynresreq', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dynresreq.cwl')
    })
    it('valid_dynresreq by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dynresreq.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat5_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat5-tool.cwl')
    })
    it('valid_cat5_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat5-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_container_entryname2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-container-entryname2.cwl')
    })
    it('valid_iwd_container_entryname2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-container-entryname2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cores_float', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cores_float.cwl')
    })
    it('valid_cores_float by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cores_float.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_timelimit', async () => {
        await loadDocument(__dirname + '/data/examples/valid_timelimit.cwl')
    })
    it('valid_timelimit by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_timelimit.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_container_entryname3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-container-entryname3.cwl')
    })
    it('valid_iwd_container_entryname3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-container-entryname3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_bash_dollar_quote', async () => {
        await loadDocument(__dirname + '/data/examples/valid_bash-dollar-quote.cwl')
    })
    it('valid_bash_dollar_quote by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_bash-dollar-quote.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_listing_none1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_listing_none1.cwl')
    })
    it('valid_listing_none1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_listing_none1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_listing_none2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_listing_none2.cwl')
    })
    it('valid_listing_none2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_listing_none2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_passthrough2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-passthrough2.cwl')
    })
    it('valid_iwd_passthrough2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-passthrough2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines11_wf_noET', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines11-wf-noET.cwl')
    })
    it('valid_count_lines11_wf_noET by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines11-wf-noET.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_stagefile', async () => {
        await loadDocument(__dirname + '/data/examples/valid_stagefile.cwl')
    })
    it('valid_stagefile by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_stagefile.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_stage_file_array_basename_and_entryname', async () => {
        await loadDocument(__dirname + '/data/examples/valid_stage_file_array_basename_and_entryname.cwl')
    })
    it('valid_stage_file_array_basename_and_entryname by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_stage_file_array_basename_and_entryname.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_shellchar2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_shellchar2.cwl')
    })
    it('valid_shellchar2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_shellchar2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_record_out_secondaryFiles', async () => {
        await loadDocument(__dirname + '/data/examples/valid_record-out-secondaryFiles.cwl')
    })
    it('valid_record_out_secondaryFiles by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_record-out-secondaryFiles.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_inp_update_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_inp_update_wf.cwl')
    })
    it('valid_inp_update_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_inp_update_wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_bwa_mem_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_bwa-mem-tool.cwl')
    })
    it('valid_bwa_mem_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_bwa-mem-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat3_tool_mediumcut', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat3-tool-mediumcut.cwl')
    })
    it('valid_cat3_tool_mediumcut by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat3-tool-mediumcut.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_loadContents_limit', async () => {
        await loadDocument(__dirname + '/data/examples/valid_loadContents-limit.cwl')
    })
    it('valid_loadContents_limit by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_loadContents-limit.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_env_tool3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_env-tool3.cwl')
    })
    it('valid_env_tool3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_env-tool3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_timelimit2_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_timelimit2-wf.cwl')
    })
    it('valid_timelimit2_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_timelimit2-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_revsort_packed', async () => {
        await loadDocument(__dirname + '/data/examples/valid_revsort-packed.cwl')
    })
    it('valid_revsort_packed by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_revsort-packed.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_null_defined', async () => {
        await loadDocument(__dirname + '/data/examples/valid_null-defined.cwl')
    })
    it('valid_null_defined by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_null-defined.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_listing_none3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_listing_none3.cwl')
    })
    it('valid_listing_none3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_listing_none3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_jsondump1_nl', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-jsondump1-nl.cwl')
    })
    it('valid_iwd_jsondump1_nl by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-jsondump1-nl.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_jsondump2_nl', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-jsondump2-nl.cwl')
    })
    it('valid_iwd_jsondump2_nl by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-jsondump2-nl.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwdr_dir_literal_real_file', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwdr_dir_literal_real_file.cwl')
    })
    it('valid_iwdr_dir_literal_real_file by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwdr_dir_literal_real_file.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_scatter_wf3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_scatter-wf3.cwl')
    })
    it('valid_scatter_wf3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_scatter-wf3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_io_int_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_io-int-wf.cwl')
    })
    it('valid_io_int_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_io-int-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_file_literal_ex', async () => {
        await loadDocument(__dirname + '/data/examples/valid_file-literal-ex.cwl')
    })
    it('valid_file_literal_ex by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_file-literal-ex.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_revsort', async () => {
        await loadDocument(__dirname + '/data/examples/valid_revsort.cwl')
    })
    it('valid_revsort by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_revsort.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_tmap_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_tmap-tool.cwl')
    })
    it('valid_tmap_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_tmap-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_012', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-012.cwl')
    })
    it('valid_cond_wf_012 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-012.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_env_tool4', async () => {
        await loadDocument(__dirname + '/data/examples/valid_env-tool4.cwl')
    })
    it('valid_env_tool4 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_env-tool4.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_stage_array_dirs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_stage-array-dirs.cwl')
    })
    it('valid_stage_array_dirs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_stage-array-dirs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_formattest', async () => {
        await loadDocument(__dirname + '/data/examples/valid_formattest.cwl')
    })
    it('valid_formattest by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_formattest.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dynresreq_workflow_stepdefault', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dynresreq-workflow-stepdefault.cwl')
    })
    it('valid_dynresreq_workflow_stepdefault by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dynresreq-workflow-stepdefault.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_jsondump3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-jsondump3.cwl')
    })
    it('valid_iwd_jsondump3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-jsondump3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_size_expression_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_size-expression-tool.cwl')
    })
    it('valid_size_expression_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_size-expression-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat4_from_dir', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat4-from-dir.cwl')
    })
    it('valid_cat4_from_dir by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat4-from-dir.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_record_out_format', async () => {
        await loadDocument(__dirname + '/data/examples/valid_record-out-format.cwl')
    })
    it('valid_record_out_format by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_record-out-format.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_revsort_abstract', async () => {
        await loadDocument(__dirname + '/data/examples/valid_revsort-abstract.cwl')
    })
    it('valid_revsort_abstract by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_revsort-abstract.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_009', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-009.cwl')
    })
    it('valid_cond_wf_009 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-009.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_wc4_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_wc4-tool.cwl')
    })
    it('valid_wc4_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_wc4-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_step_valuefrom5_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_step-valuefrom5-wf.cwl')
    })
    it('valid_step_valuefrom5_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_step-valuefrom5-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_echo_file_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_echo-file-tool.cwl')
    })
    it('valid_echo_file_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_echo-file-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_step_valuefrom_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_step-valuefrom-wf.cwl')
    })
    it('valid_step_valuefrom_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_step-valuefrom-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_output_arrays_file_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_output-arrays-file-wf.cwl')
    })
    it('valid_output_arrays_file_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_output-arrays-file-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat_from_dir', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat-from-dir.cwl')
    })
    it('valid_cat_from_dir by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat-from-dir.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_fail_unconnected', async () => {
        await loadDocument(__dirname + '/data/examples/valid_fail-unconnected.cwl')
    })
    it('valid_fail_unconnected by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_fail-unconnected.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_symlink_illegal', async () => {
        await loadDocument(__dirname + '/data/examples/valid_symlink-illegal.cwl')
    })
    it('valid_symlink_illegal by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_symlink-illegal.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_action', async () => {
        await loadDocument(__dirname + '/data/examples/valid_action.cwl')
    })
    it('valid_action by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_action.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_timelimit4', async () => {
        await loadDocument(__dirname + '/data/examples/valid_timelimit4.cwl')
    })
    it('valid_timelimit4 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_timelimit4.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_echo_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_echo-tool.cwl')
    })
    it('valid_echo_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_echo-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_step_valuefrom2_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_step-valuefrom2-wf.cwl')
    })
    it('valid_step_valuefrom2_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_step-valuefrom2-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_scatter_valueFrom_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_scatter-valueFrom-tool.cwl')
    })
    it('valid_scatter_valueFrom_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_scatter-valueFrom-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_passthrough4', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-passthrough4.cwl')
    })
    it('valid_iwd_passthrough4 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-passthrough4.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_initialworkdirrequirement_docker_out', async () => {
        await loadDocument(__dirname + '/data/examples/valid_initialworkdirrequirement-docker-out.cwl')
    })
    it('valid_initialworkdirrequirement_docker_out by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_initialworkdirrequirement-docker-out.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_record_sd_secondaryFiles', async () => {
        await loadDocument(__dirname + '/data/examples/valid_record-sd-secondaryFiles.cwl')
    })
    it('valid_record_sd_secondaryFiles by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_record-sd-secondaryFiles.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_formattest2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_formattest2.cwl')
    })
    it('valid_formattest2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_formattest2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_listing_shallow2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_listing_shallow2.cwl')
    })
    it('valid_listing_shallow2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_listing_shallow2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_004', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-004.cwl')
    })
    it('valid_cond_wf_004 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-004.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_record_in_secondaryFiles_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_record-in-secondaryFiles-wf.cwl')
    })
    it('valid_record_in_secondaryFiles_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_record-in-secondaryFiles-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_shellchar', async () => {
        await loadDocument(__dirname + '/data/examples/valid_shellchar.cwl')
    })
    it('valid_shellchar by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_shellchar.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_step_valuefrom4_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_step-valuefrom4-wf.cwl')
    })
    it('valid_step_valuefrom4_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_step-valuefrom4-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_template_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_template-tool.cwl')
    })
    it('valid_template_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_template-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dir', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dir.cwl')
    })
    it('valid_dir by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dir.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_with_defaults', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-with-defaults.cwl')
    })
    it('valid_cond_with_defaults by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-with-defaults.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_schemadef_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_schemadef-wf.cwl')
    })
    it('valid_schemadef_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_schemadef-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dynresreq_workflow', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dynresreq-workflow.cwl')
    })
    it('valid_dynresreq_workflow by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dynresreq-workflow.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dir3', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dir3.cwl')
    })
    it('valid_dir3 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dir3.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dynresreq_workflow_inputdefault', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dynresreq-workflow-inputdefault.cwl')
    })
    it('valid_dynresreq_workflow_inputdefault by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dynresreq-workflow-inputdefault.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_null_expression1_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_null-expression1-tool.cwl')
    })
    it('valid_null_expression1_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_null-expression1-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_envvar2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_envvar2.cwl')
    })
    it('valid_envvar2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_envvar2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_stdout_chained_commands', async () => {
        await loadDocument(__dirname + '/data/examples/valid_stdout_chained_commands.cwl')
    })
    it('valid_stdout_chained_commands by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_stdout_chained_commands.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_js_input_record', async () => {
        await loadDocument(__dirname + '/data/examples/valid_js-input-record.cwl')
    })
    it('valid_js_input_record by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_js-input-record.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dynresreq_workflow_tooldefault', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dynresreq-workflow-tooldefault.cwl')
    })
    it('valid_dynresreq_workflow_tooldefault by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dynresreq-workflow-tooldefault.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_test_cwl_out', async () => {
        await loadDocument(__dirname + '/data/examples/valid_test-cwl-out.cwl')
    })
    it('valid_test_cwl_out by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_test-cwl-out.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_multiple_input_feature_requirement', async () => {
        await loadDocument(__dirname + '/data/examples/valid_multiple_input_feature_requirement.cwl')
    })
    it('valid_multiple_input_feature_requirement by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_multiple_input_feature_requirement.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dynresreq_default', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dynresreq-default.cwl')
    })
    it('valid_dynresreq_default by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dynresreq-default.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_record_in_format', async () => {
        await loadDocument(__dirname + '/data/examples/valid_record-in-format.cwl')
    })
    it('valid_record_in_format by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_record-in-format.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_exitcode', async () => {
        await loadDocument(__dirname + '/data/examples/valid_exitcode.cwl')
    })
    it('valid_exitcode by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_exitcode.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_sorttool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_sorttool.cwl')
    })
    it('valid_sorttool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_sorttool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_import_schema_def_packed', async () => {
        await loadDocument(__dirname + '/data/examples/valid_import_schema-def_packed.cwl')
    })
    it('valid_import_schema_def_packed by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_import_schema-def_packed.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines4_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines4-wf.cwl')
    })
    it('valid_count_lines4_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines4-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_check', async () => {
        await loadDocument(__dirname + '/data/examples/valid_check.cwl')
    })
    it('valid_check by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_check.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dir6', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dir6.cwl')
    })
    it('valid_dir6 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dir6.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dynresreq_dir', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dynresreq-dir.cwl')
    })
    it('valid_dynresreq_dir by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dynresreq-dir.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_006', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-006.cwl')
    })
    it('valid_cond_wf_006 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-006.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_io_int_default_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_io-int-default-wf.cwl')
    })
    it('valid_io_int_default_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_io-int-default-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_record_outputeval_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_record_outputeval_nojs.cwl')
    })
    it('valid_record_outputeval_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_record_outputeval_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines18_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines18-wf.cwl')
    })
    it('valid_count_lines18_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines18-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines19_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines19-wf.cwl')
    })
    it('valid_count_lines19_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines19-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dir4', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dir4.cwl')
    })
    it('valid_dir4 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dir4.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat3_nodocker', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat3-nodocker.cwl')
    })
    it('valid_cat3_nodocker by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat3-nodocker.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_params2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_params2.cwl')
    })
    it('valid_params2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_params2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_envvar', async () => {
        await loadDocument(__dirname + '/data/examples/valid_envvar.cwl')
    })
    it('valid_envvar by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_envvar.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_rename_outputs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_rename-outputs.cwl')
    })
    it('valid_rename_outputs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_rename-outputs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines15_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines15-wf.cwl')
    })
    it('valid_count_lines15_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines15-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_bash_line_continuation', async () => {
        await loadDocument(__dirname + '/data/examples/valid_bash-line-continuation.cwl')
    })
    it('valid_bash_line_continuation by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_bash-line-continuation.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines8_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines8-wf.cwl')
    })
    it('valid_count_lines8_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines8-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_record_order', async () => {
        await loadDocument(__dirname + '/data/examples/valid_record-order.cwl')
    })
    it('valid_record_order by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_record-order.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat.cwl')
    })
    it('valid_cat by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_default_path', async () => {
        await loadDocument(__dirname + '/data/examples/valid_default_path.cwl')
    })
    it('valid_default_path by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_default_path.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_io_file_or_files', async () => {
        await loadDocument(__dirname + '/data/examples/valid_io-file-or-files.cwl')
    })
    it('valid_io_file_or_files by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_io-file-or-files.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_params', async () => {
        await loadDocument(__dirname + '/data/examples/valid_params.cwl')
    })
    it('valid_params by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_params.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_initialwork_path', async () => {
        await loadDocument(__dirname + '/data/examples/valid_initialwork-path.cwl')
    })
    it('valid_initialwork_path by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_initialwork-path.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_parseInt_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_parseInt-tool.cwl')
    })
    it('valid_parseInt_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_parseInt-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_010_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-010_nojs.cwl')
    })
    it('valid_cond_wf_010_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-010_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_step_valuefrom3_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_step-valuefrom3-wf.cwl')
    })
    it('valid_step_valuefrom3_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_step-valuefrom3-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_nameroot', async () => {
        await loadDocument(__dirname + '/data/examples/valid_nameroot.cwl')
    })
    it('valid_nameroot by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_nameroot.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_exit_success', async () => {
        await loadDocument(__dirname + '/data/examples/valid_exit-success.cwl')
    })
    it('valid_exit_success by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_exit-success.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_stage_file_array_basename', async () => {
        await loadDocument(__dirname + '/data/examples/valid_stage_file_array_basename.cwl')
    })
    it('valid_stage_file_array_basename by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_stage_file_array_basename.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_jsondump2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-jsondump2.cwl')
    })
    it('valid_iwd_jsondump2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-jsondump2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_scatter_wf1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_scatter-wf1.cwl')
    })
    it('valid_scatter_wf1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_scatter-wf1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat4_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cat4-tool.cwl')
    })
    it('valid_cat4_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cat4-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_null_expression3_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid_null-expression3-tool.cwl')
    })
    it('valid_null_expression3_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_null-expression3-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_timelimit5', async () => {
        await loadDocument(__dirname + '/data/examples/valid_timelimit5.cwl')
    })
    it('valid_timelimit5 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_timelimit5.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_optional_numerical_output_0', async () => {
        await loadDocument(__dirname + '/data/examples/valid_optional-numerical-output-0.cwl')
    })
    it('valid_optional_numerical_output_0 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_optional-numerical-output-0.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_updateval_inplace', async () => {
        await loadDocument(__dirname + '/data/examples/valid_updateval_inplace.cwl')
    })
    it('valid_updateval_inplace by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_updateval_inplace.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_006_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-006_nojs.cwl')
    })
    it('valid_cond_wf_006_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-006_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_count_lines11_extra_step_wf', async () => {
        await loadDocument(__dirname + '/data/examples/valid_count-lines11-extra-step-wf.cwl')
    })
    it('valid_count_lines11_extra_step_wf by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_count-lines11-extra-step-wf.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cond_wf_003_1_nojs', async () => {
        await loadDocument(__dirname + '/data/examples/valid_cond-wf-003.1_nojs.cwl')
    })
    it('valid_cond_wf_003_1_nojs by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_cond-wf-003.1_nojs.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_iwd_jsondump1', async () => {
        await loadDocument(__dirname + '/data/examples/valid_iwd-jsondump1.cwl')
    })
    it('valid_iwd_jsondump1 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_iwd-jsondump1.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dir5', async () => {
        await loadDocument(__dirname + '/data/examples/valid_dir5.cwl')
    })
    it('valid_dir5 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_dir5.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_listing_deep2', async () => {
        await loadDocument(__dirname + '/data/examples/valid_listing_deep2.cwl')
    })
    it('valid_listing_deep2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid_listing_deep2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
})
