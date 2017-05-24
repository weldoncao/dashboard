import React, { Component } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const _data = [
    { name: 'Page A', value: 4000 },
    { name: 'Page B', value: 3000 },
    { name: 'Page C', value: 2000 },
    { name: 'Page D', value: 2780 },
    { name: 'Page E', value: 1890 },
    { name: 'Page F', value: 2390 },
    { name: 'Page G', value: 3490 },
];

export default class HackBarChart extends Component {
	render () {
    const data = this.props.data || _data
  	return (
    	<BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Bar dataKey="value" fill="#0088FE" />
      </BarChart>
    );
  }
}