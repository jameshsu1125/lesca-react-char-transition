"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.offsetChar = exports.isNumber = exports.Type = void 0;
var Type;
(function (Type) {
    Type[Type["number"] = 0] = "number";
    Type[Type["string"] = 1] = "string";
})(Type || (exports.Type = Type = {}));
var isNumber = function (str) {
    var pattern = /^\d+\.?\d*$/;
    return pattern.test(str);
};
exports.isNumber = isNumber;
var chars = (_a = {},
    _a[Type.number] = Array.from(new Array(10).keys()).map(function (e) { return String(e); }),
    _a[Type.string] = Array.from(new Array(26).keys()).map(function (e) { return String.fromCharCode(e + 97); }),
    _a);
var offsetChar = function (char, offset, type, tranCharList) {
    if (offset === void 0) { offset = 1; }
    var pattern = tranCharList.length > 0 ? tranCharList : chars[type];
    if (offset === 1)
        return char;
    return pattern[Math.floor(Math.random() * pattern.length)];
};
exports.offsetChar = offsetChar;
