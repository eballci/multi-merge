const assert = require('assert')
const merge = require('../index.js')

describe('Single merge testing', function () {
    it('Was it merged', function () {
        const destination = { name: 'john' }
        const source = { surname: 'doe' }
        const expected = { name: 'john', surname: 'doe' }

        assert(merge(destination, source), expected)
        assert.deepEqual(destination, expected)
    })

    it('Was it merged with overwriting', function () {
        const destination = { name: 'john' }
        const source = { name: 'doe' }
        const expected = { name: 'doe' }

        assert(merge(destination, source), expected)
        assert.deepEqual(destination, expected)
    })

    it('Was it merged without overwriting', function () {
        const destination = { name: 'john' }
        const source = { surname: 'doe' }
        const expected = { name: 'john', surname: 'doe' }

        assert(merge(destination, false, source), expected)
        assert.deepEqual(destination, expected)
    })

    it('Was it merged while passing complex objects', function () {
        const destination = { name: 'john', surname: 'doe' }

        const source = {}
        Object.defineProperty(source, 'id', {
            value: 123456789,
            enumerable: true,
            configurable: true
        })

        const expected = { name: 'john', surname: 'doe' }
        Object.defineProperty(expected, 'id', {
            value: 123456789,
            enumerable: true,
            configurable: true
        })

        assert(merge(destination, source), expected)
        assert.deepEqual(destination, expected)
        assert.deepEqual(
            Object.getOwnPropertyDescriptor(source, 'id'),
            Object.getOwnPropertyDescriptor(destination, 'id')
        )
    })
})
