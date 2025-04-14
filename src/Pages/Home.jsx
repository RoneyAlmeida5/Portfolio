import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import perfil from "../assets/perfil.png";

function Home() {
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
    <div className="bg-gray-800 text-white flex flex-col md:grid md:grid-cols-2 min-h-screen">
      {/* PAGE LEFT */}
      <div className="bg-gray-900 text-white p-6 flex items-center justify-center">
        <div
          className="max-w-md text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Hello, I am Roney Almeida
          </h1>

          <p className="mb-4 text-sm text-gray-400 sm:text-base md:text-lg">
            A Full Stack developer at the beginning of my career who is
            passionate about technology. I am looking for my first opportunity
            in the market to put into practice the skills I have been
            developing.
          </p>

          <div className="flex justify-center md:justify-start space-x-6 mb-4">
            <a
              href="https://github.com/RoneyAlmeida5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-xl"
            >
              <span class="[&>svg]:h-5 [&>svg]:w-5 p-2 border border-gray-700 rounded-full inline-flex items-center justify-center transition-colors duration-500 hover:bg-white hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/roney-almeida-13a0381b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="text-xl"
            >
              <span class="[&>svg]:h-5 [&>svg]:w-5 p-2 border border-gray-700 rounded-full inline-flex items-center justify-center transition-colors duration-500 hover:bg-white hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
          </div>
          <button
            className={`cursor-pointer bg-slate-600 bg-neutral-950 text-neutral-400 border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group${
              activeSection === "contact" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("contact")}
          >
            <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Contact
          </button>
        </div>
      </div>
      {/*PAGE RIGHT*/}
      <div className="flex items-center justify-center bg-gradient-to-r from-gray-900 via-slate-600 to-gray-900 h-full w-full">
        <div class="absolute w-1/2 bg-gray-600 clip-angled h-full"></div>
        <img
          data-aos="fade-left"
          src={perfil}
          className="max-w-xs md:max-w-sm lg:max-w-md w-full mt-10 mr-40 rounded-full object-cover absolute"
        />
      </div>
    </div>
  );
}

export default Home;
