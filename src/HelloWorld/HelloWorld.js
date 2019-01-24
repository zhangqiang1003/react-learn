import React, { Component } from 'react';
import './HelloWorld.css'

class HelloWorld extends Component {
  render() {
    return (
      <div className="Hellow-World">hello, world!!!!!{this.props.comm}</div>
    )
  }
  componentDidMount() {
    this.sss()
  }
  sss() {
    console.log(this.props.comm, 14)
  }
}

export default HelloWorld;