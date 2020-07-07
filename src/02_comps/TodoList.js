import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [] }
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
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

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map( todo => {
      if(todo.id === id) {
        return {...todo, task: updatedTask}
      } 
      return todo;
    })
    this.setState({todos: updatedTodos});
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map( todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      } 
      return todo;
    })
    this.setState({todos: updatedTodos});
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo 
      task={todo.task} 
      key={todo.id}
      id={todo.id}
      completed={todo.completed}
      deleteTask={this.delete}
      updateTask={this.update}
      toggleTask={this.toggleCompletion}
      />;
    })
    return(
      <div className="TodoList">
        <NewTodoForm createTask={this.create}/>
        {todos}
      </div>
    )
  }
}

export default TodoList; 