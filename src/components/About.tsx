import { CheckCircle2 } from "lucide-react";

export default function About() {
  const values = [
    "Fester Ansprechpartner",
    "Klare Absprachen",
    "Transparente Preise",
  ];

  const stats = [
    ["10+", "Jahre Erfahrung"],
    ["24h", "Rückmeldung"],
    ["100%", "Verlässlich"],
  ];

  return (
    <section className="bg-[#eef2e8] px-5 py-16 md:px-8 md:py-24">
  <div
    id="ueber-uns"
    className="mx-auto grid max-w-7xl scroll-mt-4 grid-cols-1 items-center gap-12 md:gap-20 lg:grid-cols-[0.88fr_1.12fr]"
  ></div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:gap-20 lg:grid-cols-[0.88fr_1.12fr]">

        {/* Linke Seite */}

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#789873] md:text-xs">
            Über uns
          </p>

          <h2 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111a13] md:text-[52px]">
            Persönlich.
            <br />
            Gründlich.
            <br />
            <span className="text-[#789873]">Fair.</span>
          </h2>

          <p className="mt-7 max-w-xl text-[18px] font-medium leading-8 text-[#111a13] md:mt-10 md:text-[22px]">
            cleanallandmore steht für ehrliche Handwerksarbeit in und um
            Stuttgart.
          </p>

          <div className="mt-5 max-w-xl space-y-4 text-[15px] leading-7 text-[#4d594d] md:mt-6 md:text-[17px] md:leading-8">
            <p>
              Wir kümmern uns um Immobilien, Gärten und Außenanlagen mit
              derselben Sorgfalt, als wären sie unsere eigenen.
            </p>

            <p>
              Ob Hausverwaltung, Eigentümergemeinschaft oder Privathaushalt:
              Sie erhalten zuverlässige Ausführung, klare Kommunikation und
              einen festen Ansprechpartner.
            </p>
            <p>
              Als regionaler Dienstleister für Hausmeisterservice und Gartenpflege in
             Stuttgart betreuen wir Wohnanlagen, Mehrfamilienhäuser, private
             Grundstücke und gewerbliche Objekte mit viel Sorgfalt und einem klaren
             Blick fürs Detail.
            </p>

            <p>
              Unser Ziel ist, dass Ihr Gebäude und Ihre Außenanlagen dauerhaft gepflegt,
             sauber und einladend wirken – ohne komplizierte Abläufe und ohne lange
              Kommunikationswege.
            </p>

          </div>

          <div className="mt-8 space-y-3">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 text-[#111a13]"
              >
                <CheckCircle2
                  size={18}
                  className="text-[#789873]"
                />

                <span className="text-[15px] font-medium md:text-[16px]">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map(([number, label]) => (
              <div
                key={label}
                className="rounded-[18px] border border-[#d9d2c5] bg-[#fbf8f0]/80 px-4 py-4 shadow-sm md:rounded-[20px] md:px-5 md:py-5"
              >
                <p className="text-[24px] font-semibold tracking-[-0.03em] text-[#111a13] md:text-3xl">
                  {number}
                </p>

                <p className="mt-2 text-[12px] leading-5 text-[#556055] md:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rechte Seite */}

        <div className="relative">
          <div className="absolute -inset-4 rounded-[34px] bg-[#789873]/10 blur-2xl md:-inset-5" />

          <img
            src="/about-clean-all-and-more.jpg"
            alt="Clean All & More bei der Objekt- und Gartenpflege in Stuttgart"
            className="relative h-[340px] w-full rounded-[26px] border border-[#d9d2c5] object-cover shadow-xl shadow-black/10 md:h-[560px] md:rounded-[32px]"
          />

          <div className="absolute bottom-4 left-4 max-w-[220px] rounded-[18px] border border-[#d9d2c5] bg-[#fbf8f0]/90 px-4 py-4 shadow-xl backdrop-blur-md md:bottom-6 md:left-6 md:max-w-xs md:rounded-[24px] md:px-6 md:py-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#789873] md:text-xs">
              Regional
            </p>

            <p className="mt-2 text-[16px] font-semibold text-[#111a13] md:text-lg">
              Stuttgart & Umgebung
            </p>

            <p className="mt-2 text-[13px] leading-6 text-[#556055] md:text-sm">
              Persönlich vor Ort – mit kurzen Wegen und klaren Absprachen.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}