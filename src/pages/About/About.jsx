import AboutBanner from './AboutBanner/AboutBanner';
import StartSelling from './StartSelling/StartSelling';
import Skills from '../Home/skill/Skill';
import Faq from '../Home/Faq/Faq';
import GetStart from '../Home/getStart/GetStart';

const About = () => {
    return (
        <div>
            <AboutBanner />
            <StartSelling />
            <Skills />
            <Faq />
            <GetStart />
        </div>
    );
};

export default About;