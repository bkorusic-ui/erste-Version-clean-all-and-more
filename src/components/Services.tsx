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
        className="group rounded-[24px] border border-[#d9d2c5] bg-[#fbf8f0] p-5 ..."
      >
        <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5eee1] transition group-hover:bg-[#789873]">
          <Icon
            size={18}
            strokeWidth={1.9}
            className="text-[#789873] transition group-hover:text-white"
            />
          </div>

  <h4 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111a13]">
    {service.title}
  </h4>
</div>

        

        <p className="mt-4 text-[13px] leading-6 text-[#556055] md:text-[14px] md:leading-7">
          {service.text}
        </p>
      </motion.div>
    );
  }

  export default function Services() {
    return (
      <section id="leistungen" className="bg-[#f8f6ee] px-8 pt-10 pb-16 md:px-8 md:pt-12 md:pb-20">
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

          <div className=" mt-12 grid grid-cols-1 items-center gap-10 md:scroll-mt-32 md:mt-14 md:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              variants={fadeImage}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <img
                src="/service-hausmeisterservice-stuttgart.jpg"
                alt="Hausmeisterservice in Stuttgart"
                className="h-[320px] w-full rounded-[26px] border border-[#d9d2c5] object-cover shadow-xl shadow-black/5 transition duration-700 hover:scale-[1.015] md:h-[700px] md:rounded-[30px]"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#789873]">
                <h3
                  id="hausmeisterservice"
                  className="text-[28px] font-semibold leading-tight tracking-[-0.035em] text-[#111a13] md:text-[36px]"
                ></h3>
              </p>
              

              <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.035em] text-[#111a13] md:text-[36px]">
                Professioneller Hausmeisterservice in Stuttgart & Umgebung. 
                <br />
                
                Hinter uns ist es sauber.
              </h3>

              
                <p className="mt-5 max-w-xl text-[16px] leading-7 text-[#4d594d] md:text-[18px] md:leading-8">
               Unser Hausmeisterservice in Stuttgart übernimmt die zuverlässige
               Betreuung von Wohnanlagen, Mehrfamilienhäusern und Gewerbeobjekten.
               Von der Treppenhausreinigung über Kleinreparaturen bis zur laufenden
               Objektpflege erhalten Sie alle Leistungen aus einer Hand – pünktlich,
               sorgfältig und mit persönlichem Ansprechpartner.
              </p>
              

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-8">
                {houseServices.map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

{/* Trennlinie */}
<div className="my-24 flex items-center justify-center md:my-32">
  <div className="h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-[#d8d2c4] to-transparent" />
</div>

          <div  
              
              className="scroll-mt-52 mt-32 grid grid-cols-1 items-center gap-12 md:scroll-mt-56 md:mt-36 md:gap-16 lg:grid-cols-[0.95fr_1.05fr]"
              >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className="scroll-mt-32"></div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#789873]">
                  Gartenpflege
                </p>

                <h3
                  id="gartenpflege"
                  className="text-[28px] font-semibold leading-tight tracking-[-0.035em] text-[#111a13] md:text-[36px]"
                >
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
                src="/gartenpflege-stuttgart.jpg"
                alt="Professionelle Gartenpflege in Stuttgart"
                className="h-[320px] w-full rounded-[26px] border border-[#d9d2c5] object-cover shadow-xl shadow-black/5 transition duration-700 hover:scale-[1.015] md:h-[680px] md:rounded-[30px]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    );
  } 