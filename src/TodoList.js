import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [{task: "clean"}, {task: "cook"}] }
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />;
    })
    return(
      <div>
        <h1>Task Manager</h1>
        {todos}
      </div>
    )
  }
}

export default TodoList; 