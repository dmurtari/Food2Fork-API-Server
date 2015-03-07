//Includes
var express = require('express')
var app = express()
var qs = require('qs');
unirest = require('unirest');

app.get('/', function(req, res) {
    res.send("Please enter a valid url (search or get)")
})

app.get('/recipe/search/:text', function(req, res) {
  
  // These code snippets use an open-source library. http://unirest.io/nodejs
  unirest.get("https://community-food2fork.p.mashape.com/search?key=b4e4e7719385dcbf54c699de0fe0a5ba")
  .header("X-Mashape-Key", "LgPqtxyZeLmshtqZd4rQ5jHqBH3mp1lNoE4jsng5515D7TCs80")
  .header("Accept", "application/json")
  .send({"q": req.params.text})
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
    res.send(result)
  });
});

app.get('/recipe/get/:recipe', function(req, res) {
  
  // These code snippets use an open-source library. http://unirest.io/nodejs
  unirest.get("https://community-food2fork.p.mashape.com/get?key=b4e4e7719385dcbf54c699de0fe0a5ba")
  .header("X-Mashape-Key", "LgPqtxyZeLmshtqZd4rQ5jHqBH3mp1lNoE4jsng5515D7TCs80")
  .header("Accept", "application/json")
  .send({"rId": req.params.recipe})
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
    res.send(result)
  });
});

// Port Binding
app.set('port', (process.env.PORT || 3000))

var server = app.listen(process.env.PORT || app.get('port'), function() {

    var host = server.address().address
    var port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
})
