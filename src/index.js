require('dotenv').config();

const Twit = require('twit');
const getFormattingDatas = require('./getDatas');

const T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

const init = async () => {
  
  const tweet = async () => await getFormattingDatas();

  T.post('statuses/update', { status: await tweet() }, (err, data, response) => {
    console.log(data)
  })

}

init();