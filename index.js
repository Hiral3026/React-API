//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { request } = require("http");

dotenv.config();
const trakt = require("./modules/trakt/api");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
app.get("/", async (request, response) => {
  let movies = await trakt.getTrendingMovies();
  //console.log(movies);
  response.render("index", { title: "Movies", movieList: movies  });
});

app.get("/ratings/:id", async (request, response) => {
  let ratings = await trakt.getMovieRatings(request.params.id);
  response.render("ratings", { title: "Movie Ratings", ratings: ratings });
});

app.get("/shows", async (request, response) => {
   let shows = await trakt.getPopularShows(1, 15);
   //console.log(shows);
   response.render("shows", {title: "Popular shows" , showList: shows });
});


//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


