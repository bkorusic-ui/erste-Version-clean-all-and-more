import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Anfrage",
    text: "Sie schreiben oder rufen an. Wir hören zu.",
  },
  {
    number: "02",
    title: "Vor-Ort-Termin",
    text: "Kostenlose Besichtigung und ehrliche Einschätzung.",
  },
  {
    number: "03",
    title: "Angebot",
    text: "Transparentes Festangebot ohne versteckte Kosten.",
  },
  {
    number: "04",
    title: "Umsetzung",
    text: "Pünktlich, sauber und mit festem Ansprechpartner.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="scroll-mt-40 bg-[#f8f6ee] px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-[#789873] md:text-[12px]">
          So arbeiten wir
        </p>

        <h2 className="max-w-3xl text-[34px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#111a13] md:text-[36px]">
          In vier Schritten zum
          <br />
          gepflegten Ergebnis.
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-[20px] border border-[#d9d2c5] bg-[#fbf8f0] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#789873]/40 hover:shadow-lg hover:shadow-black/5 md:rounded-[24px] md:p-6"
            >
              <div className="absolute left-0 top-0 h-1 w-0 bg-[#789873] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold tracking-[0.12em] text-[#789873] md:text-[14px]">
                  {step.number}
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="translate-x-2 text-[#789873] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:size-4"
                />
              </div>

              <h3 className="mt-6 text-[22px] font-semibold leading-tight tracking-[-0.03em] text-[#111a13] md:mt-7 md:text-[24px]">
                {step.title}
              </h3>

              <p className="mt-3 text-[14.5px] leading-6 text-[#556055] md:mt-4 md:text-[15.5px] md:leading-7">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}