import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import InfoSection from "./components/InfoSection";
import DonationSection from "./components/DonationSection";
import Footer from "./components/Footer";
import {
  donationStages,
  focusAreasData,
  clubsInfo,
  didYouKnowFacts,
} from "./data/constants";

function App() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const navHeight = 64; // Account for fixed navbar (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white pink-ribbon-bg">
      <Navbar onNavigate={handleNavigate} />

      <main className="pt-16">
        <Hero onNavigate={handleNavigate} />

        <WhoWeAre clubs={clubsInfo} />

        <InfoSection
          focusAreasData={focusAreasData}
          donationStages={donationStages}
          didYouKnowFacts={didYouKnowFacts}
        />

        <DonationSection onNavigate={handleNavigate} />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
