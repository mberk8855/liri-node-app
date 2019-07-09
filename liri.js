require("dotenv").config();

// to install anything write "npm i"

//to add moment

var moment = require("moment")

//import keys and store them in a variable
var keys = require("./keys.js");
console.log(keys);
//spotify key

//var spotify = new Spotify(keys.spotify);

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// ...

//node liri.js movie-this a start was born
var axios = require("axios");
//console.log(process.argv)
var commands = process.argv[2];
var userkeyInput = process.argv.slice(3).join(" ")

switch (commands) {
    case "concert-this":
        concerts();
        break;
    case "spotify-this-song":
        songs();
        break;
    case "movie-this":
        movies();
        break;
    case "do-what-it-says":
        random();
        break;
    default:
        console.log("no idea what you want")
}
//npm install axios (done)

// if commands is this then do this 
//switch


//function for each api

function concerts() {
    console.log(commands, userkeyInput)
    var queryURL = "https://rest.bandsintown.com/artists/" + userkeyInput + "/events?app_id=codingbootcamp"


    axios.get(queryURL).then(
        function (response) {
            // If the axios was successful...
            // Then log the body from the site!
            console.log(response.data);
            // console.log("")
            for (var i = 0; response.data[i]; i++) {

                console.log("name: ", response.data[i].venue.name)
                console.log("city: ", response.data[i].venue.city + ", " + response.data[i].venue.country)
                console.log("date: ", moment(response.data[i].datetime).format("MM/DD/YYYY"))
                console.log(" ")


            }

        })

}

function songs() {
    // console.log(commands, userkeyInput)

}

// http://www.omdbapi.com/?s=grease&apikey=4721cf6b

function movies() {
    console.log(commands)
    console.log(userkeyInput)
    var queryURL = "http://www.omdbapi.com/?t=" + userkeyInput + "&apikey=4721cf6b"

    axios.get(queryURL).then(
        function (response) {
            // If the axios was successful...
            // Then log the body from the site!
            console.log(response.data);
            // console.log("")
            
            console.log(" ")
            console.log("Title: ", response.data.Title);
            console.log("Year: ", response.data.Year);
            console.log("IMDB Rating: ", response.data.imdbRating);
            // console.log("Rotten Tomatoes Rating: ", response.data.Ratings[1].Value);
            console.log("Produced in: ", response.data.Country)
            console.log("Movie Language: ", response.data.Title)
            console.log("Plot: ", response.data.Plot)
            console.log("Actors: ", response.data.Actors)
            console.log(" ")



        })
}

//                 console.log("city: ", response.data[i].venue.city + ", " + response.data[i].venue.country)
//                 console.log("date: ", moment(response.data[i].datetime).format("MM/DD/YYYY"))
//                 console.log(" ")


//             }
// }

// function random() {
//     console.log(commands, userkeyInput)
// }




//import the node-sporify-api
// var Spotify = require("node-spotify-api")

//import the API keys

//initialize package.json-the command line is: npm init -y 

//install 