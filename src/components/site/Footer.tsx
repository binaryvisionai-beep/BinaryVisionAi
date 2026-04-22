import { Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoWhite from "@/assets/binary-vision-logo-white.png";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const gallery = [case1, case2, case3, blog1, blog2, blog3];

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-white pt-20 pb-8">
      <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#home" className="inline-flex items-center" aria-label="Binary Vision AI">
            <img src={logoWhite} alt="Binary Vision AI" className="h-12 w-auto object-contain" />
          </a>
          <p className="mt-5 text-sm text-white/70 leading-relaxed">
            Binary Vision AI delivers premium IT services that help ambitious businesses scale faster, ship safer and grow smarter.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-gradient-brand transition-all duration-300 hover:scale-110" aria-label="Social link">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Newsletter</h4>
          <p className="mt-4 text-sm text-white/70">Subscribe for industry insights, delivered monthly.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-5 relative">
            <input type="email" placeholder="Your email" className="w-full rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/50 pl-5 pr-14 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-glow" />
            <button type="submit" aria-label="Subscribe" className="absolute right-1.5 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-gradient-brand hover:scale-110 transition-transform">
              <Send size={14} />
            </button>
          </form>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Official Info</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>1280 Market Street, San Francisco</li>
            <li>+1 (415) 555-0192</li>
            <li>hello@binaryvision.ai</li>
            <li>Mon — Fri: 9:00 — 18:00 PST</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white">Gallery</h4>
          <div className="mt-5 grid grid-cols-3 gap-2.5">
            {gallery.map((g, i) => (
              <a key={i} href="#" className="aspect-square overflow-hidden rounded-lg ring-1 ring-white/10 group">
                <img src={g} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
        <div>© {new Date().getFullYear()} Binary Vision AI. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
