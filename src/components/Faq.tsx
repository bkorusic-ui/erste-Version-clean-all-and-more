import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "In welchen Regionen sind Sie tätig?",
    answer:
      "Wir betreuen Kunden in Stuttgart und Umgebung. Gerne prüfen wir auch Anfragen aus angrenzenden Orten.",
  },
  {
    question: "Erstellen Sie ein kostenloses Angebot?",
    answer:
      "Ja. Nach einem kurzen Gespräch oder einer Besichtigung erhalten Sie ein unverbindliches und kostenloses Angebot.",
  },
  {
    question: "Bieten Sie regelmäßige Objektbetreuung an?",
    answer:
      "Ja. Wir übernehmen regelmäßige Hausmeisterdienste, Objektpflege, Treppenhausreinigung und Gartenpflege.",
  },
  {
    question: "Welche Gartenarbeiten übernehmen Sie?",
    answer:
      "Wir übernehmen Rasenpflege, Heckenschnitt, Beetpflege, saisonale Arbeiten und die Pflege von Außenanlagen.",
  },
  {
    question: "Wie schnell melden Sie sich zurück?",
    answer:
      "In der Regel melden wir uns innerhalb von 24 Stunden, um Ihr Anliegen zu besprechen.",
  },
];

export default function Faq() {
  const [showFaqs, setShowFaqs] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#eef2e8] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <button
          onClick={() => setShowFaqs(!showFaqs)}
          className="group w-full text-left"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#789873]">
            FAQ
          </p>

          <div className="flex items-center justify-between">
            <h2 className="text-[34px] font-semibold leading-tight tracking-[-0.04em] text-[#111a13] md:text-[50px]">
              Häufig gestellte Fragen
            </h2>

            <ChevronDown
              size={30}
              className={`text-[#789873] transition-transform duration-300 ${
                showFaqs ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        <AnimatePresence>
          {showFaqs && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10 space-y-4 overflow-hidden"
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="overflow-hidden rounded-[22px] border border-[#d9d2c5] bg-[#fbf8f0] shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                    >
                      <span className="text-[17px] font-semibold text-[#111a13] md:text-[19px]">
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-[#789873] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-[15px] leading-7 text-[#4d594d] md:px-6 md:text-[16px]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}