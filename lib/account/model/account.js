/**
 * Created by dobyeongsu on 15. 3. 21..
 */
var util = require('util');
var fns = require('../controller/controller');

function adminAccount( options ) {
  this.color = options.color || 'red';
  this.side = options.side || 'right';
  this.hasPowerWindows = options.hasPowerWindows || true;
}

function userAccount( options ) {
  this.color = options.color || 'gray';
  this.material = options.material || 'leather';
  this.isReclinable = options.isReclinable || true;
}

function AccountFactory() {}
AccountFactory.prototype.createPart = function createCarPart( options ) {
  var parentClass = null;

  if( options.partType === 'door' ) {
    parentClass = adminAccount;
  } else if( options.partType === 'seat' ) {
    parentClass = userAccount;
  }

  if( parentClass === null ) {
    return false;
  }

  util.inherits(parentClass, fns);
  return new parentClass( options );
};

module.exports = AccountFactory;