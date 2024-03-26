// script that prints the title of a Star Wars movie where the episode number matches a given integer.

"use strict";

// import the request module
const request = require("request")

// get the movie id
const movieId = process.argv[2]

// the url Star wars movie API endpoint
const apiURL = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// make a get request to the api enpoint
request.get(apiURL, (error, reponse, body) => {
    if (error) {
        console.error(error);
        return;
    }

    // parse the JSON respons body
    const movieData = JSON.parse(body)

    // print the title of the movie
    console.log(movieData.title)
})