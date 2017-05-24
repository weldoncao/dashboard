import {
    CALL,
    CALL_SUCCESS,
    CLOCK
} from './dashboardAction'

export default function dashboard(state = { data: {} }, action) {
    switch (action.type) {
        case CALL:
            return {...state, fetching: true }
        case CALL_SUCCESS:
            return {...state, data: action.data, fetching: false }
        case CLOCK:
            return {...state, time: action.time}
        default:
            return {...state, fetching: false }
    }
}
