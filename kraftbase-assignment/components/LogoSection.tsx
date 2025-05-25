"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const LogoSection = () => {
  const logoVariants = [
    {
      name: "Primary Logo",
      bg: "bg-white",
      img: "/assets/logo-primary.png",
      desc: "Default logo for most applications",
    },
    {
      name: "White Logo",
      bg: "bg-blue-600",
      img: "/assets/logo-white.png",
      desc: "For use on dark backgrounds",
    },
    {
      name: "Black Logo",
      bg: "bg-gray-100",
      img: "/assets/logo-black.png",
      desc: "For use on light backgrounds",
    },
    {
      name: "Icon",
      bg: "bg-white",
      img: "/assets/logo-icon.png",
      desc: "For square spaces or favicons",
    },
  ];

  return (
    <section id="logos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Logos</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our logo is our most recognizable asset. Use it properly and
            consistently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {logoVariants.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`rounded-xl p-8 ${logo.bg} flex flex-col items-center`}
            >
              <div className="h-40 w-full relative mb-6"></div>
              <h3 className="text-xl font-bold mb-2">{logo.name}</h3>
              <p className="text-gray-600 text-center">{logo.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
