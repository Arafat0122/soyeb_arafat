import Buttons from "@/common/Buttons/Buttons";
import Project from "../Home/Project/Project";

const Works = () => {
  return (
    <>
      <div className="pt-[80px]">
        <div className="bg-gray-950 rounded-b-[60px]">
          <div className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-16 mx-auto max-w-7xl md:flex-row md:px-8">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                My Awesome Projects
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg">
                Explore my portfolio projects built with modern technologies
                like React, Next.js, Node.js, and MongoDB. Each project reflects
                creativity, problem-solving, and clean UI/UX.
              </p>
              <div className="mt-6">
                <Buttons btnText="View Projects" />
              </div>
            </div>

            
            <div className="flex justify-center md:w-1/2">
              <img
                src="/project-banner02.png"
                alt="Project Banner"
                className="h-auto max-h-[400px] max-w-full shadow-lg rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-[100px]">
          <Project />
        </div>
      </div>
    </>
  );
};

export default Works;
