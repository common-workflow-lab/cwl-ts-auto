
import { loadDocument, loadDocumentByString } from '../'
import fs from 'fs'
import url from 'url'

describe('Example Tests', () => {

    it('valid_stderr_shortcut', async () => {
        await loadDocument(__dirname + '/data/examples/valid-stderr-shortcut.cwl')
    })
    it('valid_stderr_shortcut by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-stderr-shortcut.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_bwa_mem_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid-bwa-mem-tool.cwl')
    })
    it('valid_bwa_mem_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-bwa-mem-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat3_tool_mediumcut', async () => {
        await loadDocument(__dirname + '/data/examples/valid-cat3-tool-mediumcut.cwl')
    })
    it('valid_cat3_tool_mediumcut by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-cat3-tool-mediumcut.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat1_testcli', async () => {
        await loadDocument(__dirname + '/data/examples/valid-cat1-testcli.cwl')
    })
    it('valid_cat1_testcli by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-cat1-testcli.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_null_expression2_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid-null-expression2-tool.cwl')
    })
    it('valid_null_expression2_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-null-expression2-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat3_tool_shortcut', async () => {
        await loadDocument(__dirname + '/data/examples/valid-cat3-tool-shortcut.cwl')
    })
    it('valid_cat3_tool_shortcut by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-cat3-tool-shortcut.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_binding_test', async () => {
        await loadDocument(__dirname + '/data/examples/valid-binding-test.cwl')
    })
    it('valid_binding_test by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-binding-test.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_tmap_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid-tmap-tool.cwl')
    })
    it('valid_tmap_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-tmap-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat4_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid-cat4-tool.cwl')
    })
    it('valid_cat4_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-cat4-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_stderr', async () => {
        await loadDocument(__dirname + '/data/examples/valid-stderr.cwl')
    })
    it('valid_stderr by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-stderr.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_any_type_compat', async () => {
        await loadDocument(__dirname + '/data/examples/valid-any-type-compat.cwl')
    })
    it('valid_any_type_compat by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-any-type-compat.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_parseInt_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid-parseInt-tool.cwl')
    })
    it('valid_parseInt_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-parseInt-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_dir2', async () => {
        await loadDocument(__dirname + '/data/examples/valid-dir2.cwl')
    })
    it('valid_dir2 by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-dir2.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_wc2_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid-wc2-tool.cwl')
    })
    it('valid_wc2_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-wc2-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_null_expression1_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid-null-expression1-tool.cwl')
    })
    it('valid_null_expression1_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-null-expression1-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_stderr_mediumcut', async () => {
        await loadDocument(__dirname + '/data/examples/valid-stderr-mediumcut.cwl')
    })
    it('valid_stderr_mediumcut by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-stderr-mediumcut.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat3_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid-cat3-tool.cwl')
    })
    it('valid_cat3_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-cat3-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_template_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid-template-tool.cwl')
    })
    it('valid_template_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-template-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
    it('valid_cat_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid-cat-tool.cwl')
    })
    it('valid_cat_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-cat-tool.cwl').toString()
        await loadDocumentByString(doc, url.pathToFileURL(__dirname +
            '/data/examples/').toString())
    })
})
