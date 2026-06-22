import { Reveal } from "@/components/motion";
import { PROCESS } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 scroll-mt-20">
      <div className="container">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow text-wine">03 — Ma méthode</span>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold text-ink leading-[1.02]">
            Une démarche UX, <span className="italic text-wine">de bout en bout.</span>
          </h2>
          <p className="mt-5 text-[16px] text-muted-foreground leading-relaxed">
            Je ne dessine pas seulement des écrans : je structure une réflexion.
            Voici les six étapes qui guident chacun de mes projets.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-[1.4rem] overflow-hidden border border-border">
          {PROCESS.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 0.06}
              className="group bg-card p-7 md:p-8 transition-colors duration-500 hover:bg-wine"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl font-semibold text-blush group-hover:text-gold transition-colors duration-500">
                  {p.n}
                </span>
                <span className="h-2 w-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink group-hover:text-cream transition-colors duration-500">
                {p.title}
              </h3>
              <p className="mt-2 text-[15px] text-muted-foreground group-hover:text-cream/80 transition-colors duration-500 leading-relaxed">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
