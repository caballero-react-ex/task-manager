import React, { Component } from 'react';

class SwitchBtn extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    }
    this.handleSwitch = this.handleSwitch.bind(this);
    this.disable = this.disable.bind(this);
  }

  handleSwitch(e) {
    if (document.querySelector(".TodoList").contains(document.querySelector(".Todo-item"))) {
      this.props.getToggle();
    } else {
      e.preventDefault();
    }
  }

  // componentDidMount(){ 
  //   this.disable();
  // }

  disable() {
    if (document.querySelector(".TodoList").contains(document.querySelector(".Todo-item"))) {
      document.querySelector(".switch-text").classList.remove("disabled");
    } else {
      document.querySelector(".switch-text").classList.add("disabled");
    }
  }
  
  render() {
    return (
      <div className="switch-btn-container" >
        <p className="switch-text">check all</p>
        <label className="switch">
          <input 
            type="checkbox" 
            id="switch" 
            onClick={this.handleSwitch} 
          />
          <span className="slider round"></span>
        </label>
       
      </div>
    )
  }
}

export default SwitchBtn; 