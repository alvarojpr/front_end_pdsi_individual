import axios from 'axios';

const api = axios.create({
    baseURL: 'htpp://127.0.0.1:8000/'
});

export default api;