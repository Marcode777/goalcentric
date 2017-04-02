import React, { Component } from 'react';
import './App.css';
import Motto from './motto';
import Goals from './Components/goals';
import AddGoal from './Components/addgoal'
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/todos';


class App extends Component {
  constructor(){
    super();
    this.state = {
      goals: [],
      todos: []
    }
  }

getTodos(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    dataType: 'json',
    cache: false,
    success: function(data){
      this.setState({todos: data}, function(){
        console.log(this.state);
      });
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err);
    }
  })
}

getGoals(){
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
        category: "Secondary"
       }
    ]
  })
}

componentWillMount(){
  this.getGoals();
  this.getTodos();
}

componentDidMount(){
  this.getTodos();
}

handleaddGoal(goal){
  let goals = this.state.goals;
  goals.push(goal);
  this.setState({goals:goals});
}

handleDeleteGoal(id){
  let goals = this.state.goals;
  let index = goals.findIndex(x=> x.id === id);
  goals.splice(index,1);
  this.setState({goals: goals});
}

  render() {
    return (
      <div className="App">
          <h2>GOALCENTRIC</h2>
          <Motto/>
          <AddGoal addGoal={this.handleaddGoal.bind(this)}/>
          <Goals  goals={this.state.goals} onDelete={this.handleDeleteGoal.bind(this)}/>

          <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
