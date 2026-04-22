import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

const ease = [0.4, 0, 0.2, 1] as const;

function CaseCard({ img, tag, title, big }: { img: string; tag: string; title: string; big?: boolean }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease }}
      className={`group relative block overflow-hidden rounded-[1.75rem] ring-1 ring-border ${big ? "h-full min-h-[400px]" : "h-full min-h-[240px]"}`}
    >
      <img src={img} alt={title} loading="lazy" width={1280} height={big ? 1280 : 768} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{tag}</span>
        <h3 className={`mt-2 font-display ${big ? "text-2xl md:text-3xl" : "text-lg md:text-xl"} text-white`}>
          {title}
        </h3>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          View case study <ArrowUpRight size={16} />
        </span>
      </div>
    </motion.a>
  );
}

export function CaseStudies() {
  return (
    <section id="portfolio" className="section-pad bg-background">
      <div className="container-x">
        <SectionHeader
          eyebrow="Case studies"
          title={<>Technology Is Transforming <br className="hidden md:block"/>Every Industry Sector</>}
          description="Real outcomes from real engagements — explore how we've helped businesses across finance, healthcare and retail unlock new growth."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-7">
          <CaseCard img={case1} tag="Cloud Infrastructure" title="Migrating a global bank to a zero-downtime multi-cloud platform" big />
          <div className="grid gap-6 lg:gap-7">
            <CaseCard img={case2} tag="Software Engineering" title="Custom developer platform that cut shipping time by 60%" />
            <CaseCard img={case3} tag="Data & Analytics" title="Real-time analytics dashboard powering 10M+ daily decisions" />
          </div>
        </div>
      </div>
    </section>
  );
}
