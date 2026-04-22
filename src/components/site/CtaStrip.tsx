import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaStrip() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-dark p-10 md:p-14 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary-glow/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-glow mb-4">
              Let's Talk
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Looking for the Best IT Business Solutions?
            </h2>
          </div>
          <a href="#contact" className="relative btn-gradient !bg-white !bg-none !text-primary shrink-0">
            Get in touch <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
