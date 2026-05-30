import { useEffect, useState } from "react";
import { Search, Globe, Menu, X } from "lucide-react";
import logo from "@/assets/binary-vision-logo-transparent.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  // { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    const searchableSections = [
      { keyword: "home", href: "#home" },
      { keyword: "about", href: "#about" },
      { keyword: "services", href: "#services" },
      { keyword: "blog", href: "#blog" },
      { keyword: "contact", href: "#contact" },
    ];

    const match = searchableSections.find((item) =>
      item.keyword.toLowerCase().includes(query.toLowerCase())
    );

    if (match) {
      window.location.hash = match.href;
    }

    setSearchOpen(false);
    setSearchQuery("");
  };

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
        <a
          href="#home"
          className="flex items-center"
          aria-label="Binary Vision AI"
        >
          {/* <img
            src={logo}
            alt="Binary Vision AI"
            className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          /> */}

          <img
            src={logo}
            alt="Binary Vision AI"
            className="h-10 md:h-12 w-auto object-contain filter-none transition-transform duration-300 hover:scale-[1.04]"
          />
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
          <button
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="text-heading/70 hover:text-primary transition-colors"
          >
            <Search size={18} />
          </button>

          {/* <button className="flex items-center gap-1.5 text-sm font-medium text-heading/80 hover:text-primary transition-colors">
            <Globe size={16} /> EN
          </button> */}

          <a href="#contact" className="btn-gradient text-sm">
            Get a quote now
          </a>
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

            <a href="#contact" className="btn-gradient justify-center mt-2">
              Get a quote now
            </a>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 backdrop-blur-sm pt-32">
          <div className="w-full max-w-xl mx-4 bg-background border border-border rounded-xl shadow-xl p-4">
            <form onSubmit={handleSearch} className="flex gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                autoFocus
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background outline-none"
              />

              <button
                type="submit"
                className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                Search
              </button>

              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}