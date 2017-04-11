import React from 'react';

export default class Time extends React.Component{


  render(){
    function tick(){
      return Date(); 
    }

    return(
        <div>
          <h3>Current Time is {tick()}</h3>
        </div>
      );
  }
}