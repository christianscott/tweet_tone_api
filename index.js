const Twit = require('twit');
const express = require('express');

const app = express();
const T = new Twit({
    consumer_key:         'tztKPgrTWnYWtzw2nhG6NCHuq' // Your Consumer Key
  , consumer_secret:      'aq54IuJvBqsALvbdJqwtVuiu8a2UCfqIRq88dYse5shLBCilIB' // Your Consumer Secret
  , access_token:         '712458805678882816-UqnywRq03FVCEioqAHWanQDJcrcqJpQ' // Your Access Token
  , access_token_secret:  'y1fG9M2CcNOjU6NID6tSkcyOV5dS6xEcc8THsevKvCxpb' // Your Access Token Secret
});

app.get('/', (req, res) => {
  console.log('someone connected.')
})

function getTweets(userName, callback){
  let tweets = [];
  T.get('statuses/user_timeline', { screen_name: userName, count: 20 }, function(err, data, response) {
    return data
  }).then(function(res){
    console.log('success!');
    tweets = res.data.map((obj) => obj.text)
    callback(tweets)
  }, function(err){
    console.log('something went wrong');
    callback(err)
  });
}

getTweets('aesilyroesrbfowboerf2q37fq7437bf', (res) => {
  console.log(res);
})