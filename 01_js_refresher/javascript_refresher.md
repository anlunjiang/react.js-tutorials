# Next-Gen JavaScript

# let and const
* Different ways to create variables
* Traditionally you just create variables with `var a = 1`
* However with ES6 a newer version of JS, let and const are introduced and preferred

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

# JSBIN

https://jsbin.com/?js,console is a great way to 
have interactive JS