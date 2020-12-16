import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-ddd17.cloudfunctions.net/api'

    // 'http://localhost:5001/clone-ddd17/us-central1/api'
});

export default instance;