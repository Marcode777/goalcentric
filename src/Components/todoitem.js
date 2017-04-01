import React, {Component} from 'react';

export default class TodoItem extends React.Component{
 
  render(){
    console.log(this.props);
    return(
        <ul>
          <li className="todos">
            <h3>{this.props.todo.title}</h3>
          </li>
        </ul>
      );
  }

}

  TodoItem.propTypes ={
      todo: React.PropTypes.object
}
