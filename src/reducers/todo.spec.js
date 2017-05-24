import reducer from './todo'

describe('Todo Reducer', () => {
  test('adds a todo', () => {
    const initState = {
      todos: [
        {id: 1, name:'Create Static UI', isComplete: true},
        {id: 2, name:'Create Initial State', isComplete: false},
        {id: 3, name:'Use state to render UI', isComplete: false}
      ]
    }
    const expectedState = {
      todos: [
        {id: 1, name:'Create Static UI', isComplete: true},
        {id: 2, name:'Create Initial State', isComplete: false},
        {id: 3, name:'Use state to render UI', isComplete: false},
        {id: 4, name:'Added todo', isComplete: false}
      ]
    }
    const result = reducer(initState, {type:'TODO_ADD', payload: {id: 4, name:'Added todo', isComplete: false}})
    expect(result).toEqual(expectedState)
  })

  test('works with an array', () => {
    const initState = {todos: []}
    const expectedState = {
      todos: [
        {id: 1, name:'Create Static UI', isComplete: true},
        {id: 2, name:'Create Initial State', isComplete: false},
        {id: 3, name:'Use state to render UI', isComplete: false}
      ]
    }
    const actions = [
      {type:'TODO_ADD', payload: {id: 1, name:'Create Static UI', isComplete: true}},
      {type:'TODO_ADD', payload: {id: 2, name:'Create Initial State', isComplete: false}},
      {type:'TODO_ADD', payload: {id: 3, name:'Use state to render UI', isComplete: false}}
    ]

    const result = actions.reduce(reducer, initState)
    expect(result).toEqual(expectedState)
  })
})
