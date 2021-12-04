import { assert } from 'chai'
import { LoadingOptions, ArraySchema, ValidationException } from '../util/internal'

describe('Test ArraySchema', () => {
  it('Should load the test document', async () => {
    const doc = {
      type: 'array',
      items: [{
        type: 'record',
        fields: [{ name: 'hello', doc: 'Hello test case', type: 'string' }]
      }]
    }
    try {
      const rs = await ArraySchema.fromDoc(doc, '', new LoadingOptions({}))
      console.log(rs)
    } catch (e) {
      if (e instanceof ValidationException) {
        console.log(e.toString())
      }
    }
  })
  it('Should throw a ValidationException because the items field is missing', async () => {
    const doc = {
      type: 'array'
    }
    let err
    try {
      const rs = await ArraySchema.fromDoc(doc, '', new LoadingOptions({}))
      console.log(rs)
    } catch (e) {
      err = e
    }
    assert.exists(err)
    assert.isTrue(err instanceof ValidationException)
  })
  it('Should throw a ValidationException because the type field is missing', async () => {
    const doc = {
      items: [{
        type: 'record',
        fields: [{ name: 'hello', doc: 'Hello test case', type: 'string' }]
      }]
    }
    let err
    try {
      const rs = await ArraySchema.fromDoc(doc, '', new LoadingOptions({}))
      console.log(rs)
    } catch (e) {
      err = e
    }
    assert.exists(err)
    assert.isTrue(err instanceof ValidationException)
  })
})
