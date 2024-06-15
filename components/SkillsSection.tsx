import Skills from "./Skills";

export default function SkillsSection() {
  return (
    <div className="my-20 mx-[5%] md:mx-[10%] lg:mx-[20%]">
      {/* section title */}
      <div className="text-center flex-col items-center">
        <div>
          <div className="flex gap-2 items-center">
            <span className="text-2xl md:text-4xl font-bold">Skills</span>
            <span className="text-xl md:text-3xl">🛠️</span>
          </div>
          <div className="h-1 w-24 md:w-36 -ml-1 bg-indigo-400 rounded-full"></div>
        </div>
      </div>

      <div className="mt-20">
        <Skills />
      </div>
    </div>
  );
}
