import React, { Component } from 'react';
import earth from './earth.gif';
import './App.css';
import HelloWorld from './HelloWorld';
import ContaClick from './ContaClick';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={earth} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <HelloWorld/> 
        <ContaClick/>      
      
        </p>
      </div>
    );
  }
}

export default App;
