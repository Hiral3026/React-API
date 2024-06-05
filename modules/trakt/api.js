const trakt = "https://api.trakt.tv"; // Base URL for any Trakt API requests

/*
 * Function for making a Trakt API request to get trending movies.
 */
async function getTrendingMovies() {
  let reqUrl = `${trakt}/movies/trending`;
  let response = await fetch(
    reqUrl, 
    {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "trakt-api-version": 2,
      "trakt-api-key": process.env.TRAKT_CLIENT_ID
    }
  }
  );
  return await response.json();
}

async function getMovieRatings(id) {
  let reqUrl = `${trakt}/movies/${id}/ratings`;
  let response = await fetch(
    reqUrl,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}

//Function to get top popular shows
async function getPopularShows(page, limit) {
  let reqUrl = `${trakt}/shows/popular?page=${page}&limit=${limit}`;
  let response = await fetch(
    reqUrl,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}

module.exports = {
  getTrendingMovies,
  getMovieRatings,
  getPopularShows
};
