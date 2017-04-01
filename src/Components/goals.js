import React, {Component} from 'react';
import GoalItem from './goalitem';

export default class Goals extends React.Component{
  deleteGoal(id){
    this.props.onDelete(id)
  }

  render(){

    let goalItems;
      if(this.props.goals){
        goalItems = this.props.goals.map(goal=> {
          //console.log(goal);
          return(
              <GoalItem onDelete={this.deleteGoal.bind(this)} key={goal.title} goal={goal}/>
            );
        });
      }

    return(
        <div id="goals">
          <h3>GOALS</h3>
          {goalItems}
        </div>
      );

   
    }
  }
  
   Goals.propTypes ={
      goals: React.PropTypes.array,
      onDelete: React.PropTypes.func
}