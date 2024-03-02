
const ConditionalForLoop = require("../CFL.cjs")
const createNode = require("../../models/node.cjs")
const createEdge = require("../../models/edge.cjs")

/* 

  This is the abstracted implementation
  of the Functional Iterator. 

  Here we define the Edges that are
  accessible from inside the 
  customizable function: actionFunc
  
*/

const For = (
    iterable,
    actionFunc,
    setNode = {
        "idx": -1,
        "jump": 1,
    }
) => {
    const node = createNode("for_loop")
    node.setBody({
        "idx": createEdge(setNode.idx),
        "elem": createEdge(),
        "jump": createEdge(setNode.jump),
        "self": createEdge(iterable),
    })
    return ConditionalForLoop(
        actionFunc,
        node
    )
}

module.exports = For
