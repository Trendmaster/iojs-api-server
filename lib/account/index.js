/**
 * Created by dobyeongsu on 15. 3. 21..
 */
var Account = require('./model/account');

var UserFactory = new Account();

var user = UserFactory.createPart({
  partType : 'seat',
  material : 'leather',
  color : 'blue',
  isReclinable : false
});

module.exports = function (server) {
  server.get('/accounts',       user.getUsers);
  server.post('/accounts',      user.postUsers);
  server.put('/accounts',       user.putUsers);
  server.del('/accounts',       user.delUsers);

  server.get('/accounts/:id',   user.getUser);
  server.post('/accounts/:id',  user.postUser);
  server.put('/accounts/:id',   user.putUser);
  server.del('/accounts/:id',   user.delUser);


};