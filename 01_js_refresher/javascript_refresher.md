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
  return args.sort()
};

console.log(sortArgs(1, 2, 6, 4, 2)); // basically good unpacking in python

```

# 

# JSBIN

https://jsbin.com/?js,console is a great way to 
have interactive JS