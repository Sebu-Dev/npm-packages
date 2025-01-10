import React from "react";
import "./index.css";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-gradient-radial"></div>
      </div>
      <div className="container mx-auto px-8">{children}</div>
    </div>
  );
};
