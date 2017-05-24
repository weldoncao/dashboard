import {
    CALL,
    CALL_SUCCESS,
    CLOCK,
    PULL_DCS,
    PULL_DCS_SUCCESS
} from './dashboardAction'

import statesData from './data/states-data';
import axios from 'axios';

const initialStates = {
  sortState: { key: 'regionName', direction: 'ASC' },
  data: {regionData: statesData}
}

export default function dashboard(state = initialStates, action) {
    switch (action.type) {
        case CALL:
            return {...state, fetching: true }
        case CALL_SUCCESS:
         //  var temp;
         //   var dataWithState = action.data.geo.map(x => {
         //     if (x.name.length > 5) {
         //       return;
	 //     }
         //     axios.get('https://www.zipcodeapi.com/rest/uWJPxib5467f0kaFKH42zyodvCJoh2KLZtBwLMCPTJ5U3gzOXDQxceLIQu67wQTv/info.json/' + x.name + '/degrees')
         //       .then(function (response) {
         //         x['state'] = response.state;
         //       })
         //       .catch(function (error) {
         //         console.log(error);
         //       });
         //   })

         //   var groupBy = function(xs, key) {
         //     return xs.reduce(function(rv, x) {
         //       rv[x[key]] = rv[x[key]] + x[key];
         //       return rv;
         //     }, {});
         //   };

         //       var reducedData = groupBy(dataWithState, 'state');
         //   console.log(reducedData)
            return {...state, data: action.data, fetching: false , geoData: statesData }
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
