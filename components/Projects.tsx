import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="grid lg:grid-cols-2 mt-20 gap-10">
      {projectsData.map((proj, idx) => (
        <div
          key={idx}
          className="border p-4 max-w-lg bg-white dark:bg-gray-900 rounded-lg"
        >
          {/* image */}
          <Link href={proj.liveLink} target="_blank">
            <Image
              src={proj.image}
              alt="project"
              height={500}
              width={500}
              className="rounded-lg"
            />
          </Link>

          {/* proj details */}
          <div className="mt-4">
            {/* title */}
            <div className="flex gap-2 items-center">
              <Link
                href={proj.liveLink}
                target="_blank"
                className="text-xl font-semibold
              relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 dark:after:bg-neutral-100 after:transition-transform after:duration-300 after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {proj.title}
              </Link>
            </div>
            <h4 className="mt-2">{proj.description}</h4>

            {/* tech stack */}
            <div className="mt-5">
              <ul className="flex flex-wrap gap-2 sm:mt-auto">
                {proj.techStack.map((tag, idx) => (
                  <li
                    className="px-3 py-1 text-sm rounded-md bg-[#F5F4F4] dark:bg-gray-700"
                    key={idx}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {/* links */}
            <div className="mt-10 flex">
              <Link
                className="bg-white p-2 m-1 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.1] hover:scale-[1.1] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href={proj.liveLink}
                target="_blank"
              >
                <FaExternalLinkSquareAlt />
              </Link>
              <Link
                className="bg-white p-2 m-1 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.1] hover:scale-[1.1] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href={proj.githubLink}
                target="_blank"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
