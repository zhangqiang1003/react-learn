import React, { Component } from 'react';
import './Parent.css'
import Child1 from '../Child1/Child1'

class Parent extends Component {
  constructor() {
    super();
    this.state = { comm: {} }
  }
  changeComm(comm) {
    console.log(comm, 11);
  }
  render() {
    return (
      <div className="parent">
        parent
        <Child1 onClick={this.changeComm.bind(this)}/>
      </div>
    )
  }
}

export default Parent;