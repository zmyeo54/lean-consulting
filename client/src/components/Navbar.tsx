/**
 * Navbar — Lean Consulting
 * Style: Sticky top nav, Alabaster Cream bg, Burgundy text, Gold accents
 * Brand: Century Gothic headings, Inter body, premium spacing
 */
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Framework", href: "#framework" },
  { label: "Industries", href: "#industries" },
  { label: "AI", href: "#ai" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E6DFD5]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 shrink-0"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <img
              src="/manus-storage/LeanConsultingLogo_943f252d.png"
              alt="Lean Consulting"
              className="h-9 w-9 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span
                className={`font-semibold text-sm tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-[#1A1513]" : "text-white"
                }`}
                style={{ fontFamily: "'Montserrat', 'Questrial', sans-serif" }}
              >
                Lean Consulting
              </span>
              <span
                className="text-[9px] tracking-[0.15em] uppercase font-medium"
                style={{
                  color: "#8b0000",
                  fontFamily: "'Inter', 'Noto Sans', sans-serif",
                }}
              >
                Standard-First ERP
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs font-medium tracking-wide transition-colors duration-200 hover:text-[#8b0000] ${
                  scrolled ? "text-[#1A1513]" : "text-white/80"
                }`}
                style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className={`text-xs font-medium tracking-wide transition-colors duration-200 ${
                scrolled ? "text-[#1A1513] hover:text-[#8b0000]" : "text-white/80 hover:text-white"
              }`}
              style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif" }}
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-press px-4 py-2 text-xs font-semibold text-[#1A1513] rounded-md transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#D4AF37",
                fontFamily: "'Inter', 'Noto Sans', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-5 h-0.5 transition-all duration-200 ${
                  scrolled ? "bg-[#1A1513]" : "bg-white"
                } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-200 ${
                  scrolled ? "bg-[#1A1513]" : "bg-white"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-200 ${
                  scrolled ? "bg-[#1A1513]" : "bg-white"
                } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E6DFD5] shadow-lg">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-2 py-2.5 text-sm font-medium text-[#1A1513] hover:text-[#8b0000] transition-colors"
                style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#E6DFD5] mt-2">
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-press w-full py-2.5 text-sm font-semibold text-[#1A1513] rounded-md"
                style={{ backgroundColor: "#D4AF37", fontFamily: "'Inter', 'Noto Sans', sans-serif" }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
