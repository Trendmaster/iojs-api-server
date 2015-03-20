/**
 * Created by dobyeongsu on 15. 3. 20..
 */
var restify = require('restify');

function respond(req, res, next) {
  res.send("Hello");
  next();
}

function test(req, res, next) {
  console.log(req);
  console.log(res);
  next();
}

var server = restify.createServer({
  name: 'MyApp'
});

server.use(test);

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

module.exports = server;