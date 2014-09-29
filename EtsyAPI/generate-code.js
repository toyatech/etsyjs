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

var declaration = VariableDeclaration([VariableDeclarator(Identifier('r'), ObjectExpression([]))]);

for (var resource in etsy) {
  

etsy.resources.forEach(function(resource) {
  declaration.declarations[0].init.properties.push(Property(Literal(resource.name),
    ObjectExpression([])));
  if (resource.fields.length > 0) {
    var fields = [];
    resource.fields.forEach(function(field) {
      field.n = field.name; delete field.name;
      field.t = field.type; delete field.type; 
      delete field.description;
      if (field.visibility === 'private') {
        delete field.visibility;
      } else {
        field.v = field.visibility; delete field.visibility;
      }
      if (field.scope === 'none') {
        delete field.scope;
      } else {
        field.s = field.scope; delete field.scope;
      }
      fields.push(field);
    });
    declaration.declarations[0].init.properties[.push(VariableDeclarator(Identifier(resource.name + '_f'),
      esprima.parse(JSON.stringify(fields)).body[0].expression));
  }
  if (resource.associations.length > 0) {
    var associations = [];
    resource.associations.forEach(function(association) {
      association.n = association.name; delete association.name;
      association.t = association.type; delete association.type;
      delete association.description;
      if (association.visibility === 'private') {
        delete association.visibility;
      } else {
        association.v = association.visibility; delete association.visibility;
      }
      if (association.scope === 'none') {
        delete association.scope;
      } else {
        association.s = association.scope; delete association.scope;
      }
      associations.push(association);
    });
    declaration.declarations.push(VariableDeclarator(Identifier(resource.name + 
    '_a'),esprima.parse(JSON.stringify(associations)).body[0].expression));
  }
  if (resource.methods.length > 0) {
    var methods = [];
    resource.methods.forEach(function(method) {
      delete method.description;
      method.n = method.name; delete method.name;
      method.u = method.uri; delete method.uri;
      if (method.method === 'GET') {
        delete method.method;
      } else {
        method.m = method.method; delete method.method;
      }
      if (method.oauth === true) {
        delete method.oauth;
      } else {
        method.o = method.oauth; delete method.oauth;
      }
      if (method.scope === 'none') {
        delete method.scope;
      } else {
        method.s = method.scope; delete method.scope;
      }
      if (!method.parameters.length > 0) {
        delete method.parameters;
      } else {
        for (var i = 0, length = method.parameters.length; i < length; i++) {
          method.parameters[i].n = method.parameters[i].name;
          delete method.parameters[i].name;
          method.parameters[i].t = method.parameters[i].type;
          delete method.parameters[i].type;
          if (method.parameters[i].required === false) {
            delete method.parameters[i].required;
          } else {
            method.parameters[i].r = method.parameters[i].required;
            delete method.parameters[i].required;
          }
          if (method.parameters[i].default === "") {
            delete method.parameters[i].default;
          } else {
            method.parameters[i].d = method.parameters[i].default;
            delete method.parameters[i].default;
          }
        }
        method.p = method.parameters; delete method.parameters;
      }
      methods.push(method);
    });
    declaration.declarations.push(VariableDeclarator(Identifier(resource.name + 
      '_m'), esprima.parse(JSON.stringify(methods)).body[0].expression));
  }
});

etsyjs.body[0].expression.arguments[1].body.body.push(declaration);

fs.writeFile('./etsy.js', escodegen.generate(etsyjs), 
  function(error) {
    if (error) console.error(error);
});
