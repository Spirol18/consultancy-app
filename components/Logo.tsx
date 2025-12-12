import React from "react";

export const Logo = ({ className = "", textClassName = "" }: { className?: string, textClassName?: string }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
            >
                {/* The 'A' shape - Blue */}
                <path
                    d="M20 80 L50 20 L65 50"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-800 dark:text-white"
                />
                {/* The 'V' shape - Grey/Silver */}
                <path
                    d="M55 50 L70 80 L90 40"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-500 dark:text-gray-300"
                />
                {/* The small triangle inside A - Blue */}
                <path
                    d="M40 65 L50 45 L60 65 Z"
                    fill="currentColor"
                    className="text-blue-800 dark:text-white"
                />
            </svg>
            <div className={`flex flex-col justify-center ${textClassName}`}>
                <span className="font-bold text-lg leading-none tracking-wide text-blue-900 dark:text-white">
                    APPLIED VALUE
                </span>
                <span className="text-[0.6rem] font-medium tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase">
                    Management
                </span>
            </div>
        </div>
    );
};
