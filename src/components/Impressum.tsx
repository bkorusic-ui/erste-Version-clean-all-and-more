export default function Impressum() {
  return (
    <section className="min-h-screen bg-[#f8f6ee] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#789873]">
          Rechtliches
        </p>

        <h1 className="text-[42px] font-semibold tracking-[-0.04em] text-[#111a13] md:text-[60px]">
          Impressum
        </h1>

        <div className="mt-12 space-y-10 rounded-[28px] border border-[#d9d2c5] bg-white p-8 shadow-xl shadow-black/5 md:p-10">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-[#111a13]">
              Angaben gemäß § 5 TMG
            </h2>

            <p className="leading-8 text-[#4d594d]">
              <strong>Clean all and more</strong>
              <br />
              Inhaberin: Nada Kousic
              <br />
              Möhringer-Landstr. 14 A
              <br />
              70563 Stuttgart
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-[#111a13]">
              Kontakt
            </h2>

            <p className="leading-8 text-[#4d594d]">
              Telefon: 0172 / 7306716
              <br />
              E-Mail: cleanallandmore@gmx.de
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-[#111a13]">
              Umsatzsteuer
            </h2>

            <p className="leading-8 text-[#4d594d]">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a
              Umsatzsteuergesetz:
              <br />
              <em>Wird ergänzt.</em>
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-[#111a13]">
              Verantwortlich für den Inhalt
            </h2>

            <p className="leading-8 text-[#4d594d]">
              Nada Kousic
              <br />
              Möhringer-Landstr. 14 A
              <br />
              70563 Stuttgart
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}