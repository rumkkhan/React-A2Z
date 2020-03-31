import axios from 'axios';



export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Wx4wQpHvRbcinFP64C9aMLXM7zYaYR104De8_vIFJ2M'
    }
});