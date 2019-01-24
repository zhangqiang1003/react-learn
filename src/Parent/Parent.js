import React, { Component } from 'react';
import './Parent.css'
import Child1 from '../Child1/Child1'

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
      </div>
    )
  }
}

export default Parent;