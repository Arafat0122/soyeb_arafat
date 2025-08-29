import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "./Hero/Hero";

const Banner = () => {
 
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {" "}
      <section className="relative w-full px-4 py-8 md:px-0 bg-gray-950 pt-[100px]">
        <div className="absolute bg-gray-950 inset-0 linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]  " />

       
        <div className="relative z-10 text-white">
            <Hero/>
        </div>
      </section>
    </>
  );
};

export default Banner;
