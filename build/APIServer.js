/*
APIServer 1.0.0- 트렌드 마스터 Api Server입니다
git@github.com:Trendmaster/iojs-api-server.git
Built on 2015-03-20
*/
module.exports = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  }
};
module.exports = {
  capitalize : function (a) {
    var arr = a.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
  },

  reverse: function (a) {
    return a.split('').reverse().join('');
  }
};