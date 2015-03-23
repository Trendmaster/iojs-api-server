/**
 * Created by dobyeongsu on 15. 3. 20..
 */
var restify = require('restify');

var server = restify.createServer({
  name: 'MyApp'
});

server.use(function (req, res, next) {
  next();
});

require('../lib')(server);

module.exports = server;