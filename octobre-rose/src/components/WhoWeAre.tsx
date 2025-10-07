import React from "react";
import type { ClubInfo } from "../types";

interface WhoWeAreProps {
  clubs: ClubInfo[];
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ clubs }) => {
  const NexusLogo = () => (
    <img
      src="/nexus.png"
      alt="nexus"
      className="w-16 h-16 md:w-20 md:h-20 object-contain"
    />
  );

  const MSLogo = () => (
    <img
      src="/ms_club.png"
      alt="MS"
      className="w-16 h-16 md:w-20 md:h-20 object-contain"
    />
  );

  return (
    <section id="who-we-are" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Qui sommes nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deux clubs étudiants unis par une même passion : créer un impact
            positif dans notre communauté
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Nexus Club */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 hover-lift group">
            <div className="flex flex-col items-center md:flex-row md:items-center mb-6">
              <div className="mb-4 md:mb-0 md:mr-6">
                <NexusLogo />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors text-center md:text-left">
                {clubs[0].name}
              </h3>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {clubs[0].description}
            </p>

            <div className="flex items-center space-x-4">
              <a
                href={clubs[0].website || "#"}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visiter le site web de Nexus Club"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Visiter notre site
              </a>
            </div>
          </div>

          {/* MS Club */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 hover-lift group">
            <div className="flex flex-col items-center md:flex-row md:items-center mb-6">
              <div className="mb-4 md:mb-0 md:mr-6">
                <MSLogo />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-center md:text-left">
                {clubs[1].name}
              </h3>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {clubs[1].description}
            </p>
          </div>
        </div>

        {/* Collaboration Message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ensemble pour Octobre Rose
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Cette initiative conjointe démontre notre engagement commun envers
              la sensibilisation au cancer du sein. En unissant nos forces, nous
              amplifions notre impact et créons une communauté plus forte et
              plus solidaire.
            </p>
            <div className="mt-6 flex justify-center items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-sm font-medium">Collaboration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-sm font-medium">Innovation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-sm font-medium">Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
