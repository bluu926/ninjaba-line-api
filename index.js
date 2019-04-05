'use strict'
const line = require('./api/lineApi')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 4000;

// need raw buffer for signature validation
app.use(bodyParser.json({
  verify (req, res, buf) {
    req.rawBody = buf
  }
}))

// init with auth
line.init({
  accessToken: process.env.LINE_NINJA_ACCESS_TOKEN,
  // (Optional) for webhook signature validation
  channelSecret: process.env.LINE_NINJA_CHANNEL_SECRET
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/webhook/', line.validator.validateSignature(), (req, res, next) => {
// app.post('/webhook/', (req, res, next) => {
  // get content from request body
  const promises = req.body.events.map(event => {
    // let reply_token = req.body.events[0].replyToken;
    // // let msg = req.body.events[0].message.text;
    // console.log('reply_token = ' + reply_token);
    // console.log('msgObj = ' , req.body.events[0]);
    // reply message
    console.log(event);
    return line.client
      .replyMessage({
        replyToken: event.replyToken,
        messages: [
          {
            type: 'text',
            // text: event.message.text
            text: 'TEXT'
          }
        ]
      })
  })
  Promise
    .all(promises)
    .then(() => res.json({success: true}))
})

app.listen(port, () => {
  console.log('Example app listening on port', port);
})