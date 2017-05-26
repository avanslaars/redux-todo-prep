import {createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import todoReducer from './reducers/todo'
import messageReducer from './reducers/message'

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer
})

const loggerMiddleware = (state) => (next) => (action) => {
  console.log('Action dispatched:', action, state.getState())
  next(action)
  console.log(`state after ${action.type}`, state.getState())
}

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(loggerMiddleware, thunk)
  ))
