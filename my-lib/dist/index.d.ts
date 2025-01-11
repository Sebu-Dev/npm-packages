import React, { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { TargetAndTransition } from 'framer-motion';

interface LayoutProps {
    children: ReactNode;
}
declare const Layout: React.FC<LayoutProps>;

declare const Logo: ({ whileHover, whileTap, className, }: {
    whileHover?: TargetAndTransition;
    whileTap?: TargetAndTransition;
    className?: string;
}) => react_jsx_runtime.JSX.Element;

interface NavbarProps {
    children?: React.ReactNode;
}
declare const Navbar: React.FC<NavbarProps>;

export { Layout, Logo, Navbar };
