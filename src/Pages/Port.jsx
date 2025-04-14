import React, { useState } from "react";
import Card from "./Card";
// IMAGE
import OnPoint from "../assets/OnPoint.jpeg";
import DevBlog from "../assets/DevBlog.png";
import Portfolio from "../assets/Portfolio.jpeg";
import Copa from "../assets/Copa.png";
import Banco from "../assets/bd.png";

function Port() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 mt-20">
      <h2 className="text-3xl font-bold text-white mb-8" data-aos="fade-down">
        Latest <span className="text-gray-600">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* PROJETO 1 */}
        <a
          href="https://github.com/RoneyAlmeida5/OnPoint"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <Card
            src={OnPoint}
            title="OnPoint (PDV)"
            description="Sales of general merchandise"
          />
        </a>
        {/* PROJETO 2 */}
        <a
          href="https://github.com/RoneyAlmeida5/OnPoint_Back"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <Card
            src={Banco}
            title="Database OnPoint"
            description="Database using MySQL and Nestjs"
          />
        </a>
        {/* PROJETO 3 */}
        <a
          href="https://github.com/RoneyAlmeida5/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <Card
            src={Portfolio}
            title="Professional Portfolio"
            description="Development career"
          />
        </a>
        {/* PROJETO 4 */}
        <a
          href="https://github.com/RoneyAlmeida5/DevBlog"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
          data-aos="fade-left"
          data-aos-offset="200"
        >
          <Card
            src={DevBlog}
            title="DevBlog Personal"
            description="Blog to photo post using Firebase as DB"
          />
        </a>
        {/* PROJETO 5 */}
        <a
          href="https://github.com/RoneyAlmeida5/nlw-10-copa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
          data-aos="fade-left"
          data-aos-offset="200"
        >
          <Card
            src={Copa}
            title="Cup Games"
            description="Qatar World Cup Schedule and Matches"
          />
        </a>
      </div>
    </div>
  );
}

export default Port;
