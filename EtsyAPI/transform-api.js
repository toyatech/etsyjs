var fs = require('fs')
  , etsy = require('./etsy4.json');

var renames = {
  'fields': 'f', 
  'associations': 'a',
  'methods': 'm',
  'name': 'n',
  'type': 't',
  'visibility': 'v',
  'scope': 's',
  'uri': 'u',
  'method': 'm',
  'oauth': 'o',
  'parameters': 'p',
  'required': 'r',
  'default': 'd'
};

var defaults = {
  'visibility': 'private',
  'scope': 'none',
  'method': 'GET',
  'oauth': true,
  'required': false,
  'default': ''
};

var removes = 'description';

function iterate(obj) {
  for (var property in obj) {
    if (renames[property] || defaults[property] || property === removes) {
      if (property === removes) delete obj[property]; continue;
      if (obj[property] === defaults[property]) delete obj[property];
      obj[renames[property]] = obj[property]; delete obj[property]; 
      property = renames[property];
    }
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] === 'object') {
        iterate(obj[property]);
      }
    }
  }
  return obj;
}

console.log(JSON.stringify(iterate(etsy), null, 2));
