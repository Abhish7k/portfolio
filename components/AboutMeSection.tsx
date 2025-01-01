"use client";

import React from "react";
import { motion } from "framer-motion";
import { TimeLine, TimeLineItem } from "./Timeline";

export const AboutMeSection = () => {
  return (
    <motion.div
      className="mx-[10%] md:mx-[10%] lg:mx-[15%] xl:mx-[20%] my-40 flex flex-col justify-center"
      viewport={{ once: true, amount: 0.2 }}
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
            <span className="text-2xl md:text-4xl font-bold transition-all">
              About Me
            </span>
            <span className="text-xl md:text-3xl hover:scale-110 transition-all">
              {/* 🧑🏻‍💻 */}
              📜
            </span>
          </div>
          <div className="h-1.5 w-36 md:w-56 -ml-1 bg-indigo-400 rounded-full transition-all"></div>
        </div>
      </div>

      <div className="mt-20 px-5 md:px-10 text-lg sm:text-xl">
        <div>
          I&apos;m Abhishek Bhosale, a passionate{" "}
          <span className="font-medium">Full Stack Developer</span> skilled in{" "}
          <span className="font-medium">
            JavaScript, React.js, and Next.js.
          </span>{" "}
          I&apos;m pursuing my{" "}
          <span className="font-medium">
            Bachelor&apos;s in Computer Science
          </span>{" "}
          from Pune University. My proficiency spans frontend, backend, and
          full-stack development, complemented by hands-on experience through
          internships and freelance projects
        </div>

        <div className="px-2">
          <TimeLine>
            <TimeLineItem active>
              <TimeLineItem.Title>
                <span className="font-medium transition-all">
                  Fullstack Developer Intern at Sanity Gaming
                </span>{" "}
                • <span className="">June 2024 - September 2024</span>
              </TimeLineItem.Title>

              <TimeLineItem.Description>
                Played a key role in developing the MVP, including designing and
                building the entire landing page, and crafting a seamless
                onboarding experience. I collaborated closely with the team to
                deliver a seamless and scalable product experience.
              </TimeLineItem.Description>
            </TimeLineItem>

            <TimeLineItem last>
              <TimeLineItem.Title>
                <span className="font-medium transition-all">
                  Bachelors in Computer Science
                </span>{" "}
                • <span className="">2024</span>
              </TimeLineItem.Title>
              <TimeLineItem.Description>
                Savitribai Phule Pune University
              </TimeLineItem.Description>
            </TimeLineItem>
          </TimeLine>
        </div>
      </div>
    </motion.div>
  );
};
