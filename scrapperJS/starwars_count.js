// A script that prints the number of movies where the character “Wedge Antilles” is present.

"use strict";

const { error } = require("qrcode-terminal");
// import the request module
const request = require("request")

// get API url of the Stars Wars API
const apiURL = process.argv[2]

// character ID for Wedge Antilles
const characterID = 18

// characterURL
const characterURL = "https://swapi-api.alx-tools.com/api/people/"

// make a get request
request.get(apiURL, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }

    // parse the JSON response body
    const filmData = JSON.parse(body).results;

    // filter the films where Wedge Antilles is present
    const filmsWithWedge = filmData.filter(film => 
        film.characters.includes(`${characterURL}${characterID}/`))
    
    // print the number of films
    console.log(filmsWithWedge.length)
})
