import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import perfil from "../assets/perfil.png";

function About() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="relative w-64 h-64 md:w-80 md:h-80" data-aos="zoom-in">
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
      <div>
        <div className="ml-50 text-white max-w-md" data-aos="fade-left">
          <h2 className="text-3xl font-bold">
            About <span className="text-slate-600">Me</span>
          </h2>
          <h3 className="mt-2 font-semibold text-lg text-gray-300">
            Hi, I’m Here To Help Your Next Project!
          </h3>
          <p className="mt-4 text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            officia asperiores labore officiis suscipit at ea non impedit
            nostrum animi illum mollitia itaque reprehenderit laudantium
            molestiae eum porro molestias repudiandae, amet ea eos alias
            corporis laborum nobis. Tempore deserunt repellendus quos nihil
            voluptas aut est suscipit.
          </p>
          <button className="mt-6 px-6 py-2 bg-slate-600 hover:bg-slate-800 rounded-md font-semibold transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
