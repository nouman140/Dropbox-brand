"use client";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-b from-blue-600 to-blue-400 flex items-center justify-center">
      <div className="text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Dropbox Brand
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Everything you need to create Dropbox branded experiences
        </motion.p>
      </div>
    </section>
  );
};
