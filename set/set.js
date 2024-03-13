const log = console.log

/** Notes:  The Set object lets you store unique values of any type, whether primitive values or object references.    **/
/**   Set is a new data structure introduced in ES6.    **/
/**   Set is a collection of values, where each value may occur only once.    **/

/**Notes:  Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).    **/

/**Notes:  Performance  In particular, it is, on average, faster than the Array.prototype.includes method when an array has a length equal to a set's size.    **/

/**SEARCH: Read about set composition    **/

const a = new Set([1, 2, 3]);
const b = new Set([[1,1], [1,1], [1,2]]);

// b is a set of arrays and it will consider each array as a unique element
log(a, b)

/**Notes:  set can be converted into array using    **/
const array1 = Array.from(a);
const array2 = Array.from(b);
log(array1, array2)

//**Notes:  size property tells number of elements    **/
log(a.size, b.size)

/**IMPORTANT:  size is not a method    **/

/**Notes:  keys method will give an iterator of the element in the set    **/
/**SEARCH: Learn about how to use it    **/
log(a.keys(), b.keys()) // SetIterator { 1, 2, 3 } MapIterator { 1, 2, 4 }

/**Notes:  has method tell whether element is present inside of it or not    **/
log(a.has(1), b.has("one")) // true true

/**Notes:  add method will add an element to the set    **/
let f = function(){}
let c = new Set([f,f])

// only contains one occurence of f as both reference to the same element
log(c)

f = null

/**IMPORTANT:  here f won't reference to the f but due to strong ref property of set it will still point to the location where f is present in the memory    **/
log(c)

/**IMPORTANT:  Main method of set are: add, clear, delete, entries, forEach, has    **/
// write example of above methods
b.forEach(e=>log(e))

a.add('222')
log(a)
a.add(222)
log(a)

/**IMPORTANT:  set preserve the order in which element is inserted    **/
log(a.entries(), b.entries()) // SetIterator { 1, 2, 3, '222', 222 } MapIterator { [ 1, 1 ], [ 1, 2 ] }

/**Notes:  delete method will delete the element from the set    **/
a.delete(222)
log(a)
a.delete('sss222') // will not throw error when element is not present
log(a) 

/**Notes:  clear method will remove all the elements from the set    **/
a.clear()
log(a)