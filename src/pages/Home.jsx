import SEO from "components/SEO";
import Marquee from "components/Marquee";
import CTASection from "components/CTASection";
import HomeHero from "components/home/HomeHero";
import CapabilitiesSection from "components/home/CapabilitiesSection";
import ChallengesSection from "components/home/ChallengesSection";
import { ApproachSection, ProcessSection, StrengthsSection, FeaturedInsightsSection } from "components/home/HomeSections";

const MARQUEE_ITEMS = [
    "E-commerce Services",
    "Web Development",
    "App Development",
    "Tele-calling",
    "Customer Support",
    "Digital Growth",
    "Analytics & Reporting",
];

const Home = () => (
    <>
        <SEO
            title="Shopee Global | E-commerce, Web, App & Tele-calling Services"
            description="Shopee Global provides e-commerce, web development, app development, tele-calling, digital growth, and customer-support services for businesses in India and worldwide."
            path="/"
        />
        <HomeHero />
        <Marquee items={MARQUEE_ITEMS} />
        <CapabilitiesSection />
        <ChallengesSection />
        <ApproachSection />
        <ProcessSection />
        <StrengthsSection />
        <FeaturedInsightsSection />
        <CTASection />
    </>
);

export default Home;
