This repository contains my experiments and discoveries regarding the Functional Programming Paradigm
The following describes the structure of my experiment, and the functional components that it is comprised of.

<pre>
  Structural Summary: 
  The structure of this experiment is listed linearly in a bottom-up direction of dependency:
  
  <p align="center">
    
           ** main.cjs **
             ---------
                 |
        models (OOP classes) : edge.cjs, node.cjs, controller.cjs
                 |
            -----------
                 |
         functionals (FNLs) : FI.cjs, ** FOR.cjs **
                 |
          ---------------
                 |
         global-functions : CF.cjs, CFL.cjs, IMF.cjs, IQF.cjs, utils.cjs
  </p>

</pre>

  <h1>
    Key
  </h1>
  '**//->**' : will be renamed. Points to more accurate naming conventions.
  '(...filename)' : describes the filename. This allows readers to find the code being described.
  '(...dirname)' : describes the directory. This allows readers to find the directory being described.
  
  <h1>
    Global Functions
  </h1>

  **Conditional Function**: (**CF**.cjs)
  
  This function will call and return 
  the value of one of two functions based
  on an inputed boolean type parameter.
  
  
  **Conditional For Loop**: (**CFL**.cjs) //-> **Functional For Loop**: (**FlFL**.cjs)

  This function takes in an anonymous function and the Node state as parameters.
  It then iterates through the iterable data structure stored in the Node State,
  records the results of the anonymous function on each iteration cycle,
  and returns a new array containing the results of each iteration cycle.
  Each iteration cycle is a recursive function call.
  
  
  **Imperative Function**: (**IMF**.cjs) //-> **Descriptive Functional**: (**DFl**.cjs)

  This function takes in an anonymous function as a 
  parameter that is defined at each invocation. It also
  takes in a list of parameters. The parameters are 
  inserted into the anonymous function call and the result
  is returned.
  
  **Inquisitive Function**: (**IQF**.cjs)

  This function takes in a conditional function,
  and two resulting functions to run based on the boolean type
  of the original conditional function's return value. This function 
  has declarative implications as it has the potential to run 4 different procedures
  based on inputed boolean type. It is told what to run based on
  truthy and falsy values, and decides what to run by itself 
  based on these values. It asks what is true, and makes 
  decisions based on its findings.
  
  **utils** 
  
  abstracted low-level procedures (used globally)

  <h1>
    Complex Functionals (FNLs)
  </h1>

  **Functional Iterator**: (**FI**.cjs)

  This is the class that gives the Controller class in **controller**.cjs its abstracted functionality. 

  **For**: (**FOR**.cjs)

  This function takes an iterable structure and an anonymous function to be run during each iteration cycle. 
  It also defines the Node and Edges of the Node State before beginning the recursive loop.
  This particular Node State allows us to interact with components of each iteration cycle including:
  the iterand, tndex, iteration interval, and history of return values. The Edges describe parts of
  the Node State that are mutable during each iteration cycle. These Edges are accessable from inside
  of the passed anonymous function parameter that is defined during invocation.

  <h1>
    Models
  </h1>

  **Edge**: (**edge**.cjs)

  This class describes edges and exports a function that creates Edges.
  The Edge describes a piece of information about the Node State that is mutable during each iteration cycle.

  **Node**: (**node**.cjs)
  
  This class contains and records the State, which is a combination
  of Edges. Just as any State is a collection of information, 
  any Node State is a collection of Edges.
  
  In theory, a 'State Space' is a collection of Node States. 
  These levels of abstraction can keep going upwards if there
  is information to be recorded and changed, and there are efficient 
  use cases for these abstractions.

  **Controller**: (**controller**.cjs)

  This class gets its abstracted functionality from the **Functional Iterator** (**FI**.cjs). 
  It adds a clean layer of abstraction for developers to access if needed.
  This class is accessed and used by the **Conditional For Loop** (**CFL**.cjs).

  ---------------------------------------------

  **Main**: (**main**.cjs)

  This file is where the highest abstracted functions are used.
  Only one function is needed to experiment with the Functional For Loop.

  ---------------------------------------------

  <h1>
    Afterword
  </h1>

  Feel free to clone this repository and interact with the different functions in the **Global-Functions** directory.
  If you feel up to the task, try completing these challenging excercises:

  **Easy:**
  - Iterate through strings using the **For** function. (**FOR**.cjs)

  **Medium:**

  - Make it possible to **break** out of the recursive loop
    from inside of the user's defined anonymous function
    by utilizing the Node State.

  - Make it possible to reverse iterate. For extra credit,
    make the reverse iteration abide by Interval edge that
    describes the interval size of each iteration cycle.

  **Hard:** 

  - Make it possible to **continue** by utilizing the Node State,
    effectively skipping the iteration cycle where it is used.
  
  

  
  

  
  
