import { assert } from 'chai'
import { TypeGuards, LoadingOptions, RecordSchema, Simple_schema, ValidationException } from '../util/internal'
import URL from 'url'
import path from 'path'

describe('Test Typeguards', () => {
  describe('Int', () => {
    it('Should return true', async () => {
      assert.equal(TypeGuards.Int(2), true)
      assert.equal(TypeGuards.Int(0), true)
    })

    it('Should return false', async () => {
      assert.equal(TypeGuards.Int(2.2), false)
      assert.equal(TypeGuards.Int('2.2'), false)
      assert.equal(TypeGuards.Int([2]), false)
      assert.equal(TypeGuards.Int({}), false)
      assert.equal(TypeGuards.Int(null), false)
      assert.equal(TypeGuards.Int(undefined), false)
    })
  })
  describe('Float', () => {
    it('Should return true', async () => {
      assert.equal(TypeGuards.Float(2.0), true)
      assert.equal(TypeGuards.Float(2), true)
      assert.equal(TypeGuards.Float(0), true)
    })

    it('Should return false', async () => {
      assert.equal(TypeGuards.Float([2]), false)
      assert.equal(TypeGuards.Float('2.2'), false)
      assert.equal(TypeGuards.Float({}), false)
      assert.equal(TypeGuards.Float(null), false)
      assert.equal(TypeGuards.Float(undefined), false)
    })
  })

  describe('Bool', () => {
    it('Should return true', async () => {
      assert.equal(TypeGuards.Bool(true), true)
      assert.equal(TypeGuards.Bool(false), true)
    })

    it('Should return false', async () => {
      assert.equal(TypeGuards.Bool([1]), false)
      assert.equal(TypeGuards.Bool('1'), false)
      assert.equal(TypeGuards.Bool(1), false)
      assert.equal(TypeGuards.Bool({}), false)
      assert.equal(TypeGuards.Bool(null), false)
      assert.equal(TypeGuards.Bool(undefined), false)
    })
  })

  describe('String', () => {
    it('Should return true', async () => {
      assert.equal(TypeGuards.String('2.2'), true)
      assert.equal(TypeGuards.String(''), true)
      assert.equal(TypeGuards.String('test'), true)
    })

    it('Should return false', async () => {
      assert.equal(TypeGuards.String([2]), false)
      assert.equal(TypeGuards.String(2), false)
      assert.equal(TypeGuards.String({}), false)
      assert.equal(TypeGuards.String(null), false)
      assert.equal(TypeGuards.String(undefined), false)
    })
  })

  describe('Undefined', () => {
    it('Should return true', async () => {
      assert.equal(TypeGuards.Undefined(undefined), true)
    })

    it('Should return false', async () => {
      assert.equal(TypeGuards.Undefined([1]), false)
      assert.equal(TypeGuards.Undefined('1'), false)
      assert.equal(TypeGuards.Undefined(1), false)
      assert.equal(TypeGuards.Undefined(1.1), false)
      assert.equal(TypeGuards.Undefined({}), false)
      assert.equal(TypeGuards.Undefined(null), false)
    })
  })

  describe('Dictionary', () => {
    it('Should return true', async () => {
      assert.equal(TypeGuards.isDictionary({}), true)
      assert.equal(TypeGuards.isDictionary({ test: 'test' }), true)
    })

    it('Should return false', async () => {
      assert.equal(TypeGuards.isDictionary([]), false)
      assert.equal(TypeGuards.isDictionary('1'), false)
      assert.equal(TypeGuards.isDictionary(1), false)
      assert.equal(TypeGuards.isDictionary(1.1), false)
      assert.equal(TypeGuards.isDictionary(undefined), false)
      assert.equal(TypeGuards.isDictionary(null), false)
    })
  })
})

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
