const router = require('express').Router();
const Pokemon = require('../models/models');

//get information from models to create a basic view at index.
router.get('/', function(req, res){
  Pokemon.find({}).then(function(results){
    res.render('index', { pokemons : results})
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

//DELETE from top form post in index.
router.post('/delete/:id', function(req, res){
  Pokemon.deleteOne({_id: req.params.id}).then(function(){
    res.redirect('/');
  }).catch(function(err){
    res.redirect('/')
    })
});

//get detail from index when clicking name
router.get('/detail/:id', function(req, res){
  Pokemon.find({pokemons : req.params.id}).then(function(result){
    console.log(result);
    res.render('detail', {pokemons : result});
  })
})

//edit by id from detail page
router.post('/detail/edit/:id', function(req, res){
  Pokemon.deleteOne({_id: req.params.id}).then(function(){
    res.redirect('/');
  }).catch(function(err){
    res.redirect('/')
    })
});
module.exports = router;
