import { motion, type TargetAndTransition } from "framer-motion";
import React, { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import logo from "./assets/logo.png";
import "./styling/index.css";

export const test = "Hello, World!";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        {<Navbar />}
        {children}
      </div>
    </div>
  );
};

export const Logo = ({
  whileHover = { scale: 1.1 }, // Standardwert für Hover
  whileTap = { scale: 0.9 }, // Standardwert für Tap
  className = "mx-2 h-10 md:w-20", // Standard Tailwind-Klasse
}: {
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
  className?: string;
}) => (
  <a href="https://sebu-dev.github.io/portfolio/">
    <motion.img
      src={logo}
      alt="logo"
      className={className}
      whileHover={whileHover} // Anpassung für Hover-Animation
      whileTap={whileTap} // Anpassung für Tap-Animation
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    />
  </a>
);
function GithubLink() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center cursor-pointer"
    >
      <motion.a
        href="https://github.com/Sebu-Dev"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center lg:h-12 lg:w-12 rounded-full bg-black text-white shadow-lg"
      >
        <FaGithub />
      </motion.a>
      <span className="mt-2 text-sm text-neutral-400">GitHub</span>
    </motion.div>
  );
}

interface NavbarProps {
  children?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="mb-14 lg:mb-20 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center">
        <Logo />
      </div>
      <div className="mt-4 lg:m-8 flex items-center justify-center gap-4 text-2xl">
        {children && (
          <div className="flex items-center">
            {children} {/* you can add more icons here*/}
          </div>
        )}
        <GithubLink />
      </div>
    </nav>
  );
};
