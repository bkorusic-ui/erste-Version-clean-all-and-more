import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";



export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

const goToSection = (id: string) => {
  setOpen(false);

  navigate("/", {
    state: {
      scrollTo: id,
    },
  });
};

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5dfd3]/80 bg-[#f8f6ef]/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:h-24 md:px-8">

        <Link to="/" className="flex items-center">
          <img
            src="/public:logo.png"
            alt="Clean All and More"
            className="h-14 w-auto md:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-11 text-[17px] font-medium text-[#4d594d] md:flex">
          <div className="group relative">
            <button
              onClick={() => goToSection("leistungen")}
              className="transition hover:text-[#789873]"
            >
              Leistungen
            </button>

            <div className="invisible absolute left-[-20px] top-full z-50 mt-7 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <a
                href="/#hausmeisterservice"
                className="block px-4 py-2 text-[15px] text-[#4d594d] transition hover:text-[#789873]"
              >
                Hausmeisterservice
              </a>

              <a
                href="/#gartenpflege"
                className="block px-4 py-2 text-[15px] text-[#4d594d] transition hover:text-[#789873]"
              >
                Gartenpflege
              </a>
            </div>
          </div>

            <button
              onClick={() => goToSection("ueber-uns")}
                className="transition hover:text-[#789873]"
              >
                Über uns
            </button>

          <button
              onClick={() => goToSection("ablauf")}
              className="transition hover:text-[#789873]"
            >
              Ablauf
            </button>

            <button
              onClick={() => goToSection("kontakt")}
              className="transition hover:text-[#789873]"
            >
              Kontakt
            </button>

          <Link to="/referenzen" className="transition hover:text-[#789873]">
            Referenzen
          </Link>
        </nav>

        <a
          href="tel:01727306716"
          className="hidden items-center gap-2 rounded-full bg-[#789873] px-7 py-3 text-[17px] font-semibold text-white shadow-lg shadow-[#789873]/20 transition hover:bg-[#6b8b67] md:flex"
        >
          <Phone size={19} />
          <span>Anrufen</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d2c4] bg-white/50 text-[#111a13] md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#e5dfd3] bg-[#f8f6ef] px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-5 text-[18px] font-medium text-[#4d594d]">

            <a href="/#leistungen" onClick={() => setOpen(false)}>
              Leistungen
            </a>

            <div className="ml-4 flex flex-col gap-3 border-l border-[#d8d2c4] pl-4 text-[16px] text-[#6b756b]">
              <a
                href="/#hausmeisterservice"
                onClick={() => setOpen(false)}
              >
                Hausmeisterservice
              </a>

              <a
                href="/#gartenpflege"
                onClick={() => setOpen(false)}
              >
                Gartenpflege
              </a>
            </div>

            <a href="/#ueber-uns" onClick={() => setOpen(false)}>
              Über uns
            </a>

            <a href="/#ablauf" onClick={() => setOpen(false)}>
              Ablauf
            </a>

            <a href="/#kontakt" onClick={() => setOpen(false)}>
              Kontakt
            </a>

            <Link to="/referenzen" onClick={() => setOpen(false)}>
              Referenzen
            </Link>
          </nav>

          <a
            href="tel:01727306716"
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#789873] px-6 py-3.5 text-[16px] font-semibold text-white"
          >
            <Phone size={18} />
            Anrufen
          </a>
        </div>
      )}
    </header>
  );
}