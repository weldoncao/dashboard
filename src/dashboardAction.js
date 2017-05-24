import axios from 'axios';

const BASE_URL = 'https://os-172-17-154-107.ciatl1.turn.com:8443'

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

function get(id) {
    return axiosInstance.get('/jax/hack/getData?dataContract=' + id);
}

export const CALL = 'CALL'
export const CALL_SUCCESS = 'CALL_SUCCESS'
export const CLOCK = 'CLOCK'

export function call(id) {
    const request = get(id)
    return {
        type: CALL,
        payload: request
    }
}

export function callSuccess(data) {
    return {
        type: CALL_SUCCESS,
        data: data
    }
}

export function clock(time) {
    return {
        type: CLOCK,
        time: time
    }
}