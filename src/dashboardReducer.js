import {
    CALL,
    CALL_SUCCESS,
    CLOCK,
    PULL_DCS,
    PULL_DCS_SUCCESS
} from './dashboardAction'

import statesData from './data/states-data';
import axios from 'axios';
var _ = require('lodash');

const initialStates = {
  sortState: { key: 'regionName', direction: 'ASC' },
  data: {regionData: statesData, generation: [{name:'2000+', count: 100}, {name:'1980+', count: 700}, {name:'1950+', count: 200}]
, occupation: [{name:'housemaker', count: 3000}, {name:'doctor', count: 800}, {name:'teacher', count: 300}, {name:'coder', count: 200}]
, age: [{name:'30-40', count: 3000}, {name:'40-50', count: 2000}, {name:'20-30', count: 800}, {name:'10-20', count: 300}, {name:'<10', count: 200}]
, netWorth: [{name:'1M+', count: 3000}, {name:'800,000-1M', count: 2000}, {name:'500,000-800,000', count: 800}, {name:'300,000-500,0000', count: 300}, {name:'100,000-300,000', count: 200}]
, topCategories: [{name:'cat1', count: 3000}, {name:'cat2', count: 800}, {name:'cat3', count: 300}, {name:'cat4', count: 200}]
, classifications: [{name:'Moderate', count: 3000}, {name:'Low', count: 800}, {name:'High', count: 300}]
, geoData: [
  { 'regionName':'Alabama','name':'AL', 'value': 89 },
  { 'regionName':'Alaska','name':'AK', 'value': 112 },
  { 'regionName':'Arizona','name':'AZ', 'value': 101 },
  { 'regionName':'Arkansas','name':'AR', 'value': 123 },
  { 'regionName':'California','name':'CA', 'value': 145 },
  { 'regionName':'Colorado','name':'CO', 'value': 98 },
  { 'regionName':'Connecticut','name':'CT', 'value': 101 },
  { 'regionName':'Delaware','name':'DE', 'value': 109 },
  { 'regionName':'Florida','name':'FL', 'value': 122 },
  { 'regionName':'Georgia','name':'GA', 'value': 91 },
  { 'regionName':'Hawaii','name':'HI', 'value': 131 },
  { 'regionName':'Idaho','name':'ID', 'value': 110 },
  { 'regionName':'Illinois','name':'IL', 'value': 134 },
  { 'regionName':'Indiana','name':'IN', 'value': 94 },
  { 'regionName':'Iowa','name':'IA', 'value': 106 },
  { 'regionName':'Kansa','name':'KS', 'value': 116 },
  { 'regionName':'Kentucky','name':'KY', 'value': 122 },
  { 'regionName':'Lousiana','name':'LA', 'value': 99 },
  { 'regionName':'Maine','name':'ME', 'value': 100 },
  { 'regionName':'Maryland','name':'MD', 'value': 101 },
  { 'regionName':'Massachusetts','name':'MA', 'value': 102 },
  { 'regionName':'Michigan','name':'MI', 'value': 104 },
  { 'regionName':'Minnesota','name':'MN', 'value': 112 },
  { 'regionName':'Mississippi','name':'MS', 'value': 105 },
  { 'regionName':'Missouri','name':'MO', 'value': 116 },
  { 'regionName':'Montana','name':'MT', 'value': 107 },
  { 'regionName':'Nebraska','name':'NE', 'value': 97 },
  { 'regionName':'Nevada','name':'NV', 'value': 108 },
  { 'regionName':'New Hampshire','name':'NH', 'value': 118 },
  { 'regionName':'New Jersey','name':'NJ', 'value': 98 },
  { 'regionName':'New Mexico','name':'NM', 'value': 109 },
  { 'regionName':'New York','name':'NY', 'value': 119 },
  { 'regionName':'North Carolina','name':'NC', 'value': 99 },
  { 'regionName':'North Dakota','name':'ND', 'value': 100 },
  { 'regionName':'Ohio','name':'OH', 'value': 126 },
  { 'regionName':'Oklahoma','name':'OK', 'value': 125 },
  { 'regionName':'Oregon','name':'OR', 'value': 124 },
  { 'regionName':'Pennsylvania','name':'PA', 'value': 122 },
  { 'regionName':'Rhode Island','name':'RI', 'value': 122 },
  { 'regionName':'South Carolina','name':'SC', 'value': 141 },
  { 'regionName':'South Dakota','name':'SD', 'value': 131 },
  { 'regionName':'Tennessee','name':'TN', 'value': 132 },
  { 'regionName':'Texas','name':'TX', 'value': 133 },
  { 'regionName':'Utah','name':'UT', 'value': 134 },
  { 'regionName':'Vermont','name':'VT', 'value': 121 },
  { 'regionName':'Virginia','name':'VA', 'value': 122 },
  { 'regionName':'Washington','name':'WA', 'value': 91 },
  { 'regionName':'West Virginia','name':'WV', 'value': 92 },
  { 'regionName':'Wisconsin','name':'WI', 'value': 93 },
  { 'regionName':'Wyoming','name':'WY', 'value': 94 }
]
}}

export default function dashboard(state = initialStates, action) {
    switch (action.type) {
        case CALL:
            return {...state, fetching: true }
        case CALL_SUCCESS:
            let holder = {}
	    var obj2 = [];

            var geo = action.data.geo.map((x, i) => {
              if (x.name.length !== 5) {
		x['state'] = 'CA';
	      } else {
	      axios.get('https://www.zipcodeapi.com/rest/uWJPxib5467f0kaFKH42zyodvCJoh2KLZtBwLMCPTJ5U3gzOXDQxceLIQu67wQTv/info.json/' + x.name + '/degrees/user?ID=12345')
  		.then(function (response) {
		  x['state'] = response.data.state;
  		})
  		.catch(function (error) {
    		  console.log(error);
  		});

	      }
	      return x
    	    })
console.log(geo)
//var holder = {};

setInterval(function() {
geo.forEach(function (d) {
    if(holder.hasOwnProperty(d.state)) {
       holder[d.state] = holder[d.state] + parseInt(d.count, 10);
    } else {       
       holder[d.state] = parseInt(d.count, 10);
    }
})

for(var prop in holder) {
    obj2.push({name: prop, value: holder[prop]});   
}

console.log(obj2, "FINAL");
}, 1000);

            return {...state, data: action.data, fetching: false , geoData: obj2 }
        case PULL_DCS:
            return {...state, fetching: true }
        case PULL_DCS_SUCCESS:
            return {...state, dcList: action.data, fetching: false }
        case CLOCK:
            return {...state, time: action.time}
        default:
            return {...state, fetching: false }
    }
}
