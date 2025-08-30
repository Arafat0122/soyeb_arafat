

import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { CarouselSize } from "./CarouselSize";

import { motion } from "framer-motion";
import { Carousel } from "@/components/ui/carousel";
import { SkillCard } from "./SkillCard";

const Skills = () => {
  const [carouselApi, setCarouselApi] = useState(null);

  const handlePrev = () => {
    if (carouselApi) carouselApi.scrollPrev();
  };

  const handleNext = () => {
    if (carouselApi) carouselApi.scrollNext();
  };

  return (
    <section className="z-20 flex  my-10 md:my-20 lg:my-[120px] flex-col justify-center text-white bg-gray-950">
      <div className="flex flex-col justify-center w-full px-4 py-10 mx-auto max-w-7xl lg:py-24">

        {/* Top Tag */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", }}
          className="flex items-center text-white"
        >
          <ArrowDown className="w-8 h-8 p-2 text-xl border border-white rounded-full" />
          <p className="px-4 py-1 border border-black rounded-full dark:border-white">
            My Skill 
          </p>
        </motion.div> */}

        {/* Heading + Description + Buttons */}
        <div className="flex flex-col justify-between gap-6 py-12 md:flex-row md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", }}
            className="text-[22px] font-bold lg:leading-[86px] md:text-5xl lg:text-[58px] md:leading-[70px]"
          >
            <h1>
              My Extensive <br /> List of Skills
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", }}
            className="space-y-4 text-base text-left md:text-lg md:text-end"
          >
            <p>
              Building the world’s best marketing. Your <br className="hidden md:block" />
              trusted partner for strategy, design, and dev.
            </p>
            {/* <hr className="border-white" /> */}
            {/* <div className="flex items-center justify-start gap-3 md:justify-end">
              <button
                onClick={handlePrev}
                className="w-10 h-10 transition-all duration-300 border border-white rounded-full hover:bg-white hover:text-black"
              >
                <ArrowLeft className="w-5 h-5 mx-auto" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 transition-all duration-300 border border-white rounded-full hover:bg-white hover:text-black"
              >
                <ArrowRight className="w-5 h-5 mx-auto" />
              </button>
            </div> */}
          </motion.div>
        </div>

        {/* Carousel */}
        <SkillCard/>
      </div>
    </section>
  );
};

export default Skills;
