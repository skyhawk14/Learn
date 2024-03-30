/**Notes:  Function make code re usable and modular    **/
/**Notes:  Functions are first class citizen ie. can be assigned to a variable, passed as an argument and can be returned from a function    **/
/**Notes:  Higher order function are those functions which either accept function as an parameter or returns a function     **/
/**Ex. Code: **/
/**
// function to calculate area of the circle
const calculateArea =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

// function to calculate diameter of the circle
const calculateDiameter =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}

Instead of above we can write as

// logic to clculate area
const area = function(radius){
    return Math.PI * radius * radius;
}
// logic to calculate diameter
const diameter = function(radius){
    return 2 * radius;
}
// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

When working with arrays, you can use the map(), reduce(), filter(), and sort() functions to manipulate and transform data in an array.

When working with objects, you can use the Object.entries() function to create a new array from an object.

When working with functions, you can use the compose() function to create complex functions from simpler ones.
**/

/**Topic this keyword, Definition: this keyword refers to the current execution context, often associated with the object that called the function    **/

/**SEARCH: function composition techniques     **/

//**Notes:  inside setInterval useState is very different don't try to update based on accessign value and assign it; Remember what did in Create timer question    **/

/**Notes:  Object.seal() and Object.freeze() are methods used to control the mutability of objects    **/

/**Notes:  Object.seal() is a method that seals an object, preventing the addition or deletion of properties, while allowing the modification of existing properties.    **/

/**Notes:  Object.freeze() is a method that freezes an object, making it completely immutable.    **/


/**Notes:  “use strict” was introduced in ES5 and enables strict mode in JavaScript. This strict mode throws error when developing the code and prevent the developer to use the bad practices,     **/

/**Notes:  Note: This Strict mode is enabled by default if the application uses Module system.    **/

/**Notes:  In normal mode if the function is not explicitly called from an object, it will have ‘window’ object as ‘this’ but in strict mode it will be undefined    **/

