import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Reveal, Sticker } from "@/components/motion";
import { CONTACT } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden scroll-mt-20">
      {/* Arabesque */}
      <svg className="pointer-events-none absolute -left-16 -bottom-10 w-[420px] h-[420px] text-gold/20" viewBox="0 0 400 400" fill="none">
        <path d="M30 200 C 90 60, 200 60, 230 150 S 360 280, 360 200 S 250 360, 180 320" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" />
      </svg>

      <div className="container relative">
        <Reveal className="max-w-3xl">
          <span className="eyebrow text-gold">04 — Travaillons ensemble</span>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,6.5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
            {CONTACT.availability} —<br />
            <span className="italic text-gold">parlons de votre prochain produit.</span>
          </h2>
          <p className="mt-6 text-[17px] md:text-[18px] text-cream/70 max-w-xl leading-relaxed">
            Je recherche un premier CDI en UI design au sein d'une équipe produit,
            d'un studio ou d'une agence. Une question, un projet, un café ? Écrivez-moi.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-end">
          <Reveal delay={0.1} className="space-y-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-cream/15 px-6 py-5 hover:border-gold hover:bg-cream/5 transition-colors"
            >
              <span className="flex items-center gap-4">
                <Mail size={20} className="text-gold" />
                <span className="text-lg font-medium">{CONTACT.email}</span>
              </span>
              <ArrowUpRight size={20} className="text-cream/50 group-hover:text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-cream/15 px-6 py-5 hover:border-gold hover:bg-cream/5 transition-colors"
            >
              <span className="flex items-center gap-4">
                <Phone size={20} className="text-gold" />
                <span className="text-lg font-medium">{CONTACT.phone}</span>
              </span>
              <ArrowUpRight size={20} className="text-cream/50 group-hover:text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-cream/15 px-6 py-5">
              <MapPin size={20} className="text-gold" />
              <span className="text-lg font-medium">{CONTACT.location}</span>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="flex flex-col gap-5 md:items-end">
            <div className="flex flex-wrap gap-2.5 md:justify-end">
              <Sticker rotate={-4} color="var(--gold)" bg="transparent">Créative</Sticker>
              <Sticker rotate={3} color="var(--gold)" bg="transparent">Adaptabilité</Sticker>
              <Sticker rotate={-2} color="var(--gold)" bg="transparent">UI Design</Sticker>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <button
                onClick={() => toast("Lien LinkedIn à connecter", { description: "Ajoutez votre profil pour activer ce bouton." })}
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-3 text-sm font-medium hover:bg-cream hover:text-ink transition-colors"
              >
                LinkedIn <ArrowUpRight size={15} />
              </button>
              <button
                onClick={() => toast("Lien Behance à connecter", { description: "Ajoutez votre profil pour activer ce bouton." })}
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-3 text-sm font-medium hover:bg-cream hover:text-ink transition-colors"
              >
                Behance <ArrowUpRight size={15} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
