
module.exports = class History {
    constructor() {
        this._items = []
    }

    add(source, result) {
        this._items.push({source, result});
    }

    items() {
        return this._items
    }
}