import PersonalData from "../PersonalData/PersonalData";
import Banner from "./Banner/Banner";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";


const Home = () => {
    return (
        <div>
            <div className="space-y-10">
                <div>
                    <Banner></Banner>
                    <PersonalData></PersonalData>
                </div>
                <Skills></Skills>
                <Education></Education>
            </div>
        </div>
    );
};

export default Home;