var querystring = require('querystring');
var data = {'query':'heart','count':'2', 'view':'COMPLETE'};
const https = require('https');
const request = require('request');
request('https://api.elsevier.com/content/search/scidir?'+ querystring.stringify(data), { json: true, headers: {'X-ELS-APIKey': '3e8c962f55e8745c45129995d58a4dd3'} }, (err, res, body) => {
  if (err) { return console.log('erro',err); }
  console.log('sucesso',body);
});