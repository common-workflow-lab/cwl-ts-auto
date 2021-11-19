import { assert } from 'chai'
import { LoadingOptions, RecordSchema } from '../util/internal'
import URL from 'url'
import path from 'path'

describe('Test RecordSchema', () => {
  it('Should load the test document', async () => {
    const doc = {
      type: 'record',
      fields: [{ name: 'hello', doc: 'Hello test case', type: 'string' }]
    }
    const rs = await RecordSchema.fromDoc(doc, 'http://example.com', new LoadingOptions({})) as RecordSchema
    assert.equal(rs.type, 'record')
    assert.exists(rs.fields)
    assert.equal(rs.fields[0].name, 'http://example.com/#hello')
    assert.equal(rs.fields[0].doc, 'Hello test case')
    assert.equal(rs.fields[0].type, 'string')
  })

  it('Should import hellofield.yml and then include test.txt', async () => {
    const doc = { type: 'record', fields: [{ $import: 'hellofield.yml' }] }
    const lead = URL.pathToFileURL(path.resolve('./src/test/data')).toString()
    const rs = await RecordSchema.fromDoc(doc, 'http://example.com', new LoadingOptions({ fileUri: lead + '/_' })) as RecordSchema
    assert.equal(rs.type, 'record')
    assert.exists(rs.fields)
    assert.equal(rs.fields[0].name, lead + '/hellofield.yml#hello')
    assert.equal(rs.fields[0].doc, 'test\n')
    assert.equal(rs.fields[0].type, 'string')
  })
})
