var fs = require('fs')
  , esprima = require('esprima')
  , escodegen = require('escodegen')
  , etsy = require('./etsy.json');

var umd = "(function (root, factory) {" +
  "'use strict';" +
  "if (typeof define === 'function' && define.amd) {" +
  "define(['exports'], factory);" +
  "} else if (typeof exports !== 'undefined') {" +
  "factory(exports);" +
  "} else {" +
  "factory((root.etsyjs = {}));" +
  "}" +
  "}(this, function (exports) {" +
  "'use strict';" +
  "}))";

var etsyjs = esprima.parse(umd);

function FunctionDeclaration(id, params, body) {
  return { type: 'FunctionDeclaration', id: id, params: params, defaults: [], 
    body: body, rest: null, generator: false, expression: false };
}

function Identifier(name) {
  return { type: 'Identifier', name: name };
}

function BlockStatement(body) {
  return { type: 'BlockStatement', body: body };
}

function ExpressionStatement(expression) {
  return { type: 'ExpressionStatement', expression: expression };
}

function AssignmentExpression(operator, left, right) {
  return { type: 'AssignmentExpression', operator: operator, left: left,
    right: right };
}

function MemberExpression(object, property) {
  return { type: 'MemberExpression', computed: false, object: object, 
    property: property };
}

etsy.resources.forEach(function(resource) {
  etsyjs.body[0].expression.arguments[1].body.body.push(
    FunctionDeclaration(Identifier(resource.name), [Identifier('options')],
      BlockStatement([]))
  );
  etsyjs.body[0].expression.arguments[1].body.body.push(
    ExpressionStatement(AssignmentExpression('=', MemberExpression(
      Identifier(resource.name), Identifier('fields')),
    esprima.parse(JSON.stringify(resource.fields)).body[0].right))
  );
});

fs.writeFile('./etsy.js', escodegen.generate(etsyjs), function(error) {
  if (error) console.error(error);
});
