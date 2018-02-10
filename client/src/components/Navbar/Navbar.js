import React, { Component } from 'react';
import '../../App.css';
import header_logo from '../../header_logo.png';

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="navleft">
            
                <img src={header_logo} alt="Logo"/>
                <span>Houser </span>
                <span>Dashboard</span>
            
        </div>
        <div className="navright">
            <h3>Logout</h3> 
        </div>        
      </div>
      
    );
  }
}