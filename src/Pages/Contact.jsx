import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold text-white mb-8" data-aos="fade-down">
        Contact <span className="text-gray-600">Me</span>
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
          <div className="mb-4">
            {/* Ícone do WhatsApp (SVG simplificado) */}
            <span class="[&>svg]:h-10 [&>svg]:w-10 [&>svg]:fill-[#128c7e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </span>
          </div>
          <p className="text-gray-400">WhatsApp for instant messaging</p>
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/roney-almeida-13a0381b5/" // Substitua pelo seu link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 rounded-lg p-6 w-full max-w-sm flex flex-col items-center justify-center"
          data-aos="zoom-in"
        >
          <div className="mb-4">
            {/* Ícone do LinkedIn (SVG simplificado) */}
            <span class="[&>svg]:h-10 [&>svg]:w-10 [&>svg]:fill-[#0077b5]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </span>
          </div>
          <p className="text-gray-400">Click to chat on LinkedIn</p>
        </a>

        {/* Email Link */}
        <a
          href="mailto:roneyalmeidaazevedo@gmail.com" // Substitua pelo seu email
          className="bg-gray-800 rounded-lg p-6 w-full max-w-sm flex flex-col items-center justify-center"
          data-aos="zoom-in"
        >
          <div className="mb-4">
            {/* Ícone de Email (SVG simplificado) */}
            <span class="[&>svg]:h-10 [&>svg]:w-10 [&>svg]:fill-[#ea4335]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </span>
          </div>
          <p className="text-gray-400">
            Email for any questions or information
          </p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
