const axios = require('axios');

axios.get('https://firemovies.mizta-x.com/api/movie?name=venom-the-last-dance')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
