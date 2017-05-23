import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const state = {
  todos: [
    {id: 1, name:'Create Static UI', isComplete: true},
    {id: 2, name:'Create Initial State', isComplete: true},
    {id: 3, name:'Use state to render UI', isComplete: false},
    {id: 4, name:'Control state with Redux', isComplete: false}
  ]
}

ReactDOM.render(<App todos={state.todos} />, document.getElementById('root'));
registerServiceWorker();
