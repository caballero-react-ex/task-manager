import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [] }
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
  }

  create(newTask) {
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  }

  delete(id) {
    this.setState({
      todos: this.state.todos.filter(box => box.id !== id)
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo 
      task={todo.task} 
      key={todo.id}
      id={todo.id}
      deleteTask={this.delete}/>;
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