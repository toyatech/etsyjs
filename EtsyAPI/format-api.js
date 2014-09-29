var fs = require('fs');

var etsy = require('./etsy.json');

fs.writeFile('./etsy2.json', JSON.stringify(etsy, null, 2), function(err) {
  if (err) console.error(err);
});
