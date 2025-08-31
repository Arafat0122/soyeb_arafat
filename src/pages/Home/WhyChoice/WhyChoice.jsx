import { Banknote, Sparkle } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Play } from "lucide-react";

const WhyChoice = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-10 md:py-20 lg:py-[120px]">
      <section className="relative flex items-center justify-center w-full px-4 py-2 md:py-8 bg-gray-950">
        <div className="absolute bg-gray-950 inset-0 linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]  " />


        <div className="relative z-10 mx-auto text-white max-w-7xl py-[40px] md:py-[80px]">
          <div className="flex justify-between flex-col pb-[40px] md:pb-[80px] text-left md:text-center max-w-2xl mx-auto space-y-6">
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold leading-tight lg:text-[58px] md:leading-[70px]">
              Why I am
              Right Choice
            </h1>
            <p className="space-y-4 text-base md:text-lg">
              I build responsive, scalable, and high-performance web applications using modern technologies like React, Node.js, and MongoDB. My focus is on creating intuitive user experiences, clean code, and solutions that help businesses grow online.
            </p>
          </div>
          <div className="relative flex justify-center">

            <img
              src="/ModernDeveloperWorkstation.png"
              alt=""
              className="max-h-[450px] w-[820px] bg-white/20 backdrop-blur-md p-3 rounded-xl"
            />


            <button
              onClick={() => setIsOpen(true)}
              className="absolute flex items-center justify-center gap-[10px]  transition -translate-x-1/2  bottom-[10%] left-1/2 theme_btn !bg-blue-600 !text-white w-[70%] md:w-auto"
            >
              <span>Inside our process</span>{" "}
              <Play className="w-8 h-8 p-2 text-blue-600 bg-white rounded-full" />
            </button>


            <div className="absolute -right-[14%]  flex-col items-center gap-2 px-4 py-2 shadow-lg top-[20%] bg-white/20 backdrop-blur-md rounded-xl hidden lg:flex">
              {" "}
              <Banknote className=" h-[50px] w-[100px] text-blue-500" />{" "}
              <h6 className="text-2xl font-bold">Your Success First</h6>
              <p>Growing your business with focus.</p>{" "}
            </div>

            {/* Glass Card 2 */}
            <div className="absolute items-center gap-2 px-4 py-2 shadow-lg bottom-10 -left-[14%] bg-white/20 backdrop-blur-md rounded-xl hidden lg:flex">
              {" "}
              <Sparkle className="w-6 h-6 text-blue-500" />{" "}
              <span className="font-semibold text-white">
                {" "}
                5+ Years of Experience{" "}
              </span>{" "}
            </div>


            <Dialog
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className="relative z-50"
            >
              <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <Dialog.Panel className="w-full max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg">

                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute text-xl font-bold text-black top-3 right-3"
                  >
                    ✕
                  </button>


                  <div className="w-full h-[400px]">
                    <iframe
                      className="w-full h-full"
                      src="https://youtu.be/TVWOuUtIMKw?si=nwi6g0sphNfqhgep"
                      title="Video"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          </div>

          <div className="max-w-[820px] mx-auto pt-[40px] md:pt-[80px] grid grid-cols-3 gap-6 md:gap-12 px-4">
            <div className="text-center">
              <h5 className="md:text-5xl text-[20px] font-bold">98%</h5>
              <p className="text-sm text-gray-400 md:pt-4 md:text-lg">Client Success</p>
            </div>
            <div className="text-center">
              <h5 className="md:text-5xl text-[20px] font-bold">200+</h5>
              <p className="text-sm text-gray-400 md:pt-4 md:text-lg">Projects Completed</p>
            </div>
            <div className="text-center">
              <h5 className="md:text-5xl text-[20px] font-bold">$250K+</h5>
              <p className="text-sm text-gray-400 md:pt-4 gray-400 md:text-lg">Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoice;
