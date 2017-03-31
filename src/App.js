import React, { Component } from 'react';
import './App.css';
import Motto from './motto';
import Goals from './Components/goals';
import AddGoal from './Components/addgoal'
import uuid from 'uuid';


class App extends Component {
  constructor(){
    super();
    this.state = {
      goals: []
    }
  }

componentWillMount(){
  this.setState({
    goals:[
       {
        id:uuid.v4(),
        title: "First Goal",
        category: "Important"
       },
        {
        id:uuid.v4(),
        title: "Second Goal",
        category: "Secondary Importance"
       }
    ]
  })
}

handleaddGoal(goal){
  let goals = this.state.goals;
  goals.push(goal);
  this.setState({goals:goals});
}

  render() {
    return (
      <div className="App">
          <h2>GOALCENTRIC</h2>
          <Motto/>
          <AddGoal addGoal={this.handleaddGoal.bind(this)}/>
          <Goals  goals={this.state.goals}/>
      </div>
    );
  }
}

export default App;
