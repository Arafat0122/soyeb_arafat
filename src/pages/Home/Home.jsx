import PersonalData from "../PersonalData/PersonalData";
import Banner from "./Banner/Banner";
import Skills from "./Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PersonalData></PersonalData>
            <Skills></Skills>
        </div>
    );
};

export default Home;