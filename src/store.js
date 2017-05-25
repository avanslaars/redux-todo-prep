import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/todo'

const loggerMiddleware = (state) => (next) => (action) => {
  console.log('Action dispatched:', action, state.getState())
  next(action)
  console.log(`state after ${action.type}`, state.getState())
}

const initialState = {
  todos: [
    {id: 1, name:'Create Static UI', isComplete: true},
    {id: 2, name:'Create Initial State', isComplete: true},
    {id: 3, name:'Use state to render UI', isComplete: false},
    {id: 4, name:'Create a redux store', isComplete: false}
  ],
  currentTodo: 'initial value'
}

export default createStore(
  reducer,
  initialState,
  applyMiddleware(loggerMiddleware))
