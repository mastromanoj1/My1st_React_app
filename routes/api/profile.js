const express = require("express");
const router = express.Router();


// @route GET api/Profile
// @desc Test route
// @acess public

router.get('/',(req,res)=>
    res.send("Profile running")
)

module.exports = router;