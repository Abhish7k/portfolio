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
      <div className="mt-10">
        <div className="flex text-2xl font-semibold">
          <h1 className="">Hey, I&apos;m Abhishek</h1>
          <span className="cursor-pointer hover:animate-wave">👋</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
