import React, { Component } from 'react';
import './Parent.css'
import Child1 from '../Child1/Child1'
import Child2 from '../Child2/Child2'

class Parent extends Component {
  constructor() {
    super();
    this.state = { comm: '1' }
  }
  changeComm(comm) {
    this.setState({comm: comm})
  }
  render() {
    return (
      <div className="parent">
        parent
        <Child1 onClick={this.changeComm.bind(this)}/>
        {JSON.stringify(this.state.comm)}
        <Child2 child1Info={this.state}/>
      </div>
    )
  }
}

export default Parent;