import {
    CALL,
    CALL_SUCCESS
} from './dashboardAction'

export default function dashboard(state = { data: {} }, action) {
    switch (action.type) {
        case CALL:
            return {...state, fetching: true }
        case CALL_SUCCESS:
            return {...state, data: action.data, fetching: false }
        default:
            return {...state, fetching: false }
    }
}
