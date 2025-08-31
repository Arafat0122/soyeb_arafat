import MotionWrapper from "@/common/MotionWrapper/MotionWrapper";
import SlideInView from "./Abouttext/AboutText";
import Banner from "./Banner/Banner";
import ClientSay from "./ClientSay/ClientSay";
import GetStart from "./getStart/GetStart";
import Project from "./Project/Project";
import Service from "./service/Service";
import Skills from "./skill/Skill";
import WhyChoice from "./WhyChoice/WhyChoice";

const Home = () => {
  return (
    <div>
      <div className="">
        <div>
          <Banner />
          <MotionWrapper direction="up">
            <SlideInView />
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.1}>
            <Service />
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.1}>
            <Skills />
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.1}>
            <Project limit={4} />
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.1}>
            <WhyChoice />
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.1}>
            <ClientSay />
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.1}>
            <GetStart />
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
};

export default Home;
