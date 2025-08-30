import SlideInView from "./Abouttext/AboutText";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
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
                    <SlideInView />
                    <Service />
                    <Skills />
                    <Project />
                    <WhyChoice />
                    <ClientSay />
                    {/* <Blogs /> */}
                    <GetStart />
                </div>
            </div>
        </div>
    );
};

export default Home;