"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function Footer() {
    return (
        <div className="flex justify-center w-full pb-6 px-4">
            <footer className="w-full max-w-7xl bg-indigo-50 dark:bg-navy-950 text-indigo-900 dark:text-white pt-16 pb-8 border border-indigo-100 dark:border-white/10 relative overflow-hidden transition-colors duration-300 rounded-[3rem] shadow-2xl">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-200/50 dark:bg-purple-900/20 blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Logo />
                        <p className="text-indigo-700 dark:text-gray-400 text-sm leading-relaxed">
                            Connecting you with the right talent every time. We are a premier
                            manpower recruiting agency dedicated to global excellence.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white dark:bg-white/5 flex items-center justify-center text-indigo-600 dark:text-gray-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-gold-500 dark:hover:text-black transition-all duration-300 shadow-sm"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-playfair font-bold mb-6 text-indigo-900 dark:text-gold-400">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {["About Us", "Services", "Blogs", "Jobs", "Gallery"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-indigo-700 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-white transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-playfair font-bold mb-6 text-indigo-900 dark:text-gold-400">
                            Services
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Executive Search",
                                "Recruitment Process",
                                "Staffing Solutions",
                                "Consulting",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-indigo-700 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-white transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-playfair font-bold mb-6 text-indigo-900 dark:text-gold-400">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-indigo-700 dark:text-gray-400 text-sm">
                                <MapPin size={18} className="text-indigo-500 dark:text-gold-500 shrink-0" />
                                <span>123 Business Avenue, Tech District, New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3 text-indigo-700 dark:text-gray-400 text-sm">
                                <Phone size={18} className="text-indigo-500 dark:text-gold-500 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-indigo-700 dark:text-gray-400 text-sm">
                                <Mail size={18} className="text-indigo-500 dark:text-gold-500 shrink-0" />
                                <span>contact@appliedvalue.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-indigo-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-indigo-500 dark:text-gray-500 text-xs">
                        &copy; 2025 Applied Value Management. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-indigo-500 dark:text-gray-500 hover:text-indigo-900 dark:hover:text-white text-xs">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-indigo-500 dark:text-gray-500 hover:text-indigo-900 dark:hover:text-white text-xs">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
