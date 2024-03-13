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
log(Person.prototype.getName, typeof Person.prototype.getName) // [Function: getName]
/**   Class keyword created things won't be usable without instating using new    **/
/**   Class constructor can't be invoked without 'new'    **/
// const person = Person('Mani') 

const person = new Person('Mani')
/**   person = {name: 'Mani', [[Prototype]]: {constructor: class Person, getName: f getName}}    **/
log(person) // Person { name: 'Mani' }

/**   We can add methods to the Person.prototype like below    **/
/**   prototype methods would be present like variable hoisting    **/
/**   person = {name: 'Mani', [[Prototype]]: {constructor: class Person, getName: f getName, setName}}    **/
Person.prototype.setName = function(name) {
  this.name = name
}

log(Person.prototype)

/**   Although setName and getName are methods present on the Person.Prototype but setName prototype is different    **/
log(Person.prototype.getName.prototype === Person.prototype.setName.prototype) // false
log(Person.prototype.getName.prototype === Person.prototype.newName.prototype) // true


/**   Create an object whose prototype is Person    **/
const person2 = Object.create(Person.prototype)
log('person2', person2, person2.__proto__) // person2 { [[prototype]]: Person.prototype}

/**IMPORTANT:  on object prototype is undefined, __proto__ is defined     **/
log(person2.__proto__ === Person.prototype) // true

/**SEARCH: Find out about why prototype is present inside [[]]    **/

/**   another way of creating an object whose prototype is Person    **/
const person3 = {}
Object.setPrototypeOf(person3, Person.prototype)
log(person3.__proto__ === Person.prototype) // true

/**   another way using new Object    **/
const person4 = new Object()
Object.setPrototypeOf(person4, Person.prototype)
log(person4.__proto__ === Person.prototype) // true

/**   check things related to {} and new Object()    **/
const obj = {}
const obj2 = new Object()
/**   false makes sense as obj and obj2 have different memory location    **/
log(obj, obj2, obj == obj2) // {} {} false 
log(obj, obj2, obj === obj2) // {} {} false
log(typeof obj, typeof obj2, obj === obj2) // object object false
log(obj.__proto__ === obj2.__proto__) // true

/**   create object with no prototype, prototype is empty    **/
const obj3 = Object.create(null)
log(obj3) // {}

/**IMPORTANT:  Different memory location created object    **/
const obj4= {name: 'Mani'}
const obj5 = {name: 'Mani'}
log(obj4, obj5, obj4 == obj5) // {name: 'Mani'} {name: 'Mani'} false

log(Object.getPrototypeOf(person))

/**IMPORTANT:  Object.setPrototypeOf and Object.getPrototypeOf is applied on object, not on the class    **/