import { motion } from "framer-motion";

const projects = [
  {
    title: "Gartenpflege",
    category: "Gartenpflege",
    image: "/referenz-1.jpg",
  },
  {
    title: "Heckenschnitt",
    category: "Gartenpflege",
    image: "/referenz-2.jpg",
  },
  {
    title: "Objektpflege",
    category: "Hausmeisterservice",
    image: "/referenz-3.jpg",
  },
  {
    title: "Außenanlage",
    category: "Hausmeisterservice",
    image: "/referenz-4.jpg",
  },
];

export default function Referenzen() {
  return (
    <main className="bg-[#f8f6ee]">
      <section className="px-5 pt-16 pb-10 md:px-8 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#789873]"
          >
            Referenzen
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl text-[42px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#111a13] md:text-[72px]"
          >
            Echte Arbeiten.
            <br />
            Sichtbare Qualität.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-[16px] leading-7 text-[#4d594d] md:text-xl md:leading-9"
          >
            Ein Einblick in unsere abgeschlossenen Arbeiten rund um
            Hausmeisterservice, Objektpflege und Gartenpflege.
          </motion.p>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-[28px] border border-[#d9d2c5] bg-white shadow-xl shadow-black/5"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-5">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#789873]">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold text-[#111a13]">
                  {project.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}