import { assert } from 'chai'
import { LoadingOptions, Simple_schema, ValidationException } from '../util/internal'

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
