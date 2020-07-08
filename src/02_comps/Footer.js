import React, { Component } from 'react';

class Footer extends Component { 
  render() {

    // const test = this.props.completed ? console.log("completed") : console.log("not completed");
    // const test2 = console.log(this.props.completed);
    return (
      <div className="Footer-container">
        <h3 className="Footer-title">Completed {this.props.allCompleted}/{this.props.totalTodos} </h3>
      </div>
      
    )
  }
}


export default Footer; 