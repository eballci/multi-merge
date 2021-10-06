const assert = require('assert')
const merge = require('../index')

describe('Multiple merge testing', function () {
    it('Was it merged', function () {
        const destination = { name: 'john' }
        const source1 = { surname: 'doe' }
        const source2 = { planet: 'world' }
        const source3 = { job: 'engineer' }
        const source4 = { age: 23 }
        const expected = {
            name: 'john',
            surname: 'doe',
            planet: 'world',
            job: 'engineer',
            age: 23
        }

        merge(destination, source1, source2, source3, source4)
        assert.deepEqual(destination, expected)
    })

    it('Was it merged with overwriting', function () {
        const destination = { name: 'john' }
        const source1 = { name: 'adam' }
        const source2 = { name: 'amy' }
        const source3 = { name: 'raven' }
        const expected = { name: 'raven' }

        merge(destination, source1, source2, source3)
        assert.deepEqual(destination, expected)
    })

    it('Was it merged by mode changing', function () {
        const destination = { name: 'john' }
        const source1 = { name: 'adam' }
        const source2 = { name: 'amy' }
        const source3 = { name: 'raven' }
        const expected = { name: 'amy' }

        merge(destination, false, source1, true, source2, false, source3)
        assert.deepEqual(destination, expected)
    })

    it('Was it merged while passing complex objects', function () {
        const destination = { name: 'john' }

        const source1 = { }
        Object.defineProperty(source1, 'id', {
            value: 123456789,
            enumerable: true,
            configurable: true
        })

        const source2 = { }
        Object.defineProperty(source2, 'id', {
            value: 1234567890,
            enumerable: true,
            configurable: true
        })

        const source3 = { }
        Object.defineProperty(source3, 'id', {
            value: 0,
            enumerable: false,
            configurable: false
        })

        const expected = { name: 'john' }
        Object.defineProperty(expected, 'id', {
            value: 123456789,
            enumerable: true,
            configurable: true
        })

        merge(destination, false, source1, source2, source3)

        assert.deepEqual(destination, expected)
        assert.deepEqual(
            Object.getOwnPropertyDescriptor(destination, 'id'),
            Object.getOwnPropertyDescriptor(expected, 'id')
        )
    })
})
