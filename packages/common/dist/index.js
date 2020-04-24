"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
exports.App = function () {
    var _a = react_1.useState(0), counter = _a[0], setCounter = _a[1];
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, null, counter),
        react_1.default.createElement(react_native_1.Text, null, counter),
        react_1.default.createElement(react_native_1.Text, null, counter),
        react_1.default.createElement(react_native_1.Text, null, counter),
        react_1.default.createElement(react_native_1.Button, { title: "incement", onPress: function () { setCounter(counter + 1); } })));
};
