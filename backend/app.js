const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use((req,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type,' +
    ' Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'Get, ' +
    'Post, Put, Delete, Patch, Options');
  next()
})

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(200).json({
    message: 'Post created'
  })
})

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {id: '123456789qwertz',
      title: 'Jogibaer one',
      content: 'Test'},
    {id: '12345kjhgqwertz',
      title: 'Jogibaer two',
      content: '2nd Test'}
  ];
  res.status(200).json({
    message: 'Posts fetched',
  posts: posts
  })
})

module.exports = app;
