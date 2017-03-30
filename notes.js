// in the package.json file
// in the dependencies section, we can see that we are using react and the current version, and react-dom and the current version
// in our scripts section, start, will just start the application, build is used to compile everything

// in our public folder
// we have an index.html file, within the body, we have a pair of div tags with the id of "root", and this is where everything will be output (or outputted)

// in our src folder
// this is where all of our react stuff goes
// if we look at index.js, we're importing react and react-dom, we have a main App component that we're importing
// we're doing our ReactDom render in the main App component, and then we're saying we want to insert it in the html with the element that has the ID of "root", which is where it will be output
// app.js is basically the gateway to our main App component; 
// also here we have our class with the render() function, *remember, this is the only function that is required for every component, all others are optional and can be added in addition to it, but render is required
// also *remember that this is JSX, (it is not plain JavaScript, it's a derivative of it) so when we do a return in our render, there can only be 1 main element (the main top div element) at the very top level, there can be multiple elements within that element, but there can only be one element (the div element) at the top level

// in our main App.js component, I prefer to use this as kind of a placeholder for all our other components, so we can import the components, and we can place them right in the render with each other 

// back to the src folder
// so we're going to make a folder inside the src folder called "Components"
// inside this, folder, we are going to create a file called goals.js, this will be our goals component and it will be responsible for listing all of our goals
// now we're going to take some of the structure of App.js, because this is essentially the bare minimum format that all components should have

//LEFT OFF AT 13:47