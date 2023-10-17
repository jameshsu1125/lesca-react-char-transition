"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _lescaObjectTweener = _interopRequireDefault(require("lesca-object-tweener"));
var _react = require("react");
var _mise = require("./mise");
var _jsxRuntime = require("react/jsx-runtime");
var EachChars = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var _char = _ref["char"],
    type = _ref.type,
    index = _ref.index,
    duration = _ref.duration,
    gap = _ref.gap,
    pause = _ref.pause,
    preChar = _ref.preChar,
    delay = _ref.delay,
    list = _ref.list,
    totalIndex = _ref.totalIndex,
    onEnd = _ref.onEnd;
  var _useState = (0, _react.useState)(preChar),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1];
  var tweener = (0, _react.useMemo)(function () {
    return new _lescaObjectTweener["default"]({});
  }, []);
  (0, _react.useEffect)(function () {
    tweener.add({
      from: {
        index: 0
      },
      to: {
        index: 1
      },
      duration: duration + index * gap,
      delay: delay,
      onUpdate: function onUpdate(offset) {
        setText((0, _mise.offsetChar)(_char, offset.index, type, list));
      },
      onComplete: function onComplete(offset) {
        setText((0, _mise.offsetChar)(_char, offset.index, type, list) || _char);
        if (totalIndex - 1 === index) onEnd === null || onEnd === void 0 || onEnd();
      }
    });
  }, [_char]);
  (0, _react.useEffect)(function () {
    if (pause) tweener.stop();else tweener.play();
  }, [pause]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: text
  });
});
var CharTransition = /*#__PURE__*/(0, _react.memo)(function (_ref2) {
  var children = _ref2.children,
    _ref2$duration = _ref2.duration,
    duration = _ref2$duration === void 0 ? 1000 : _ref2$duration,
    _ref2$gap = _ref2.gap,
    gap = _ref2$gap === void 0 ? 0 : _ref2$gap,
    _ref2$pause = _ref2.pause,
    pause = _ref2$pause === void 0 ? false : _ref2$pause,
    _ref2$preChar = _ref2.preChar,
    preChar = _ref2$preChar === void 0 ? '　' : _ref2$preChar,
    _ref2$delay = _ref2.delay,
    delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
    _ref2$list = _ref2.list,
    list = _ref2$list === void 0 ? [] : _ref2$list,
    _ref2$onEnd = _ref2.onEnd,
    onEnd = _ref2$onEnd === void 0 ? function () {} : _ref2$onEnd;
  var _useState3 = (0, _react.useState)(children),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    chars = _useState4[0],
    setChars = _useState4[1];
  (0, _react.useEffect)(function () {
    if (typeof children === 'string') {
      var type = (0, _mise.isNumber)(children) ? _mise.Type.number : _mise.Type.string;
      setChars(Array.from(children).map(function (e, i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(EachChars, {
          "char": e,
          duration: duration,
          totalIndex: children.length,
          type: type,
          index: i,
          gap: gap,
          pause: pause,
          preChar: preChar,
          delay: delay,
          list: list,
          onEnd: onEnd
        }, "".concat(e).concat(i));
      }));
    }
  }, [children, pause]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [" ", chars]
  });
});
var _default = exports["default"] = CharTransition;