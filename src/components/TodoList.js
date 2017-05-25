import React from 'react'
import {connect} from 'react-redux'

const TodoItem = ({id, name, isComplete}) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
  </li>
)

const TodoList = ({todos}) => (
  <div className="Todo-List">
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </ul>
  </div>
)

export default connect(
  (state) => ({todos: state.todos})
)(TodoList)
