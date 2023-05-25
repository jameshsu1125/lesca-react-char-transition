"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.offsetChar = exports.isNumber = exports.Type = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _chars;
var Type = /*#__PURE__*/function (Type) {
  Type[Type["number"] = 0] = "number";
  Type[Type["string"] = 1] = "string";
  return Type;
}({});
exports.Type = Type;
var isNumber = function isNumber(str) {
  var pattern = /^\d+\.?\d*$/;
  return pattern.test(str);
};
exports.isNumber = isNumber;
var chars = (_chars = {}, (0, _defineProperty2["default"])(_chars, Type.number, Array.from(new Array(10).keys()).map(function (e) {
  return String(e);
})), (0, _defineProperty2["default"])(_chars, Type.string, Array.from(new Array(26).keys()).map(function (e) {
  return String.fromCharCode(e + 97);
})), _chars);
var offsetChar = function offsetChar(_char) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var type = arguments.length > 2 ? arguments[2] : undefined;
  var tranCharList = arguments.length > 3 ? arguments[3] : undefined;
  var pattern = tranCharList.length > 0 ? tranCharList : chars[type];
  if (offset === 1) return _char;
  return pattern[Math.floor(Math.random() * pattern.length)];
};
exports.offsetChar = offsetChar;