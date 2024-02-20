const ConditionalFunction = require("../CF.cjs")
const ImperativeFunction = require("../IMF.cjs")
const InquisitiveFunction = require("../IQF.cjs")

class FunctionalIterator {

    constructor (
        Index, // Edge
        Iterand, // Edge
        Interval, // Edge
        returnValue, // Edge
        Body, // Edge
        History // Edge
    ) {
        this.index = Index
        this.iterand = Iterand
        this.interval = Interval
        this.value = returnValue
        this.body = Body
        this.history = History
    }

    isInBounds = () => ConditionalFunction(
        (this.body.getValue().length < this.index.getValue()),
        false,
        true
    )

    IterationAction(actionFunc, node) {
        return ImperativeFunction(
            actionFunc,
            [node]
        )
    }

    Iterate() {
        return ImperativeFunction(
            () => {    
                this.index.setValue(
                    (this.index.getValue() + this.interval.getValue())
                )
    
                this.iterand.setValue(
                    this.body.getValue()[this.index.getValue()]
                )
                
                return ConditionalFunction(
                    (this.iterand.getValue() != undefined),
                    true,
                    false
                )
            }
        )
    }

    IterationLoop(actionFunc, Node) {
        const checkForValidIteration = this.Iterate()
        return ConditionalFunction(
            checkForValidIteration,
            () => {
                
                this.history.getValue().push(
                    this.IterationAction(
                        actionFunc,
                        Node
                    )
                )
                return this.IterationLoop(
                    actionFunc,
                    Node
                )
            },
            this.history.getValue()
        )
    }

    ConditionalIterationLoop(actionFunc, onCondition) {
        return InquisitiveFunction(
            /* if condition is met... */
            onCondition,
            
            /* do next iteration because possible */
            () => {
                this.history.getValue().add(
                    actionFunc()
                )
                return this.history.getYoungest()
            },

            /* break iteration loop because not possible */
            () => {
                return this.history.getValue()
            }   
        )
    }

}

/*  

    FN: 'FUNCTION'
    FNL: 'FUNCTIONAL FUNCTION' 

    ## FNL: a function that defines, 
    calls, and returns a 
    function at runtime. ##

    FNLi: 'FNL Iterator'

    ## FNLi: a function that iterates
    recursively. It iterates through
    iterable objects, or indefinitely. ##
    
    createFNLi: 'Create FNL Iterator'

*/

/*

  The Functional Iterator records the result
  of the customizable function it acceps,
  and returns that result when finished. 

  This is a powerful tool the functionalizes 
  the for loop. It creates room for innovation
  at higher levels of abstraction.
  
*/

const createFNLiterator = (
    Index,
    Iterand,
    Interval,
    returnValue,
    Body,
    History
) => { // createFNLi
    return new FunctionalIterator(
        Index,
        Iterand,
        Interval,
        returnValue,
        Body,
        History
    ) // FNLi
}

module.exports = createFNLiterator
