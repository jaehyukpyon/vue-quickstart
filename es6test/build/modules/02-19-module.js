"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = exports.add = void 0;
var base = 10;
var add = function add(x) {
  return base + x;
};
exports.add = add;
var multiply = function multiply(x) {
  return base * x;
};
exports.multiply = multiply;