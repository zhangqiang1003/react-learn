import React, { Component } from 'react';
import './Child1.css'

class Child1 extends Component {
  constructor() {
    super();
    this.state = {
      userName: null,
      conent: null
    };
  }
  clickFn() {
    if (this.props.onClick) {
      this.props.onClick({s: 1234, e: 12341234})
    }
  }
  render() {
    return (
      <div className="child1" onClick={this.clickFn.bind(this)}>child1</div>
    )
  }
}

export default Child1;