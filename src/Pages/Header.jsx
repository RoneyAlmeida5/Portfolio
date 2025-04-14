import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [activeButton, setActiveButton] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  const handleButtonClick = (sectionId) => {
    setActiveButton(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
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
    <header className="bg-gray-900 text-white p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center fixed top-0 w-full z-10">
      <div className="font-bold text-gray-400 text-xl mb-4 sm:mb-0 text-center sm:text-left">
        Portfolio
      </div>
      <nav className="w-full sm:w-auto">
        <ul className="flex flex-wrap justify-center sm:justify-end gap-4 mr-5">
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
    </header>
  );
}

export default Header;
