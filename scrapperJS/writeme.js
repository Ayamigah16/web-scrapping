'use strict';

const { error } = require("console");
const fs = require("fs");

// get the file path and content
const filePath = process.argv[2]
const content = process.argv[3]

fs.writeFile(filePath, content, "utf-8", (error) => {
    // display error message if it occurs
    if (error) {
        console.error(error);
        return;
    }

    // display success message
    console.log(`Content has been written to ${filePath}`);
})