import https from 'https';
import {state} from '../store/localStorage'

export default function ({ $axios }) {

    // $axios.onRequest(config => {
    //     $axios.setToken(state.localStorage.accessToken, 'Bearer');
    // })
    
    // $axios.onError(error => {
    //     console.log("Error On Axios Request =>", error);
    // })

    $axios.defaults.httpsAgent = new https.Agent({
        rejectUnauthorized: false
    });
}
  