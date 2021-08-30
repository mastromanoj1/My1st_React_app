const mongoose = require("mongoose");
const dateformat = require('dateformat')


const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    },
    stringDate:{
      type:String,
      default:dateformat(new Date(),'dddd, mmmm dS, yyyy, h:MM:ss TT')
    }
  });

  module.exports = mongoose.model('doc1', UserSchema);