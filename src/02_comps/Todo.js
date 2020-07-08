import React, { Component } from 'react';
// import './Todo.css';

class Todo extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false, 
      task: this.props.task
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.updateTask(this.props.id, this.state.task);
    this.setState({isEditing: false});
    document.getElementById("task").focus();
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing});
  }

  handleDelete() {
    this.props.deleteTask(this.props.id);
  }

  handleToggle() {
    this.props.toggleTask(this.props.id);
  }

  render() {
    let result;

    const icon = this.props.completed ? "check_circle" : "panorama_fish_eye";
    const taskClass = this.props.completed ? "task-bg-comp task-bg" : "task-bg";
    const iconClass = this.props.completed ? "material-icons task-icon-comp task-icon" : "material-icons task-icon";
    
    if(this.state.isEditing) {
      result = (
        <div className="Todo-item-edit">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input 
              className="Todo-edit-form--input"
              type="text"
              value={this.state.task}
              name="task"
              id="edit-task"
              autoFocus="autofocus" 
              maxLength="35"
              onChange={this.handleChange}
            />
            <button className="btn edit-btn"><span className="material-icons">done</span></button>
          </form>
          
        </div>
      )
    } else {
      result = (
        <ul className="Todo-item">
          <div className="Todo-task-container">
            <div className={taskClass} onClick={this.handleToggle}>
              <span className={iconClass}>{icon}</span>
              <li className={this.props.completed ? "Todo-task-completed" : ""} > 
                {this.props.task}
              </li>
            </div>
          </div>
          <button className="btn Todo-edit-btn" onClick={this.toggleForm}><span className="material-icons">create</span></button>
          <button className="btn Todo-del-btn" onClick={this.handleDelete}><span className="material-icons">clear</span></button>
        </ul>
      )
    }
    return result
  }
}

export default Todo; 