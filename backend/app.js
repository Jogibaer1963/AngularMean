const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect('mongodb://localhost:27017/')
  .then(() => console.log('Connected to MongoDB'))
   .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use((req,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type,' +
    ' Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'Get, ' +
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next()
})

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save().then((result) => {
    res.status(200).json({
      message: 'Post created',
      postId: result._id
    });
  });
});

app.get('/api/posts', (req, res, next) => {
  Post.find().then((documents) => {
    res.status(200).json({
      message: 'Posts fetched',
      posts: documents
    })
      console.log('loaded result', documents);
    })

})

app.delete("/api/posts/:id", (req, res, next) => {
  console.log(req.params.id);
  Post.deleteOne({_id: req.params.id}).then((result) => {
    console.log('deleted result', result);
  }).catch((err) => {
    console.log(err);
  })
  res.status(200).json({
    message: 'Post deleted'
  })
})

module.exports = app;
