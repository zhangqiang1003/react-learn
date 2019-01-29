import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Game from './TicTacToe/TicTacToe'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './store/reducers'
import AppTest from './components/AppTest/AppTest'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp)

ReactDOM.render(
<Provider store={store}>
<AppTest />
</Provider>, document.getElementById('root'));
registerServiceWorker();
