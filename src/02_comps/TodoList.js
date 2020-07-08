import React, { Component } from 'react';

import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import Footer from './Footer';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [] }
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.getCompletedTodos = this.getCompletedTodos.bind(this);
    this.toggleAllCompletion = this.toggleAllCompletion.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
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

  toggleAllCompletion() {
    const updatedAllTodos = this.state.todos.map( todo => {
      if(todo.completed === false) {
        return {...todo, completed: true}
      } else {
        return {...todo, completed: false}
      }
        
    })
    this.setState({todos: updatedAllTodos})
  }

  handleCompleted() {
    this.toggleAllCompletion();
    // alert("works");
  }

  getCompletedTodos() {
    let totalCompletedArr = [];
    this.state.todos.forEach(todo => {
      if(todo.completed === true) {
        totalCompletedArr.push("banana");
      } 
    })
    return totalCompletedArr.length;
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

    const totalTodos = todos.length;

    return(
      <div className="TodoList">
        <NewTodoForm createTask={this.create}/>
        {todos}
        {/* <button onClick={this.handleCompleted}>All completed</button> */}
        <Footer 
        allCompleted={this.getCompletedTodos()}
        totalTodos={totalTodos}
        />
        
      </div>
    )
  }
}

export default TodoList; 