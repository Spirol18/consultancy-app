"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const flags = [
    { code: "np", name: "Nepal" },
    { code: "in", name: "India" },
    { code: "ae", name: "UAE" },
    { code: "qa", name: "Qatar" },
    { code: "my", name: "Malaysia" },
    { code: "sa", name: "Saudi Arabia" },
    { code: "au", name: "Australia" },
    { code: "us", name: "USA" },
    { code: "gb", name: "UK" },
    { code: "jp", name: "Japan" },
    { code: "kr", name: "South Korea" },
    { code: "ca", name: "Canada" },
    { code: "kw", name: "Kuwait" },
    { code: "om", name: "Oman" },
    { code: "bh", name: "Bahrain" },
    { code: "pt", name: "Portugal" },
    { code: "ro", name: "Romania" },
    { code: "pl", name: "Poland" },
    { code: "hr", name: "Croatia" },
    { code: "cy", name: "Cyprus" },
];

export const CountryMarquee = () => {
    return (
        <div className="relative w-full py-20 overflow-hidden bg-indigo-50/50 dark:bg-white/5 border-t border-indigo-100 dark:border-white/5">
            {/* Center Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-32 h-32 rounded-full bg-indigo-600 dark:bg-blue-600 flex flex-col items-center justify-center text-white shadow-xl border-4 border-white dark:border-gray-900">
                    <span className="text-2xl font-bold">50+</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-center px-2">Countries</span>
                    <div className="mt-1 bg-white/20 p-1 rounded-full">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Marquee Track */}
            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 60, // Slower animation
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-8 px-4"
                >
                    {[...flags, ...flags, ...flags, ...flags].map((flag, i) => (
                        <div
                            key={i}
                            className="w-24 h-16 rounded-lg bg-white dark:bg-white/10 shadow-sm flex items-center justify-center border border-indigo-100 dark:border-white/5 shrink-0 relative overflow-hidden"
                        >
                            <div className="relative w-16 h-10">
                                <Image
                                    src={`https://flagcdn.com/w80/${flag.code}.png`}
                                    alt={flag.name}
                                    fill
                                    className={`${flag.code === 'np' ? 'object-contain' : 'object-cover'} rounded-sm`}
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
