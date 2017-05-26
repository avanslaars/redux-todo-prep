import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, toggleTodo} from '../reducers/todo'

const TodoItem = ({id, name, isComplete, toggleTodo}) => (
  <li>
    <input type="checkbox" onChange={() => toggleTodo(id)} checked={isComplete} /> {name}
  </li>
)

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const {todos, toggleTodo} = this.props
    return (
      <div className="Todo-List">
        <ul>
          {todos.map(todo => <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />)}
        </ul>
      </div>
    )
  }
}


export default connect(
  (state) => ({todos: state.todo.todos}),
  {fetchTodos, toggleTodo}
)(TodoList)
