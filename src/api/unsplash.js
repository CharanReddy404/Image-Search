import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID wrCBCiHAkcG5aTkxlobBQLXEvisdUVoppsee6G66ahM'
    }
});
