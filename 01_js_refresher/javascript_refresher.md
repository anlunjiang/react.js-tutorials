# Next-Gen JavaScript

# let and const
* Different ways to create variables
* Traditionally you just create variables with `var a = 1`
* However, with ES6 a newer version of JS, let and const are introduced and preferred

* let - is basically the new var
* const - if you are planning on creating a constant value
  * something you assign once and never change again
  * JS will actually throw an error if you try to mutate a `const`

```javascript
const myname = "Anlun";
myname = 1;
// "TypeError: Assignment to constant variable.
```

# Arrow Functions
```javascript
// Traditionally you make functions like
function myFnc() {
    return 2;
}

// But there are other ways that can make one liners easier
const myFnc = () => {
    return 2;
}
// This solves issues with "this" keywaord in JS as "this" will always keep
// its context

// But for simple functions:
const myFnc = input => input * 2;
// This is valid!
```

# Exports and Imports (Modules)

Export can dictate what will be the default import if another .js file imports from it.
e.g.

```javascript
const person = {
    name: "Anlun"
}
export default person
//person is now the default export
export const clean = () => {
    return "clean";
}

//another file can now do
import prs from "./person.js" // and it will still import person
import {baseData as base, clean} from "./utils.js" // normal way to import
import * as bundled from "./utils.js" // like in python * is possible
```

# Classes

```javascript
// creating a class - constructor is basically __init__ in python
class Human {
  constructor() {
    this.gender = "Male"; // this = self
  }
  
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
    constructor() {
      super(); // extending class must call super
      this.name = "Bob";
    }
    printName() {
      console.log(this.name);
    }
}


const myPerson = new Person()

console.log(myPerson.name)
console.log(myPerson.gender)
myPerson.printName()
myPerson.printGender()

// With ES7 you dont even need a constructor function - and arrow functions can be used
// that will remove existing confusions / problems with "this"
// Note you don't even need to call the super() function
class Person extends Human {
    myProperty = "value";
    myMethod = () => {...};
}
```

# Spread and Rest Operator

* Spread - Used to split array elements or Array properties
```javascript
const oldArray = [ 1, 2, 3];
const myArray = [...oldArray, 1, 2];
console.log(myArray) // = [1, 2, 3, 1, 2]
// Doesnt have to be elements can pull out kv pairs as well
// n.b. in JS dictionaries are called Objects
```

* Rest - Used to merge a list of function arguments into an array
```javascript
const sortArgs = (...args) => {
  return args.filter(el => el === 1) // sort of like lambda functions
};

console.log(sortArgs(1, 2, 6, 4, 2)); // basically good unpacking in python
```

# Destructuring

* Allows you to extract array elements or object properties and store them in variables
```javascript
// Array Destructuring
const myArray =  ["Hello", "Goodbye", "OK"]
[a, b] = myArray
console.log(a) // Hello
console.log(b) // Goodbye

// Object Destructuring

{name} = {name: "Anlun", "Age": 26} // targets name property of the object
console.log(name) // "Anlun"
console.log(age) // undefined

```

# Reference and Primitive Types

* Primitive types are like ints or floats
* Objects and Arrays are reference types - they reference primitive types
* Like in Python, variables hold references to objects

```javascript
const person = {
    name: "Anlun"
};
const secondPerson = person;
person.name = "Marlene"
console.log(secondPerson) // Marlene - changing the original changes the pointer object

// We can use the spread operator to do a true immutable copy
const secondPerson = {...person}; // Like a deep copy 
```

# Array Functions

```javascript
const numbers = [1, 2, 3];
const doubleNumArray = numbers.map(
        (num) => {
            return num * 2
        }
);

// This is basically lambda functions
```


You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).


Particularly important in this course are:

* map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
* findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
* filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
* concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
* slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
* splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

# JSBIN

https://jsbin.com/?js,console is a great way to 
have interactive JS