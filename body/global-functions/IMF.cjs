const ConditionalFunction = require("./CF.cjs")

const ImperativeFunction = (
    func,
    parameters = [false]
) => {

    return ConditionalFunction(
        (parameters != [false]),
        () => func(...parameters),
        () => func()
    )

}

module.exports = ImperativeFunction
