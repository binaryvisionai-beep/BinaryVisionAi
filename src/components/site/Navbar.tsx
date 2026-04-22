import { useEffect, useState } from "react";
import { Search, Globe, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(11,19,43,0.12)] border-b border-border/60"
          : "bg-transparent"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white font-display font-bold text-sm shadow-glow">
            B
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-heading">
            BINARY<span className="text-gradient-brand">.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-heading/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-brand after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <button aria-label="Search" className="text-heading/70 hover:text-primary transition-colors">
            <Search size={18} />
          </button>
          <button className="flex items-center gap-1.5 text-sm font-medium text-heading/80 hover:text-primary transition-colors">
            <Globe size={16} /> EN
          </button>
          <a href="#contact" className="btn-gradient text-sm">Get a quote now</a>
        </div>

        <button
          className="lg:hidden text-heading"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-heading"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-gradient justify-center mt-2">Get a quote now</a>
          </div>
        </div>
      )}
    </header>
  );
}
