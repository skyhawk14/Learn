const log = console.log
/**Topic Map, Definition: holds key value pair and remember the original order of insertion of keys. It can take any values include both objects and primitive values    **/

const map1 = new Map()
const f = function(){}

/**Notes:  set method will add an element to the map    **/
map1.set('a', 1)
map1.set('b', f)
map1.set('c', f)
log(map1 instanceof Map) // true
log(map1) // Map { 'a' => 1, 'b' => [Function: f], 'c' => [Function: f] }

//**Notes:  Map is also like set as it will strong reference an object it points to   **/

//**SEARCH: Learn more about [[Entries]]    **/

/**Notes:  Map also has property like size    **/
log(map1.size) // 3

/**Notes:  keys method will give an iterator of the element in the map    **/
log(map1.keys()) // MapIterator { 'a', 'b', 'c' }
map1.keys().next() // { value: 'a', done: false }
//**Notes:  iterator can be created with the help of  generator function   **/

/**Notes:  for getting the value we have get method    **/
log(map1.get('a')) // 1

/**Question Why we should not use {} as that can also store data in key value format? **/
/**Answer: Because if we put function as key or object as key it will store only one key for it and override other **/

const p = function(){}
const q = function(){}
const map2 = new Map()
map2.set(p, 'mani')
map2.set(q, 'manish')
log(map2) // Map { [Function: p] => 'manish' }

const map3 = {}
map3[p] = 'mani'
map3[q] = 'manish'
log(map3) // {
//  "function(){}": "manish"
// } 
/**IMPORTANT:  It overrides the value    **/

/**Notes:  Convert map into array to iterate    **/
log(Array.from(map1)) // [ [ 'a', 1 ], [ 'b', [Function: f] ], [ 'c', [Function: f] ] ]
log(Array.from(map1.keys())) // [ 'a', 'b', 'c' ]
log(Array.from(map1.values())) // [ 1, [Function: f], [Function: f] ]
log(Array.from(map1.entries())) // [ [ 'a', 1 ], [ 'b', [Function: f] ], [ 'c', [Function: f] ] ]
log([...map1]) // [ [ 'a', 1 ], [ 'b', [Function: f] ], [ 'c', [Function: f] ] ]

/**SEARCH: Read about sameValueZero algorithm    **/