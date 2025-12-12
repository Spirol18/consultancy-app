"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, Users, TrendingUp } from "lucide-react";
import { CountryMarquee } from "@/components/CountryMarquee";

export default function Home() {
  return (
    <div className="overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/30 dark:bg-purple-900/30 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/30 dark:bg-gold-500/10 rounded-full blur-[128px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight mb-6 text-primary">
              Connecting You with the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-gold-400 dark:to-gold-600 italic">
                Right Talent
              </span>{" "}
              Every Time
            </h1>
            <p className="text-lg text-secondary mb-8 max-w-lg leading-relaxed">
              We are a premier manpower recruiting agency. Our expertise lies in
              connecting you with skilled talents worldwide, ensuring your
              business thrives with the right people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-indigo-600 dark:bg-gold-500 text-white dark:text-black font-bold rounded-full hover:bg-indigo-700 dark:hover:bg-gold-400 transition-all hover:scale-105 shadow-lg shadow-indigo-500/20 dark:shadow-gold-500/20 flex items-center justify-center gap-2"
              >
                Schedule a Call <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-custom text-primary font-bold rounded-full hover:bg-surface transition-all hover:border-indigo-500 dark:hover:border-gold-500/50 flex items-center justify-center"
              >
                Get More Info
              </Link>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] w-full hidden lg:block"
          >
            <div className="absolute inset-0 bg-surface rounded-3xl border border-custom backdrop-blur-md p-8 flex flex-col justify-between shadow-2xl dark:shadow-none">
              <div className="flex justify-between items-start">
                <div className="p-4 bg-card-custom rounded-2xl">
                  <Globe className="text-accent" size={32} />
                </div>
                <div className="text-right">
                  <p className="text-sm text-secondary">Global Reach</p>
                  <p className="text-2xl font-bold text-primary">150+ Countries</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Users, text: "Top 1% Talent Pool" },
                  { icon: TrendingUp, text: "Accelerated Growth" },
                  { icon: CheckCircle, text: "Verified Skills" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center gap-4 p-4 bg-card-custom rounded-xl border border-custom hover:border-indigo-500/30 dark:hover:border-gold-500/30 transition-colors shadow-sm dark:shadow-none"
                  >
                    <item.icon className="text-accent" size={24} />
                    <span className="text-primary font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-purple-600 dark:to-blue-600 rounded-full blur-2xl opacity-30 dark:opacity-50"
            />

          // ...

          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <CountryMarquee />


    </div>
  );
}
