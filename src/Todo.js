import React, { Component } from 'react';

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

  render() {
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
        <div>
        <button onClick={this.toggleForm}>Edit</button>
        <button onClick={this.handleDelete}>X</button>
        <li>{this.props.task}</li>
      </div>
      )
    }
    return result
  }
}

export default Todo; 