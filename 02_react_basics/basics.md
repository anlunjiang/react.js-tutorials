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

Basically just HTML code inside JS. - JSX is not normal JS syntax - and only works because there 
are transformation steps React does behind the scenes - think of interpreters

* You can see the actual code that runs in the F12 developer web console - and click sources

