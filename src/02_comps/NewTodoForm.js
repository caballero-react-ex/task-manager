import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {task: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    if (this.state.task === "") {
      console.log("task is empty!")
    } else {
      let newTask = {...this.state, id: uuidv4(), completed: false}
      this.props.createTask(newTask);
      this.setState({task: ""});
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.handleSubmit}>
        <label htmlFor="task"></label>
        <input 
          type="text" 
          placeholder="new task"
          autoFocus="autofocus" 
          id="task"
          name="task"
          maxLength="35"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button className="btn task-form-btn"><span className="material-icons add-icon">add</span></button>
      </form>
    )
  }
}

export default NewTodoForm;