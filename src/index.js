import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './store'

const handleUpdateCurrent = (val) => store.dispatch({type: 'CURRENT_UPDATE', payload: val})

const render = () => {
  const state = store.getState()
  ReactDOM.render(<App {...state} updateCurrent={handleUpdateCurrent} />, document.getElementById('root'));
}
render()

store.subscribe(render)

// Just temporary for demo purposes...
// dispatch action via console: window.store.dispatch({type:'TODO_ADD', payload: {id:5, name:'New Todo', isComplete: true}})
window.store = store

registerServiceWorker();
