import axios from 'axios';

const BASE_URL = 'http://172.16.208.197:8080'

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export const CALL = 'CALL'
export const CALL_SUCCESS = 'CALL_SUCCESS'
export const CLOCK = 'CLOCK'
export const PULL_DCS = 'PULL_DCS'
export const PULL_DCS_SUCCESS = 'PULL_DCS_SUCCESS'

export function call(id) {
    const request = axiosInstance.get('/jax/hack/getData?dataContract=' + id);
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

export function pulldcs() {
    const request = axiosInstance.get('/jax/hack/getAllContracts');
    return {
        type: PULL_DCS,
        payload: request
    }
}

export function pulldcsSuccess(data) {
    return {
        type: PULL_DCS_SUCCESS,
        data: data
    }
}