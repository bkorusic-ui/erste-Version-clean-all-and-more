import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import References from "./components/References";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Faq />
      <Contact />
    </>
  );
}

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/referenzen" element={<References />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}