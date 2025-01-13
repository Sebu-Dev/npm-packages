"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.test = void 0;
exports.helloAnything = helloAnything;
var button_1 = require("./button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return button_1.Button; } });
require("./styling/index.css");
exports.test = "Hello, World!";
function helloAnything(thing) {
    return "Hello ".concat(thing, "!");
}
