import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './store'
import { bindActionCreators } from 'redux'
import {updateCurrent} from './reducers/todo'

const actions = bindActionCreators({updateCurrent}, store.dispatch)

const render = () => {
  const state = store.getState()
  ReactDOM.render(<App {...state} updateCurrent={actions.updateCurrent} />, document.getElementById('root'));
}
render()

store.subscribe(render)

// Just temporary for demo purposes...
// dispatch action via console: window.store.dispatch({type:'TODO_ADD', payload: {id:5, name:'New Todo', isComplete: true}})
window.store = store

registerServiceWorker();
