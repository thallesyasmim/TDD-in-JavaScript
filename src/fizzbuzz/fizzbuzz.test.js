const { expect } = require('@jest/globals')
const fizzbuzz = require('./fizzbuzz')

describe('FizzBuzz Puzzle', () => {
    test('If it is not a multiple of 3 or 5, return it yourself', () => {
        const result = fizzbuzz(7)
        expect(result).toEqual(7)
    })

    test('If it is a multiple of 3, return "Fizz"', () => {
        const result = fizzbuzz(9)
        expect(result).toEqual('Fizz')
    })


    test('If it is a multiple of 5, return "Buzz"', () => {
        const result = fizzbuzz(10)
        expect(result).toEqual('Buzz')
    })

    test('If it is a multiple of 3 and 5, return "FizzBuzz"', () => {
        const result = fizzbuzz(15)
        expect(result).toEqual('FizzBuzz')
    })
})