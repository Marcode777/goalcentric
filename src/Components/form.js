import React from 'react';

export default class Form extends React.Component{
  render(){

    const buttonStyle={
        color: "blue" 
      }
    return(
        <div>
          <form>
            <label>
              Name: 
              <input type="text" name="name"/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <button id="beauty" style={buttonStyle}onClick={clickFunction}>BUTTON</button>
         </div>
      )
      function clickFunction(){
        console.log("clicked");
      }
  }   
}