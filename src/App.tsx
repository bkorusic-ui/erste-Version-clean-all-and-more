import { BrowserRouter, Routes, Route } from "react-router-dom";

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

export default function App() {
  return (
    <BrowserRouter>
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