var express = require('express');
var fs= require('fs');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('weather.html', { root:  'public'});
  //console.log("called first get");
});

/*Get OwlBot*/
router.get('/:word', function(req, res, next) {
  console.log("In Image Search Route");
  const url = 'https://images-api.nasa.gov/search?q='
  const temp = url + req.params.word;
  request(temp).pipe(res);
console.log(temp);
});

module.exports = router;
