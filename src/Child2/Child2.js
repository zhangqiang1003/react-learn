import React, { Component } from 'react';
import './Child2.css'

class Child2 extends Component {
  constructor() {
    super();
    this.state = {
      userName: null,
      conent: null
    };
  }
  render() {
    return (
      <div className="child2">child2</div>
    )
  }
}

export default Child2;