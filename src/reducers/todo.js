const initState = {todos: []}
export default function(state = initState, action) {
  switch (action.type) {
    case 'TODO_ADD':
      return {...state, todos: state.todos.concat(action.payload)}
    default:
      return state
  }
}
