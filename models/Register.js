const mongoose = require("mongoose");
const dateformat = require('dateformat');
require('mongoose-type-url');

const Userlist = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    usernumber: {
      type: String,
      required: true,
    },

    // userlocation :
    //    [{
            doornumber:{
                type:Number,
                required:true, 
            },            
            street :{
                type:String,
                required:true,
            },
            area:{
                type:String,
                required:true,
            },
            location_url : {
                type:mongoose.SchemaTypes.Url,
            },
        // }],

   

    date: {
      type: Date,
      default: Date.now
    },
    stringDate:{
      type:String,
      default:dateformat(new Date(),'dddd, mmmm dS, yyyy, h:MM:ss TT')
    }
  });

  module.exports = mongoose.model('alluser', Userlist);