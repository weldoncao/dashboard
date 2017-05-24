import axios from 'axios';

const BASE_URL = 'http://google.com'

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

function get(path, id) {
    return axiosInstance.get('/' + path + '?id=' + id);
}

export const CALL = 'CALL'
export const CALL_SUCCESS = 'CALL_SUCCESS'

export function call(id) {
    const request = get('api', id)
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