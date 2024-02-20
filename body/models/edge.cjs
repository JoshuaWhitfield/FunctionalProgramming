const createStack = require("./stack.cjs")

class Edge {
    constructor(value) {
        this.value = value
        this.original = () => value
        this.history = createStack()
        this.history.add(value)
    }

    /* record the state */
    getValue = () => this.value

    /* change the state */
    setValue = (new_value) => { 
        this.value = new_value
        this.history.add(new_value)
        return true
    }

    resetValue = () => { 
        this.value = this.original()
        return true
    }

    /* record self */
    getMeta = () => {
        return {
            "value": this.value,
            "origin": this.original(),
            "history": this.history.getValue()
        }
    }

}

const createEdge = (initialValue = "") => {
    return new Edge(initialValue)
}

module.exports = createEdge
