
module.exports = class Reverse {

    paragraph(input) {
        return input.split(/\W/)
            .map(s => this.word(s))
            .join(" ")
    }

    word(input) {
        return input.split("")
            .reverse()
            .join("")
    }

}