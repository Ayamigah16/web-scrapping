'use strict';

const { error } = require("console");
const fs = require("fs");   // import file system module

const filepath = process.argv[2]

fs.readFile(filepath, 'utf-8', (error, data) => {
    // print error message if occurs
    if (error) {
        console.error(error);
        return;
    }
    
    // print the content of the file
    console.log(data)
})