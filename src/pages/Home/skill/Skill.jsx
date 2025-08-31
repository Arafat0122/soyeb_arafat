import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";

const Skills = () => {
  // const [carouselApi, setCarouselApi] = useState(null);

  // const handlePrev = () => {
  //   if (carouselApi) carouselApi.scrollPrev();
  // };

  // const handleNext = () => {
  //   if (carouselApi) carouselApi.scrollNext();
  // };

  return (
    <section className="z-20 flex  my-5 md:my-20 lg:mb-[120px] flex-col justify-center text-white bg-gray-950">
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
        <div className="flex flex-col justify-between gap-6 pb-12 md:flex-row md:items-start">
          <motion.div
            
            className="text-3xl font-bold lg:leading-[86px] md:text-5xl lg:text-[58px] md:leading-[70px]"
          >
            <h1>
              My Extensive  List of Skills
            </h1>
          </motion.div>

          <motion.div
            
            className="space-y-4 text-base text-left md:text-lg md:text-end"
          >
            <p>
              Building the world’s best marketing. Your <br className="hidden md:block" />
              trusted partner for strategy, design, and dev.
            </p>
           
          </motion.div>
        </div>

        {/* Carousel */}
        <SkillCard/>
      </div>
    </section>
  );
};

export default Skills;
