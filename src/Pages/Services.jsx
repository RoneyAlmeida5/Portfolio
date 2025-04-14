import React from "react";

function Services() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 mt-20">
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
            <svg
              class="h-8 w-8 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />{" "}
              <line x1="8" y1="21" x2="16" y2="21" />{" "}
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Web Development
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            I present a Point of Sale (POS) system developed specifically for
            companies with a high volume of transactions. Its architecture aims
            to optimize the experience of both the operator and the customer,
            providing agility and high performance in the sales process.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/RoneyAlmeida5/OnPoint"
          >
            <button className="cursor-pointer bg-slate-600 bg-neutral-950 text-neutral-400 border border-neutral-400 border-b-4 font-medium overflow-hidden relative mt-5 px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Read More
            </button>
          </a>
        </div>

        {/* Card 2: Back-End */}
        <div
          className="bg-gray-800 rounded-lg p-6 w-full max-w-sm"
          data-aos="zoom-in"
        >
          <div className="text-gray-500 text-4xl mb-4">
            {/* Ícone de design gráfico (pode ser um SVG ou ícone de uma biblioteca) */}
            <svg
              class="h-8 w-8 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <ellipse cx="12" cy="5" rx="9" ry="3" />{" "}
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />{" "}
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Back End</h3>
          <p className="text-sm text-gray-400 mb-4">
            The back-end architecture of the Point of Sale (POS) system was
            developed using the NestJS framework and its complementary
            libraries, with MySQL as the database management system.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/RoneyAlmeida5/OnPoint_Back"
          >
            <button className="cursor-pointer bg-slate-600 bg-neutral-950 text-neutral-400 border border-neutral-400 border-b-4 font-medium overflow-hidden relative mt-15 px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Read More
            </button>
          </a>
        </div>

        {/* Card 3: Front-End */}
        <div
          className="bg-gray-800 rounded-lg p-6 w-full max-w-sm"
          data-aos="zoom-in"
        >
          <div className="text-purple-500 text-4xl mb-4">
            <svg
              class="h-8 w-8 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="4" y="4" width="16" height="16" rx="1" />{" "}
              <line x1="4" y1="8" x2="20" y2="8" />{" "}
              <line x1="8" y1="4" x2="8" y2="8" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Front End</h3>
          <p className="text-sm text-gray-400 mb-4">
            The front-end was developed as part of one of Rocketseat's training
            programs, with a thematic focus on the World Cup held in Qatar
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/RoneyAlmeida5/nlw-10-copa"
          >
            <button className="cursor-pointer bg-slate-600 bg-neutral-950 text-neutral-400 border border-neutral-400 border-b-4 font-medium overflow-hidden relative mt-20 px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
