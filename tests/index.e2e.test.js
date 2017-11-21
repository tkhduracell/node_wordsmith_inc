
describe('Paragraph reverse', function () {
  before(function () {
    casper.start('http://localhost:3000')
  })

  it('should get a reverse paragraph in history', function () {
    casper.then(function () {
      'form[action="/reverse"]'.should.be.inDOM.and.be.visible
      this.fill('form[action="/reverse"]', {
        content: 'asd dsa'
      }, true)
    })

    casper.waitForUrl('/', function () {
      '.history > .source'.should.have.text(/asd dsa/)
      '.history > .result'.should.have.text(/dsa asd/)
    })
  })
})
