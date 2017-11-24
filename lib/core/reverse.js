
module.exports = class Reverse {
  paragraph (input) {
    return input.replace(/\w+/g, (s) => {
      return this.word(s)
    })
  }

  word (input) {
    return input.split('')
        .reverse()
        .join('')
  }
}
