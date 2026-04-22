import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  {
    quote: "Binary Vision rebuilt our entire data platform in 90 days. Their team set the bar for what enterprise IT partnership should feel like.",
    name: "Sarah Mitchell",
    role: "CTO, Northwind Capital",
  },
  {
    quote: "Migrating to multi-cloud felt impossible until we partnered with Binary. Zero downtime, faster releases and a happier engineering team.",
    name: "Daniel Reyes",
    role: "VP Engineering, Helix Health",
  },
  {
    quote: "The level of attention to detail is unmatched. They understood our business as well as our codebase from week one.",
    name: "Amelia Chen",
    role: "Head of Product, Lumen Retail",
  },
];

const ease = [0.4, 0, 0.2, 1] as const;

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = items[i];
  const next = () => setI((x) => (x + 1) % items.length);
  const prev = () => setI((x) => (x - 1 + items.length) % items.length);

  return (
    <section className="section-pad bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight">
            What our clients say about working with us.
          </h2>
          <p className="mt-5 text-body leading-relaxed max-w-md">
            We measure success by the outcomes our clients achieve. Hear directly from the leaders we partner with every day.
          </p>
          <div className="mt-8 flex gap-3">
            <button onClick={prev} aria-label="Previous" className="grid h-12 w-12 place-items-center rounded-full ring-1 ring-border text-heading hover:bg-gradient-brand hover:text-white hover:ring-transparent transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} aria-label="Next" className="grid h-12 w-12 place-items-center rounded-full ring-1 ring-border text-heading hover:bg-gradient-brand hover:text-white hover:ring-transparent transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <Quote className="absolute -top-6 -left-2 text-primary/10" size={120} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease }}
              className="relative bg-surface rounded-3xl p-8 md:p-10 ring-1 ring-border shadow-md"
            >
              <div className="flex gap-1 text-primary-glow">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-6 text-lg md:text-xl font-medium text-heading leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-white font-display font-bold text-lg">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-heading">{t.name}</div>
                  <div className="text-sm text-body">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
