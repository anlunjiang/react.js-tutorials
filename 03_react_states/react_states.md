# React States

## Buttons

In HTML there are button tags - same with JSX in React - but the listener is easier to implement:

```javascript
<button onClick={() => console.log("Clicked!")}></button>

// Naming Convention handler suffix - meaning this function is attached to an event
const clickHandler = () => {
    console.log("Clicked! My man!")
}

<button onClick={clickHandler}>Change Title</button>
```

The onClick requires a function - either on the fly or passing an existing imported one over. Notice we dont execute the
function - we only point or reference it

## React Sequence of Events

React will first read all your JSX code in components - and calls it all before translating to DOM and displaying it

This only happens once - so for changing events - like buttons - React needs to implement state.

```javascript

import {useState} from "react"
//function provided by the react library - to define values, where changes to these
// values should result in the component func being called again

const [title, setTitle] = useState(props.title)
// This is a REACT HOOK - they all start with "use" and must be called inside component 
// functions - and not in nested functions - root of component func

setTitle("Updated");
// This function itself will set the value and managed by react
// This will tell react to re initialise the component function
```

useState actually returns an Array - first value the variable itself, and the second is the updating function!

* Note that even though you can put state for a component. This state is actually only on a per state instant basis - so
  if you have multiple of the same component- they all have their own states as a result
* The hook will just re-instantiate the component when you update - and read the latest value from the state change
  previously

## User Inputs

You can listen to input from HTML tags:

```javascript

const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
}
<input type="text" onChange={titleChangeHandler}/>
```

This will detect any title change to the input box - any keystroke.

* Now, when you listen to events - you get "event" which describes the event - this is what is looks like

```
SyntheticBaseEvent {
  _reactName: 'onChange',
  _targetInst: null,
  type: 'change',
  nativeEvent: InputEvent,
  target: input
  …
}
target: input
  value: A
timeStamp: 44110.59999999404

```

* Important to note is the target.value = input
* You can have multiple state calls that are independent of each other