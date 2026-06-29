import { Link } from "react-router-dom";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#d8d2c4] bg-[#f8f6ee] px-5 py-12 md:px-8 md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <img
              src="/public:logo.png"
              alt="Clean all and more"
              className="h-16 w-auto md:h-20"
            />

            <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-[#6f766d]">
              Hausmeisterservice & Gartenpflege
              <br />
              Stuttgart & Umgebung
            </p>
          </div>

          <div className="flex flex-col gap-3 text-[15px] text-[#556055] md:flex-row md:items-center md:gap-8">
            <Link to="/impressum" className="transition hover:text-[#789873]">
              Impressum
            </Link> 

            <Link to="/datenschutz" className="transition hover:text-[#789873]">
              Datenschutz
            </Link>

            <a href="#kontakt" className="transition hover:text-[#789873]">
              Kontakt
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-[#d8d2c4] pt-6 text-[13px] text-[#6f766d] md:flex-row">
          <p>© {year} Clean all and more. Alle Rechte vorbehalten.</p>

          <p>Möhringer-Landstr. 14 A · 70563 Stuttgart</p>
        </div>
      </div>
    </footer>
  );
}