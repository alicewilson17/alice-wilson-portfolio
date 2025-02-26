import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import ContactMe from "../ContactMe";

export default function Home() {
    return (
        <>
        <HeroSection/>
        {/* <AboutMe/>
        <MySkills/> */}
        <MyPortfolio/>
        <ContactMe/>
        </>
    )
}