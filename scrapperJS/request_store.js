// A script that gets the contents of a webpage and stores it in a file.

"use strict";

// import the request and filesystem module
const request = require("request")
const fs = require("fs");

// get url and filename
const url = process.argv[2]
const filePath = process.argv[3]

// make a get request to the url
request.get(url, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }

    fs.writeFile(filePath, body, "utf-8", (error) => {
        // if error occurs in writing content: 
        if (error) {
            console.error(error);
            return;
        }

        console.log(`Response body has been stored in ${filePath}`)
    })
})