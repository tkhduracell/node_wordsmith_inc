
const Reverse = require('./reverse');
const expect = require('chai').expect

describe('Reverse module', () => {
    var reverse

    beforeEach(function() {
        reverse = new Reverse()
    });

    describe('"word"', () => {

        it('should give identity on empty word', () => {
            expect(reverse.word("")).to.be.eql("")
        })

        it('should give identity on single char', () => {
            expect(reverse.word("a")).to.be.eql("a")
        })

        it('should reverse a single word', () => {
            expect(reverse.word("abc")).to.be.eql("cba")
        })
    })

    describe('"paragraph"', () => {
        it('should give identity on empty paragraph', () => {
            expect(reverse.paragraph("")).to.be.eql("")
        })

        it('should give reversed word on single word', () => {
            expect(reverse.paragraph("abc")).to.be.eql("cba")
        })

        it('should give a paragraph with reversed words', () => {
            expect(reverse.paragraph("abc 123")).to.be.eql("cba 321")
        })
    })
})