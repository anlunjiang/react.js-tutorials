# Styling React Components

* Conditional and Dynamic Styles
* Styled Components
* CSS Modules

* A big problem with current implementation is that css files being imported are globally scoped
* Meaning regardless of file - if a tag has the css classname it will always inherit the style

## Dynamic Inline Styles

```javascript
const [isValid, setIsValid] = useState(true);
<input style={
  {borderColor: !isValid ? "red" : "black", background: !isValid ? "salmon" : "transparent"}
} type="text" onChange={goalInputChangeHandler}/>
```

* However inline styles take a very high priority

## Setting CSS Classes Dynamically

* You can make CSS rules - by adding classes dynamically
* Invalid in this case is a dynamic class - so if tags with form control also have invalid, this following rules would
  apply

```css
.form-control.invalid input {
    border-color: red;
    background: #ffa0bf;
}
```

```javascript
<div className={`form-control ${!isValid ? "invalid" : ""}`}>
  <label>Course Goal</label>
  <input type="text" onChange={goalInputChangeHandler}/>
</div>
```

* Template literals backticks
  * Whatever typed between "``" will be taken as a literal string
  * you can then between them add more curly braces to add more JS expressions
  * This is like dynamic strings in python using f"{}"

## Styled Components

* A way to get around styles spill over - helps you create CSS components that are only
attached to their js components
* `npm install --save styled-components`

```javascript
import styled from "styled-components";
import './Button.css';

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
```
* This is a tagged templated literal - which is a core JS concept
* What we pass in the backticks will end up in the button method
  * this button method will return a new button component 
  * There are methods for all HTML elements - h1, p1, etc
* The CSS will then be added to the button element
  * pseudo selectors are denoted using the & symbol
* By default, the returned button applies all the props - which will all be forwarded

* No JSX here - only the button 
  * This guarantees no spill over since it assigns unique classnames

```css
&:label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? "red" : "black"};
  }
```

You can also have js in the css that pass in props

* Media Queries - to dynamically change properties of CSS depending on the device or media used
```css
width: 100%;
@media (min-width: 668px) {
    width: auto;
  }
```
* This will change the button width to auto once the screen is over 668 pixels. below that 
is 100% of the width of the screen

# CSS Modules

This is an alterante way:

You need to rename your css files a bit to be:
`Button.module.css` - So that react knows to transform the code so Modules work
`import styles from "./Button.module.css "` - Slightly different import method too

* Then to use it:
```javascript
const Button = props => {
  return (
    <button type={props.type} className={styles["button"]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

<button type="submit" class="Button_button__aP0lF">Add Goal</button>
// This is what the DOM actually creates
// a class with a unique name
```

* CSS Modules essentially takes the class names from the existing CSS file and changes them
to be unique
* This means when you import from the modules.css file - all the classes and styles will
be recreated with unique names

## CSS Modules Media Queries

Just like before CSS modules can use media queries

```css
.button {
  width: 100%;
}

@media (min-width: 768px) {
  .button {
      width: auto;
  }
}
```
You just add it normally to the css module