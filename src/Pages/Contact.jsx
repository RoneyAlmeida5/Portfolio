import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold text-white mb-8" data-aos="fade-down">
        Contact <span className="text-gray-600">Us</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* WhatsApp Link */}
        <a
          href="https://wa.me/5521990191629" // Substitua pelo seu número
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 rounded-lg p-6 w-full max-w-sm flex flex-col items-center justify-center"
          data-aos="zoom-in"
        >
          <div className="text-green-500 text-4xl mb-4">
            {/* Ícone do WhatsApp (SVG simplificado) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <p className="text-white">WhatsApp para mensagens instantâneas</p>
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/roney-almeida-13a0381b5/" // Substitua pelo seu link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 rounded-lg p-6 w-full max-w-sm flex flex-col items-center justify-center"
          data-aos="zoom-in"
        >
          <div className="text-blue-500 text-4xl mb-4">
            {/* Ícone do LinkedIn (SVG simplificado) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="2" y="2" width="20" height="20" rx="4" />
            </svg>
          </div>
          <p className="text-white">Clique para conversarmos no LinkedIn</p>
        </a>

        {/* Email Link */}
        <a
          href="mailto:roneyalmeidaazevedo@gmail.com" // Substitua pelo seu email
          className="bg-gray-800 rounded-lg p-6 w-full max-w-sm flex flex-col items-center justify-center"
          data-aos="zoom-in"
        >
          <div className="text-red-500 text-4xl mb-4">
            {/* Ícone de Email (SVG simplificado) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="4,4 20,4 12,14" />
            </svg>
          </div>
          <p className="text-white">Email para qualquer dúvida ou informação</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
