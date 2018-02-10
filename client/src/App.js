import React, { Component } from 'react';
import router from './router'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Navbar />
        <div className="App">
        <h1>App Is Running</h1>
          {router}
          
        </div>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
