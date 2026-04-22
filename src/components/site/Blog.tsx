import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  { img: b1, date: "Apr 12, 2026", title: "How AI agents are reshaping enterprise IT operations", desc: "Five emerging patterns we're seeing across customer deployments this quarter.", author: "Alex Kim" },
  { img: b2, date: "Apr 04, 2026", title: "The real cost of legacy infrastructure in 2026", desc: "A practical framework for quantifying technical debt and prioritizing modernization.", author: "Maya Patel" },
  { img: b3, date: "Mar 28, 2026", title: "Edge compute is finally ready for production workloads", desc: "Why latency-sensitive applications are moving closer to users — and what to consider.", author: "Jordan Lee" },
];

const ease = [0.4, 0, 0.2, 1] as const;

export function Blog() {
  return (
    <section id="blog" className="section-pad bg-surface">
      <div className="container-x">
        <SectionHeader
          eyebrow="Insights"
          title={<>Our Latest Blog</>}
          description="Deep dives, playbooks and strategic perspectives from our engineering and consulting teams."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="group bg-background rounded-3xl overflow-hidden ring-1 ring-border transition-all duration-300 hover:-translate-y-2 hover:shadow-brand"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              <div className="overflow-hidden aspect-[16/10]">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs text-body">
                  <Calendar size={14} /> {p.date}
                </div>
                <h3 className="mt-3 font-display text-xl text-heading leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-body leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white text-xs font-bold">
                      {p.author.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-sm font-medium text-heading">{p.author}</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    More details <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
