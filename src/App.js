import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import HackBarChart from './HackBarChart';
import HackPieChart from './HackPieChart';
import DataMap from './DataMap';
import DataMapTable from './DataMapTable';
import BubbleChart from './BubbleChart';
import '../node_modules/react-bubble-chart/src/style.css'

import {
    call,
    callSuccess,
    clock,
    pulldcs,
    pulldcsSuccess
} from './dashboardAction'

let contractId = 12345
let timer = void 0

function pullData(dispatch, id) {
    clearInterval(timer)
    timer = setInterval(function() {
      dispatch(call(id)).payload.then(
          result => {
              dispatch(callSuccess(result.data))
          }
      )

    }, 15000);
}

function pullDataContracts(dispatch) {
  dispatch(pulldcs()).payload.then(
      result => {
        dispatch(pulldcsSuccess(result.data))
      }
    )
}

function tick(dispatch) {
    setInterval(function() {dispatch(clock(new Date().toLocaleTimeString()))}, 1000);
}

class App extends Component {
  
  componentDidMount() {
      const { dispatch } = this.props
      pullData(dispatch, contractId)
      tick(dispatch)
      pullDataContracts(dispatch)
  }

  render() { 
    const { age, currentTime, dispatch, dcList, networthList } = this.props
    const dc = dcList || [{name: 't1', id: 12345}, {name: 't2', id: 2}]
    const networth = networthList || [{name:'0-100', value: '20%'}, {name:'100-500', value: '40%'}]
    return (
      <div className="container-fluid">
        <h4 className="page-header">
          Market Name
          <select style={{marginLeft: 20}} onChange={ (e) => { pullData(dispatch, e.target.value)}}>
          {
            dc.map((item, index) => {
                return <option key={index} value={item.id}>{item.name}</option>
            })
          }
          </select>
          <span style={{float: "right"}}>Current Time: {currentTime}</span>
        </h4>
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
            <HackBarChart data={age}/>
          </div>
          <div className="col-xs-6 placeholder hack-col">
            <h5 style={{marginLeft: 250}}>Occupation</h5>
            <HackBarChart />
          </div>
          <div className="col-xs-6 placeholder hack-col">
            <h5 style={{marginLeft: 250}}>Gender</h5>
            <h7 style={{marginLeft: 250}}>50% Male</h7>
            <i className="fa fa-male" aria-hidden="true"></i>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <i className="fa fa-female" aria-hidden="true"></i>
            <h5 style={{marginLeft: 250}}>Networth</h5>
            <div>
              <table className="table">
                <tbody>
                {
                  networth.map((item, index) => {
                    return <tr key={index} style={{textAlign: "center"}}><td>{item.name}</td><td>{item.value}</td></tr>
                  })
                }
              </tbody>
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
	    <DataMap regionData={this.props.regionData} />
          </div>
          <div className="col-xs-6 placeholder hack-col">
            <DataMapTable regionData={this.props.regionData} />
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
	<div className="row placeholders hack-row">
            <h5 style={{marginLeft: 600, marginTop: 20}}>Segments</h5>
	    <BubbleChart />
	</div>
      </div>
    );
  }

}

function sortCollection(collection, sortState) {
  if(collection) {
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
}

function mapStateToProps(state) {
  return {
     regionData: sortCollection(state.data.regionData, state.sortState) || {},
     age: state.data.age,
     gender: state.data.gender,
     dcList: state.dcList,
     networthList: state.data.networth,
     currentTime: state.time || new Date().toLocaleTimeString()
  }
}

export default connect(mapStateToProps)(App)
