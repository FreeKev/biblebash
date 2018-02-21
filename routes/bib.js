require('dotenv').config();
var express = require('express');
var router = express.Router();


router.put('/', function(req, res, next) {

    // This isn't part of API and is just used from a browser or curl to test that
    // "/pop" is being routed correctly.

    var testObject = {
        "AppName": "MongoPop",
        "Version": 1.0
    }
    console.log(testObject);
    res.json(testObject);
});



module.exports = router;
