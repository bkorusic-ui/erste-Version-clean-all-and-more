import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    const smoothScrollTo = (targetY: number, duration = 1300) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuart(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const state = location.state as { scrollTo?: string } | null;

    if (state?.scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(state.scrollTo!);

        if (element) {
          const headerOffset = 120;
          const targetY =
            element.getBoundingClientRect().top +
            window.scrollY -
            headerOffset;

          smoothScrollTo(targetY, 1600);
          window.history.replaceState({}, "");
        }
      }, 250);

      return () => clearTimeout(timer);
    }

    window.scrollTo(0, 0);
  }, [location]);

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