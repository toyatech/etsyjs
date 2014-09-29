var request = require('request')
  , cheerio = require('cheerio');

request('https://www.etsy.com/developers/documentation', function(error, response, html) {
  var $ = cheerio.load(html)
    , resources = {};
  console.log('{');
  $('#reference').find('li').each(function(i, elem) {
    request('https://www.etsy.com' + $(this).children().first().attr('href'), function(error, response, html) {
      var $ = cheerio.load(html)
        , resource = {};
      resource.description = $('.docs-content p').text();
      resource.fields = {};
      $('#resource_fields tr').slice(1).each(function(i, elem) {
        var td = $(this).children()
          , field = {};
        field.visibility = td.eq(1).first().text();
        field.scope = td.eq(2).children().first().text();
        field.type = td.eq(3).children().first().children().first().text();
        field.description = td.eq(4).text().trim();
        resource.fields[td.eq(0).first().text()]= field; 
      });
      resource.associations = {};
      $('#resource_associations tr').slice(1).each(function(i, elem) {
        var td = $(this).children()
          , association = {};
        association.visibility = td.eq(1).first().text();
        association.scope = td.eq(2).children().first().text();
        association.type = td.eq(3).children().first().children().first().text();
        association.description = td.eq(4).text().trim();
        resource.associations[td.eq(0).first().text()] = association;
      });
      resource.methods = {};
      $('.api_method').each(function(i, elem) {
        var tr = $(this).children().first().children()
          , method = {};
        method.description = tr.eq(1).children().last().text().trim();
        method.method = tr.eq(2).children().last().text();
        method.uri = tr.eq(3).children().last().text();
        method.parameters = {};
        tr.eq(4).children().last().children().first().children().first().children().slice(1).each(function(i, elem) {
          var tr = $(this)
            , parameter = {};
          parameter.required = tr.children().eq(1).text() === 'Y' ? true : false;
          parameter.default = tr.children().eq(2).text().trim();
          parameter.type = tr.children().eq(3).text();
          method.parameters[tr.children().eq(0).text()] = parameter;
        });
        method.oauth = tr.eq(5).children().last().text() === 'Y' ? true : false;
        method.scope = tr.eq(6).children().last().text();
        resource.methods[tr.eq(0).children().last().text()] = method;
      });
      console.log('"' + $('.docs-content h1').text() + '": ' + JSON.stringify(resource, null, 2) + ',');
    });
  })
  console.log('}');
})

