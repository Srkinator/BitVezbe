import axios from 'axios';

const KEY = '3261c02502a1cc9e94019ae180972349';
const baseURL = `http://api.openweathermap.org/data/2.5/`;

let instance = axios.create({
    baseURL: baseURL,
});

class Request {

    getFormData(callback) {
        let input = document.getElementById('input');
        this.makeRequest(`weather?appid=${KEY}`,input.value, callback);
    }

    makeRequest(endpoint, param, callback) {

        return instance
            .get(endpoint, {
                params: {
                    q: param
                }
            })
            .then(response => callback(response.data))
            .catch((err) => {
                throw new Error(`Pogresno ime grada!\n\n${err}`);
            });
    }
}

export default Request;



