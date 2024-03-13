const log = console.log
/**Topic WeakMap, Definition: A WeakMap is a collection of key/value pairs whose keys must be objects or non-registered symbols, with values of any arbitrary JavaScript type, and which does not create strong references to its keys. That is, an object's presence as a key in a WeakMap does not prevent the object from being garbage collected. Once an object used as a key has been collected, its corresponding values in any WeakMap become candidates for garbage collection as well — as long as they aren't strongly referred to elsewhere. The only primitive type that can be used as a WeakMap key is symbol — more specifically, non-registered symbols — because non-registered symbols are guaranteed to be unique and cannot be re-created.    **/


/**Notes:  WeakMap is weak, meaning references to key objects in a WeakMap are held weakly. If no other references to a key stored in the WeakMap exist, those key objects can be garbage collected.    **/

//**Notes:  Keys of WeakMaps must be garbage-collectable. Most primitive data types can be arbitrarily created and don't have a lifetime, so they cannot be used as keys. Objects and non-registered symbols can be used as keys because they are garbage-collectable.**/

//**SEARCH: Read more from MDN Docs    **/

/**Question Difference between map and weak map **/
/**Answer:  Map keys can be of any type but weak map keys can be only object or non registered symbols**/
