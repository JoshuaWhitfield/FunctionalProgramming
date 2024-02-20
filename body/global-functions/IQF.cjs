const utils = require("./utils.cjs")
const { callable } = utils
const ConditionalFunction = require("./CF.cjs")

const InquisitiveFunction = (
    assertFunc,
    runOnSuccess = () => true,
    runOnFailure = () => false
) => {
    return ConditionalFunction(
        ConditionalFunction(
            callable(assertFunc),
            () => assertFunc(),
            assertFunc
        ),
        ConditionalFunction(
            callable(runOnSuccess),
            () => runOnSuccess(),
            runOnSuccess
        ),
        ConditionalFunction(
            callable(runOnFailure),
            () => runOnFailure(),
            runOnFailure
        ),
    )
}

module.exports = InquisitiveFunction
