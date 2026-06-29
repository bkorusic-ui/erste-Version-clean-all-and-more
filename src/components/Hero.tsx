import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
   transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const }, },
  }
;

const fadeImage: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 },
  },  
};

export default function Hero() {
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
          <img
            src="/hero-gartenpflege-stuttgart.png"
            alt="Gartenpflege"
            className="h-[280px] w-full rounded-[26px] object-cover shadow-2xl shadow-black/10 transition duration-700 hover:scale-[1.02] sm:h-[320px] md:h-[520px] md:rounded-[32px]"
          />
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