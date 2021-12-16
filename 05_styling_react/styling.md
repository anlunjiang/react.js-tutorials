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

* A way to get around styles spill over 
* `npm install --save styled-components`