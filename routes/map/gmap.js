const express = require('express');
const router = express.Router();
const https = require("https");


const User = require('../../models/User');


const apikey = "AIzaSyB3lWh0xcQilZIKFvTd6Lf3OOchZEvrZvU"
const url = "https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key="+apikey;

router.get(
    "/",

    async (req,res) => {
        https
        .get(url, resp => {
          let data = "";

          console.log(resp)
      
        //   // A chunk of data has been recieved.
        //   resp.on("data", chunk => {
        //     data += chunk;
        //   });
      
        //   // The whole response has been received. Print out the result.
        //   resp.on("end", () => {
        //     let url = JSON.parse(data).hdurl;
        //     console.log(url);
      
        //     https.get(url, res => {
        //       //the response should be  an image
        //       console.log(res.headers);
        //       console.log(res.headers["content-type"], res.headers["content-length"]);
      
        //       if (
        //         res.statusCode == 200 &&
        //         res.headers["content-type"] == "image/jpeg"
        //       ) {
        //         let img = new Stream();
      
        //         res.on("data", chunk => {
        //           img.push(chunk);
        //         });
      
        //         res.on("end", () => {
        //           let filename = __dirname + "/apod.jpg";
        //           fs.writeFileSync(filename, img.read());
        //         });
        //       }
        //     });
        //   });
        })
        .on("error", err => {
          console.log("Error: " + err.message);
        });
      
    })


module.exports = router;