import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [activeButton, setActiveButton] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleButtonClick = (sectionId) => {
    setActiveButton(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // pra detectar já no carregamento
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-gray-900 text-white p-4 fixed top-0 w-full z-10">
      <div className="sm:flex sm:justify-between sm:items-center">
        <div className="font-bold text-gray-400 text-xl mb-4 sm:mb-0 flex items-center text-center sm:text-left">
          Portfolio
        </div>
        <button
          onClick={toggleMobileMenu}
          className="sm:hidden text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } sm:block w-full sm:w-auto mt-4 sm:mt-0`}
          id="mobile-menu"
        >
          <ul className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4 mr-5">
            <li>
              <button
                className={`cursor-pointer hover:text-slate-300 ${
                  activeSection === "home" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`cursor-pointer hover:text-gray-300 ${
                  activeSection === "about" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`cursor-pointer hover:text-gray-300 ${
                  activeSection === "services" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("services")}
              >
                Services
              </button>
            </li>
            <li>
              <button
                className={`cursor-pointer hover:text-gray-300 ${
                  activeSection === "port" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("port")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={`cursor-pointer hover:text-gray-300 ${
                  activeSection === "contact" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
