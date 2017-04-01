import React, {Component} from 'react';
import TodoItem from './todoitem';

export default class Todos extends React.Component{
  

  render(){

    let todoItems;
      if(this.props.todos){
        todoItems = this.props.todos.map(todo=> {
          //console.log(goal);
          return(
              <TodoItem  key={todo.title} todo={todo}/>
            );
        });
      }

    return(
        <div id="todos">
          <h3>TODOS</h3>
          {todoItems}
        </div>
      );

   
    }
  }
  
   Todos.propTypes ={
      todos: React.PropTypes.array
}