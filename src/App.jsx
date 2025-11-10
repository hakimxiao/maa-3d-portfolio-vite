import LogoSection from "./sections/LogoSection.jsx";
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import FeatureCard from "./sections/FeatureCard.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";

const App = () => {
    return (
        <>
            <NavBar/>
            <HeroSection/>
            <ShowcaseSection/>
            <LogoSection/>
            <FeatureCard/>
            <ExperienceSection />
        </>
    );
};
export default App;
