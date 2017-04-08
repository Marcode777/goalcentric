import React from 'react';

export default class Extra extends React.Component{
  render(){
    return(
        <div id="extra">
          <h3>{this.props.word}</h3>
        </div>
      );
  }
}