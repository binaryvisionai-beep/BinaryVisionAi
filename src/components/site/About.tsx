import { motion } from "framer-motion";
import { ShieldCheck, Rocket, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-image.jpg";

const ease = [0.4, 0, 0.2, 1] as const;

export function About() {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="relative"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-brand ring-1 ring-border relative aspect-[4/5]">
            <img
              src={aboutImg}
              alt="About Binary Vision AI"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4"
          >
            About Binary
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight"
          >
            Designing the future with AI and automation.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mt-5 text-body leading-relaxed"
          >
            We build modern, automation-focused solutions that replace repetitive
            processes with intelligent workflows and scalable architecture.
          </motion.p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: ShieldCheck,
                title: "AI-Driven Solutions",
                body:
                  "Custom AI systems that automate and scale business operations.",
              },
              {
                icon: Rocket,
                title: "Automation Experts",
                body:
                  "We replace manual work with intelligent workflows.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease }}
                className="flex gap-4"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <f.icon size={20} />
                </div>
                <div>
                  <div className="font-semibold text-heading">{f.title}</div>
                  <div className="text-sm text-body mt-1">{f.body}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease }}
            className="mt-9"
          >
            <a href="#services" className="btn-gradient">
              Learn more about us <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}