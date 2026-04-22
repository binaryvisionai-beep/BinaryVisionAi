import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import industriesImg from "@/assets/industries.jpg";

const tabs = [
  {
    key: "mission",
    label: "Company Mission",
    title: "Building the digital backbone of tomorrow's leaders.",
    body: "Our mission is to deliver IT solutions that don't just work — they transform. We partner with companies serious about scaling their impact through better technology.",
    points: ["Strategic technology consulting", "Long-term partnership focus", "Outcome-driven engagements"],
  },
  {
    key: "awards",
    label: "Awards Winner",
    title: "Recognized excellence across the industry.",
    body: "Three-time winner of the Cloud Innovation Award and consistently ranked among the top 50 IT consultancies globally by independent analysts.",
    points: ["Top 50 Global IT Consultancy 2024", "Cloud Innovation Award (2022, 2023, 2024)", "Best Workplace in Tech — 4 years running"],
  },
  {
    key: "software",
    label: "Using Software",
    title: "Best-in-class tooling powering every project.",
    body: "We invest in the platforms our engineers love — from infrastructure-as-code to observability — so your team gets production-grade systems from day one.",
    points: ["Kubernetes, Terraform, ArgoCD", "Datadog, Grafana, Sentry", "GitHub Enterprise & Linear"],
  },
];

const ease = [0.4, 0, 0.2, 1] as const;

export function Industries() {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active)!;

  return (
    <section className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeader
          eyebrow="Industries"
          title={<>Trusted by leaders across every <span className="text-gradient-brand">industry</span></>}
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                active === t.key
                  ? "bg-gradient-brand text-white shadow-glow"
                  : "bg-background text-heading ring-1 ring-border hover:ring-primary/40"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-[2rem] overflow-hidden ring-1 ring-border shadow-brand">
            <img src={industriesImg} alt="Industries we serve" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease }}
            >
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-tight">
                {current.title}
              </h3>
              <p className="mt-5 text-body leading-relaxed">{current.body}</p>
              <ul className="mt-6 space-y-3">
                {current.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                    <span className="text-heading font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
