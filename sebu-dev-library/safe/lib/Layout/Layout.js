"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = require("react");
var Layout = function (_a) {
    var children = _a.children;
    return (<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">{children}</div>
    </div>);
};
exports.Layout = Layout;
exports.default = exports.Layout;
