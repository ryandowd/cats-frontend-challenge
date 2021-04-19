import axios from 'axios';

const useCatsAPI = async (location, method, params, data) => {
    const response = await axios({
        method,
        url: `https://api.thecatapi.com/v1/${location}`,
        headers: {
            'x-api-key': '124f173f-1dd6-4a6f-8164-b8f27fdd3a00'
        },
        params,
        data
    });

    if (response) {
        return response;
    } else {
        // Error handling here
    }
}

export default useCatsAPI