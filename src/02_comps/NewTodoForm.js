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
    let newTask = {...this.state, id: uuidv4(), completed: false}
    this.props.createTask(newTask);
    this.setState({task: ""});
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
        <input type="text" placeholder="new task"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button className="task-form-btn">+</button>
      </form>
    )
  }
}

export default NewTodoForm;