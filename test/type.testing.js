const assert = require('assert')
const merge = require('../index.js')

describe('Type testing', function () {
    it('Did throw while passing non-object destinations', function () {
        assert.throws(
            function () {
                merge(17.88)
            },
            { name: 'TypeError' }
        )

        assert.throws(
            function () {
                merge(true)
            },
            { name: 'TypeError' }
        )

        assert.throws(
            function () {
                merge('true')
            },
            { name: 'TypeError' }
        )
    })
})

