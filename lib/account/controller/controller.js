/**
 * Created by dobyeongsu on 15. 3. 22..
 */
var fns = function () {};
fns.prototype = {

  getUsers : function getUsers(req, res, next) {
    console.log('getUsers');
    res.send('getUsers');
    next();
  },

  getUser: function getUser(req, res, next) {
    console.log('getUser');
    res.send('getUser');
    next();
  },

  putUser: function putUser(req, res, next) {
    console.log('putUser');
    res.send('putUser');
    next();
  },

  putUsers: function putUsers(req, res, next) {
    console.log('putUsers');
    res.send('putUsers');
    next();
  },

  postUser: function postUser(req, res, next) {
    console.log('postUser');
    res.send('postUser');
    next();
  },

  postUsers: function postUsers(req, res, next) {
    console.log('postUsers');
    res.send('postUsers');
    next();
  },

  delUser: function delUser(req, res, next) {
    console.log('delUser');
    res.send('delUser');
    next();
  },

  delUsers: function delUsers(req, res, next) {
    console.log('delUsers');
    res.send('delUsers');
    next();
  }
};
module.exports = fns;