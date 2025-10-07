import React, { useState } from "react";

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", section: "hero" },
    { label: "Qui sommes nous?", section: "who-we-are" },
    { label: "C'est quoi Octobre Rose?", section: "info" },
    { label: "Pourquoi soutenir?", section: "donations" },
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  bg-white bg-opacity-20 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center lg:justify-between h-16">
          {/* Mobile Logo Container - Centered on small screens */}
          <div className="flex items-center space-x-6 lg:hidden">
            <img
              src="/nexus.png"
              alt="Nexus Club Logo"
              className="h-14 w-20 object-contain"
            />
            <img
              src="/ms_club.png"
              alt="Microsoft Student Club Logo"
              className="h-14 w-14 object-contain"
            />
          </div>

          {/* Desktop Left Logo - Nexus Club */}
          <div className="hidden lg:flex items-center space-x-2">
            <img
              src="/nexus.png"
              alt="Nexus Club Logo"
              className="h-14 w-120 object-contain"
            />
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex">
            <div className="bg-white rounded-full shadow-lg border border-pink-100 px-6 py-2">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => handleNavClick(item.section)}
                    className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-sm whitespace-nowrap"
                    aria-label={`Naviguer vers ${item.label}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Right Logo - MS Club */}
          <div className="hidden lg:flex items-center space-x-2">
            <img
              src="/ms_club.png"
              alt="Microsoft Student Club Logo"
              className="h-16 w-120 object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden absolute right-4 p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
            aria-label="Menu de navigation mobile"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="bg-white rounded-2xl shadow-lg border border-pink-100 mx-4 mb-4 p-4">
              <div className="space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => handleNavClick(item.section)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors duration-200 font-medium"
                    aria-label={`Naviguer vers ${item.label}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
