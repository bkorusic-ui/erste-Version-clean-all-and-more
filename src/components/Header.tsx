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
        time: Date.now(),
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5dfd3]/80 bg-[#f8f6ef]/90">
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

            <div className="invisible absolute left-1/2 top-full z-[9999] mt-7 w-60 -translate-x-1/2 rounded-3xl border border-[#e5dfd3] bg-[#f8f6ef] p-3 opacity-0  transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <button
                onClick={() => goToSection("hausmeisterservice")}
                className="flex w-full items-center justify-between rounded-2xl px-5 py-3 text-left text-[15px] font-medium text-[#243424] transition-all duration-200 hover:bg-[#ede8db] hover:text-[#789873]"
              >
                <span>Hausmeisterservice</span>
                <span className="text-[#789873]"></span>
              </button>

              <button
                onClick={() => goToSection("gartenpflege")}
                className="mt-2 flex w-full items-center justify-between rounded-2xl px-5 py-3 text-left text-[15px] font-medium text-[#243424] transition-all duration-200 hover:bg-[#ede8db] hover:text-[#789873]"
              >
                <span>Gartenpflege</span>
                <span className="text-[#789873]"></span>
              </button>
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
            <button
              onClick={() => goToSection("leistungen")}
              className="text-left"
            >
              Leistungen
            </button>

            <div className="ml-4 flex flex-col gap-3 border-l border-[#d8d2c4] pl-4 text-[16px] text-[#6b756b]">
              <button
                onClick={() => goToSection("hausmeisterservice")}
                className="text-left"
              >
                Hausmeisterservice
              </button>

              <button
                onClick={() => goToSection("gartenpflege")}
                className="text-left"
              >
                Gartenpflege
              </button>
            </div>

            <button
              onClick={() => goToSection("ueber-uns")}
              className="text-left"
            >
              Über uns
            </button>

            <button
              onClick={() => goToSection("ablauf")}
              className="text-left"
            >
              Ablauf
            </button>

            <button
              onClick={() => goToSection("kontakt")}
              className="text-left"
            >
              Kontakt
            </button>

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