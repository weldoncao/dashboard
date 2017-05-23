import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SimpleBarChart from './BarChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <SimpleBarChart />
          <SimpleBarChart />
        </div>
      </div>
    );
  }
}

export default App;
