
import { loadDocument, loadDocumentByString } from '../'
import fs from 'fs'

describe('Example Tests', () => {

    it('valid_bwa_mem_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid-bwa-mem-tool.cwl')
    })
    it('valid_bwa_mem_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-bwa-mem-tool.cwl').toString()
        await loadDocumentByString(doc, '')
    })
    it('valid_binding_test', async () => {
        await loadDocument(__dirname + '/data/examples/valid-binding-test.cwl')
    })
    it('valid_binding_test by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-binding-test.cwl').toString()
        await loadDocumentByString(doc, '')
    })
    it('valid_tmap_tool', async () => {
        await loadDocument(__dirname + '/data/examples/valid-tmap-tool.cwl')
    })
    it('valid_tmap_tool by string', async () => {
        let doc = fs.readFileSync(__dirname + '/data/examples/valid-tmap-tool.cwl').toString()
        await loadDocumentByString(doc, '')
    })
})
