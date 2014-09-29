var fs = require('fs');

var etsy = require('./etsy2.json');

var keys = Object.keys(etsy);

keys.sort();

var data = {};

for (var i = 0; i < keys.length; i++) {
  data[keys[i]] = etsy[keys[i]];
}

fs.writeFile('./etsy3.json', JSON.stringify(data, null, 2), function(err) {
  if (err) console.error(err);
});
