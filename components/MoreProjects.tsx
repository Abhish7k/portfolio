"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { otherProjectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function MoreProjects() {
  return (
    <div className="mx-[5%] grid lg:grid-cols-2 mt-10 gap-x-5 gap-y-8">
      {otherProjectsData.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            },
          }}
          whileHover={{
            y: -6,
            transition: { duration: 0.1, delay: 0 },
          }}
          transition={{
            duration: 0.1,
            delay: 0,
          }}
          viewport={{ once: true }}
          className="group relative p-5 bg-white dark:bg-gray-900 border border-zinc-200 dark:border-zinc-800 rounded-xl transition-colors duration-300 flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex items-start justify-between mb-2">
              <Link href={project.link || "#"} target="_blank" className="block group/title">
                <h3 className="text-xl font-semibold relative w-fit after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 dark:after:bg-neutral-100 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover/title:after:origin-bottom-left group-hover/title:after:scale-x-100">
                  {project.title ? project.title : ""}
                </h3>
              </Link>

              <Link
                href={project.link || "#"}
                target="_blank"
                className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 mt-1 group-hover:translate-y-[-3px] group-hover:translate-x-[3px] transition-all duration-300 ease-in-out"
                aria-label={`View ${project.title || "Project"} on GitHub`}
              >
                <ArrowUpRight />
              </Link>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-full border border-black/10 dark:border-white/10"
                style={{ backgroundColor: project.languageColor || "#ccc" }}
              />

              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{project.language}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
