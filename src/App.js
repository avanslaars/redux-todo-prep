import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo-App">
          <Message />
          <TodoForm currentTodo={this.props.currentTodo} updateCurrent={this.props.updateCurrent} />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

export default App
