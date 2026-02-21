import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="mx-[5%] grid lg:grid-cols-2 mt-20 gap-x-10 gap-y-10">
      {projectsData.map((proj, idx) => (
        <div
          key={idx}
          className="border p-4 max-w-lg bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ease-in-out flex flex-col"
        >
          {/* image container with fixed aspect ratio */}
          <Link
            href={proj.liveLink}
            target="_blank"
            className="relative w-full aspect-video overflow-hidden rounded-lg border"
          >
            <Image
              src={proj.image}
              alt={proj.title}
              fill
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              draggable={false}
            />
          </Link>

          {/* proj details */}
          <div className="mt-6 flex flex-col flex-grow">
            {/* title */}
            <div>
              <Link
                href={proj.liveLink}
                target="_blank"
                className="text-xl md:text-2xl font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 dark:after:bg-neutral-100 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {proj.title}
              </Link>
            </div>

            <p className="mt-3 text-zinc-600 dark:text-zinc-400 line-clamp-2">{proj.description}</p>

            {/* tech stack */}
            <div className="mt-6">
              <ul className="flex flex-wrap gap-2">
                {proj.techStack.map((tag, idx) => (
                  <li
                    className="px-3 py-1 text-xs md:text-sm font-medium rounded-md bg-[#F5F4F4] dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                    key={idx}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {/* links */}
            <div className="mt-auto pt-8 flex gap-3">
              <Link
                className="bg-zinc-100 dark:bg-zinc-800 p-2.5 text-zinc-700 dark:text-zinc-300 flex items-center gap-2 text-xl rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
                href={proj.liveLink}
                target="_blank"
              >
                <FaExternalLinkSquareAlt />
              </Link>

              <Link
                className="bg-zinc-100 dark:bg-zinc-800 p-2.5 text-zinc-700 dark:text-zinc-300 flex items-center gap-2 text-xl rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
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
