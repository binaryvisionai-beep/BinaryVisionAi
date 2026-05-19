import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import industriesImg from "@/assets/industries.jpg";

const ease = [0.4, 0, 0.2, 1] as const;

const tabs = [
  {
    key: "discovery",
    label: "Discovery",
    title: "Understanding the problem before writing code.",
    body: "Every project starts by deeply understanding your business workflows and identifying where AI and automation can create real impact.",
    points: [
      "Business & workflow analysis",
      "Identifying automation opportunities",
      "Planning scalable architecture",
    ],
  },
  {
    key: "build",
    label: "Build",
    title: "Designing and building intelligent digital systems.",
    body: "We build modern web, mobile, and backend systems with AI and automation at the core, engineered for performance and scale.",
    points: [
      "Modern web & mobile development",
      "API & backend integrations",
      "AI-powered workflows",
    ],
  },
  {
    key: "optimize",
    label: "Optimize",
    title: "Improving performance and scaling intelligently.",
    body: "Post-launch, we continuously refine systems, improve speed, and enhance workflows to ensure long-term efficiency and growth.",
    points: [
      "Speed & performance optimization",
      "Workflow improvements",
      "Continuous system enhancements",
    ],
  },
];

export function Industries() {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active)!;

  return (
    <section className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeader
          eyebrow="How We Work"
          title={<>Our Working Approach</>}
        />

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className="relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              <span
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  active === t.key
                    ? "bg-gradient-brand shadow-glow"
                    : "bg-background ring-1 ring-border"
                }`}
              />
              <span
                className={`relative z-10 ${
                  active === t.key ? "text-white" : "text-heading hover:text-primary"
                }`}
              >
                {t.label}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-14 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-[2rem] overflow-hidden ring-1 ring-border shadow-brand">
            <img
              src={industriesImg}
              alt="Our working approach to building AI and automation systems"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
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