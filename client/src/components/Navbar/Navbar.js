import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';
import header_logo from '../../header_logo.png';

export default class Navbar extends Component {
  handleLogout() {
    axios.post(`/api/auth/logout`)
  }

  render() {
    return (
      <div className="nav">
        <div className="navleft">
            
                <img src={header_logo} alt="Logo"/>
                <span><strong>Houser</strong></span>
                <span>Dashboard</span>
            
        </div>
        <div className="navright">
            <Link to="/" className="logout-button" onClick={() => this.handleLogout()}>Logout</Link> 
        </div>        
      </div>
      
    );
  }
}