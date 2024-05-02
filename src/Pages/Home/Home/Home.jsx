import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import EarlyChildhoodEducations from "../Courses/EarlyChildhoodEducations/EarlyChildhoodEducations";
import SoftSkills from "../Courses/SoftSkills/SoftSkills";
import TechnicalSkills from "../Courses/TechnicalSkills/TechnicalSkills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <SoftSkills></SoftSkills>
            <TechnicalSkills></TechnicalSkills>
            <EarlyChildhoodEducations></EarlyChildhoodEducations>
        </div>
    );
};

export default Home;