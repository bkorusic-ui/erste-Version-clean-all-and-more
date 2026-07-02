// src/components/WhatsAppButton.tsx

export default function WhatsAppButton() {
  return (
    <a
        href="https://wa.me/491727306716?text=Hallo%20Clean%20all%20and%20more,%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen%20und%20h%C3%A4tte%20gerne%20ein%20unverbindliches%20Angebot."
                   target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Kontakt"
      className="group fixed bottom-6 right-6 z-[9999] flex scale-95 items-center gap-3 rounded-full bg-[#789873]/30 px-4 py-3 text-white opacity-55 shadow-md shadow-[#789873]/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:scale-100 hover:bg-[#789873] hover:opacity-100 hover:shadow-2xl hover:shadow-[#789873]/30 md:bottom-8 md:right-8">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <svg
          viewBox="0 0 32 32"
          className="h-6 w-6 fill-current"
          aria-hidden="true"
        >
          <path d="M16.01 3.2A12.73 12.73 0 0 0 5.2 22.66L3.5 28.8l6.3-1.65A12.72 12.72 0 1 0 16.01 3.2Zm0 23.18a10.34 10.34 0 0 1-5.27-1.44l-.38-.22-3.74.98 1-3.64-.25-.39a10.34 10.34 0 1 1 8.64 4.71Zm5.67-7.74c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.6-.51-.52-.71-.53h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.66.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z" />
        </svg>
      </span>

      <span className="hidden pr-1 text-sm font-semibold md:block">
        WhatsApp Anfrage
      </span>

      <span className="absolute bottom-full right-0 mb-3 hidden whitespace-nowrap rounded-full bg-[#111a13] px-4 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 md:block">
        Kostenlos per WhatsApp anfragen
      </span>
    </a>
  );
}