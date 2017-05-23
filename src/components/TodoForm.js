import React from 'react'

export default ({currentTodo}) => (
  <form>
    <input type="text" defaultValue={currentTodo} />
  </form>
)
