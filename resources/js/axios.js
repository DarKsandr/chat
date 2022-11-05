import axios from 'axios';
import store from './store/index';
import router from '@/js/route'

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.response.use(function(response){
    return response;
}, function(error){
    if(error.response.status == 401){
        store.commit('logout');
    }
    return error;
});

export default instance;