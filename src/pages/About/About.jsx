import AboutBanner from "./AboutBanner/AboutBanner";
import StartSelling from "./StartSelling/StartSelling";
import Skills from "../Home/skill/Skill";
import Faq from "../Home/Faq/Faq";
import GetStart from "../Home/getStart/GetStart";
import MotionWrapper from "@/common/MotionWrapper/MotionWrapper";

const About = () => {
  return (
    <div>
      <MotionWrapper direction="up" delay={0.1}>
        <AboutBanner />
      </MotionWrapper>
      <MotionWrapper direction="up" delay={0.1}>
        {" "}
        <StartSelling />
      </MotionWrapper>
      <MotionWrapper direction="up" delay={0.1}>
        <Skills />
      </MotionWrapper>
      <MotionWrapper direction="up" delay={0.1}>
        <Faq />
      </MotionWrapper>
      <MotionWrapper direction="up" delay={0.1}>
        <GetStart />
      </MotionWrapper>
    </div>
  );
};

export default About;
