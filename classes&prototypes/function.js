const log = console.log
class Person {
  constructor(name) {
    this.name = name
  }
  /**   created object using this class also won't have this create static method    **/
  static create(name) {
    return new Person(name)
  }
  // these methods would be added to the prototype of Person class
  getName() {
    return this.name
  }

  newName(name) {
    this.name = name
  }
}

/**   same way of doing above    **/
/**   generally when we have to instatiate an object we define function with capital letter    **/
function FunctionPerson (name) {
  this.name = name
  this.getName = function() {
    return this.name
  }
}

const p = FunctionPerson('Mani') 
log(p) // p is undefined

/**   If we call using new keyword it will return an object with the properties defined inside    **/
const p1 = new FunctionPerson('Mani')
log(p1)

FunctionPerson.prototype.newName = function(name) {
  this.name = name
}

/**IMPORTANT:  Difference between newName and getName is that getName is present on all the objects which is a memory waster instead doing like this we can do using prototype    **/

log(Object.getPrototypeOf(p1)) // will give {getName: f}

Object.setPrototypeOf(p1, {testName: function(name) {this.name = name}})

const p2 = new FunctionPerson('Mani')
log(p2, p1)