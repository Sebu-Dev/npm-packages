"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = exports.Logo = exports.Layout = exports.test = void 0;
var Layout_1 = require("./components/Layout");
Object.defineProperty(exports, "Layout", { enumerable: true, get: function () { return Layout_1.Layout; } });
var Logo_1 = require("./components/Logo");
Object.defineProperty(exports, "Logo", { enumerable: true, get: function () { return Logo_1.Logo; } });
var Navbar_1 = require("./components/Navbar");
Object.defineProperty(exports, "Navbar", { enumerable: true, get: function () { return Navbar_1.Navbar; } });
require("./styling/index.css");
exports.test = "Hello, World!";
