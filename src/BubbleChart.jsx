import React from 'react';
import ReactBubbleChart from 'react-bubble-chart';
import axios from 'axios';
import './style.css'
import './App.css'

var colorLegend = [
  //reds from dark to light
  {color: "#67000d", text: 'Small', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
  //neutral grey
  {color: "#f0f0f0", text: 'Medium'},
  // blues from light to dark
  "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", {color: "#08306b", text: 'Large', textColor: "#ffffff"}
];

var tooltipProps = [{
  css: 'symbol',
  prop: '_id'
}, {
  css: 'value',
  prop: 'value',
  display: 'Last Value'
}, {
  css: 'change',
  prop: 'colorValue',
  display: 'Change'
}];

var fakedata = [
  {
    _id: '1',
    value: 800,
    displayText: 'Fake thing #1',
    colorValue: 0,
    selected:false
  },
  {
    _id: '2',
    value: 400,
    displayText: 'Fake thing #2',
    colorValue: 1,
    selected:false
  },
  {
    _id: '3',
    value: 100,
    displayText: 'Fake thing #3',
    colorValue: 2,
    selected:false
  },
  {
    _id: '4',
    value: 1000,
    displayText: 'Fake thing #4',
    colorValue: 3,
    selected:false
  },
  {
    _id: '5',
    value: 500,
    displayText: 'Fake thing #5',
    colorValue: 4,
    selected:false
  },
  {
    _id: '6',
    value: 675,
    displayText: 'Fake thing #6',
    colorValue: 5,
    selected:false
  },
  {
    _id: '7',
    value: 792,
    displayText: 'Fake thing #7',
    colorValue: 6,
    selected:false
  },
  {
    _id: '8',
    value: 888,
    displayText: 'Fake thing #8',
    colorValue: 7,
    selected:false
  },
  {
    _id: '9',
    value: 1111,
    displayText: 'Fake thing #9',
    colorValue: 8,
    selected:false
  },
  {
    _id: '10',
    value: 1500,
    displayText: 'Fake thing #10',
    colorValue: 9,
    selected:false
  }
];

export default class BubbleChart extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      states : [],
    }
  }
  componentWillMount() {
    var arrayZipCodes = [];
    var dataWithState = this.props.data.map(x => {
      axios.get('https://www.zipcodeapi.com/rest/uWJPxib5467f0kaFKH42zyodvCJoh2KLZtBwLMCPTJ5U3gzOXDQxceLIQu67wQTv/info.json/' + x.name + '/degrees')
	.then(function (response) {
          x['state'] = response.state;
	})
	.catch(function (error) {
          console.log(error);
	});
    })

    var groupBy = function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
    
   var reducedData = groupBy(dataWithState, 'state');
     
   this.setState({
     states: reducedData
   })
  }
  render () {
    // Instead of fake data, this should be props
    var data = this.state.states.map((d, i) => ({ // fake
      _id: i.toString(),
      value: d.count,
      colorValue: i,
      selected: false,
      displayText: d.name
    }));

    return <ReactBubbleChart
      className="my-cool-chart"
      colorLegend={colorLegend}
      data={data}
      selectedColor="#737373"
      selectedTextColor="#d9d9d9"
      fixedDomain={{min: 0, max: 9}}
      legend={true}
      legendSpacing={0}
      tooltip={true}
    />;
  }
}
