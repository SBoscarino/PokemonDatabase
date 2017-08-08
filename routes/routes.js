const router = require('express').Router();
const Pokemon = require('../models/models');

//get information from models to create a basic view at index.
router.get('/', function(req, res){
  // Pokemon.find({}).then(function(results){
    res.render('index', {})
  // })
});

module.exports = router;
