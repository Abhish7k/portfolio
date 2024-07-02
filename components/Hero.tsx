"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { HiDownload } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col items-center mt-24 h-[80vh]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
      }}
    >
      <div className="">
        <Image
          src="/main.jpeg"
          alt=""
          height={250}
          width={250}
          id="profile-image"
          className="border-2 border-green-400 w-52 md:w-full"
        />
      </div>
      <div className="mt-14 px-4 flex-col space-y-5 items-center justify-center text-center">
        <h1 className="flex items-center justify-center text-2xl md:text-4xl font-bold text-center transition-all">
          Hey, I&apos;m Abhishek
          <span className="cursor-pointer ml-1 hover:animate-wave">👋</span>
        </h1>
        <div className="text-lg md:text-xl max-w-2xl transition-all">
          I&apos;m a Passionate Full Stack Developer based in Pune, India 📍
        </div>
      </div>
      <div className="mt-10 flex items-center gap-2">
        <Link
          href="https://dub.sh/abhish7k-resume"
          target="_blank"
          className=""
        >
          <Button className="px-6 rounded-full gap-2 text-lg" variant="outline">
            Resume
            <HiDownload />
          </Button>
        </Link>
        <Button className="px-6 rounded-full text-lg" variant="outline">
          <a
            href="mailto:abhishekbhosale.dev@gmail.com"
            className="flex items-center gap-2"
          >
            Contact me
            <FiArrowUpRight />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default Hero;
