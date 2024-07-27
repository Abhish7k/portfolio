"use client";

import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { useEffect, useState } from "react";

const Navbar = () => {
  const socials = [
    {
      label: "LinkedIn",
      icon: SiLinkedin,
      link: "https://www.linkedin.com/in/abhish7k",
    },
    {
      label: "GitHub",
      icon: SiGithub,
      link: "https://github.com/Abhish7k",
    },
    {
      label: "Twitter",
      icon: SiTwitter,
      link: "https://twitter.com/abhizh7k",
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        sticky top-0 z-50 px-[5%] md:px-[5%] lg:px-[16%] py-4 flex justify-between transition-all duration-500 
        ${
          scrolled
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            : ""
        }
      `}
    >
      <div className="dark:text-white text-center flex-col items-center">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <span className="text-2xl md:text-3xl font-bold transition-all">
              Abhishek
            </span>
            <span className="text-xl md:text-2xl">🧑🏻‍💻</span>
          </div>
          <div className="h-1 w-full bg-indigo-400 rounded-full"></div>
        </Link>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex gap-2 md:gap-4 transition-all">
          {socials.map((social) => {
            return (
              <Link
                key={social.label}
                href={social.link}
                aria-label={social.label}
                className=""
                target="_blank"
              >
                <social.icon className="w-5 h-5 hover:scale-125 transition-all" />
              </Link>
            );
          })}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
