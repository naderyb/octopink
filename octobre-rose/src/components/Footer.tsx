import React from "react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Accueil", section: "hero" },
    { label: "À propos", section: "who-we-are" },
    { label: "Octobre Rose", section: "info" },
    { label: "Soutenir", section: "donations" },
  ];

  const socialLinks = [
    // Nexus Club Social Media
    {
      name: "Nexus Instagram",
      href: "https://instagram.com/nexus.club_",
      club: "Nexus",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      ),
    },
    {
      name: "Nexus TikTok",
      href: "nexus.club_",
      club: "Nexus",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: "Nexus LinkedIn",
      href: "https://www.linkedin.com/in/nexus-club-692baa334/",
      club: "Nexus",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    // MS Club Social Media
    {
      name: "MS Club Instagram",
      href: "https://www.instagram.com/msclub.insag",
      club: "MS Club",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="py-8 px-4 bg-gradient-to-t from-pink-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100 p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Club Logos */}
            <div className="md:col-span-1">
              <div className="flex flex-col space-y-4">
                {/* Nexus Club */}
                <div className="flex items-center space-x-3">
                  <img
                    src="/nexus.png"
                    alt="Nexus Club Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      Nexus Club
                    </h3>
                  </div>
                </div>

                {/* MS Club */}
                <div className="flex items-center space-x-3">
                  <img
                    src="/ms_club.png"
                    alt="MS Club Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">MS Club</h3>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mt-4">
                Une initiative conjointe pour sensibiliser et soutenir la lutte
                contre le cancer du sein.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-gray-800 mb-4">
                Navigation rapide
              </h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.section}>
                    <button
                      onClick={() => onNavigate(link.section)}
                      className="text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 text-left"
                      aria-label={`Naviguer vers ${link.label}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact and Social */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-gray-800 mb-4">
                Nous contacter
              </h4>
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>nexusclub@insag.edu.dz</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>msclub@insag.edu.dz</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h5 className="font-medium text-gray-700 mb-3 text-sm">
                  Réseaux sociaux
                </h5>
                <div className="space-y-3">
                  {/* Nexus Club Social Media */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Nexus Club</p>
                    <div className="flex space-x-3">
                      {socialLinks
                        .filter((link) => link.club === "Nexus")
                        .map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                            aria-label={item.name}
                          >
                            {item.icon}
                          </a>
                        ))}
                    </div>
                  </div>

                  {/* MS Club Social Media */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2">MS Club</p>
                    <div className="flex space-x-3">
                      {socialLinks
                        .filter((link) => link.club === "MS Club")
                        .map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                            aria-label={item.name}
                          >
                            {item.icon}
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-pink-100 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-600">
                © {currentYear} nexus club & ms club. Tous droits réservés.
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span>Développé par Nexus Club</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Fait avec</span>
                  <svg
                    className="w-4 h-4 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>pour la bonne cause</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
