import axios from "axios";

const instance = axios.create({
    baseURL: 'https://burger-order-react.firebaseio.com/'
});

export default instance;