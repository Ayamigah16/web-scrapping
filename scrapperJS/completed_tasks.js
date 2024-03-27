// A script that computes the number of tasks completed by user id

"use strict";

// import request module
const request = require("request")

const apiUrl = process.argv[2];

// make a get request to the api endpoint
request.get(apiUrl, (error, response, body) => {
    // display error if occurs
    if (error) {
        console.error(error);
        return;
    }

    // parse the  JSON response body
    const todos = JSON.parse(body);

    // an object to store the number of completed tasks
    const completedTasks = {}
    
    todos.forEach(todo => {
        // check if task is completed
        if (todo.completed) {
            // if userId is not in store object 
            if (!completedTasks[todo.userId]) {
                completedTasks[todo.userId] = 1;
            } else {
                completedTasks[todo.userId]++
            }
        }
    })

    // print the number of completed tasks per userId
    console.log(completedTasks)
})