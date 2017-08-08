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


router.post('/todos/delete/:id', function(req, res){
  Todo.deleteOne({_id: req.params.id}).then(function(){
    res.redirect('/todos');
  }).catch(function(err){
    res.redirect('/todos')
    })
});

// router.post('index/delete/:id', function(req, res){
//   newPokemon.deleteOne({_id: req.params.id}).then(function(){
//     res.redirect('/');
//   }).catch(function(err){
//     console.log('error at delete', delete);
//     res.redirect('/')
//   })
// });

module.exports = router;
