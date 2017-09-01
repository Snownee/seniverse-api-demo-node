const KEY = "3hmktthzvvhmh57c"; // 测试用 key，请更换成您自己的 Key
var location = "Beijing"; // 除拼音外，还可以使用 v3 id、汉语等形式

var Api = require('./lib/api.js')

var api = new Api(KEY);
api.getWeatherDaily(location).then(function(data) {
  console.log(JSON.stringify(data, null, 4));
}).catch(function(err) {
  console.log(err.error.status);
});
