import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Logo } from "./Logo";
function GithubLink() {
    return (_jsxs(motion.div, { whileHover: { scale: 1.2 }, whileTap: { scale: 0.9 }, className: "flex flex-col items-center cursor-pointer", children: [_jsx(motion.a, { href: "https://github.com/Sebu-Dev", target: "_blank", rel: "noopener noreferrer", className: "relative flex items-center justify-center lg:h-12 lg:w-12 rounded-full bg-black text-white shadow-lg", children: _jsx(FaGithub, {}) }), _jsx("span", { className: "mt-2 text-sm text-neutral-400", children: "GitHub" })] }));
}
export const Navbar = ({ children }) => {
    return (_jsxs("nav", { className: "mb-14 lg:mb-20 flex items-center justify-between py-3", children: [_jsx("div", { className: "flex flex-shrink-0 items-center", children: _jsx(Logo, {}) }), _jsxs("div", { className: "mt-4 lg:m-8 flex items-center justify-center gap-4 text-2xl", children: [children && (_jsxs("div", { className: "flex items-center", children: [children, " "] })), _jsx(GithubLink, {})] })] }));
};
