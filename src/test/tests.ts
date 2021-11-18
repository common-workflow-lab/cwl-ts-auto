import { assert } from 'chai'
import { LoadingOptions, RecordSchema, Simple_schema, ValidationException } from '../util/internal'
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

  it('Should import hellofield.yml and then include hello.txt', async () => {
    const doc = { type: 'record', fields: [{ $import: 'hellofield.yml' }] }
    const lead = URL.pathToFileURL(path.resolve('./src/test')).toString()
    const rs = await RecordSchema.fromDoc(doc, 'http://example.com', new LoadingOptions({ fileUri: lead + '/_' })) as RecordSchema
    assert.equal(rs.type, 'record')
    assert.exists(rs.fields)
    assert.equal(rs.fields[0].name, lead + '/hellofield.yml#hello')
    assert.equal(rs.fields[0].doc, 'Hello World!\n')
    assert.equal(rs.fields[0].type, 'string')
  })
})

describe('Test Simple_Schema', () => {
  it('Should load the test document', async () => {
    const doc = {
      label: '2'
    }

    const rs = await Simple_schema.fromDoc(doc, 'http://example.com', new LoadingOptions({})) as Simple_schema
    assert.equal(rs.label, '2')
  })

  it('Should throw a ValidationException', async () => {
    const doc = {
      label: 2
    }

    try {
      await Simple_schema.fromDoc(doc, 'http://example.com', new LoadingOptions({}))
      assert(false, 'Loading doc should throw a ValidationException')
    } catch (e) {
      if (e instanceof ValidationException) {
        assert.equal(e.toString(),
`Trying 'Simple_schema'
 the \`label\` field is not valid because: 
   tried PrimitiveLoader but
     Expected a String but got number
   tried PrimitiveLoader but
     Expected a Undefined but got number`)
      } else {
        assert(false, 'Loading doc should throw a ValidationException')
      }
    }
  })
})
