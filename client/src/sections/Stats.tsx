import { Reveal, Counter } from "@/components/motion";
import { STATS } from "@/lib/data";

const MARQUEE = [
  "UI Design", "Identité visuelle", "Prototypage Figma", "Direction artistique",
  "UX Research", "Print & édition", "Design system", "Web design",
];

export default function Stats() {
  return (
    <section className="border-y border-border bg-paper">
      {/* Marquee */}
      <div className="relative overflow-hidden py-5 border-b border-border">
        <div className="flex gap-10 whitespace-nowrap animate-[marquee_28s_linear_infinite] will-change-transform">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-2xl md:text-3xl text-ink/85 italic">
              {m}
              <span className="not-italic text-gold">✦</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>

      {/* Chiffres clés */}
      <div className="container py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="relative">
              <p className="font-display text-[clamp(2.6rem,6vw,4rem)] font-semibold text-wine leading-none">
                <Counter to={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[14px] text-muted-foreground leading-snug max-w-[14rem]">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
