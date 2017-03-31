import React, {Component} from 'react';
import GoalItem from './goalitem';

export default class Goals extends React.Component{
  render(){

    let goalItems;
      if(this.props.goals){
        goalItems = this.props.goals.map(goal=> {
          //console.log(goal);
          return(
              <GoalItem key={goal.title} goal={goal} />
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