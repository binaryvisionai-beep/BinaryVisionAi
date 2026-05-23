import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Cpu, ShieldCheck, LineChart, ArrowUpRight, X } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useState } from "react";

const ease = [0.4, 0, 0.2, 1] as const;

const services = [
  {
    icon: Cpu,
    title: "Web & Mobile Development",
    body: "High-performance websites and mobile apps built with modern technologies and scalable architecture.",
    details: [
      "Modern React / Next / Flutter stacks",
      "Fully responsive & SEO optimized",
      "High performance architecture",
      "Production-ready deployment",
    ],
  },
  {
    icon: LineChart,
    title: "E-commerce Solutions",
    body: "Conversion-focused online stores with seamless checkout, automation, and performance optimization.",
    details: [
      "Conversion-focused store design",
      "Payment gateway integrations",
      "Cart, checkout & automation flows",
      "Performance & speed optimization",
    ],
  },
  {
    icon: Cloud,
    title: "API & Backend Systems",
    body: "Robust backend systems, third-party integrations, and APIs that power your digital ecosystem.",
    details: [
      "Custom backend architecture",
      "Third-party API integrations",
      "Secure & scalable data flow",
      "Database & server setup",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Digital Transformation & Performance",
    body: "Modernizing workflows, improving speed, and replacing manual processes with intelligent automation.",
    details: [
      "Workflow automation with AI",
      "Replacing manual processes",
      "Speed & performance optimization",
      "Scalable system redesign",
    ],
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-pad bg-background">
      <div className="container-x">
        <SectionHeader
          eyebrow="What We Build"
          title={<>Intelligent Systems & Digital Products for Growing Businesses</>}
          description="From web platforms to AI-powered systems, we design and build digital products that help businesses scale faster with less manual work."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="group cursor-pointer relative rounded-2xl bg-background p-7 ring-1 ring-border transition-all duration-300 hover:-translate-y-2 hover:shadow-brand hover:ring-primary-glow/40"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-[0.03] transition-opacity" />
              
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow transition-transform group-hover:scale-110">
                <s.icon size={24} />
              </div>

              <h3 className="mt-6 font-display text-xl text-heading">{s.title}</h3>
              <p className="mt-3 text-sm text-body leading-relaxed">{s.body}</p>

              <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
              See details <ArrowUpRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl bg-background p-8 shadow-brand ring-1 ring-border max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 text-body hover:text-heading transition"
              >
                <X />
              </button>

              <h3 className="font-display text-3xl text-heading mb-4">
                {services[activeIndex].title}
              </h3>

              <p className="text-body mb-6 leading-relaxed">
                {services[activeIndex].body}
              </p>

              <ul className="space-y-3">
                {services[activeIndex].details.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-body">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-glow" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}