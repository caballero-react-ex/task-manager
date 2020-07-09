import React, { Component } from 'react';

import SwitchBtn from './SwitchBtn';

class Footer extends Component { 
  constructor(props) {
    super(props);
    this.getToggleAllComplete = this.getToggleAllComplete.bind(this);
  }

  getToggleAllComplete() {
    this.props.toggleAllComplete();
  }

  render() {

    return (
      <div className="Footer-container">
        <SwitchBtn
        getToggle={this.getToggleAllComplete}
        />
         
        <h3 className="Footer-title">Completed {this.props.allCompleted()}/{this.props.totalTodos} </h3>
      </div>
      
    )
  }
}


export default Footer; 