import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    title: "Professioneller Heckenschnitt",
    location: "Stuttgart",
    category: "Gartenpflege",
    description: "Sauberer Heckenschnitt für gepflegte Außenanlagen und Wohnobjekte.",
    images: [
      "/images/references/heckenschnitt-stuttgart-1.webp",
      "/images/references/heckenschnitt-stuttgart-2.webp",
      "/images/references/heckenschnitt-stuttgart-3.webp",
    ],
    alt: "Professioneller Heckenschnitt an einer gepflegten Wohnanlage in Stuttgart.",
  },
  {
    title: "Gartenpflege für Wohnanlagen",
    location: "Stuttgart & Umgebung",
    category: "Gartenpflege",
    description: "Regelmäßige Pflege von Grünflächen, Beeten, Hecken und Außenbereichen.",
    images: [
      "/images/references/gartenpflege-wohnanlage-stuttgart-1.webp",
      "/images/references/gartenpflege-wohnanlage-stuttgart-2.webp",
    ],
    alt: "Regelmäßige Gartenpflege für eine gepflegte Wohnanlage in Stuttgart.",
  },
  {
    title: "Objektpflege für Mehrfamilienhäuser",
    location: "Region Stuttgart",
    category: "Hausmeisterservice",
    description: "Zuverlässige Betreuung von Wohnanlagen mit Blick für Sauberkeit und Details.",
    images: ["/images/references/objektpflege-mehrfamilienhaus-stuttgart-1.webp"],
    alt: "Objektpflege und Hausmeisterservice für ein Mehrfamilienhaus in Stuttgart.",
  },
  {
    title: "Pflege von Außenanlagen",
    location: "Stuttgart",
    category: "Hausmeisterservice",
    description: "Saubere Wege, gepflegte Eingänge und ordentlich betreute Außenbereiche.",
    images: ["/images/references/aussenanlage-pflege-stuttgart-1.webp"],
    alt: "Sauber gepflegte Außenanlage durch Hausmeisterservice in Stuttgart.",
  },
  {
    title: "Rasenpflege & Grünpflege",
    location: "Stuttgart",
    category: "Gartenpflege",
    description: "Gepflegte Grünflächen für einen hochwertigen ersten Eindruck.",
    images: ["/images/references/rasenpflege-gartenpflege-stuttgart-1.webp"],
    alt: "Gepflegte Rasenfläche nach professioneller Gartenpflege in Stuttgart.",
  },
  {
    title: "Hausmeisterservice für Wohnanlagen",
    location: "Stuttgart & Umgebung",
    category: "Hausmeisterservice",
    description: "Regelmäßige Objektbetreuung für Wohnanlagen, Eigentümer und Verwaltungen.",
    images: ["/images/references/hausmeisterservice-wohnanlage-stuttgart-1.webp"],
    alt: "Gepflegte Wohnanlage mit regelmäßigem Hausmeisterservice in Stuttgart.",
  },
];

const filters = ["Alle", "Hausmeisterservice", "Gartenpflege"];

export default function References() {
  const [activeFilter, setActiveFilter] = useState("Alle");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [activeImages, setActiveImages] = useState<Record<string, number>>({});

  const filteredProjects =
    activeFilter === "Alle"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getActiveImage = (title: string) => activeImages[title] ?? 0;

  const changeImage = (
  e: React.MouseEvent,
  project: (typeof projects)[number],
  direction: "prev" | "next"
) => {
  e.stopPropagation();

  setActiveImages((current) => {
    const active = current[project.title] ?? 0;
    const total = project.images.length;

    return {
      ...current,
      [project.title]:
        direction === "next"
          ? (active + 1) % total
          : active === 0
            ? total - 1
            : active - 1,
    };
  });
};

const changeSelectedImage = (direction: "prev" | "next") => {
  if (!selectedProject) return;

  setActiveImages((current) => {
    const active = current[selectedProject.title] ?? 0;
    const total = selectedProject.images.length;

    return {
      ...current,
      [selectedProject.title]:
        direction === "next"
          ? (active + 1) % total
          : active === 0
            ? total - 1
            : active - 1,
    };
  });
};

  return (
    <section
      id="referenzen"
      aria-labelledby="referenzen-heading"
      className="bg-[#f8f6ee] px-5 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#789873]">
              Referenzen
            </p>

            <h2
              id="referenzen-heading"
              className="max-w-3xl text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111a13] md:text-[54px]"
            >
              Referenzen für Hausmeisterservice & Gartenpflege in Stuttgart
            </h2>

            <p className="mt-6 max-w-2xl text-[16px] leading-7 text-[#556055] md:text-lg md:leading-8">
              Ein Einblick in unsere Arbeiten: gepflegte Wohnanlagen, sauberer
              Heckenschnitt, zuverlässige Objektpflege und professionelle
              Gartenpflege in Stuttgart und Umgebung.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2.5 text-[14px] font-semibold transition ${
                  activeFilter === filter
                    ? "border-[#789873] bg-[#789873] text-white"
                    : "border-[#d8d2c4] text-[#4d594d] hover:border-[#789873]/50 hover:bg-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredProjects.slice(0, 2).map((project, index) => {
            const active = getActiveImage(project.title);

            return (
              <motion.button
                key={project.title}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06 }}
                className="group relative h-[420px] overflow-hidden rounded-[30px] border border-[#d9d2c5] bg-white text-left shadow-xl shadow-black/5 md:h-[560px]"
              >
                <img
                  src={project.images[active]}
                  alt={project.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                {project.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => changeImage(e, project, "prev")}
                      className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111a13] opacity-0 transition group-hover:opacity-100"
                    >
                      <ChevronLeft size={22} />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => changeImage(e, project, "next")}
                      className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111a13] opacity-0 transition group-hover:opacity-100"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}

                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
                    {project.category} · {project.location}
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                    {project.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.slice(2).map((project, index) => {
            const active = getActiveImage(project.title);

            return (
              <motion.button
                key={project.title}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06 }}
                className="group relative h-[320px] overflow-hidden rounded-[28px] border border-[#d9d2c5] bg-white text-left shadow-xl shadow-black/5"
              >
                <img
                  src={project.images[active]}
                  alt={project.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {project.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => changeImage(e, project, "prev")}
                      className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111a13] opacity-0 transition group-hover:opacity-100"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => changeImage(e, project, "next")}
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111a13] opacity-0 transition group-hover:opacity-100"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5">
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Referenz schließen"
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#111a13]"
              >
                <X size={22} />
              </button>

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => changeSelectedImage("prev")}
                    aria-label="Vorheriges Bild"
                    className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111a13] transition hover:bg-white"
                  >
                    <ChevronLeft size={26} />
                  </button>

                  <button
                    onClick={() => changeSelectedImage("next")}
                    aria-label="Nächstes Bild"
                    className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111a13] transition hover:bg-white"
                  >
                    <ChevronRight size={26} />
                  </button>
                </>
              )}

              <div className="w-full max-w-5xl">
                <img
                  src={selectedProject.images[getActiveImage(selectedProject.title)]}
                  alt={selectedProject.alt}
                  className="max-h-[72vh] w-full rounded-[28px] object-contain"
                />

                {selectedProject.images.length > 1 && (
                  <div className="mt-4 flex justify-center gap-3 overflow-x-auto pb-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={image}
                        onClick={() =>
                          setActiveImages((current) => ({
                            ...current,
                            [selectedProject.title]: index,
                          }))
                        }
                        className={`h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                          getActiveImage(selectedProject.title) === index
                            ? "border-white"
                            : "border-white/20 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${selectedProject.alt} Bild ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                <div className="mt-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                    {selectedProject.category} · {selectedProject.location} ·{" "}
                    {getActiveImage(selectedProject.title) + 1} /{" "}
                    {selectedProject.images.length}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-white/75">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </div>
          )}
         
    </section>
  );
}