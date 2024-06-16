import { skills } from "@/lib/skill";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Image from "next/image";

export default function Skills() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-5 my-8">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-2xl">{skill.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center flex-wrap gap-3">
              {skill.stacks.map((stack, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        key={index}
                        src={stack.imgPath}
                        alt={stack.toolTipContent}
                        width={48}
                        height={48}
                        className="rounded"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{stack.toolTipContent}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
