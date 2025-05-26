import axios from 'axios';

const base_url = 'https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',

    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': '8ebd30e000msh341040469961b37p14a739jsna1173ea6a683',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};
export const ApiServise = {
    async fetching(url) {
        const response = await axios.get(`${base_url}/${url}`, options)
        return response.data
    }
}