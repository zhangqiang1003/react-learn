import React, { Component } from 'react';
import './CommponentLoop.css'

class CommponentLoop extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 2
    }
  }
  componentWillMount() {
    this.setState({a: 3, b: 5})
  }
  componentDidMount() {
    this.setState({a: 3, b: 66})
  }
  render() {
    return (
      <div className="CommponentLoop">1234---{this.state.a}---{this.state.b}---{this.props.aa}</div>
    )
  }
  componentWillReceiveProps() {
    console.log(21)
  }
  // shouldComponentUpdate() {
  //   console.log(24)
  // }
  componentWillUpdate() {
    console.log(27)
  }
  componentDidUpdate() {
    console.log(30)
  }
}

export default CommponentLoop;
