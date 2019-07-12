require("dotenv").config();

var Spotify = require("node-spotify-api")

// to install anything write "npm i"

//to add moment

var moment = require("moment")

//import keys and store them in a variable
var keys = require("./keys.js");
console.log(keys);
//spotify key

var spotify = new Spotify(keys.spotify);

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

// * Artist(s)

// * The song's name

// * A preview link of the song from Spotify

// * The album that the song is from

// * If no song is provided then your program will default to "The Sign" by Ace of Base.
// {
//     "tracks": {
//       "href": "https://api.spotify.com/v1/search?query=Muse&type=track&market=US&offset=5&limit=1",
//       "items": [
//         {
//           "album": {
//             "album_type": "album",
//             "artists": [
//               {
//                 "external_urls": {
//                   "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
//                 "id": "12Chz98pHFMPJEknJQMWvI",
//                 "name": "Muse",
//                 "type": "artist",
//                 "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
//               },

    //                 "external_urls": {
    //                   "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
    //                 },
    //                 "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
    //                 "id": "12Chz98pHFMPJEknJQMWvI",
    //                 "name": "xxx",
    //                 "type": "artist",
    //                 "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
    //               }
//             ],
//             "external_urls": {
//               "spotify": "https://open.spotify.com/album/0lw68yx3MhKflWFqCsGkIs"
//             },
//             "href": "https://api.spotify.com/v1/albums/0lw68yx3MhKflWFqCsGkIs",
//             "id": "0lw68yx3MhKflWFqCsGkIs",
//             "images": [
//               {
//                 "height": 640,
//                 "url": "https://i.scdn.co/image/9e5288926fadb82f873ccf2b45300c3a6f65fa14",
//                 "width": 640
//               },
//               {
//                 "height": 300,
//                 "url": "https://i.scdn.co/image/f1cad0d6974d6236abd07a59106e8450d85cae24",
//                 "width": 300
//               },
//               {
//                 "height": 64,
//                 "url": "https://i.scdn.co/image/81a3f82578dc938c53efdcb405f6a3d3ebbf009f",
//                 "width": 64
//               }
//             ],
//             "name": "Black Holes And Revelations",
//             "release_date": "2006-06-19",
//             "release_date_precision": "day",
//             "total_tracks": 12,
//             "type": "album",
//             "uri": "spotify:album:0lw68yx3MhKflWFqCsGkIs"
//           },
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
//               },
//               "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
//               "id": "12Chz98pHFMPJEknJQMWvI",
//               "name": "Muse",
//               "type": "artist",
//               "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
//             }
//           ],
//           "disc_number": 1,
//           "duration_ms": 366213,
//           "explicit": false,
//           "external_ids": {
//             "isrc": "GBAHT0500600"
//           },
//           "external_urls": {
//             "spotify": "https://open.spotify.com/track/7ouMYWpwJ422jRcDASZB7P"
//           },
//           "href": "https://api.spotify.com/v1/tracks/7ouMYWpwJ422jRcDASZB7P",
//           "id": "7ouMYWpwJ422jRcDASZB7P",
//           "is_local": false,
//           "is_playable": true,
//           "name": "Knights of Cydonia",
//           "popularity": 67,
//           "preview_url": "https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86",
//           "track_number": 11,
//           "type": "track",
//           "uri": "spotify:track:7ouMYWpwJ422jRcDASZB7P"
//         }
//       ],
//       "limit": 1,
//       "next": "https://api.spotify.com/v1/search?query=Muse&type=track&market=US&offset=6&limit=1",
//       "offset": 5,
//       "previous": "https://api.spotify.com/v1/search?query=Muse&type=track&market=US&offset=4&limit=1",
//       "total": 13984
//     }
//   }

function songs() {
    console.log(commands, userkeyInput)
    spotify.search( {type:"track", query:userkeyInput }).then(
        function (response) {
            //console.log(response.tracks.items[1]);

            for (let i = 0; i < response.tracks.items.length; i++) {
                const nameAlbum = response.tracks.items[i].album.name;
                const nameSong = response.tracks.items[i].name;
                const url = response.tracks.items[i].preview_url;
                var artists = []
                for (let j = 0; j < response.tracks.items[i].artists.length; j++){
                    artists.push(response.tracks.items[i].artists[j].name)
                    //console.log(response.tracks.items[i].artists[j])

                } 
                var artistsSTR = artists.join(", ")
                console.log ("------");
                console.log("nameAlbum: ", nameAlbum)
                console.log("namesong: ", nameSong)
                console.log("url: ",url);
                console.log("artistsSTR: ",artistsSTR);
                console.log (" ");
                
            }
        })

    
}

// http://www.omdbapi.com/?s=grease&apikey=4721cf6b

function movies() {
    //If no movie name is specified on the command line, then show the movie info for the movie, Mr. Nobody.
    if (!userkeyInput) {
        //If no movie is specified, set movieName equal to Mr. Nobody.
        userkeyInput = "Mr Nobody";
        console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!")
        
   }
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


var arryofnumbers = [1,2,3]

for (let i = 0; i < arryofnumbers.length; i++){
    console.log(arryofnumbers[i])
}

var array = [
    {"name": "bill",
    "sex":"male"},

    {"name":"jane",
    "sex": "male"}
]

for (let i = 0; i < array.length; i++){
    console.log(array[i])
}
console.log(array[0])
console.log(array[1])