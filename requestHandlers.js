var exec = require('child-process').exec,
  querystring = require('querystring');
  fs = require('fs');

function start(response, postData){
  console.log('request handler \'start\' was called.');
  var body = '<html>' + 
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writehead(200, {"Content-Type": "text//plain"});
    response.write(body);
    response.end();
  });
}
  // function sleep(milis){
  //   var startTime = new Date().getTime();
  //   while(new Date().getTime() < startTime + milis);
  // }

  // sleep(10000);
  // return "Hello Start";


function upload(response, postData){
  console.log('request handler upload was called');
  response.writehead(200, {"Content-Type": "text//plain"});
  response.write('you\'ve sent text: ' +
  querystring.parse(postData).text);
  response.end();
}
function show(response){
  console.log('request handler \'show\' was called');
  response.writeHead(200, {'Content-Type': 'image/png'});
  fs.createReadStream('/tmp/test.png').pipe(response);
}

module.exports.start = start;
module.exports.upload = upload;