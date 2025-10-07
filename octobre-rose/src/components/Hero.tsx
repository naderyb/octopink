import React from "react";
import DonationProgress from "./DonationProgress";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleCTAClick = () => {
    onNavigate("donations");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-20 pink-ribbon-bg relative overflow-hidden"
    >

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Headline */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="text-pink-600">Octobre Rose</span>
            <br />
            <span className="text-4xl md:text-5xl font-light">
              Ensemble contre le cancer du sein
            </span>
          </h1>

          {/* Slogan */}
          <div className="mt-8 mb-8">
            <div className="inline-block animated-gradient text-white px-6 py-3 rounded-full pulse-animation">
              <p className="text-lg font-medium">
                <span className="font-bold">OctoPink:</span> because awareness saves lives
              </p>
            </div>
          </div>
        </div>

        {/* Donation Progress Component */}
        <div className="mb-12">
          <DonationProgress />
        </div>

        {/* Call to Action */}
        <div className="space-y-6">
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-full hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300 hover-lift"
            aria-label="Aller à la section donations pour soutenir la cause"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Soutenir la cause
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
