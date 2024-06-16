export default function ProjectsSection() {
  return (
    <div className="mt-60 mb-60 mx-[5%] md:mx-[10%] lg:mx-[20%]">
      {/* section title */}
      <div className="text-center flex-col items-center">
        <div>
          <div className="flex gap-2 items-center">
            <span className="text-2xl md:text-4xl font-bold">Projects</span>
            <span className="text-xl md:text-3xl">🛠️</span>
          </div>
          <div className="h-1.5 w-24 md:w-48 -ml-1 bg-indigo-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
