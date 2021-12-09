import { assert } from 'chai'
import { LoadingOptions, SimpleSchema, ValidationException } from '../util/internal'

describe('Test Simple_Schema', () => {
  it('Should load the test document', async () => {
    const doc = {
      label: '2'
    }
    const rs = await SimpleSchema.fromDoc(doc, 'http://example.com', new LoadingOptions({})) as SimpleSchema
    assert.equal(rs.label, '2')

    assert.deepEqual(rs.save(), doc)
  })

  it('Should throw a ValidationException', async () => {
    const doc = {
      label: 2
    }
    let err
    try {
      await SimpleSchema.fromDoc(doc, 'http://example.com', new LoadingOptions({}))
      assert(false, 'Loading doc should throw a ValidationException')
    } catch (e) {
      err = e
    }
    assert.exists(err)
    assert.isTrue(err instanceof ValidationException)
    assert.equal((err as ValidationException).toString(),
`Trying 'SimpleSchema'
 the \`label\` field is not valid because: 
   tried _PrimitiveLoader but
     Expected a Undefined but got number
   tried _PrimitiveLoader but
     Expected a String but got number`)
  })
})
