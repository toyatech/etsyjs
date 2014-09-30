var fs = require('fs')
  , esprima = require('esprima')
  , escodegen = require('escodegen')
  , esmangle = require('esmangle')
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

function FunctionExpression(params, body) {
  return { type: 'FunctionExpression', id: null, params: params, defaults: [],
    body: body, rest: null, generator: false, expression: false };
}

function VariableDeclaration(declarations) {
  return { type: 'VariableDeclaration', declarations: declarations, kind: 'var' };
}

function VariableDeclarator(id, init) {
  return { type: 'VariableDeclarator', id: id, init: init };
} 

function ArrayExpression(elements) {
  return { type: 'ArrayExpression', elements: elements };
}

function ObjectExpression(properties) {
  return { type: 'ObjectExpression', properties: properties };
}

function Property(key, value, kind) {
  return { type: 'Property', key: key, value: value, kind: kind };
}

function Literal(value) {
  return { type: 'Literal', value: value };
}

var api = esprima.parse('var api = ' + JSON.stringify(etsy));

etsyjs.body[0].expression.arguments[1].body.body.push(api);

fs.writeFile('./etsy.js', escodegen.generate(etsyjs), 
  function(error) {
    if (error) console.error(error);
});
