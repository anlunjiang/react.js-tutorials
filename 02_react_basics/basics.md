# Basics and Installing

* HTML + CSS + JS = REACT Component
* Declarative approach - define the end or target state and REACT will decide the DOM update instructions

## Installing

* Install node version manager
    * `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`
    * `nvm install --lts`

* Install react with bootstrap
    * `npx create-react-app react-test-project`
    * `cd project-root`
    * `npm start` to start the app locally

* This will create a `package.json` file - which holds all the dependencies

## Project Structure

* When starting a Reactserver the first file that will run is actually `index.js`
* This might not be real JS code e.g. the `import './index.css';` statement isnt valid JS but works
    * The CSS file is therefore picked up and applied
    * The code is transformed first before browser runs it by react
* You will notice a `Render` function that renders the app in place of a element id ROOT
    * In the public folder is an index.html - this is what is hosted by the browser
        * index.html has a div root which is empty - but is ready to render whatever is in the app

## JSX - JavaScript XML

Basically just HTML code inside JS. - JSX is not normal JS syntax - and only works because there are transformation
steps React does behind the scenes - think of interpreters

* You can see the actual code that runs in the F12 developer web console - and click sources

## Custom Components

```javascript

// Must be named Capital Case
export default function ExpenseItem(input) {
    console.log(input.children)
    return (
        <div>
            <div>Nov 18th 2021</div>
            <div>
                <h2>Car Insurance</h2>
                <div>£284.11</div>
            </div>
        </div>
    )
}
// React custom elements start with Capital letter
// In-built html elements start with lower case e.g. div, h1 etc

// Note that only one root tag is allowed - in this case, div, the rest are nested

```

## Adding CSS

You can add css for a component by making a css file in the same location

```css
.expense-item h2 {
    color: #3a3a3a;
    font-size: 1rem;
    flex: 1;
    margin: 0 1rem;
    color: white;
}
```

From there you can reference your css classes like so in your js files

```javascript
import "./ExpenseItem.css";

export default function ExpenseItem(input) {
    console.log(input.children)
    return (
        <div className="expense-item">
            <div>Nov 18th 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">£284.11</div>
            </div>
        </div>
    )
}
```

## Passing Data via Props / Properties

Each function has convention of receiving a single input called `props` - this essentially
is an object or dict format.  

When passing to other components - you can set the values of their props - instead of passing
individual args - this is different to say other OOP languages like say python or java

```javascript
export default function ExpenseItem(props) {
    console.log(props.children)
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/> // sets the prop dict value for date 
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    )
}
```

## Composition
It is good practice to create re-usable components - or more generic ones that can be
reconfigured easily - e.g. cards

```javascript
export default function Card(props) {
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>
}
// props.children makes sure that the custom component can see all the properties of the
// inside nested components. You then put the nested classnames into the wrapping tag
// so all the classnames are visible

export default function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    )
}
```
It's common to also pass data between tags too - as well as create resuable compo