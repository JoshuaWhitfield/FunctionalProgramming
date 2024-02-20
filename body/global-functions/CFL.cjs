
const createEdge = require("../models/edge.cjs")
const createStack = require("../models/stack.cjs")
const createController = require("../models/controller.cjs")

const ConditionalForLoop = (
    actionFunc,
    Node // idx = Index, elem = Iterand, jump = Interval, self = Body
) => {
    const { idx, elem, jump, self } = Node.body
    /* node deconstruction allows 
    internal functions to access 
    necessary edges */
    
    controller = createController(
        idx, // internally accessable
        elem, // internally accessable
        jump, // internally accessable
        createEdge(false), // returnValue
        self, // iterated list - internally accessable
        createEdge([]) // history
    )

    return controller.IterativeLoop(
        actionFunc,
        Node
    )
}

module.exports = ConditionalForLoop

