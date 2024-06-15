import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { HiDownload } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-24 h-[80vh]">
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
        <Link href="/resume.pdf" target="_blank" className="">
          <Button className="px-6 rounded-full gap-2 text-lg" variant="outline">
            Resume
            <HiDownload />
          </Button>
        </Link>
        <Link href="mailto:abhishekbhosale.dev@gmail.com">
          <Button className="px-6 rounded-full text-lg gap-2" variant="outline">
            Contact me
            <FiArrowUpRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
