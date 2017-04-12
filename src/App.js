import React, { Component } from 'react';
import './App.css';
import Motto from './motto';
import Goals from './Components/goals';
import AddGoal from './Components/addgoal'
import uuid from 'uuid';
import $ from 'jquery';
import Extra from './Components/extra';
// import Todos from './Components/todos';


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

getWeather(){
  $.ajax({
    url: 'http://api.wunderground.com/api/3758d4a57136a50e/conditions/q/NY/New_York_City.json',
    dataType:'json',
    cache: false,
    success: function(data){
      console.log(data.current_observation);
      this.setState({data: data}, function(){
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
  this.getWeather();
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
          <h2 className="header" >GOALCENTRIC</h2>
          <Motto/>
          <AddGoal addGoal={this.handleaddGoal.bind(this)}/>
          <Goals id="goals" goals={this.state.goals} onDelete={this.handleDeleteGoal.bind(this)} />
          <Extra word="extra" />
          <Sample1/>
          <Sample2/>
          
      </div>
    );
  }
}

class Sample1 extends React.Component{
  render(){
    return(
      <h2>SAMPLE1</h2>
    )
  }
}

class Sample2 extends React.Component{
  render(){
    return(
      <h3>SAMPLE2</h3>
    )
  }
}

export default App;
