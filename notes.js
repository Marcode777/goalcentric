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
// inside this, folder, we are going to create a file called "goals.js", this will be our goals component and it will be responsible for listing all of our goals
// now we're going to take some of the structure of App.js, because this is essentially the bare minimum format that all components should have
// we can pass in properties in this " <Goals/> " Component in App.js, such as " test='Hello Goal' "  and then in the actual "goals.js" file, type in "{this.props.test}" to use the property, just as an example.
// the idea is that all of our goals are going to be held in state, that's where our data needs to be held, usually we would fetch this from some kind of API or database and then put it in our state, but for this we're just going to put it straight in our state
// so for that, what we want to do in the main App.js is create a constructor function and also a super(); syntax function, right above the render function, and this is where we want to define our initial state, or state keys, so we're going to do " this.state = { goals:[]} "   and goals is going to be an array of objects, and each one will have a title and a category. Note: *the super is just required syntax, it does not follow conventional function(){} syntax*
// so now, we want to take this state and pass it into the "<Goals/>" Component as a property. Basically we want everything at the top of our application in state and then pass it down onto other Components as properties (data should be immutable, it should go from the top down)
// so let's pass it in as goals and we should be able to say {this.state.goals}
// now in the "goals.js" file, right after the render function, we're going to do a console.log(this.props), and we can see in the console after refreshing, that it's logging the properties, and we have this goals, with an array with all of our goals, so this means it's accessible now from the goals Component
// LEFT OFF AT 17:45
// now when we have an array of objects like this, we usually want to create a separate Component for each individual item, and then we want to basically map through these goals and output that component
// so we're going to go ahead and in the Components folder, create a new file called goalitem.js
// we're going to copy everything we have in "goals.js", paste it into "goalitem.js" and then name the Component to "GoalItem" and change the div into <li> so we can return a list
// *just as a sidenote, in JSX, you can't use class as an attribute, a class is called className instead of the usual class as in typical JS; also "for", for forms, you can't use "for" you have to use "htmlFor"
// LEFT OFF AT 19:00
// back to "goals.js", within the render, create a variable and say " let goalitem; " and then type if(this.props.goals) and take the goalitem variable and set it equal to this.props.goals.map( goal => {console.log(goal);});
// LEFT OFF AT 20:35
// so now in the console, we can see that it's logging each individual goal, so this is working, we're getting each individual goal
// now we replace the console.log with return <GoalItem/> Component and pass in each goal as a prop <GoalItem goal=/>
// LEFT OFF AT 21:09
// so we're assigning each GoalItem to the goalitems variable
// it's also recommended to add a unique key to each item in an array, and here we'll just use " key={goal.title} "
// now nothing is being output except line item bullets because if we go into the "goalitem.js" file, we haven't put anything within the <li>. Remember, in the "goals.js" file, we should be getting goal as a property from the "goalitem.js" file, so back to the "goalitem.js" file, we can put " {this.props.goal.title} "
// ********** the "goal" keyword before =>, in " goalItems = this.props.goals.map(goal=> " is completely arbitrary, this keyword can be replaced with any keyword as long as it is followed-through**********
// LEFT OFF AT 23:05
// AS A QUICK SUMMARY up to this point:
// we're basically setting our state in our maing App Component, we have a state called goals which contains an array of objects
// we're passing it into the <Goals/> Component as a property, and then inside the "goals.js" file, we're mapping through that array 
// and we're outputting a <GoalItem/> component which has a "goals" className where we output the title and category

// quick note: in our main App.js Component, we set the state in our main constructor, but this usually isn't where we want to set the actual data, we do want to define the state and the keys, but not the actual data, for that we want to use a LifeCycleMethod, and something probably like componentWillMount();
// componentWillMount(){} is a lifecycle method, it fires off everytime the component is re-rendered
// so in the main App.js Component, we'll remove the objects, we do want to keep the goals property, but as an empty array in the constructor
// in the componentWillMount(), we want to say "this.setState({goals[]})" and we'll paste the data into the goals array 
// we refresh and see that it still displays like before, but now this is a better way to do that
// * if we're fetching data from an AJAX call, from an outside API, we want to do that in this componentWillMount(){} lifecycle method as well, either this, or componentDidMount(){}, and if we go to the docs for React, they document all the lifecycle methods and at which times they fire off*

// now what we want to do is add a form so that we can add to our states
// so we'll create another component and we'll name it "addgoal.js"
// so we want this to be a form, it will have a <label> with title, and a text input, and ref with equal to title, this ref gets the value when we submit the form
// we also add a <select> with a ref equal to category
// now what we want to do is we want the categories to be a property of the Component
// we can set default properties above render() and we're going to say "static defaultProps" and we'll set that equal to an object, and within that, let's set categories to an array, and we'll say "Urgent", "Important" or "Secondary"
// now what we want to do is we want to map through these and output the options
// so we're going to go above the return in render() and say " let categoryOptions = this.props.categories.map(category=> { return <option key={category} value="category">{category}</option>option> }) " 
// now we should be able to just use {categoryOptions} in the <select></select> tags
// LEFT OFF AT 29:39
// now to submit the form, in the form tag, we're going to add a handler called " onSubmit() ", so in the form tag we have "onSubmit={this.handleSubmit.bind(this)}"
// we can define handleSubmit function near the top, so to test this, we console.log("submitted")
// but we notice when click the submit button, it does not log, this is because the submit button is actually submitting the form, what we want to do is pass in an event parameter, and we can use e.preventDefault(); and that will preven the form from actually sumitting, so now when we test we can actually see the log

// now what we want to do is we want to store the data that we submit into state
// so we're going to add a constructor function at the top, and once again, in the constuctor function, we also have to call our super(); function, and then we're going to say this.state = { newGoal:{} },  and for this newGoal, which is going to be an object, we don't want to fill it there, what we want to do is set it when something is submitted
// to grab the values of the form, we can use the "refs" attribute
// *note, the handleSubmit must be binded (bound) so that the it knows the "this" in "onSubmit={this.handleSubmit}" , so it must be "onSubmit={this.handleSubmit.bind(this)}", so now it's logging
// now we don't want users to be able to submit a blank title, so we can do a bit of validation via saying it this.refs.title value is equal to nothing, then we want to alert "title is empty, this is required"
// that code should be this:   "  if(this.refs.title.value === ''){alert("title is empty, this is required")} else {} " and then we have an else to do whatever we want
// now if the submit passes, we want to set the state and we want to put the data into the newGoal value
// so for the else part in "  if(this.refs.title.value === ''){alert("title is empty, this is required")} else {} ", we'll do " this.setState({newGoal: {title: this.refs.title.value, category: this.refs.category.value} }) " and this will set the state for us.
// LEFT OFF AT 34:01
// now when we use this setState, it can take a second parameter, which will be a callback function that goes into here " this.setState({newGoal: {title: this.refs.title.value, category: this.refs.category.value} }) " which will now be this "this.setState({ newGoal: {title: this.refs.title.value,category: this.refs.category.value}}, function(){console.log(this.state);});" and now this logs the state with the newGoal with the data
// LEFT OFF AT 34:34
// now it should be noted that the state in this AddGoal Component is different from the main App Component, each Component has its own state
// but what we want to do is take the data we submit and pass it up into the main App Component and save it in that state
// so what we can do is we can send it up through a property, more specifically, a function inside the properties
// LEFT OFF AT 35:05
// so what we'll do is in the second parameter of "addgoal.js" file, we'll say " this.props.addGoal(newGoal) " as in " function(){this.props.addGoal(this.state.newGoal);} "
// since we did that, we should be able to access this from the main App Component, so we'll go to its <AddGoal/> Component and we're going to put a property addGoal={this.handleAddGoal.bind(this)} so we want a function to handle it which is where handleaddGoal comes in and remember this should be bound
// and then we'll create that handleAddGoal(){} function above it
// so now when we click submit, it's logging the object that's created from the form
// so now the next step is to have the handleAddGoal function add it to the state
// keep in mind that in React state should be immutable, we don't want to change it, we just want to update it, so we just want to get everything pushed to it rather than changing it
// so we'll have the handleAddGoal(goal){} function become "  handleAddGoal(goal){ let goals = this.state.goals; goals.push(goal); this.setState({ goals: goals}) }   "
// so in the code above, we let goals and set it to this.state.goals, so we're grabbing what's already there, and pushing the new goal onto it and then we're refreshing it by doing this.setState({goals:goals});
// and so now there it is, but still it's only saying category for the second property
// found the issue, in the "addgoal.js" file, in the <option> tags, value="category" needed to be changed to value={category}, fixed!
// SO NOW WE CAN ADD GOALS

// keep in mind this data is not persisted anywhere, so when we refresh, the added data is deleted
// As a Reminder, React is for User Interfaces, it won't persist the data. Now we could push the data to some kind of API or local storage or something like that. That's what's great about React, because the backend is completely separate, so that means we can have this data go to local storage and then just replace it with MongoDB or a similar database.
// LEFT OFF AT 39:19

// now we will work on a way to delete the items 
// so initially when we look at our items, they don't have an id, and it's a good idea to have an id to keep track of them 
// we will use a simple npm package called "uuid" so we'll exit out to the terminal, and we'll install it by running the command, npm install --save uuid
// then we'll just restart by running command, npm start
// then we go to the main App Component and import it, " import uuid from 'uuid'; "
// and then we go to the componentWillMount(){} section and give an id property (key:value pair) in the objects by typing " id:uuid.v4(), " along with the title and category properties
// so each time we use this, it will generate a new id
// and then in the "addgoal.js" file, when we add a new goal, we also want to add an id, so we also import it there and type it inside the setState where we set the newGoal
// LEFT OFF AT 42:29










