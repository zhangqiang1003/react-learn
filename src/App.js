import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld/HelloWorld'
import Parent from './Parent/Parent'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hello word!!</h1>
        <HelloWorld comm="1234"/>
        <Parent />
      </div>
    )
  }
}

export default App;
