import {
    CALL,
    CALL_SUCCESS,
    CLOCK,
    PULL_DCS,
    PULL_DCS_SUCCESS
} from './dashboardAction'

import statesData from './data/states-data';

const initialStates = {
  sortState: { key: 'regionName', direction: 'ASC' },
  data: {regionData: statesData}
}

export default function dashboard(state = initialStates, action) {
    switch (action.type) {
        case CALL:
            return {...state, fetching: true }
        case CALL_SUCCESS:
        debugger
            return {...state, data: action.data, fetching: false }
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
