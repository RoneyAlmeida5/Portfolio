import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import perfil from "../assets/perfil.png";

function About() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row items-center justify-center px-4 md:px-8">
      <div
        className="relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0 md:mr-8"
        data-aos="zoom-in"
      >
        <div
          className="absolute inset-0 bg-slate-600 triangle-about rounded-lg"
          data-aos="zoom-in"
        />
        <img
          src={perfil}
          alt="Perfil"
          className="absolute inset-0 w-full h-full object-contain z-10 mask-triangle"
          style={{ transform: "scale(1.2) translateY(-10%)" }}
        />
      </div>
      <div className="text-white max-w-md" data-aos="fade-left">
        <h2 className="flex flex-wrap gap-2 text-2xl md:text-3xl font-bold">
          About <span className="text-slate-600">Me</span>
          <span className="flex items-center justify-center mt-1 text-slate-600">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />{" "}
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />{" "}
              <line x1="6" y1="1" x2="6" y2="4" />{" "}
              <line x1="10" y1="1" x2="10" y2="4" />{" "}
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
          </span>
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-400">
          My mission: Create incredible digital experiences, always learning and
          evolving to offer the best solutions.
          <br />I am 26 years old and graduated in Systems Analysis and
          Development in 2022. My professional career has led me to experience
          in Human Resources Management. However, my passion for programming has
          always been with me, driving me to pursue personal projects in
          parallel. With careful financial planning, I made a plan to return to
          my field of study, seeking to fulfill my dream of building a solid
          career in software development.
        </p>
        <div>
          <strong className="block mb-2 mt-6 md:mt-8">
            <br />
            🛠️ Tecnologias e Ferramentas:
          </strong>

          <div className="mt-4 text-sm md:text-base text-gray-400 flex flex-wrap gap-3">
            {[
              {
                title: "Front-End",
                items: [
                  "React",
                  "React Native",
                  "HTML",
                  "CSS",
                  "Styled Components",
                  "TailwindCSS",
                ],
              },
              {
                title: "Back-End",
                items: ["Nodejs", "Nestjs"],
              },
              {
                title: "Banco de Dados",
                items: ["MySQL"],
              },
              {
                title: "Versionamento",
                items: ["Git"],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="shadow-xs shadow-gray-400 border border-gray-500 rounded-xl p-3 w-full sm:w-auto sm:min-w-[140px] cursor-pointer items-center justify-center transition-colors duration-500 hover:bg-gray-500 hover:text-black"
                onClick={() => toggleSection(index)}
              >
                <strong className="block mb-2">{section.title}</strong>
                {openSection === index && (
                  <ul className="list-disc list-inside">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/RoneyAlmeida5"
        >
          <button className="cursor-pointer bg-slate-600 bg-neutral-950 text-neutral-400 border border-neutral-400 border-b-4 font-medium overflow-hidden relative mt-5 px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group w-full sm:w-auto">
            <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Read More
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
