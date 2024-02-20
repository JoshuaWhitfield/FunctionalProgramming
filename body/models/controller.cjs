const createFNLiterator = require("../global-functions/FNLs/FI.cjs")

class Controller {

    constructor(
        Index, // Edge
        Iterand, // Edge
        Interval, // Edge
        returnValue, // Edge
        Body, // Edge
        History, // Edge
    ) {
        this.index = Index
        this.iterand = Iterand
        this.interval = Interval
        this.value = returnValue
        this.body = Body
        this.history = History

        this.iterator = createFNLiterator(
            Index,
            Iterand,
            Interval,
            returnValue,
            Body,
            History
        )
    }

    IterativeLoop(actionFunc, Node) {
        return this.iterator
        .IterationLoop(
            actionFunc,
            Node 
        )
    } //returns updated History on completion

}

const createController = (
    Index,
    Iterand,
    Interval,
    returnValue,
    Body,
    History,
) => {
    return new Controller(
        Index,
        Iterand,
        Interval,
        returnValue,
        Body,
        History,
    )
}

module.exports = createController

