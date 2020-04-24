"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var RouterStore_1 = require("../stores/RouterStore");
exports.WorkoutHistory = mobx_react_lite_1.observer(function () {
    var routerStore = react_1.default.useContext(RouterStore_1.RouterStoreContext);
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, null, "Workout History page"),
        react_1.default.createElement(react_native_1.Button, { title: "create Workout", onPress: function () {
                routerStore.screen = "CurrentWorkout";
            } })));
});
