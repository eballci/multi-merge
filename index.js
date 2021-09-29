/**
 * @module multi-merge
 * @author Emre BALCI <emre-balci@outlook.com.tr> (github.com/eballci)
 * @license MIT
 */

const forEach = Array.prototype.forEach
const defineProperty = Object.defineProperty
const hasOwnProperty = Object.prototype.hasOwnProperty
const getOwnPropertyNames = Object.getOwnPropertyNames
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

function merge() {
    let overwrite = true
    const destination = arguments[0]

    if (typeof destination !== 'object') {
        throw new TypeError(
            'First argument, which is destination, have to be passed as object.'
        )
    }

    forEach.call(arguments, function forEachSources(source, index) {
        if (typeof source === 'boolean') {
            overwrite = source
            return
        }

        if (index === 0 || typeof source !== 'object') {
            return
        }

        forEach.call(getOwnPropertyNames(source), function forEachKeys(key) {
            if (!overwrite && hasOwnProperty.call(destination, key)) {
                return
            }

            const descriptor = getOwnPropertyDescriptor(source, key)
            defineProperty(destination, key, descriptor)
        })
    })

    return destination
}

module.exports = merge
