"use client";

import Projects from "./Projects";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <motion.div
      className="mt-60 mb-40 mx-[10%] md:mx-[10%] lg:mx-[20%]"
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "easIn", duration: 0.5, delay: 0.6 }}
    >
      {/* section title */}
      <div className="text-center flex-col items-center">
        <div>
          <div className="flex gap-2 items-center">
            <span className="text-2xl md:text-4xl font-bold">Projects</span>
            <span className="text-xl md:text-3xl">🛠️</span>
          </div>
          <div className="h-1.5 w-24 md:w-48 -ml-1 bg-indigo-400 rounded-full"></div>
        </div>
      </div>

      {/* projects */}
      <Projects />
    </motion.div>
  );
}
