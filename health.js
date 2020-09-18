require('dotenv').config();
const request = require('request');

const response = request(`${BASE_API}/api/v3/ping`);

console.log(response);