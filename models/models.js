const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pokemonGoSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  isItCaught : {
    type: Boolean,
    default : false
  },
  typeOne : {
    type : [String],
    required : true
  },
  typeTwo : {
    type : [String],
    required : false
  },
  isAWonder : {
    type : Boolean,
    default : false,
    required : true
  },
  combatPoints : {
    type : Number,
    required : true
  },
  dateCaught : {
    type : Date,
    default : Date.now
  }
});
module.exports = mongoose.model('Pokemon', pokemonGoSchema);
