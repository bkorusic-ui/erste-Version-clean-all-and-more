import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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

export default function Hero() {
  return (
    <section className="bg-[#f8f6ee]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-start gap-10 px-5 pt-8 pb-12 md:min-h-[calc(100vh-96px)] md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:pt-10 md:pb-16">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8d2c4] bg-white/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6f8d67] shadow-sm md:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#789873]" />
            Hausmeisterservice & Gartenpflege 
          </div>

          <h1 className="mt-7 text-[43px] font-semibold leading-[0.95] tracking-[-0.06em] text-[#111a13] sm:text-[58px] md:mt-9 md:text-[78px]">
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

          <p className="mt-7 max-w-xl text-[16px] leading-7 text-[#4d594d] md:mt-8 md:text-[20px] md:leading-9">
            Wir kümmern uns zuverlässig um Ihre Immobilie – vom professionellen
            Hausmeisterservice bis zur fachgerechten Gartenpflege. Persönlich,
            gründlich und mit Blick fürs Detail.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10 md:gap-5">
            <a
              href="/#kontakt"
              className="rounded-full bg-[#789873] px-7 py-3.5 text-center text-[15px] font-semibold text-white shadow-xl shadow-[#789873]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6f8d67] hover:shadow-2xl md:px-10 md:py-4 md:text-lg"
            >
              Kostenloses Angebot →
            </a>

            <a
              href="/#leistungen"
              className="rounded-full border border-[#d8d2c4] bg-white/40 px-7 py-3.5 text-center text-[15px] font-semibold text-[#111a13] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789873]/50 hover:bg-white md:px-10 md:py-4 md:text-lg"
            >
              Leistungen ansehen
            </a>
          </div>

          <div className="mt- flex flex-col gap-2 text-[12px] font-medium text-[#4d594d] sm:flex-row sm:flex-wrap md:mt-8">
            {[
              "Persönlicher Ansprechpartner",
              "Zuverlässig & termintreu",
              "Kostenloses Angebot",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#789873]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeImage}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[34px] bg-[#789873]/10 blur-2xl" />

          <img
            src="/hero.jpg.png"
            alt="Gartenpflege und Hausmeisterservice in Stuttgart"
            className="relative h-[290px] w-full rounded-[28px] border border-[#d9d2c5] object-cover shadow-2xl shadow-black/10 transition duration-700 hover:scale-[1.015] sm:h-[340px] md:h-[540px] md:rounded-[34px]"
          />
        </motion.div>
      </div>

      <div className="border-t border-[#d8d2c4] bg-[#f8f6ee]">
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
            <div
              key={label}
              className="rounded-[20px] border border-[#d9d2c5] bg-[#fbf8f0]/70 px-5 py-5"
            >
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