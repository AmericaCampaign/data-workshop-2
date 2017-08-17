/* global describe, expect, it */
import DATA from '../DATA'
import getProductsForOrder from './getProductsForOrder'

describe('getProductsForOrder', () => {
  it(
    'is a function',
    () =>
      expect(typeof getProductsForOrder).toBe('function')
  )

  it(
    'throws with no data',
    () =>
      expect(getProductsForOrder(null, 1)).toThrow()
  )

  it(
    'throws with undefined orders',
    () =>
      expect(getProductsForOrder({}, 1)).toThrow()
  )

  it(
    'returns null with empty orders',
    () =>
      expect(getProductsForOrder({orders: []}, 1)).toBeNull()
  )

  it(
    'returns an array',
    () =>
      expect(getProductsForOrder(DATA, 1)).toBeInstanceOf(Array)
  )

  it(
    'returns objects in the array',
    () =>
      getProductsForOrder(DATA, 6).forEach(
        p => expect(typeof p).toBe('object')
      )
  )

  it('returns objects with the correct structure', () => {
    getProductsForOrder(DATA, 6).forEach(
      p =>
        expect(p).toEqual(expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          price: expect.any(Number)
        }))
    )
  })
})
