
const History = require('./history');
const expect = require('chai').expect

describe('History module', () => {
    var history

    beforeEach(function() {
        history = new History()
    });

    it('should be empty', () => {
        expect(history.getItems()).to.have.lengthOf(0);
    })

    describe('"add"', () => {

        it('should add an item', () => {
            history.add("ab", "ba")
            
            expect(history.getItems()).to.have.lengthOf(1);
        })
    })
})