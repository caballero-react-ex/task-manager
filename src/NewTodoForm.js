import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {task: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createTask(this.state);
    this.setState({task: ""});
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">Add Task</label>
        <input type="text" placeholder="new task"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default NewTodoForm;