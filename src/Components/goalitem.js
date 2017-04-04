import React, {Component} from 'react';


export default class GoalItem extends React.Component{
  deleteGoal(id){
    this.props.onDelete(id)
  }
  render(){
    console.log(this.props);
    return(
        <ul>
          <li className="goals">
          <h3>{this.props.goal.title} -  {this.props.goal.category} <button onClick={this.deleteGoal.bind(this, this.props.goal.id)}>X</button></h3>
          </li>
        </ul>
      );
  }

}

  GoalItem.propTypes ={
      goal: React.PropTypes.object,
      onDelete: React.PropTypes.func
}
