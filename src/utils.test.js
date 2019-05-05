import { fillData, increment } from './utils'

describe('Test utilies functions', () => {
  it('test fill data with random values', () => {
    Math.random = jest.fn(() => 0.1)
    const result = fillData()
    expect(result).toEqual(['1111', '1111', '1111', '1111'])

    Math.random = jest.fn(() => 0.2)
    const result2 = fillData()
    expect(result2).toEqual(['2222', '2222', '2222', '2222'])
  })

  it('test increment function', () => {
    expect(increment('1111')).toBe('2222')
    expect(increment('14020')).toBe('25131')
    expect(increment('0459')).toBe('1560')
  })
})
