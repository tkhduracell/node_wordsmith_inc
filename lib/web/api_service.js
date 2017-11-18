const History = require('../core/history')
const Reverse = require('../core/reverse')

module.exports = class ApiService {

    constructor() {
        this._history = new History()
        this._reverse = new Reverse()
    }

    compute(source) {
        const result = this._reverse.paragraph(source)
        this._history.add(source, result)
        return result
    }

    history() {
        return this._history.items()
    }

}