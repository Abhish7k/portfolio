"use client";

import Projects from "./Projects";
import { motion } from "framer-motion";
import MoreProjects from "./MoreProjects";

export default function ProjectsSection() {
  return (
    <motion.div
      className="mt-60 mb-40 mx-[10%] md:mx-[10%] lg:mx-[15%] xl:mx-[20%]"
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
            <span className="text-2xl md:text-4xl font-bold transition-all text-neutral-800 dark:text-neutral-100">
              Projects
            </span>

            <span className="text-xl md:text-3xl hover:scale-110 transition-all">🛠️</span>
          </div>

          <div className="h-1.5 w-36 md:w-48 bg-indigo-400 rounded-full transition-all"></div>
        </div>
      </div>

      {/* projects list */}
      <Projects />

      {/* more projects subheading */}
      <div className="mx-[5%] mt-32 mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200">Other Projects</h2>

        <div className="h-1 w-20 bg-indigo-400/50 rounded-full mt-2"></div>
      </div>

      <MoreProjects />
    </motion.div>
  );
}
