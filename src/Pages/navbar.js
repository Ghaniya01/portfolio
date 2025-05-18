import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar = ({ buttons, text2 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const id = sectionId.toLowerCase().replace(/\s+/g, '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (index, label) => {
    setActiveIndex(index);
    setMenuOpen(false);
    scrollToSection(label);
  };

  const handleCTA = () => {
    setMenuOpen(false);
    scrollToSection('contact');
  };

  const navBtnClass = 'px-5 py-2 rounded-full text-sm font-medium transition active:scale-95';
  const ctaBtnClass = 'px-5 py-2 rounded-full text-sm font-medium border border-brown transition active:scale-95';

  return (
    <div className="fixed top-0 left-0 w-full bg-navbarbg text-navy px-4 py-4 z-50 font-darker shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Logo */}
        <div className="text-xl font-bold text-navy">TWG</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4">
          {buttons.map((label, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavClick(index, label)}
                className={`${navBtnClass} ${
                  activeIndex === index
                    ? 'bg-navy text-white'
                    : 'bg-off text-navy hover:bg-navy hover:text-white'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={handleCTA}
          className={`${ctaBtnClass} hidden md:block text-navy hover:bg-navy hover:text-white`}
        >
          {text2}
        </button>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 space-y-3">
          {buttons.map((label, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavClick(index, label)}
                className={`${navBtnClass} ${
                  activeIndex === index
                    ? 'bg-navy text-white'
                    : 'bg-off text-navy hover:bg-navy hover:text-white'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={handleCTA}
              className={`${ctaBtnClass} text-navy hover:bg-navy hover:text-white`}
            >
              {text2}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
