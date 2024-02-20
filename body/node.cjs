const ConditionalFunction = require("../global-functions/CF.cjs")

class Node {
    constructor(Name, Body) {
        this.body = Body
        this.name = Name
    }

    getEdge(edgeName) {
        return ConditionalFunction(
            Object.keys(this.body).indexOf(edgeName) == "number",
            () => this.body[edgeName],
            false
        )
    }

    addEdge(edgeName, newEdge) {
        this.body[edgeName] = newEdge
        return true
    }

    setBody = (newBody) => {
        this.body = newBody
        return true
    }
    
    getBody = () => this.body
    getMeta = () => {
        return {
            "body": this.body,
            "name": this.name
        }
    }
}

const createNode = (
    name = false, 
    body = {}
) => {
    return new Node(
        name, 
        body
    )
}

module.exports = createNode
