function route(handle, pathname, response, postData){
  console.log('About to route a request for ' + pathname);
  if (typeof handle[pathname] === 'function'){
    handle[pathname](response, postData);
  } else {
    console.log('no request handler found for: ' + pathname);
    response.writehead(404, {'Content=Type': "text/plain"});
    response.write("404 NOT FOUND");
    reesponse.end();
    //return "404 Not found";
  }
}
module.exports.route = route;