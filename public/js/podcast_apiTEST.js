require('dotenv').config();

const { Client } = require('podcast-api');

//
// If apiKey is null, then we will connect to a mock server
// that returns fake data for testing purposes.
//
// To get an apiKey to fetch real data, please visit:
//     https://www.listennotes.com/api/pricing/
//
const client = Client({ apiKey: process.env.API_KEY });

function createPodcastRecs(score){
client.search({
  q: score.category,
  sort_by_date: 0,
  type: 'podcast',
  genre_ids: score.genreids,
  only_in: 'title,description',
  language: 'English',
}).then((response) => {
  // Get response json data here
  let podcastData = (response.data);
  return podcastData
}).catch((error) => {
  console.log(error)
});
};

// Click "▶ run" to try this code live.

module.exports = {createPodcastRecs}