import PersonalData from "../PersonalData/PersonalData";
import Banner from "./Banner/Banner";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PersonalData></PersonalData>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;