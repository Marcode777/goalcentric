import React, {Component} from 'react';

export default class GoalItem extends React.Component{
  render(){
    console.log(this.props);
    return(
        <ul>
          <li className="goals">
            <h3>{this.props.goal.title} -  {this.props.goal.category}</h3>
          </li>
        </ul>
      );
  }
}