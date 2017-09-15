import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
//import KDcounter from './components/KDcounter.js'
import {getKD} from './components/KDcounter.js'

class App extends Component {

  //var config = {
  //  headers: ('X-API-Key' : 945ad1a0b05549c0a9845c9567952a4f)
  //}

  constructor(props) {
    super(props);

    this.state = {
      test: {},
      };
    }
  }

  componentDidMount() {
    getKD().then(test => {
      this.setState({
        test: test
      })
    })
  }

  render() {
    return (
      <div>
        <Header />

        <h1>{this.state.test.name}</h1>
      </div>
    );
  }
}

export default App;
