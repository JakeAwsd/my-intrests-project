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

// let createPodcastRecs = require('./podcast_apiTEST.js')

// function getPodCastData(){
//   if(score){
//     let podcastRecs = []
//     let podcastData = createPodcastRecs(score);
//     for (let i = 0; i < 4; index++) {
//       podcastRecs.push(podcastData[i]);
//       }
//   }else{
//     alert("You haven't set your preferences yet. Would you like to do so?")
//   }
// }

//If this works as intended, podcastRecs will be an array of objects passed in from the API call, and the podcast.handlebars partial can use each object's parameters in constructing
//the HTML

//podcastRecs[1].name, podcastRecs[1].description, etc.