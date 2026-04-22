import { motion } from "framer-motion";
import { Cloud, Cpu, ShieldCheck, LineChart, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  { icon: Cloud, title: "Cloud Infrastructure", body: "Scalable, resilient cloud architectures on AWS, Azure and GCP — designed for performance and cost efficiency." },
  { icon: Cpu, title: "AI & Data Engineering", body: "Custom ML models, LLM integrations and data pipelines that turn raw data into business intelligence." },
  { icon: ShieldCheck, title: "Cybersecurity", body: "Proactive threat detection, penetration testing and compliance frameworks to protect what matters most." },
  { icon: LineChart, title: "Digital Transformation", body: "End-to-end modernization roadmaps that align technology investments with measurable business outcomes." },
];

const ease = [0.4, 0, 0.2, 1] as const;

export function Services() {
  return (
    <section id="services" className="section-pad bg-background">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we do"
          title={<>Premium IT services <br className="hidden md:block" />for ambitious businesses.</>}
          description="From cloud-native architecture to AI engineering, we deliver the full stack of services modern enterprises need to outpace their competition."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="group relative rounded-2xl bg-background p-7 ring-1 ring-border transition-all duration-300 hover:-translate-y-2 hover:shadow-brand hover:ring-primary-glow/40"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-[0.03] transition-opacity" />
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow transition-transform group-hover:scale-110">
                <s.icon size={24} />
              </div>
              <h3 className="mt-6 font-display text-xl text-heading">{s.title}</h3>
              <p className="mt-3 text-sm text-body leading-relaxed">{s.body}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Read more <ArrowUpRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
