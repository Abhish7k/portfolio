"use client";

import Skills from "./Skills";
import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <motion.div
      className="mt-20 mb-40 mx-[10%] md:mx-[10%] lg:mx-[20%]"
      viewport={{ once: false }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "easIn", duration: 0.5, delay: 0.2 }}
    >
      {/* section title */}
      <div className="text-center flex-col items-center">
        <div>
          <div className="flex gap-2 items-center">
            <span className="text-2xl md:text-4xl font-bold">Skills</span>
            <span className="text-xl md:text-3xl">🦾</span>
          </div>
          <div className="h-1.5 w-24 md:w-36 -ml-1 bg-indigo-400 rounded-full"></div>
        </div>
      </div>

      <div className="mt-20">
        <Skills />
      </div>
    </motion.div>
  );
}
