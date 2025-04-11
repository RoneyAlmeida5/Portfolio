import React from "react";

function Services() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold text-white mb-8" data-aos="fade-down">
        My <span className="text-gray-600">Services</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1: Web Development */}
        <div
          className="bg-gray-800 rounded-lg p-6 w-full max-w-sm"
          data-aos="zoom-in"
        >
          <div className="text-gray-600 text-4xl mb-4">
            {/* Ícone de desenvolvimento web (pode ser um SVG ou ícone de uma biblioteca) */}
            &lt;/&gt;
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Web Development
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            dignissimos vitae magni aut commodi non laborum nisi alias iusto
            voluptatibus.
          </p>
          <button className="text-gray-500 font-semibold hover:underline">
            Read More
          </button>
        </div>

        {/* Card 2: Graphic Design */}
        <div
          className="bg-gray-800 rounded-lg p-6 w-full max-w-sm"
          data-aos="zoom-in"
        >
          <div className="text-gray-500 text-4xl mb-4">
            {/* Ícone de design gráfico (pode ser um SVG ou ícone de uma biblioteca) */}
            ✏️
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Graphic Design
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            dignissimos vitae magni aut commodi non laborum nisi alias iusto
            voluptatibus.
          </p>
          <button className="text-gray-500 font-semibold hover:underline">
            Read More
          </button>
        </div>

        {/* Card 3: Digital Marketing */}
        <div
          className="bg-gray-800 rounded-lg p-6 w-full max-w-sm"
          data-aos="zoom-in"
        >
          <div className="text-purple-500 text-4xl mb-4">
            {/* Ícone de marketing digital (pode ser um SVG ou ícone de uma biblioteca) */}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Digital Marketing
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            dignissimos vitae magni aut commodi non laborum nisi alias iusto
            voluptatibus.
          </p>
          <button className="text-gray-500 font-semibold hover:underline">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
