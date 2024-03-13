/**Topic Event Loop, Definition: Javascript has a runtime model that is based on event loop. Basic reposibility is to run(execute the code), collecting and processing events, and executing queues sub tasks. This model is different from models in other language like c and java    **/


/**Notes:  Event loop is a single threaded, non blocking, asynchronous, concurrent model    **/

/**Topic Heap, Definition: Objects are allocated in a heap which is just a name to denote a large region of memory    **/

/**Topic Queue, Definition: Javascript runtime uses a message queue which is a list of messages to be processed. Each message has an associated function that gets called to handled the message    **/

/**Topic Stack, Definition: The stack is a list of function calls. When a function is called, it is added to the top of the stack. When the function returns, it is removed from the stack.    **/

/**Notes:  Each message inside queue is processed completely before any other message is processed    **/

/**Topic Zero delays, Definition: It doesn't mean that call back will fire off after zero milliseconds.     **/


/**Notes:  Web worker or a cross origin iframe has its own stack, heap and message queue . Different distinct runtimes can only communicate throught sending messages via post message method. This method adds a message to the other runtime if the latter listens to message events   **/

/**Topic Never Blocking, Definition: A very interesting property of the event loop model is that JavaScript, unlike a lot of other languages, never blocks. Handling I/O is typically performed via events and callbacks, so when the application is waiting for an IndexedDB query to return or a fetch() request to return, it can still process other things like user input    **/


/**Topic Callback queue aka task queue, Definition: Callbacks methods is put inside this queue    **/
/**Topic Microtask Queue, Definition: This has higher priority then callback queue. This queue can contains callback function comes using promises or mutation observer    **/


