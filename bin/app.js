/**
 * Created by dobyeongsu on 15. 3. 20..
 */
var restify = require('restify');
var Logger = require('bunyan');

var log = new Logger({
  name: 'restifypretest',
  streams: [{
    path: '/Users/dobyeongsu/Desktop/log.log',
    type: 'rotating-file',
    period: '1d',   // daily rotation
    count: 3        // keep 3 back copies
  }],
  serializers: {
    req: Logger.stdSerializers.req,
    res: Logger.stdSerializers.res,
    err: Logger.stdSerializers.err
  }
});

var server = restify.createServer({
  name: 'restifypretest',
  log: log
});

server.pre(function(req, res, next) {
  server.log.info({
    req : req,
    kr_time: Date("Y-m-d H:i:s")
  }, 'firstRequest');
  next();
});

server.on('after', function (req, res) {
  server.log.info({res: res}, "finished");
});

require('../lib')(server);

module.exports = server;