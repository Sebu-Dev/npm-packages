import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";
export const Logo = ({ whileHover = { scale: 1.1 }, // Standardwert für Hover
whileTap = { scale: 0.9 }, // Standardwert für Tap
className = "mx-2 h-10 md:w-20", // Standard Tailwind-Klasse
 }) => (_jsx("a", { href: "https://sebu-dev.github.io/portfolio/", children: _jsx(motion.img, { src: logo, alt: "logo", className: className, whileHover: whileHover, whileTap: whileTap, transition: { type: "spring", stiffness: 300, damping: 10 } }) }));
