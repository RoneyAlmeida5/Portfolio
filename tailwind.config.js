export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Garante que Tailwind analise seus arquivos
  ],
  theme: {
    extend: {
      colors: {
        "custom-purple": "rgba(184, 0, 225, 0.8)",
      },
    },
  },
  plugins: [],
};
