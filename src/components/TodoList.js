import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, toggleTodo, deleteTodo} from '../reducers/todo'

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
  <li>
    <span className='delete-item'><button href="#" onClick={() => deleteTodo(id)}>X</button></span>
    <input type="checkbox" onChange={() => toggleTodo(id)} checked={isComplete} /> {name}
  </li>
)

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const {todos, toggleTodo, deleteTodo} = this.props
    return (
      <div className="Todo-List">
        <ul>
          {todos.map(todo => <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}
        </ul>
      </div>
    )
  }
}


export default connect(
  (state) => ({todos: state.todo.todos}),
  {fetchTodos, toggleTodo, deleteTodo}
)(TodoList)
