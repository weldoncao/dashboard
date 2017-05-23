import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import SimpleBarChart from './BarChart';
import GeographicContainer from './GeographicContainer'
import HackBarChart from './HackBarChart';
import HackPieChart from './HackPieChart';
import DataMap from './DataMap';
import DataMapTable from './DataMapTable';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <h4 className="page-header">Market Name</h4>
        <div className="card hack-card-left">
          <div className="card-block">
            <div className="card-title">User Activities</div>
            <p className="card-text">1.26M</p>
          </div>
        </div>
        <div className="card hack-card-right">
          <div className="card-block">
            <div className="card-title">Uniques</div>
            <p className="card-text">554.14K</p>
          </div>
        </div>
        <div className="row placeholders hack-row">
          <div className="col-xs-6 placeholder hack-col">
            <h5 style={{marginLeft: 250}}>Demographics</h5>
            <HackBarChart />
          </div>
          <div className="col-xs-6 placeholder hack-col">
            <h5 style={{marginLeft: 250}}>Top Segments</h5>
            <HackBarChart />
          </div>
        </div>
        <div className="row placeholders hack-row">
          <h5 style={{marginLeft: 600, marginTop: 20}}>Technographics</h5>
          <div className="col-xs-6 placeholder hack-col">
            <h5 style={{marginLeft: 230}}>Browser Share</h5>
            <HackPieChart />
          </div>
          <div className="col-xs-6 placeholder hack-col">
            <h5 style={{marginLeft: 290}}>Devices</h5>
            <div>
              <div className="hack-device">
                <div><i className="fa fa-desktop" aria-hidden="true"></i></div>
                <div className="hack-device-ratio">85%</div>
              </div>
              <div className="hack-device">
                <div><i className="fa fa-mobile" aria-hidden="true"></i></div>
                <div className="hack-device-ratio">10%</div>
              </div>
              <div className="hack-device"><div style={{fontSize: 20, paddingTop: 12, paddingBottom: 13}}>Other</div><div className="hack-device-ratio">5%</div></div>
            </div>
          </div>
        </div>
        <div className="row placeholders hack-row">
          <h5 style={{marginLeft: 600, marginTop: 20}}>Geographics</h5>
          <div className="col-xs-6 placeholder hack-col">
	    <DataMap regionData={this.props.regionData} />
          </div>
          <div className="col-xs-6 placeholder hack-col">
            <DataMapTable regionData={this.props.regionData} />
          </div>
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
