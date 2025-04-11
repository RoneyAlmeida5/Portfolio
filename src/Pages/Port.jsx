import React, { useState } from "react";
import Card from "./Card";

function Port() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold text-white mb-8" data-aos="fade-down">
        Latest <span className="text-gray-600">Project</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* PROJETO 1 */}
        <a
          href="https://github.com/RoneyAlmeida5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <Card
            imageUrl="https://i.pinimg.com/originals/9e/86/ac/9e86ac95218707bedeae3ac54b9f4bc8.jpg"
            title="Projeto 1"
            description="Descrição do Projeto 1."
            href="https://github.com/RoneyAlmeida5"
          />
        </a>
        {/* PROJETO 2 */}
        <a
          href="https://github.com/RoneyAlmeida5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <Card
            imageUrl="https://i.pinimg.com/236x/1c/1b/52/1c1b52d43e2a3333514c8c88106bc98e.jpg"
            title="Projeto 2"
            description="Descrição do Projeto 2."
          />
        </a>
        {/* PROJETO 3 */}
        <a
          href="https://github.com/RoneyAlmeida5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
          data-aos="fade-right"
          data-aos-offset="200"
        >
          <Card
            imageUrl="https://i.pinimg.com/236x/de/d2/d0/ded2d08c6aff0a9a3e900f1ce11f2ad3.jpg"
            title="Projeto 3"
            description="Descrição do Projeto 3."
          />
        </a>
        {/* PROJETO 4 */}
        <a
          href="https://github.com/RoneyAlmeida5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
          data-aos="fade-left"
          data-aos-offset="200"
        >
          <Card
            imageUrl="https://prodaly.com.br/wp-content/uploads/2024/01/blog-setembro-2-1.jpg"
            title="Projeto 4"
            description="Descrição do Projeto 4."
          />
        </a>
        {/* PROJETO 5 */}
        <a
          href="https://github.com/RoneyAlmeida5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
          data-aos="fade-left"
          data-aos-offset="200"
        >
          <Card
            imageUrl="https://www.serasaexperian.com.br/images-cms/wp-content/uploads/2023/08/Profissao-Programador-1.jpg"
            title="Projeto 5"
            description="Descrição do Projeto 5."
          />
        </a>
        {/* PROJETO 6 */}
        <a
          href="https://github.com/RoneyAlmeida5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
          data-aos="fade-left"
          data-aos-offset="200"
        >
          <Card
            imageUrl="https://classic.exame.com/wp-content/uploads/2017/05/programador-senior-monsitj.jpg?quality=70&strip=info&w=1024"
            title="Projeto 6"
            description="Descrição do Projeto 6."
          />
        </a>
      </div>
    </div>
  );
}

export default Port;
