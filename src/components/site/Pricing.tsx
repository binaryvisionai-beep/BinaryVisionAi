import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const plans = [
  {
    name: "Basic",
    monthly: 29,
    yearly: 290,
    description: "Perfect for small teams getting started with managed IT.",
    features: ["10 hours support /mo", "Email & chat support", "Cloud monitoring", "Basic security audit"],
    highlighted: false,
  },
  {
    name: "Standard",
    monthly: 79,
    yearly: 790,
    description: "Most popular — built for growing companies that need more.",
    features: ["40 hours support /mo", "Priority 24/7 support", "Advanced monitoring", "Quarterly security audits", "Dedicated account manager"],
    highlighted: true,
  },
  {
    name: "Extended",
    monthly: 149,
    yearly: 1490,
    description: "Enterprise-grade SLAs and custom engineering capacity.",
    features: ["Unlimited support", "Dedicated engineering team", "Custom SLA & uptime", "Continuous security ops", "On-site visits"],
    highlighted: false,
  },
];

const ease = [0.4, 0, 0.2, 1] as const;

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Plans built to scale with your business.</>}
          description="Transparent pricing with no hidden fees. Upgrade, downgrade or cancel whenever your needs change."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-background ring-1 ring-border">
            {(["Monthly", "Yearly"] as const).map((label, i) => {
              const isYearly = i === 1;
              const active = yearly === isYearly;
              return (
                <button
                  key={label}
                  onClick={() => setYearly(isYearly)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    active ? "bg-gradient-brand text-white shadow-glow" : "text-heading/70 hover:text-heading"
                  }`}
                >
                  {label}
                  {isYearly && <span className="ml-2 text-xs opacity-90">-15%</span>}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-7">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.03] ${
                p.highlighted
                  ? "bg-gradient-dark text-white shadow-brand ring-1 ring-primary-glow/40"
                  : "bg-background ring-1 ring-border hover:shadow-brand"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-brand text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-glow">
                  Most Popular
                </span>
              )}
              <div className={`text-sm font-semibold uppercase tracking-wider ${p.highlighted ? "text-primary-glow" : "text-primary"}`}>
                {p.name}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className={`font-display text-5xl font-bold ${p.highlighted ? "text-white" : "text-heading"}`}>
                  ${yearly ? p.yearly : p.monthly}
                </span>
                <span className={`text-sm ${p.highlighted ? "text-white/70" : "text-body"}`}>
                  /{yearly ? "yr" : "mo"}
                </span>
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${p.highlighted ? "text-white/70" : "text-body"}`}>
                {p.description}
              </p>
              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full mt-0.5 ${p.highlighted ? "bg-primary-glow text-white" : "bg-primary/10 text-primary"}`}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className={`text-sm ${p.highlighted ? "text-white/90" : "text-heading"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block text-center w-full font-semibold rounded-full py-3 transition-all duration-300 ${
                  p.highlighted
                    ? "bg-white text-primary hover:scale-105"
                    : "bg-gradient-brand text-white hover:scale-105 shadow-glow"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
