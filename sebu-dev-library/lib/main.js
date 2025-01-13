"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.Input = exports.Button = exports.test = void 0;
exports.helloAnything = helloAnything;
require("./styling/index.css");
exports.test = "Hello, World!";
function helloAnything(thing) {
    return "Hello ".concat(thing, "!");
}
var Button_1 = require("./components/Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });
var Input_1 = require("./components/Input");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return Input_1.Input; } });
var Label_1 = require("./components/Label");
Object.defineProperty(exports, "Label", { enumerable: true, get: function () { return Label_1.Label; } });
