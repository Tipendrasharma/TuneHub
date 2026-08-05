const mongoose = require('mongoose');

const musicschema = new mongoose.Schema({
  uri:{
    type:String,
    required:true,
  },
    title: {
        type: String,
        required: true
    },
    artist: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
  })
    
   const musicModel = mongoose.model('Music', musicschema)

module.exports = musicModel;