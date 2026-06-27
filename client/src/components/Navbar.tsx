/**
 * Navbar — Lean Consulting
 * Style: Sticky top nav, transparent → opaque on scroll
 * Brand: Deep crimson (#8B0000 equivalent), DM Sans, minimal
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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
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
                  scrolled ? "text-gray-900" : "text-white"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Lean Consulting
              </span>
              <span
                className="text-[9px] tracking-[0.15em] uppercase font-medium"
                style={{
                  color: "oklch(0.28 0.14 20)",
                  fontFamily: "'DM Sans', sans-serif",
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
                className={`text-xs font-medium tracking-wide transition-colors duration-200 hover:text-[oklch(0.28_0.14_20)] ${
                  scrolled ? "text-gray-600" : "text-white/80"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
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
                scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-press px-4 py-2 text-xs font-semibold text-white rounded-sm transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "oklch(0.28 0.14 20)",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Book a Discovery Call
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
                  scrolled ? "bg-gray-900" : "bg-white"
                } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-200 ${
                  scrolled ? "bg-gray-900" : "bg-white"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-200 ${
                  scrolled ? "bg-gray-900" : "bg-white"
                } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-2 py-2.5 text-sm font-medium text-gray-700 hover:text-[oklch(0.28_0.14_20)] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-2">
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-press w-full py-2.5 text-sm font-semibold text-white rounded-sm"
                style={{ backgroundColor: "oklch(0.28 0.14 20)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Book a Discovery Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
