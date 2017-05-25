import React from 'react'

const updateTodoField = (updateCurrent) => (evt) => {
  updateCurrent(evt.target.value)
}

export default ({currentTodo, updateCurrent}) => (
  <form>
    <input type="text" onChange={updateTodoField(updateCurrent)} value={currentTodo} />
  </form>
)
