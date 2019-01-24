import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld/HelloWorld'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hello word!!</h1>
        <HelloWorld />
      </div>
    )
  }
}

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square value={i} />
//   }
// }

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {this.props.value}
//       </button>
//     )
//   }
// }

export default App;
