This repository contains my experiments and discoveries regarding the Functional Programming Paradigm
The following describes the structure of my experiment, and the functional components that it is comprised of.

<pre>
  Structural Summary: 
  The structure of this experiment is listed linearly in a bottom-up direction of dependency:
    
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

</pre>

  <h1>
    Key
  </h1>
  
  '**//->**' : will be renamed. Points to more accurate naming conventions. <br />
  '(...filename)' : describes the filename. This allows readers to find the code being described. <br />
  '(...dirname)' : describes the directory. This allows readers to find the directory being described. <br />
  
  <h1>
    Global Functions
  </h1>

  **Conditional Function**: (**CF**.cjs)
  
  This function will call and return <br />
  the value of one of two functions based <br />
  on an inputed boolean type parameter. <br />
  
  **Conditional For Loop**: (**CFL**.cjs) //-> **Functional For Loop**: (**FLFL**.cjs)

  This function takes in an anonymous function and the Node state as parameters. <br />
  It then iterates through the iterable data structure stored in the Node State, <br />
  records the results of the anonymous function on each iteration cycle, <br />
  and returns a new array containing the results of each iteration cycle. <br />
  Each iteration cycle is a recursive function call. <br />
  
  **Imperative Function**: (**IMF**.cjs) //-> **Descriptive Functional**: (**DFL**.cjs)

  This function takes in an anonymous function as a <br />
  parameter that is defined at each invocation. It also <br />
  takes in a list of parameters. The parameters are <br />
  inserted into the anonymous function call and the result <br />
  is returned. <br />
  
  **Inquisitive Function**: (**IQF**.cjs)

  This function takes in a conditional function, <br />
  and two resulting functions to run based on the boolean type <br />
  of the original conditional function's return value. This function <br />
  has declarative implications as it has the potential to run 4 different procedures <br />
  based on inputed boolean type. It is told what to run based on <br />
  truthy and falsy values, and decides what to run by itself <br />
  based on these values. It asks what is true, and makes <br />
  decisions based on its findings. <br />

  Because functions are inherently infinite due to their recursive properties, <br />
  the Inquisitive Function can theoretically handle an infinite amount of call-back functions and function calls, <br />
  and produce an infinite variety of outputs based on the boolean type return values of those internal call-back functions. <br />
  This creates a strong argument for the existence of True Declarative Programming. <br />
  You can store the return value of this theoretical complex Inquisitive Function calls inside of another function <br />
  With a specific declarative naming convention that describes the task that occurs and the information it produces. <br />
  As you continue abstracting these procedures in this way, you would eventually have to store these return <br />
  values in functions with variable names that are sentences in length to encompass the topic or data being operated on (noun),  <br />
  descriptions of the data being operated on (adjectives), and words to describe actions taken on the nouns <br />
  during internal procedures (verbs, adverbs) <br />
  
  **utils** 
  
  abstracted low-level procedures (used globally)

  <h1>
    Complex Functionals (FNLs)
  </h1>

  **Functional Iterator**: (**FI**.cjs)

  This is the class that gives the Controller class in **controller**.cjs its abstracted functionality. 

  **For**: (**FOR**.cjs)

  This function takes an iterable structure and an anonymous function to be run during each iteration cycle. <br />
  It also defines the Node and Edges of the Node State before beginning the recursive loop. <br />
  This particular Node State allows us to interact with components of each iteration cycle including: <br />
  the iterand, tndex, iteration interval, and history of return values. The Edges describe parts of <br />
  the Node State that are mutable during each iteration cycle. These Edges are accessable from inside <br />
  of the passed anonymous function parameter that is defined during invocation. <br />

  <h1>
    Models
  </h1>

  **Edge**: (**edge**.cjs)

  This class describes edges and exports a function that creates Edges. <br />
  The Edge describes a piece of information about the Node State that is mutable during each iteration cycle. <br />

  **Node**: (**node**.cjs)
  
  This class contains and records the State, which is a combination <br />
  of Edges. Just as any State is a collection of information, <br />
  any Node State is a collection of Edges. <br />
  
  In theory, a 'State Space' is a collection of Node States. <br />
  These levels of abstraction can keep going upwards if there <br />
  is information to be recorded and changed, and there are efficient <br />
  use cases for these abstractions. <br />

  **Controller**: (**controller**.cjs)

  This class gets its abstracted functionality from the **Functional Iterator** (**FI**.cjs). <br />
  It adds a clean layer of abstraction for developers to access if needed. <br />
  This class is accessed and used by the **Conditional For Loop** (**CFL**.cjs). <br />

  ---------------------------------------------

  **Main**: (**main**.cjs)

  This file is where the highest abstracted functions are used. <br />
  Only one function is needed to experiment with the Functional For Loop. <br />

  ---------------------------------------------

  <h1>
    Afterword
  </h1>

  Feel free to clone this repository and interact with the different functions in the **Global-Functions** directory. <br />
  If you feel up to the task, try completing these challenging exercises: <br />

  **Easy:**
  - Iterate through strings using the **For** function. (**FOR**.cjs)

  **Medium:**

  - Make it possible to **break** out of the recursive loop <br />
    from inside of the user's defined anonymous function <br />
    by utilizing the Node State. <br />

  - Make it possible to reverse iterate. For extra credit, <br />
    make the reverse iteration abide by Interval edge that <br />
    describes the interval size of each iteration cycle. <br />

  **Hard:** 

  - Make it possible to **continue** by utilizing the Node State, <br />
    effectively skipping the iteration cycle where it is used. <br />
  
  

  
  

  
  
