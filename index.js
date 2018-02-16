var querystring = require('querystring');
var data = {'query':'heart','count':'2', 'view':'COMPLETE'};
const https = require('https');
const request = require('request');
var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('Hello World');
})
app.get('/teste', function (req, res) {
  request('https://api.elsevier.com/content/search/scidir?'+ querystring.stringify(data), { json: true, headers: {'X-ELS-APIKey': '3e8c962f55e8745c45129995d58a4dd3'} }, (err, r, body) => {
    if (err) { return console.log('erro',err); }
    //console.log('sucesso',body);
    console.log('remoteAddress', req.connection.remoteAddress);
    res.send(body);
  });
})
app.get('/beta', function (req, res) {
  res.send(`<html><head></head><body><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script>
  $.ajax({
    url: 'https://api.elsevier.com/content/search/scidir?query=heart&count=2&apiKey=3e8c962f55e8745c45129995d58a4dd3&view=COMPLETE',
    headers: {
      'X-ELS-APIKey':'3e8c962f55e8745c45129995d58a4dd3',
        'Content-Type':'application/json'
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      console.log('succes: '+data);
    }
  });
  </script></body></html>`);
})
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
