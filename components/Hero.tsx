import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-24">
      <div className="">
        <Image
          src="/main.jpeg"
          alt=""
          height={250}
          width={250}
          id="profile-image"
          className="border-2 border-green-400"
        />
      </div>
      <div className="mt-10 flex-col space-y-5 items-center justify-center text-center">
        <h1 className="flex items-center justify-center text-3xl font-bold text-center">
          Hey, I&apos;m Abhishek
          <span className="cursor-pointer ml-1 hover:animate-wave">👋</span>
        </h1>
        <div className="text-lg max-w-xl">
          I&apos;m a passionate Full Stack Developer transforming caffeine into
          awesome web applications.
        </div>
      </div>
    </div>
  );
};

export default Hero;
