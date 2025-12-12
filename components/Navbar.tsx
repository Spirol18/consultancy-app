"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Shrink width and adjust border radius on scroll
    const width = useTransform(scrollY, [0, 100], ["100%", "90%"]);
    const top = useTransform(scrollY, [0, 100], ["0px", "20px"]);
    const borderRadius = useTransform(scrollY, [0, 100], ["0px", "50px"]);

    // Use CSS variable for background color to support theme switching
    const bgOpacity = useTransform(scrollY, [0, 100], [0.1, 0.9]);
    const backgroundColor = useMotionTemplate`rgba(var(--navbar-rgb), ${bgOpacity})`;

    const backdropBlur = useTransform(scrollY, [0, 100], ["4px", "16px"]);
    const borderOpacity = useTransform(scrollY, [0, 100], [0.1, 0.2]);
    const border = useMotionTemplate`1px solid rgba(var(--navbar-border-rgb), ${borderOpacity})`;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.nav
                style={{
                    width,
                    marginTop: top,
                    borderRadius,
                    backgroundColor,
                    backdropFilter: backdropBlur,
                    border,
                }}
                className="pointer-events-auto px-6 py-4 transition-all duration-300 ease-in-out max-w-7xl mx-auto flex items-center justify-between shadow-lg"
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-40 h-10">
                        <Image
                            src="/logo.png"
                            alt="Applied Value Management"
                            fill
                            className="object-contain object-left dark:brightness-0 dark:invert transition-all duration-300"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {["Home", "About", "Services", "Blogs", "Jobs", "Gallery"].map(
                        (item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="text-indigo-900 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-white text-sm font-medium transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-white transition-all group-hover:w-full" />
                            </Link>
                        )
                    )}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    {/* Theme Toggle */}
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full bg-indigo-100 dark:bg-white/10 text-indigo-900 dark:text-white hover:bg-indigo-200 dark:hover:bg-white/20 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="px-6 py-2 bg-indigo-900 dark:bg-white text-white dark:text-indigo-900 font-bold rounded-full hover:bg-indigo-800 dark:hover:bg-gray-100 transition-transform hover:scale-105 shadow-lg"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full bg-indigo-100 dark:bg-white/10 text-indigo-900 dark:text-white"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}
                    <button
                        className="text-indigo-900 dark:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-20 left-4 right-4 bg-white dark:bg-indigo-900/95 backdrop-blur-xl border border-indigo-100 dark:border-white/10 rounded-2xl p-6 pointer-events-auto md:hidden flex flex-col gap-4 shadow-xl"
                >
                    {["Home", "About", "Services", "Blogs", "Jobs", "Gallery"].map(
                        (item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="text-indigo-900 dark:text-white text-lg font-medium hover:text-indigo-600 dark:hover:text-gold-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        )
                    )}
                    <Link
                        href="/contact"
                        className="w-full text-center px-6 py-3 bg-indigo-900 dark:bg-white text-white dark:text-indigo-900 font-bold rounded-xl"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Get Started
                    </Link>
                </motion.div>
            )}
        </div>
    );
}
