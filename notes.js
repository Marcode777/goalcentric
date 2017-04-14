// OVERVIEW OF CONCEPTS
// Data flows from the top-down, from the main App.js Component to the other Components
// the data is passed through to the other components in a top-down fashion via props
// State is set via the constructor()super(); function. However the data for this state should be contained in lifecycle methods which fire at a certain point in time, such as componentWillMount(){}
// In order to pass state and data from the outer Components back to the main App.js Component, it must traverse back to the main App.js Component the same way it got there, e.g., if it traversed 2 layers of Components to get to it, it must also traverse the same 2 layers back, if it traversed 3 layers of Components from the main App.js Component, it must also traverse the same 3 layers of Components to get back to the main App.js Component

// JavaScript expressions can be used in the DOM by entering them in curly brackets { }
// If Else statements cannot be used in JSX but conditional or ternary expressions can be used instead, e.g. " condition ? expr1 : expr2  "
// Styling using JSX, React recommends using inline styles, using camelCase, and React automatically renders the value of px on specific elements. A style component is written in object syntax.
// comments in JSX can also be made by starting them with // and placing them inside curly braces with correct spacing e.g., 
//     {
     // this is a comment in JSX
//      }
// the naming convention for html tags are that they are in lower case, and the naming convention for Components are that they start with an uppercase
// lifecycle methods: in any application that uses many components it's very important to free up resources taken by the components when they are destroyed. Lifecycle methods help facilitate this. So if we want to set up a timer whenever a clock is rendered to the DOM, whenever the clock needs to be rendered, we want to set up a timer, this is called mounting; similarly, we want to clear the timer whenever the DOM-produced clock is removed; the React Component needs to be cleared, the memory needs to be free, this is called unmounting. We can declare special methods on the component class to run some code when a component mounts and unmounts. Those methods are: componentDidMount(){}, this tells us when a component has mounted, componentWillUnmount(){}, tells us that a component will unmount.   
// just for carefulness, when we use states in React, we do not modify the state directly. Everytime we update a state, we call the setState, because there are many things that happen in parallel. The only place we should assign state is in the constructor. Also, state updates may be asynchronous, React may batch multiple setStates, which means if we have a lot of setStates happening, React may batch them together into a single update for performance reasons. Note that because this.props and this.state may be updated asynchronously, we should not rely on their values for calculating the next state.
// states and props: the main difference between states and props is that props are immutable, this is why the container component or the parent or the parent class, should always define the state that can be updated and changed, while the child component should only pass the data from the state using props.

// the whole GOALCENTRIC app is contained inside the div with the id "root" inside the html file in the public folder
// the src folder is where all the React code is typed
// any property you want to pass into or from a component must be done with the {this.props.whatevername} syntax
// *Key concept is from 23:05 - 23:30* 
// we want to define the state and the keys in the constructor(){super();} function, but not the actual data, for that data, we want to keep in a lifecycle method such as componentWillMount(){}, which fires off every time the component is re-rendered
// *Key concept from 34:37 - 35:00* Each Component has its own state, but to synchronize it to the state of the main App Component, it can be sent up through properties.

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
// now in order to be able to delete these items, so in the "goalitem.js" file, we'll place a link at the end of the line items within the li tags, " <a href="#"> X </a> " and we want to put an event handler onClick set to {this.deleteGoal.bind(this)} so it should look like this " <a href="#" onClick={this.deleteGoal.bind(this)}> X </a> "
// then we're going to create the corresponding handler function up above the render(), and we'll call it deleteGoal(){}
// now it's the same idea, what we want is when we click on it in this Component, but we want to pass it up to the main Component and then do the final delete there
// now since we're in the "goalitem.js" file, we're actually 2 Components deep, so we need to pass it up to "goals.js" file and then pass it up to the main App Component
// to do that, we're going to set a property in the deleteGoal function in "goalitem.js" file and we're going to pass in " this.props.onDelete() " and we're going to pass in the id " this.props.onDelete() " , to pass along the id, we go back to " {this.deleteGoal.bind(this)} " and make it into this " {this.deleteGoal.bind(this, this.props.goal.id)} "
// now we should be able to access it as here " deleteGoal(id){this.props.onDelete(id)} "
// now we're going go to our "goals.js" file and turn this " <GoalItem key={goal.title} goal={goal} /> " into this " <GoalItem onDelete={this.deleteGoal.bind(this)}  key={goal.title} goal={goal} /> " and we also want to create the corresponding function above the render() like so " deleteGoal(id){this.props.onDelete(id)} "
// so now we're passing it up to the main Component so down where we have <Goals  goals={this.state.goals}/> we want to pass in onDelete like so " <Goals  goals={this.state.goals} onDelete={this.handleDeleteGoal.bind(this) /> " 
// and just as we created a handleAddGoal function before, we're also going to add a corresponding handleDeleteGoal function
// and the idea is that just like the handleAddGoal, we want to get it from state and then we want to remove the goal that we want and then refresh the state. Now we can do this in different ways, we could use a for-loop or something like that, but we're going to use findIndex like so " handleDeleteGoal(id){let goals = this.state.goals;let index = goals.findIndex(x=> x.id === id);goals.splice(index,1);this.setState({goals: goals});} " 
// and what the code above is doing is it's basically going to look through all the goals, it's going to find all the IDs and try to match it to the current ID that's being passed in, if it matches, then it's going to get put in the index, then it will splice where that index is, and we want to delete 1 from that, and then we refresh the state by doing setState.
// and now the delete function works.

// 47:22
// In Summary, We Can Now Add Goals and Delete Them As Well. Now The App Is Fully Functional.






// Extra:
// prop types are a kind of validation for properties, just like the following code that we added to the "goals.js" file

// Goals.propTypes ={
    //   goals: React.PropTypes.array,
    //   onDelete: React.PropTypes.func
    // }

// after implementing the code above, we say that goals is an array and onDelete is a function.
// we see that everyhing still works fine, this is because the types are all correct and they have passed this validation, however, if the types are not correct, this validation will throw an error on the console. So it's good practice to do this. // let's do this for "goalitem.js" as well but changing the class from "Goals" to "GoalItem", now the same for "addgoal.js" so we can check for the types of properties, and so on and so forth

// how to bring in other data from an outside API
// this involves our main App Component. First, we'll get placebo data from a dev api called JSON Placeholder, and if we want to get some todos, we click on the link containing them
// we can make a GET request to those todos
// so in our main App Component, we want to make the request in a lifecycle function called componentDidMount(){}, well actually, we should put this in both componentDidMount(){} and componentWillMount(){}
// so what we'll do is create a function called getTodos(){} and we're going to want to run that in both these component lifecycles so we'll insert it as " this.getTodos() " function and insert it in both lifecycle methods
// and where we put the projects in state, we also want to create a function for that separately called getGoals(){} and all we're going to do is get the setState goals from the componentWillMount lifecycle and move it to the getGoals function and then we'll call that setState from the componentWillMount as this.getGoals();
// now in getTodos(); this is where we want to make our request, and we can use many different modules to make HTTP Requests, (there are Axios and SuperAgent as alternatives) but we'll use jQuery, so let's install jQuery through NPM by running command, npm install jquery --save
// so let's go ahead and import jQuery in our main App Component by doing " import $ from 'jquery'; "
// and then back to our getTodos(){}; function,  *the following is just me typing instructions* we're going to say jQuery.ajax and we want to pass in the url, the url is from the json placeholder, the dataType is going to json, cache false, and then we have our success, so if everything goes okay, this will run, and that takes in the data that's returned, and we also need to bind this just like we do with the other function ,then put a comma and then we're going to have our error in case there's an error, and for that, that's going to take in error, actually it's going to take in a couple of things, xhr, status, and err, and then all we want to do here is console.log the error.
// now if everything goes okay, we want to take the data that's returned and put it into our state, so up in the state here, let's add todos which will be an empty array, and then down here we can say this.setState, and we'll say Todos and we'll set that to the data, and then let's put a callback and then we can check the state, so console.log this.state, so since we have get Todos running in these lifecycle methods, it should run when the app loads. 
// so let's go back and refresh it, open up the console, open up the logged object, and we have our goals array of objects within and we can also see within it that it's logging the array of 200 todo objects from the API 
// so it's as easy as that to bring data from an outside source and put it into our state, and then we can use that in the rest of our Application.
// LEFT OFF AT 55:45
// We can do that real quick, let's create another component called todos.js and we'll also create one called todoitem.js and we're going to do kind of the same we did with the goals
// so we're going to copy what we have in goals and paste that into todos.js, we're going to change a lot of the goals syntax to todos, we're not going to do the delete and add functions though, we just want to list them so we'll get rid of that, we know we're moving kind of fast, but don't want this to take too long, we just want to do this quick.
// now we're going to pass in todos as properties just as we did here, and then we'll say todoitems this.prop.todos.map, then we're going to return the todoitem component, we don't need the onDelete, and I believe the dos have a title, let's check it out, yeah they have a title and an id, so this can be todo.title, todo, ooops okay down here, change that, just say todos, alright and then for the prop types, we don't need the onDelete and then let's make sure we export todos. Alright so let's save that.
// and then in todoitem.js, we're going to copy what we have goalitem.js, paste that in, okay we don't need the delete, and here let's say todo... change that... uhhmmm we don't need a category so let's get rid of that, it's just going to be the todo, we don't need the link to delete, change that, alright. Save that. And let's see, now in the main App Component, we're going to import both of those, or actually, we're just going to import todos, alright and then we'll add that down here, let's put an <hr/>, save that, now I'll probably get an error, no error, but we're not outputting anything, and that's because we didn't pass anything into Todos, so we want to pass along the todos that we have in state. So we'll say this.state.todos, save it, AND THERE THEY ARE. SO THOSE ARE ALL COMING IN FROM THAT API. SO YOU CAN SEE IT'S EASY TO PULL IN DATA AND JUST BRING IT INTO OUR STATE AND THEN PUBLISH IT DOWN TO COMPONENTS THROUGH PROPERTIES. AND WE MADE A GET REQUEST BUT OF COURSE WE COULD ALSO MAKE POST REQUESTS AND WE COULD SUBMIT DATA TO APIs AND TO EXTERNAL DATABASES AND SO ON. ALRIGHT SO THIS IS GETTING KINDA LONG SO WE'RE GOING TO GO AHEAD AND STOP HERE. WE COVERED PRETTY MUCH ALL THE FUNDAMENTALS OF REACT. THANKS BRAD TRAVERSY!!!!! 








