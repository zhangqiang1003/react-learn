import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld/HelloWorld'
import Parent from './Parent/Parent'
import CommponentLoop from './ComponentLoop/CommponentLoop'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      aa: 1
    }
  }
  clickFn() {
    this.setState({aa: 2})
  }
  render() {
    return (
      <div>
        <h1 onClick={this.clickFn.bind(this)}>hello word!!</h1>
        <HelloWorld comm="1234"/>
        <Parent />
        {/* 生命周期 */}
        <CommponentLoop aa={this.state.aa} />
      </div>
    )
  }
}

export default App;
