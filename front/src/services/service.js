import axios from 'axios';
import handleErrors from './handleErrors';

const service = {
    get: (url, options) => axios.get(url, { ...options, withCredentials: true }).catch((error) => {
        handleErrors(error);
    }),
    post: (url, data, options) => axios.post(url, data, { ...options, withCredentials: true }).catch((error) => {
        handleErrors(error);
    }),
    put: (url, data, options) => axios.put(url, data, { ...options, withCredentials: true }).catch((error) => {
        handleErrors(error);
    }),
    delete: (url, options) => axios.delete(url, { ...options, withCredentials: true }).catch((error) => {
        handleErrors(error);
    }),
};

export default service;
