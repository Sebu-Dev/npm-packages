import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./index.css";
import { Navbar } from "./Navbar";
export const Layout = ({ children }) => {
    return (_jsxs("div", { className: "overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900", children: [_jsx("div", { className: "fixed top-0 -z-10 h-full w-full", children: _jsx("div", { className: "absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" }) }), _jsxs("div", { className: "container mx-auto px-8", children: [_jsx(Navbar, {}), children] })] }));
};
