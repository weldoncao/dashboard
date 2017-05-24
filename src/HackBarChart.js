import React, { Component } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default class HackBarChart extends Component {
	render () {
    let data = this.props.data || []
    let color = this.props.color || '#0088FE'
    data = data.map(item => {
      return {name: item.name.replace('Age_', '').replaceAll('_', '-'), value: parseInt(item.count, 10)}
    })
  	return (
    	<BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Bar dataKey="value" fill={color} isAnimationActive={false}/>
      </BarChart>
    );
  }
}