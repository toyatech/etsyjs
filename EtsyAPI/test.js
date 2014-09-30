var etsyjs = require('./etsy');
var options = require('../.options.json');

etsyjs.api_key = options.api_key;

console.log(etsyjs.api_key);

//for (var r in etsyjs.api) {
//  var ri = new etsyjs[r]();
//  for (var m in etsyjs.api[r].m) {
//    ri[m]();
//  }
//}
