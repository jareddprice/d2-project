import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import KDcounter from './components/KD-counter.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <KDcounter />
      </div>
    );
  }
}

export default App;
