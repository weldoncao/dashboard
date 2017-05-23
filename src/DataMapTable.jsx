import React from 'react';

export default class DataMapTable extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const headers = ['State', 'Value'] // value placeholder
    return (
      <table>
        <tr>
          {headers.map(x => <th>{x}</th>)}
        </tr>
        <tbody>
          {this.props.regionData.map(x => <tr><td>{x.regionName}</td><td>{x.value}</td></tr>)}
        </tbody>
      </table>
    )
  }
}
