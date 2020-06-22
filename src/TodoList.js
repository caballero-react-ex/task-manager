import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [] }
    this.create = this.create.bind(this);
  }
  create(newTask) {
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />;
    })
    return(
      <div>
        <h1>Task Manager</h1>
        <NewTodoForm createTask={this.create}/>
        {todos}
      </div>
    )
  }
}

export default TodoList; 