"use client";
import { motion } from "framer-motion";

const colors = [
  { name: "Dropbox Blue", hex: "#0061FF" },
  { name: "Sky Blue", hex: "#00A4FF" },
  { name: "Ice Blue", hex: "#E6F0FF" },
  { name: "Black", hex: "#000000" },
  { name: "Gray 90", hex: "#1E1E1E" },
  { name: "White", hex: "#FFFFFF" },
];

export const ColorSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {colors.map((color) => (
            <motion.div
              key={color.hex}
              whileHover={{ y: -5 }}
              className="rounded-lg p-4 text-center"
              style={{ backgroundColor: color.hex }}
            >
              <p
                className={`font-medium ${
                  color.hex === "#FFFFFF" ? "text-black" : "text-white"
                }`}
              >
                {color.name}
              </p>
              <p
                className={`text-sm ${
                  color.hex === "#FFFFFF" ? "text-black" : "text-white"
                }`}
              >
                {color.hex}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
