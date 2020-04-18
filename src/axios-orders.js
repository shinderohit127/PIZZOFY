import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pizzofy-39ab9.firebaseio.com/'
});

export default instance;