"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  const footerLinks = [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Legal", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">dropbox</h2>
            <p className="text-gray-400 mt-2">Brand Guidelines</p>
          </div>

          <div className="flex space-x-6">
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          <p>© {new Date().getFullYear()} Dropbox, Inc. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
