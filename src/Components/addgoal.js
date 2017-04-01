import React, {Component} from 'react';
import uuid from 'uuid';


export default class AddGoal extends React.Component{
  constructor(){
    super();
      this.state = {
        newGoal: {} 
      }
    
  }

  static defaultProps = {
    categories: ["Urgent", "Important", "Secondary"]
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert("Title is empty, this is required.");
    } else {
      this.setState({ newGoal: {
        id:uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addGoal(this.state.newGoal);
      });
    }
    e.preventDefault();
  }

  render(){
    let categoryOptions = this.props.categories.map(category=> {
      return <option key={category} value={category}>{category}</option>
    })
    return(
        <div>
          
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Add Goal</label> 
              <input type="text" ref="title" placeholder="add goal here" />
            </div>
            <br/>
            <div>
              <label>Category:</label> 
              <select ref="category"> 
                {categoryOptions}
              </select>
            </div>
            <br/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      );
  }
}

  AddGoal.propTypes ={
      categories: React.PropTypes.array,
      addGoal: React.PropTypes.func
}
