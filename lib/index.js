"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var lesca_object_tweener_1 = __importStar(require("lesca-object-tweener"));
var react_1 = require("react");
var mise_1 = require("./mise");
var bezier_easing_1 = __importDefault(require("bezier-easing"));
var EachChars = (0, react_1.memo)(function (_a) {
    var char = _a.char, type = _a.type, index = _a.index, duration = _a.duration, pause = _a.pause, preChar = _a.preChar, delay = _a.delay, list = _a.list, totalIndex = _a.totalIndex, onEnd = _a.onEnd;
    var _b = (0, react_1.useState)(preChar), text = _b[0], setText = _b[1];
    var tweener = (0, react_1.useMemo)(function () {
        return new lesca_object_tweener_1.default({});
    }, []);
    (0, react_1.useEffect)(function () {
        tweener.add({
            from: { index: 0 },
            to: { index: 1 },
            duration: duration,
            delay: delay,
            onUpdate: function (offset) {
                setText((0, mise_1.offsetChar)(char, offset.index, type, list));
            },
            onComplete: function (offset) {
                setText((0, mise_1.offsetChar)(char, offset.index, type, list) || char);
                if (totalIndex - 1 === index)
                    onEnd === null || onEnd === void 0 ? void 0 : onEnd();
            },
        });
    }, [char]);
    (0, react_1.useEffect)(function () {
        if (pause)
            tweener.stop();
        else
            tweener.play();
    }, [pause]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: text });
});
var CharTransition = (0, react_1.memo)(function (_a) {
    var children = _a.children, _b = _a.duration, duration = _b === void 0 ? 1000 : _b, _c = _a.pause, pause = _c === void 0 ? false : _c, _d = _a.preChar, preChar = _d === void 0 ? '　' : _d, _e = _a.delay, delay = _e === void 0 ? 0 : _e, _f = _a.list, list = _f === void 0 ? [] : _f, _g = _a.easing, easing = _g === void 0 ? lesca_object_tweener_1.Bezier.linear : _g, _h = _a.onEnd, onEnd = _h === void 0 ? function () { } : _h;
    var _j = (0, react_1.useState)(children), chars = _j[0], setChars = _j[1];
    var easingMethod = (0, react_1.useMemo)(function () {
        return (0, bezier_easing_1.default)(easing[0], easing[1], easing[2], easing[3]);
    }, [easing, duration]);
    (0, react_1.useEffect)(function () {
        if (typeof children === 'string') {
            var type_1 = (0, mise_1.isNumber)(children) ? mise_1.Type.number : mise_1.Type.string;
            setChars(Array.from(children).map(function (e, i) { return ((0, jsx_runtime_1.jsx)(EachChars, { char: e, duration: easingMethod(i / children.length) * duration, totalIndex: children.length, type: type_1, index: i, pause: pause, preChar: preChar, delay: delay, list: list, onEnd: onEnd }, "".concat(e).concat(i))); }));
        }
    }, [children, pause]);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [" ", chars] });
});
exports.default = CharTransition;
