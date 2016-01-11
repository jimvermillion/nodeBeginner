//console.log('hello world');
// // this is typed SO MANY TIMES 
// var http = require('http');
// http.createServer(function(request, response){
//   response.writeHead(200, {'Content-Type': "text/plain"});
//   response.write('Hello World');
//   response.end();
// }).listen(8888);

// function say(word){
//   console.log(word);
// }
// function execute(somefunction, val){
//   somefunction(val);
// }
// execute(say, "hi");

// function execute(somefunction, val){
//   somefunction(val);
// }
// execute(function(word){console.log(word)}, "hello");

//refactored non-anonymous version --I'm not going to type...I get it.

// var result = database.query('SELECT * FROM hugetable');
// console.log('hello world');

// //database.query("SELECT * FROM hugetable", function(rows){
//   var result = rows;
// });
// console.log('hi');

// var http = require('http');
// function onRequest(request, response){
//   console.log('Request reveived.');
//   response.writeHead(200, {'Content-Type':'text/plain'});
//   response.write('hello world');
//   response.end();
// }
// http.createServer(onRequest).listen(8888);
// console.log('server has started');
var formidable = require("formidable"),
  http = require('http'),
  url = require('url');

// function start(route, handle){
//   function onRequest(req, res){
//     var postData = '';
//     //routing functionality
//     var pathname = url.parse(req.url).pathname;
//     console.log('request for ' + pathname + " recieved");
// debugger;
//     route(handle, pathname, res);

//     req.setEncoding('utf8');
//     req.addListener('data', function(postDataChunk){
//       postData += postDataChunk;
//       console.log(`recieved POST data chunk ${postDataChunk}.`);
//     });
//     request.addListener('end', function(){
//       route(handle, pathname, response, postData);
//     });
//     // res.writeHead(200, {"Content-Type":"text/plain"});
//     // var content = route(handle, pathname);
//     // res.write(content);
//     // res.end();
//   }
  http.createServer(function(req, res){
    if (req.url == '/upload' && req.method.toLowerCase() == 'post'){
      // parse a file upload
      var form = new formidable.IncomingForm();
      form.parse(req, function(error, fields, files){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        res.end(sys.inspect({fields: fields, files: files}));
      });
      return;
    }
  }).listen(8888);
  console.log('server has started!');
}
module.exports.start = start;


// var http = require("http");
// var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response, request);

    // response.writeHead(200, {"Content-Type": "text/plain"});
    // response.write("Hello World");
    // response.end();
}

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}



module.exports.start = start;















