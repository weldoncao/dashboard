import React from 'react';
import './App.css'

export default class DataMapTable extends React.Component {
  constructor(props){
    super(props);
  }

  compare(a,b) {
    if (a.value < b.value)
      return 1;
    if (a.value > b.value)
      return -1;
    return 0;
  }
  
  render() {
    const headers = ['State', 'Users'] 
    return (
      <table className="table table-condensed">
        <tr>
          {headers.map(x => <th>{x}</th>)}
        </tr>
        <tbody>
          {this.props.regionData.sort(this.compare).slice(0,10).map(x => <tr><td>{x.regionName}</td><td>{x.value}</td></tr>)}
        </tbody>
      </table>
    )
  }
}
