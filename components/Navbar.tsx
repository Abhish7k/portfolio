import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

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

  return (
    <div className="flex justify-between mx-[20%] pt-10">
      <div className="dark:text-white text-center flex-col items-center -rotate-[2deg]">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <span className="text-2xl font-bold">Abhishek</span>
            🧑🏻‍💻
          </div>
          <div className="h-1 w-full bg-indigo-400 rounded-full"></div>
        </Link>
      </div>
      <div className="flex items-center gap-4">
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
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
