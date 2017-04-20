import React from 'react';
{
  //this clock Component is imported in the goals component
}
var clockStyle = {color: "blue"};


export default class Clock extends React.Component{
  constructor(){
    super()
    this.state = {
      date: new Date()
    };
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  componentDidMount(){
    this.timeID= setInterval(
      () => {this.tick()}, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timeID)
  }

  render(){
    return(
        <h3 style={clockStyle}>CLOCK: {this.state.date.toLocaleTimeString()} </h3>
      );
  }
}