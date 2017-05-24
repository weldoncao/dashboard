import {
    CALL,
    CALL_SUCCESS,
    CLOCK,
    PULL_DCS,
    PULL_DCS_SUCCESS
} from './dashboardAction'

export default function dashboard(state = { data: {} }, action) {
    switch (action.type) {
        case CALL:
            return {...state, fetching: true }
        case CALL_SUCCESS:
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
