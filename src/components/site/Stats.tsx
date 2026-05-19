import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 100, suffix: "%", label: "Automation Focus" },
  { value: 10, suffix: "x", label: "Efficiency Improvement" },
  { value: 24, suffix: "/7", label: "System Reliability" },
  { value: 100, suffix: "%", label: "Scalable Design" },
];

function CountUp({
  end,
  decimals = 0,
  suffix = "",
}: {
  end: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(end * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-dark">
      <div
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(79,107,255,0.6), transparent 50%), radial-gradient(circle at 80% 70%, rgba(79,107,255,0.4), transparent 50%)",
        }}
      />

<div className="container-x relative grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
  {stats.map((s, i) => (
    <motion.div
      key={s.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="flex flex-col items-center justify-center py-8"
    >
      <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        <CountUp end={s.value} suffix={s.suffix} />
      </div>

      <div className="mt-3 text-xs md:text-sm text-white/70 uppercase tracking-wider max-w-[160px]">
        {s.label}
      </div>
    </motion.div>
  ))}
</div>
    </section>
  );
}