import React, { Component } from 'react';
import './CommponentLoop.css'
import { findDOMNode } from 'react-dom';

class CommponentLoop extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 2,
      arr: [
        {name: 'a', id: 1},
        {name: 'b', id: 2},
        {name: 'c', id: 3},
        {name: 'd', id: 4},
        {name: 'e', id: 5},
        {name: 'f', id: 6},
        {name: 'h', id: 7},
        {name: 'i', id: 8}
      ]
    }
  }
  componentWillMount() {
    this.setState({a: 3, b: 5})
  }
  componentDidMount() {
    this.setState({a: 3, b: 66})
    const el = findDOMNode(this);
    console.log(el);
    console.log(this.refs.theDiv);
  }
  render() {
    return (
      <div className="CommponentLoop">
        1234---{this.state.a}---{this.state.b}---{this.props.aa}
        <div ref="theDiv">theDiv</div>
        <div>
          {this.state.arr.map((val, index) => {
            return <div key={index + new Date().getTime()} >{val.name}</div>
          })}
        </div>
      </div>
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
