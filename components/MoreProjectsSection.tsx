"use client";

import React from "react";
import { motion } from "framer-motion";
import MoreProjects from "./MoreProjects";

export default function MoreProjectsSection() {
  return (
    <motion.div
      className="mx-[10%] md:mx-[10%] lg:mx-[15%] xl:mx-[20%] my-40"
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.4,
        delay: 0.6,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {/* section title */}
      <div className="text-center flex-col items-center">
        <div>
          <div className="flex gap-2 items-center">
            <span className="text-2xl md:text-4xl font-bold transition-all">More Projects</span>

            <span className="text-xl md:text-3xl hover:scale-110 transition-all">🚀</span>
          </div>

          <div className="h-1.5 w-48 md:w-64 bg-indigo-400 rounded-full transition-all"></div>
        </div>
      </div>

      <MoreProjects />
    </motion.div>
  );
}
