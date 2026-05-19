import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-business.jpg";

const ease = [0.4, 0, 0.2, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-hero-shapes">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-brand opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-[400px] w-[400px] rounded-full bg-primary-glow/15 blur-3xl" />

      <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
            Welcome to Binary Vision AI
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight"
          >
            Think Big. We make <span className="text-gradient-brand">IT possible!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="mt-6 max-w-xl text-base md:text-lg text-body leading-relaxed"
          >
            Binary Vision AI builds practical AI solutions that automate tasks, improve efficiency, and create scalable digital systems for growing businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href="#services" className="btn-gradient">
              Explore Services <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-8"
          >
            <div>
              <div className="font-display text-2xl font-bold text-heading">AI Solutions</div>
              <div className="text-xs text-body uppercase tracking-wider">Intelligent Automation</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-bold text-heading">Modern Tech Stack</div>
              <div className="text-xs text-body uppercase tracking-wider">Latest AI & Web Technologies</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-bold text-heading">Scalable Systems</div>
              <div className="text-xs text-body uppercase tracking-wider">Designed for Growth</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-heading">Smart Workflows</div>
              <div className="text-xs text-body uppercase tracking-wider">Process Optimization</div>
            </div>
          </motion.div>
          
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-3xl rounded-[2rem]" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-brand ring-1 ring-border">
            <img
              src={heroImg}
              alt="Team designing AI and automation systems"
              width={1280}
              height={1280}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}