import React, { Component } from 'react';
import './App.css';
import Words from './words';
import Form from './Components/form';
import Text from './Components/text';
import Forms from './Components/forms';


class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>GOALCENTRIC</h2>
          <Words/>
          <Form/>
          <Text/>
          <Forms/>
      </div>
    );
  }
}

export default App;
