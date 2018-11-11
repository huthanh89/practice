
const _     = require('lodash');
const fetch = require('node-fetch');

fetch('https://api.github.com/users/github')

    // Promise to return json data.

    .then(function(res){
        return res.json();
    })

    // Handle json data.

    .then(json => console.log(json));