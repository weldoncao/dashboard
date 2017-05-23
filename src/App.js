import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { editRow, deleteRow, addRow, toggleDirection } from './constants/ActionTypes.js';
 

import SimpleBarChart from './BarChart';
import GeographicContainer from './GeographicContainer'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <SimpleBarChart />
          <SimpleBarChart />
          <GeographicContainer regionData={this.props.regionData} />
        </div>
      </div>
    );
  }

}

function sortCollection(collection, sortState) {
  switch (sortState.direction) {
    case 'ASC':
      return collection.sort(function(a, b) {
	if (a[sortState.key] > b[sortState.key]) return 1;
	if (a[sortState.key] < b[sortState.key]) return -1;
	return 0;
      });

    case 'DESC':
      return collection.sort(function(a, b) {
	if (a[sortState.key] > b[sortState.key]) return -1;
	if (a[sortState.key] < b[sortState.key]) return 1;
	return 0;
      });

    default:
      return collection;
  }
}

function mapStateToProps(state) {
  return {
    regionData: sortCollection(state.regionData, state.sortState),
  }
}

export default connect(mapStateToProps)(App);
