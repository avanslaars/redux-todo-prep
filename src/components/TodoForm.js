import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateCurrent, saveTodo} from '../reducers/todo'

class TodoForm extends Component {
  updateTodoField = (evt) => {
    this.props.updateCurrent(evt.target.value)
  }
  handleSubmit = (evt) => {
    const {currentTodo} = this.props
    evt.preventDefault()
    this.props.saveTodo(currentTodo)
  }

  render() {
    const {currentTodo} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.updateTodoField} value={currentTodo} />
      </form>
      )
  }
}

export default connect(
  (state) => ({currentTodo: state.currentTodo}),
  {updateCurrent, saveTodo}
)(TodoForm)
