var express = require('express');
var app = express();
var birdRouter = express.Router();

var birdQuery = require('../client/db/birdQuery')
var query = new birdQuery();

//models
var Bird = require('../client/src/models/bird');

//bird by id
birdRouter.get('/:id', function(req, res){
  res.json(birds[req.params.id]);
});

//bird index
birdRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
  });
});


module.exports = birdRouter;
