// commented out for practicality, if needed to be used again, uncomment this file and uncomment import in main App Component and also add the <Todos/> Component in the main App Component as " <Todos todos={this.state.todos}/> "

// import React, {Component} from 'react';
// import TodoItem from './todoitem';

// export default class Todos extends React.Component{
  

//   render(){

//     let todoItems;
//       if(this.props.todos){
//         todoItems = this.props.todos.map(todo=> {
//           //console.log(goal);
//           return(
//               <TodoItem  key={todo.title} todo={todo}/>
//             );
//         });
//       }

//     return(
//         <div id="todos">
//           <h3>TODOS</h3>
//           {todoItems}
//         </div>
//       );

   
//     }
//   }
  
//    Todos.propTypes ={
//       todos: React.PropTypes.array
// }