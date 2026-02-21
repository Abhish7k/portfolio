import { skills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export default function Skills() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-6 my-8">
        {skills.map((category, index) => (
          <Card
            key={index}
            className="border-gray-100 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/30 backdrop-blur-sm shadow-sm"
          >
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                {category.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex items-center flex-wrap gap-3 md:gap-4">
              {category.stacks.map((stack, stackIndex) => (
                <div
                  key={stackIndex}
                  className="flex items-center gap-3 px-4 py-2 border border-gray-100 dark:border-zinc-800 rounded-full bg-white dark:bg-zinc-900/50 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-900 transition-all duration-300 group cursor-default active:scale-95"
                >
                  <div className="relative w-5 h-5 md:w-6 md:h-6">
                    <Image
                      src={stack.imgPath}
                      alt={stack.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <span className="text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300">{stack.name}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
