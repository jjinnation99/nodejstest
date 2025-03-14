var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
console.log( url.parse(_url, true));
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
  
    if(pathname === '/'){
    /////////////////////////
        if(queryData.id === undefined){
            var title = 'Welcome';
   
fs.readFile(`data/${title}`,'utf8', function(err,description){
    var description ='Hello, Node.js';
        var template=`
        <!doctype html>
            <html>
            <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
            </head>
            <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=Javascript">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>${description}</p>
            </body>
            </html>
        `
        response.writeHead(200);
        response.end(template);
    }); } 
    ///////////////////////////////////////
    else {


    fs.readFile(`data/${title}`,'utf8', function(err,description){

        var template=`
        <!doctype html>
            <html>
            <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
            </head>
            <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=Javascript">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>${description}</p>
            </body>
            </html>
        `
        response.writeHead(200);
        response.end(template);
    }); }
    
    }
    //////////////////////////////////////////
    else{ 
        response.writeHead(404);
        response.end("Not Found");}
 
});
app.listen(3000); // 주소?