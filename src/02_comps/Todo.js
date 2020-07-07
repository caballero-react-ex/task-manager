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
    const icon = this.props.completed ? "check_circle" : "panorama_fish_eye";
    const liClass = this.props.completed ? "li-bg-comp li-bg" : "li-bg";
    const iconClass = this.props.completed ? "material-icons item-icon-comp item-icon" : "material-icons item-icon";
    let result;
    if(this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input 
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
          
        </div>
      )
    } else {
      result = (
        <ul className="Todo-item">
          <div className="item-container">
            <div className={liClass} onClick={this.handleToggle}>
              <span className={iconClass}>{icon}</span>
              <li className={this.props.completed ? "Todo-completed" : ""} > 
                {this.props.task}
              </li>
            </div>
            <button className="btn Todo-edit-btn" onClick={this.toggleForm}><span className="material-icons">create</span></button>
            <button className="btn Todo-del-btn" onClick={this.handleDelete}><span className="material-icons">clear</span></button>
          </div>
        </ul>
      )
    }
    return result
  }
}

export default Todo; 