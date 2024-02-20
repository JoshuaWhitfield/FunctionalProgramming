const For = require("./global-functions/FNLs/FOR.cjs")

/* 

    Nodes allow access to edges
    from inside your actionFunc.

    The actionFunc is a customizable 
    function that can access information
    about the iteration cycles of
    the recursive For Loop Function below.

    The information that is accessed
    are called Edges. These are classes
    that hold one value allow you to access
    and change the state of its value.
    see 'body/models/edges.cjs'

    The result is a For Loop Function
    that stores and returns the results 
    of each iteration in array form.
    
*/

console.log(
    For(
        [1, 2, 3, 4, 5],
      
        /* actionFunc: */
        (nodeCopy) => {
            const { idx, elem, jump, self } = nodeCopy.body
            return (idx.getValue() + elem.getValue() + jump.getValue())
        }
    )
)
