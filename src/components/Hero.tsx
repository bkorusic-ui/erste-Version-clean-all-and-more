import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeImage: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.15,
    },
  },
};

const heroImages = [
  "/hero.jpg.png",
  "/gartenpflege-stuttgart.jpg",
  "/service-hausmeisterservice-stuttgart.jpg",
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [paused]);

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % heroImages.length);
  };

  const prevImage = () => {
    setActiveImage((current) =>
      current === 0 ? heroImages.length - 1 : current - 1
    );
  };

  return (
    <section className="bg-[#f8f6ee]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-start gap-10 px-5 pt-6 pb-12 md:min-h-[calc(100vh-96px)] md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:pt-8 md:pb-16">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8d2c4] bg-white/30 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#6f8d67] md:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#789873]" />
            Stuttgart & Umgebung
          </div>

          <h1 className="mt-6 text-[40px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#111a13] sm:text-[52px] md:mt-8 md:text-[72px]">
            Gepflegte
            <br />
            Häuser.
            <br />
            <span className="text-[#7f9a77]">
              Lebendige
              <br />
              Gärten.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-7 text-[#556055] md:mt-8 md:text-xl md:leading-9">
            Wir kümmern uns um Ihr Objekt – vom regelmäßigen Hausmeisterdienst
            bis zur professionellen Gartenpflege. Zuverlässig, gründlich und mit
            einem Auge fürs Detail.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10 md:gap-5">
            <a
              href="#kontakt"
              className="rounded-full bg-[#789873] px-6 py-3 text-center text-[15px] font-semibold text-white shadow-lg shadow-[#789873]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6f8d67] hover:shadow-xl md:px-9 md:py-4 md:text-lg"
            >
              Kostenloses Angebot →
            </a>

            <a
              href="#leistungen"
              className="rounded-full border border-[#d8d2c4] bg-[#f8f6ee] px-6 py-3 text-center text-[15px] font-semibold text-[#111a13] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789873]/50 hover:bg-white md:px-9 md:py-4 md:text-lg"
            >
              Leistungen ansehen
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeImage} initial="hidden" animate="visible">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="group relative overflow-hidden rounded-[26px] shadow-2xl shadow-black/10 md:rounded-[32px]"
          >
            <img
  src={heroImages[activeImage]}
  alt="Clean all and more"
  className="h-[280px] w-full object-cover opacity-100 transition-opacity duration-[1800ms] ease-in-out sm:h-[320px] md:h-[520px]"
/>

<button
  onClick={prevImage}
  className="absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f8f6ef]/90 text-2xl text-[#111a13] opacity-0 transition-all duration-300 group-hover:opacity-100 md:flex"
>
  ‹
</button>

<button
  onClick={nextImage}
  className="absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f8f6ef]/90 text-2xl text-[#111a13] opacity-0 transition-all duration-300 group-hover:opacity-100 md:flex"
>
  ›
</button>

<div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
  {heroImages.map((_, index) => (
    <button
      key={index}
      onClick={() => setActiveImage(index)}
      className={`h-2 rounded-full transition-all duration-500 ${
        activeImage === index
          ? "w-7 bg-white/90"
          : "w-2 bg-white/45 hover:bg-white/70"
      }`}
    />
  ))}
</div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-[#d8d2c4]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-6 sm:grid-cols-3 md:px-8 md:py-14"
        >
          {[
            ["Erfahrung", "10+ J."],
            ["Objekte", "21+"],
            ["Region", "Stuttgart"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#556055] md:text-sm">
                {label}
              </p>
              <p className="mt-3 text-3xl font-bold text-[#111a13] md:text-4xl">
                {value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}