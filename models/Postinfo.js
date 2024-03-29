const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dateformat = require('dateformat')



const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  postcontent: {
    type: String,
    required: true
  },
  posttitle: {
    type: String,
    required: true
  },
  postcategory : {
    type:String,
    required: true
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
      name: {
        type: String
      },
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
        date: {
          type: Date,
          default: Date.now,
        },
      
      
    }
  ],

     date: {
       type: Date,
       default: Date.now,
     },

 
});

module.exports = mongoose.model('postinfo', PostSchema);