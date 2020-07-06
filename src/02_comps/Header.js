import React, { Component } from 'react';
import '../main.scss';

class Header extends Component { 
  render() {
    return (
      <div className="Header-container grid-item">
        <h1 className="Header-logo">Tamago</h1>
        <h2 className="Header-title">Task Manager</h2>
      </div>
      
    )
  }
}


export default Header; 