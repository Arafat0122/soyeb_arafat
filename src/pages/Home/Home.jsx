import PersonalData from "../PersonalData/PersonalData";
import SlideInView from "./Abouttext/AboutText";
import AboutText from "./Abouttext/AboutText";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
import ClientSay from "./ClientSay/ClientSay";
import CompanyLogo from "./CompnayLogo/CompnayLogo";
import Education from "./Education/Education";
import Faq from "./Faq/Faq";
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
                    <Banner></Banner>
                    
                    <SlideInView/>
                    
                    <Service/>
                    <Skills/>
                    <Project/>
                    <WhyChoice/>
                    <ClientSay/>
                    <Blogs/>
                    {/* <Faq/> */}
                    <GetStart/>
                    {/* <PersonalData></PersonalData> */}
                </div>
                {/* <Skills></Skills>
                <Education></Education> */}
            </div>
        </div>
    );
};

export default Home;