import React from 'react';
import './App.css'

export default class DataMapTable extends React.Component {

  compare(a,b) {
    if (a.value < b.value)
      return 1;
    if (a.value > b.value)
      return -1;
    return 0;
  }
  
  render() {
    const headers = ['State', 'Users'] 
    const geo = this.props.regionData || []
    return (
      <table className="table table-condensed">
        <tr>
          {headers.map((x, index) => <th key={index}>{x}</th>)}
        </tr>
        <tbody>
          {geo.sort(this.compare).slice(0,10).map((x, index) => <tr key={index}><td>{x.regionName}</td><td>{x.value}</td></tr>)}
        </tbody>
      </table>
    )
  }
}
