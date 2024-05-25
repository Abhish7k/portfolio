import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-[20%] pt-10">
      <div className="dark:text-white text-center flex-col items-center -rotate-[2deg]">
        <div className="flex gap-2 items-center ">
          <span className="text-2xl font-bold">Abhishek</span>
          🧑🏻‍💻
        </div>
        <div className="h-1 w-full bg-green-500 rounded-full"></div>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
