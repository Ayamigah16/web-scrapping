// A script that display the status code of a GET request.

"use strict";

// import the request module
const request = require('request')

// get the url
const url = process.argv[2]

// make a get request
request.get(url, (error, response) => {
    // display error if occurs
    if (error) {
        console.error(error);
        return;
    }

    // print the status code
    console.log(`status_code: ${response.statusCode}`);
})