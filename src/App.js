import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HackBarChart from './HackBarChart';
import HackPieChart from './HackPieChart';

class App extends Component {
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
            <div className="card-title">Visits Per Hour</div>
            <p className="card-text">554.14K</p>
          </div>
        </div>
        <div className="row placeholders hack-row">
        <h5 style={{marginLeft: 600, marginTop: 20}}>Demographics</h5>
          <div className="col-xs-6 placeholder hack-col">
            <h5 style={{marginLeft: 250}}>Age</h5>
            <HackBarChart />
          </div>
          <div className="col-xs-6 placeholder hack-col">
            <h5 style={{marginLeft: 250}}>Occupation</h5>
            <HackBarChart />
          </div>
          <div className="col-xs-6 placeholder hack-col">
            <h5 style={{marginLeft: 250}}>Gender</h5>
            <i className="fa fa-male" aria-hidden="true"></i>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <i className="fa fa-female" aria-hidden="true"></i>
            <h5 style={{marginLeft: 250}}>Networth</h5>
            <div>
              <table className="table">
                <tr>
                  <td style={{textAlign: "center"}}>
                  0-1000
                  </td>
                  <td>
                  20%
                  </td>
                </tr>
                <tr>
                  <td style={{textAlign: "center"}}>
                  0-1000
                  </td>
                  <td>
                  20%
                  </td>
                </tr>
                <tr>
                  <td style={{textAlign: "center"}}>
                  0-1000
                  </td>
                  <td>
                  20%
                  </td>
                </tr>
                <tr>
                  <td style={{textAlign: "center"}}>
                  0-1000
                  </td>
                  <td>
                  20%
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-xs-6 placeholder hack-col">
            <h5 style={{marginLeft: 250}}>Generation</h5>
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
            <HackPieChart />
          </div>
          <div className="col-xs-6 placeholder hack-col">
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
          <h5 style={{marginLeft: 600, marginTop: 20}}>Magic</h5>
          <div className="col-xs-6 placeholder hack-col">
            <h5 style={{marginLeft: 230}}>Top Segments</h5>
            <HackBarChart />
          </div>
          <div className="col-xs-6 placeholder hack-col">
            <h5 style={{marginLeft: 250}}>Realtime Classification</h5>
            <HackBarChart />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
