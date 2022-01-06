# Portals, Fragments and Refs

## JSX can have some limitations
* You cannot have more than one root tag return in a JSX statement
or variable
* However, this can be easily solved by wrapping your elements in a <div/>
* This works fine but, if you have too many items - then you can a huge
nested structure of divs - and therefore not an ideal sln

## Wrapper Component
To get around this you can create a helper function where you wrap the 
contents and return the children:
```javascript
const Wrapper = (props) => {
  return props.children;
};
export default Wrapper;
// Then you can call this like this

const someFunc = () => {
  return (
    <Wrapper>
      ...
    </Wrapper>  
  )
};
```

Lo and behold - React actually comes with this component premade that
you can implement: Called **Fragments**
```javascript
return (
  <React.Fragment>
    <h2>Hi there!</h2>
  </React.Fragment>  
)
// Note some projects use just "<>" to signify a fragment 
```

This allows us to write cleaner code and makes sure our DOM isnt cluttered
with lots of unnecessary HTML elements

## React Portals

Take this example:
```javascript
return (
  <React.Fragment>
    <MyModal/>
    <MyInputForm/>
  </React.Fragment>  
)
```
This is actually bad practice, because modal is supposed to be an overlay
over the entire page - and shouldnt be represented as deeply nested - 
which is what would be read over at the DOM
 - Semantically it doesnt represent what is being rendered
 - Therefor we use **Portals** that can render the model elsewhere
 in the DOM - so the Modal in the DOM would not be next to the Form

Portals need two things:
* A place where you want to port the Component
* Let component know that it should  portal to that place 

## Using Portals
Go to public index.html folder - from there you can mark the place
with a div and an id:
```html
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="backdrop-root"></div>
    <div id="modal-root"></div>
    <div id="root"></div>
```

```javascript
// We then make our modal its own method here for ease of JSX use:
    
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

// And then ref it here:
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
};
```
So in short we create the location of the portal in index.html - and then
ref it using ReactDom.creatPortal which accepts the component to port 
as well as where to port it

This way in the DOM the modal and backdrop will always be at the root
of the body - which is where it should be 

Nice thing is that this doesnt change your react workflow - but it makes
people viewing your DOM easier

## Refs / References
Refs allow us to get access to other DOM elements

 