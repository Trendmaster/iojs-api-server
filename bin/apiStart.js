/**
 * Created by dobyeongsu on 15. 3. 19..
 */
var app = require('./app.js');

app.listen(8080, function() {
  console.log('%s listening at %s', app.name, app.url);
});