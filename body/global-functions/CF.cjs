const utils = require('./utils.cjs')
const { callable } = utils

/* 

  This functional structure of 
the if-else statement allows
for powerful functional use at 
higher levels of abstraction.

Two things allow this:

- The truthy-falsey return value
of the function. This happens on
function call.

- The ability to define, call, and
return a function in the parameters.
this all happens at runtime. 

The Conditional Function call
is returnable and storable. 
This allows for dynamic usage
at higher levels of abstraction.

*/

const ConditionalFunction = (
    onCondition,
    positiveAction, // define a function and it's return value
    negativeAction // define a function and it's return value
) => {
    if (onCondition) {
        if (callable(positiveAction)) 
        { return positiveAction() }
        return positiveAction // pass on the function's return value
    } else {
        if (callable(negativeAction)) 
        { return negativeAction() }
        return negativeAction  // pass on the function's return value
    }
}

module.exports = ConditionalFunction
