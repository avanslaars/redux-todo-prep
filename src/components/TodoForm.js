import React from 'react'
import {connect} from 'react-redux'
import {updateCurrent} from '../reducers/todo'

const updateTodoField = (updateCurrent) => (evt) => {
  updateCurrent(evt.target.value)
}

const TodoForm = ({currentTodo, updateCurrent}) => (
  <form>
    <input type="text" onChange={updateTodoField(updateCurrent)} value={currentTodo} />
  </form>
)

export default connect(
  (state) => ({currentTodo: state.currentTodo}),
  {updateCurrent}
)(TodoForm)
