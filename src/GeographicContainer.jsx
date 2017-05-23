import React from 'react';
import DataMap from './DataMap';
import DataMapTable from './DataMapTable';

export default class GeographicContainer extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <DataMap regionData={this.props.regionData} />
        <DataMapTable regionData={this.props.regionData} />
      </div>
    )
  }
}
