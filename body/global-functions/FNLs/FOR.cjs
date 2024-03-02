
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
        "idx": createEdge(-1),
        "elem": createEdge(),
        "jump": createEdge(1),
        "self": createEdge(iterable),
    }
) => {
    const node = createNode("for_loop")
    node.setBody(
        setNode
    )
    return ConditionalForLoop(
        actionFunc,
        node
    )
}

module.exports = For
