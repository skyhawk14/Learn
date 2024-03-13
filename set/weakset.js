/**Notes:  WeakSet is used to store a collection of objects. It adapts the same properties of that of a set i.e. does not store duplicates. The major difference of a WeakSet with a set is that a WeakSet is a collection of objects and not values of some particular type.     **/

let weakSetObject = new WeakSet();
let objectOne = {};
let objectTwo = {};

// add(value)
weakSetObject.add(objectOne);
console.log("objectOne added");
weakSetObject.add(objectTwo);
console.log("objectTwo added");

// has(value)
console.log("WeakSet has objectTwo : " +
weakSetObject.has(objectTwo));

// delete(value)
weakSetObject.delete(objectOne);
console.log("objectOne deleted");

let objectThree = objectTwo
objectTwo = null
/**IMPORTANT:  as the above line will delete the only reference of the {} in the memory then the Weakset also will remove it but if we have any reference preserve then we can access it    **/
console.log("WeakSet has objectTwo : " +
weakSetObject.has(objectTwo));
console.log("WeakSet has objectThree : " +
weakSetObject.has(objectThree));


/**Notes:  MDN def:    A WeakSet is a collection of garbage-collectable values, including objects and non-registered symbols. A value in the WeakSet may only occur once. It is unique in the WeakSet's collection. As values of weakset must be garbage collectable most primitive data types can be arbitrarily created and don't have a lifetime so they cannot be stored. Objects and non registered symbols can be stored because they are garbage collectable **/

/**IMPORTANT:  Main difference with the set are    **/
/**Notes:  WeakSets are collections of objects and symbols only. They cannot contain arbitrary values of any type, as Sets can.    **/
/**Notes:  The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. If no other references to an object stored in the WeakSet exist, those objects can be garbage collected.    **/

/**IMPORTANT:  Note: This also means that there is no list of current values stored in the collection. WeakSets are not enumerable.    **/


/**Use Case: Detecting circular reference    **/
// Functions that call themselves recursively need a way of guarding against circular data structures by tracking which objects have already been processed.
// Execute a callback on everything stored inside an object

/**Notes:  Very good way to create new variable on the first run in case of recursion and use it for further use in subsequent function call    **/
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // Avoid infinite recursion
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);
  if (typeof subject === "object" && subject) {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
    _refs.delete(subject);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // Circular reference!
execRecursively((obj) => console.log(obj), foo);


//**Notes:  It has methods like add, delete and has    **/
// As it is not iterable then forEach like methods are not present