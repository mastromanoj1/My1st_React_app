const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Register = require('../../models/Register');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');


// @route    POST admin/register
// @desc     Create a post
// @access   Private


router.post(
    '/',
    auth,
    check('username', 'username is required').notEmpty(),
    check('usernumber','Not a Valid Phone Number').notEmpty().isNumeric().matches(/^[6-9]\d{9}/g),
    

    //check validation for number
  
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

     
  
      try {

        let ch_user = await Register.findOne({ usernumber : req.body.usernumber });

        if (ch_user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Number already exists' }] });
  
      }
        

        const user = await User.findById(req.user.id).select('-password');
        // const userlist = await Register.findById(req.params.id)
  
        const newPost = new Register({
            username:req.body.username,
            usernumber:req.body.usernumber,
            doornumber:req.body.doornumber,
            street:req.body.street,
            area:req.body.area,
            location_url:req.body.url,  
        });
        const post = await newPost.save();
 
        res.json(post);
        
      
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    },

  );

  module.exports = router;