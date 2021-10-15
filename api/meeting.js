const fetch = require('node-fetch');

const API_KEY = 'Hangain_default_secret';
// const Hangain_URL = "http://localhost:3000/api/v1/meeting";
// const Hangain_URL = "https://Hangain.herokuapp.com/api/v1/meeting";
const Hangain_URL = 'https://Hangain.up.railway.app/api/v1/meeting';

function getResponse() {
    return fetch(Hangain_URL, {
        method: 'POST',
        headers: {
            authorization: API_KEY,
            'Content-Type': 'application/json',
        },
    });
}

getResponse().then(async (res) => {
    console.log('Status code:', res.status);
    const data = await res.json();
    console.log('meeting:', data.meeting);
});
