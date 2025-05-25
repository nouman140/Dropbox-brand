"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Changed from default export to named export
export const Header = () => {
  const navItems = [
    { name: "Colors", id: "colors" },
    { name: "Typography", id: "typography" },
    { name: "Logos", id: "logos" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-white-600">
            dropbox
          </Link>
        </motion.div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={`#${item.id}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
