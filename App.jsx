import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter } from "react-router";

import Header from "./src/Pages/Header.jsx";
import Home from "./src/Pages/Home.jsx";
import About from "./src/Pages/ABout.jsx";
import Services from "./src/Pages/Services.jsx";
import Port from "./src/Pages/Port.jsx";
import Contact from "./src/Pages/Contact.jsx";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 1 }); // dispara o scroll
    AOS.init({
      duration: 1000, // duração da animação em ms
      once: false, // anima só uma vez
    });
  }, []);

  return (
    <BrowserRouter basename="/portfolio">
      <div>
        <Header />
        <div>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="port">
            <Port />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
