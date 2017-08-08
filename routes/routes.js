const router = require('express').Router();
const Pokemon = require('../models/models');

//get information from models to create a basic view at index.
router.get('/', function(req, res){
  Pokemon.find({}).then(function(results){
    res.render('index', {})
  })
});

router.post('/', function(req, res){
  let newPokemon = new Pokemon(req.body);
  newPokemon.save().then(function(result){
    console.log("result from post in router:", result);
    res.redirect('/'); //to index.mustache
  }).catch(function(err){
    console.log('error in post!!', err);
    res.redirect('/');
  })
}) //saves to database then responds with result.

module.exports = router;
