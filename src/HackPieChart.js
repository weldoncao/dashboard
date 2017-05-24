import React, { Component } from 'react'

import { PieChart, Pie, Cell, Legend } from 'recharts';

const _data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class HackPieChart extends Component {
	render () {
    let data = this.props.data || _data
    data = data.map(item => {
      return {name: item.name, value: parseInt(item.count)}
    })
  	return (
    	<PieChart width={600} height={250} onMouseEnter={this.onPieEnter}>
        <Pie
        isAnimationActive={false}
          data={data} 
          cx={300} 
          cy={110} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell key={{index}} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Legend />
      </PieChart>
    );
  }
}