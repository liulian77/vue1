import axios from 'axios';

let base = '';

export const testPost = params =>{ return axios.post(`${base}/post`,params) };

export const testGet = params => { return axios.get(`${base}/get/${params}`) };
