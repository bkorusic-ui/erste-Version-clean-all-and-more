import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    
    <section
      id="kontakt"
      className="scroll-mt-24 bg-[#789873] px-5 pt-12 pb-24 md:scroll-mt-28 md:px-8 md:pt-16 md:pb-32"
      >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 md:gap-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-white/65 md:text-[12px]">
            Kontakt
          </p>

          <h2 className="max-w-xl text-[34px] font-semibold leading-[1.2] tracking-[-0.04em] text-white md:text-[36px]">
            Schreiben Sie uns –
            <br />
            wir melden uns zeitnah.
          </h2>

          <p className="mt-6 max-w-lg text-[15px] leading-7 text-white/80 md:text-[16px]">
            Kostenfreies Angebot, persönliche Beratung und ehrliche
            Einschätzung für Ihr Objekt oder Ihren Garten.
          </p>

          <div className="mt-10 space-y-5">
            {[
              [Phone, "0172 7306716"],
              [Mail, "cleanallandmore@gmx.de"],
              [MapPin, "Möhringer-Landstr. 14 A, 70563 Stuttgart"],
              [Clock, "Mo – Sa · 08:00 – 18:00 Uhr"],
            ].map(([Icon, text]) => (
              <div key={text as string} className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Icon size={16} strokeWidth={2} className="text-white" />
                </div>

                <span className="text-[15px] text-white/90">
                  {text as string}
                </span>
              </div>
            ))}
          </div>
        </div>
         <form
            action="https://formsubmit.co/cleanallandmore@gmx.de"
            method="POST"
            className="rounded-[24px] border border-white/20 bg-white/5 p-6 backdrop-blur-md md:rounded-[28px] md:p-7"
          >
            <input type="hidden" name="_subject" value="Neue Anfrage über Clean all and more" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" />

            <label className="mb-2 block text-[13px] font-medium text-white/80">
              Name
            </label>

            <input
              type="text"
                name="name"
                required
                placeholder="Ihr Name"
                className="mb-4 w-full rounded-[16px] border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-white placeholder:text-white/45 outline-none transition focus:border-white/60"
              />

              <label className="mb-2 block text-[13px] font-medium text-white/80">
                E-Mail oder Telefon
              </label>

              <input
                type="text"
                name="kontakt"
                required
                placeholder="So erreichen wir Sie"
                className="mb-4 w-full rounded-[16px] border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-white placeholder:text-white/45 outline-none transition focus:border-white/60"
              />

              <label className="mb-2 block text-[13px] font-medium text-white/80">
                Nachricht
              </label>

              <textarea
                name="nachricht"
                required
                rows={4}
                placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                className="w-full resize-none rounded-[16px] border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-white placeholder:text-white/45 outline-none transition focus:border-white/60"
              />

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#fbf8f0] py-3 text-[15px] font-semibold text-[#789873] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Anfrage senden
                <ArrowRight size={16} />
              </button>
            </form>
        
      </div>
    </section>
  );
}