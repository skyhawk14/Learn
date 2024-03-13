/**Topic Javascript Runtime Env, Definition: Container having all the things necessary to execute the javascript code    **/

/**Notes:  JRE contains: JS enginer, API, event loop, Callback Queue, Microtask queue    **/

/**Notes:  JS engine is responsible for executing the code    **/

/**Notes:  API is responsible for handling the I/O operations    **/

/**Notes:  Event loop is responsible for handling the async operations    **/

/**Notes:  Callback Queue is responsible for holding the callback functions    **/

/**Notes:  Microtask queue is responsible for holding the callback functions which are higher priority then callback queue    **/

/**Notes:  JS engine is single threaded    **/

/**Notes:  JS engine has two parts: Memory heap and Call stack    **/

/**Notes:  Memory heap is responsible for storing the variables, objects, functions, etc    **/

/**Notes:  Call stack is responsible for keeping track of the function calls    **/

// Firfox has spidermonkey js engine

// JS engine important to follow ECMAscript standard

// Chakra is used by Microsoft Edge

// V8 is used by Google Chrome

// Rhino is used by Mozilla

// Nashorn is used by Oracle

// JavaScriptCore is used by Safari

/**Notes:  JS is nothing but a code  which executes the code and spits out the byte code to get executed  **/


// steps are as follows:
// code -> parsing -> compilation -> execution

/**Notes:  Parsing is the process of converting the code into AST (Abstract Syntax Tree). Is is done by syntax parser.    **/ 

/**Notes:  Compilation is the process of converting the AST into byte code    **/

/**Notes:  Execution is the process of executing the byte code    **/

/**Notes:  JIT compilation using interpreter and compiler    **/

/**Notes:  Garbage collection mark and sweep algorithm    **/

/**SEARCH: Inlining, copy elision, caching    **/