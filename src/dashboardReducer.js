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
  data: {regionData: statesData}
}

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
