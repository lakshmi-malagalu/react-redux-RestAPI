
//var rootCas = require('ssl-root-cas').create();
//require('https').globalAgent.options.ca = rootCas;
const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => { 
 res.send("<h1>Landing page</h1>");
});

app.get('/users', (req, res) => {
    
    axios.get('https://randomuser.me/api/?page=1&results=10')
     .then(response => {
         
       res.send(response.data);
     });
});

app.listen(3000, () => {
 console.log('server started on port 3000');
});