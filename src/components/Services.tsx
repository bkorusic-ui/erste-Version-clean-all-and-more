  import { motion, type Variants } from "framer-motion";
  import {
    Wrench,
    Sparkles,
    ShieldCheck,
    SprayCan,
    Scissors,
    Sprout,
    Flower2,
    Leaf,
  } from "lucide-react";

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeImage: Variants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const houseServices = [
    {
      icon: Wrench,
      title: "Kleinreparaturen",
      text: "Schnelle Hilfe bei kleinen Defekten – zuverlässig und unkompliziert.",
    },
    {
      icon: Sparkles,
      title: "Treppenhausreinigung",
      text: "Regelmäßige Reinigung gemeinsamer Flächen für ein gepflegtes Objekt.",
    },
    {
      icon: SprayCan,
      title: "Fensterreinigung",
      text: "Saubere Fenster und Glasflächen für einen klaren ersten Eindruck.",
    },
    {
      icon: ShieldCheck,
      title: "Objektbetreuung",
      text: "Kontrollgänge, Müllmanagement und fester Ansprechpartner vor Ort.",
    },
  ];

  const gardenServices = [
    {
      icon: Scissors,
      title: "Hecken- & Baumschnitt",
      text: "Form-, Pflege- und Rückschnitt mit professionellem Werkzeug.",
    },
    {
      icon: Sprout,
      title: "Rasenpflege",
      text: "Mähen, Vertikutieren und Düngen für einen gesunden Rasen.",
    },
    {
      icon: Flower2,
      title: "Beet- & Pflanzpflege",
      text: "Anlegen, Bepflanzen und saisonale Pflege Ihrer Beete.",
    },
    {
      icon: Leaf,
      title: "Herbst- & Frühjahrsputz",
      text: "Laub entfernen und den Garten für die nächste Saison vorbereiten.",
    },
  ];

  function ServiceCard({
    service,
    index,
  }: {
    service: {
      icon: React.ElementType;
      title: string;
      text: string;
    };
    index: number;
  }) {
    const Icon = service.icon;

    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ delay: index * 0.08 }}
        className="group rounded-[20px] border border-[#d9d2c5] bg-[#fbf8f0] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#789873]/50 hover:shadow-lg hover:shadow-black/5 md:rounded-[22px] md:p-5"
      >
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#e5eee1] transition group-hover:bg-[#789873] md:h-10 md:w-10">
          <Icon
            size={16}
            strokeWidth={1.9}
            className="text-[#789873] transition group-hover:text-white md:size-[18px]"
          />
        </div>

        <h4 className="text-[17px] font-semibold text-[#111a13] md:text-[18px]">
          {service.title}
        </h4>

        <p className="mt-3 text-[13px] leading-6 text-[#4d594d] md:text-[14px]">
          {service.text}
        </p>
      </motion.div>
    );
  }

  export default function Services() {
    return (
      <section id="leistungen" className="bg-[#f8f6ee] px-5 pt-10 pb-16 md:px-8 md:pt-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#789873]">
              Leistungen
            </p>

            <h2 className="max-w-3xl text-[34px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#111a13] md:text-[46px]">
              Zwei Bereiche, ein verlässlicher Ansprechpartner.
            </h2>
          </motion.div>

          <div id="hausmeisterservice" className="scroll-mt-28 mt-12 grid grid-cols-1 items-center gap-10 md:scroll-mt-32 md:mt-14 md:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              variants={fadeImage}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <img
                src="/service-house.jpg"
                alt="Hausmeisterservice"
                className="h-[320px] w-full rounded-[26px] border border-[#d9d2c5] object-cover shadow-xl shadow-black/5 transition duration-700 hover:scale-[1.015] md:h-[620px] md:rounded-[30px]"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#789873]">
                Hausmeisterservice
              </p>

              <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.035em] text-[#111a13] md:text-[36px]">
                Professioneller Hausmeisterservice in Stuttgart & Umgebung. 
                <br />
                
                Hinter uns ist es sauber.
              </h3>

              <p className="mt-5 max-w-xl text-[16px] leading-7 text-[#4d594d] md:text-[18px] md:leading-8">
                <p className="mt-5 max-w-xl text-[16px] leading-7 text-[#4d594d] md:text-[18px] md:leading-8">
               Unser Hausmeisterservice in Stuttgart übernimmt die zuverlässige
               Betreuung von Wohnanlagen, Mehrfamilienhäusern und Gewerbeobjekten.
               Von der Treppenhausreinigung über Kleinreparaturen bis zur laufenden
               Objektpflege erhalten Sie alle Leistungen aus einer Hand – pünktlich,
               sorgfältig und mit persönlichem Ansprechpartner.
              </p>
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-8">
                {houseServices.map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          <div id="gartenpflege" className="scroll-mt-28 mt-20 grid grid-cols-1 items-center gap-10 md:scroll-mt-32 md:mt-24 md:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#789873]">
                Gartenpflege
              </p>

              <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.035em] text-[#111a13] md:text-[36px]">
                Professionelle Gartenpflege in Stuttgart & Umgebung.
                 <br />
                 
                Grün, das geliebt wird.
              </h3>

              <p className="mt-5 max-w-xl text-[16px] leading-7 text-[#4d594d] md:text-[18px] md:leading-8">
                Wir übernehmen die professionelle Gartenpflege in Stuttgart & Umgebung für
                Privatgärten, Wohnanlagen und Unternehmen. Ob Rasenpflege,
                Heckenschnitt, Beetpflege oder saisonale Arbeiten – wir sorgen dafür,
                dass Ihre Außenanlagen das ganze Jahr über gepflegt und einladend
                wirken.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-8">
                {gardenServices.map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeImage}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <img
                src="/garden-service.jpg"
                alt="Gartenpflege"
                className="h-[320px] w-full rounded-[26px] border border-[#d9d2c5] object-cover shadow-xl shadow-black/5 transition duration-700 hover:scale-[1.015] md:h-[620px] md:rounded-[30px]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    );
  } 