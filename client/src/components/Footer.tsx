/**
 * Footer — Lean Consulting
 * Style: Dark background, multi-column links, logo left
 * Brand: Crimson accents, DM Sans
 */

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Our Philosophy", href: "#philosophy" },
    { label: "Implementation Framework", href: "#framework" },
    { label: "Industries", href: "#industries" },
  ],
  Services: [
    { label: "ERP Advisory", href: "#services" },
    { label: "ERP Implementation", href: "#services" },
    { label: "ERP Health Check", href: "#services" },
    { label: "AI Enablement", href: "#ai" },
  ],
  Resources: [
    { label: "Knowledge Centre", href: "#blog" },
    { label: "Contact", href: "#contact" },
    { label: "Book a Discovery Call", href: "#contact" },
  ],
};

export default function Footer() {
  const handleClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer style={{ backgroundColor: "oklch(0.09 0.005 285)" }}>
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/manus-storage/LeanConsultingLogo_943f252d.png"
                alt="Lean Consulting"
                className="h-8 w-8 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span
                  className="font-semibold text-sm text-white tracking-tight"
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
            </div>
            <p
              className="text-xs leading-relaxed max-w-[180px]"
              style={{
                color: "rgba(255,255,255,0.35)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
              }}
            >
              Independent ERP implementation consultancy. Standard-first,
              integrity-led.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div
                className="text-[10px] font-bold tracking-[0.15em] uppercase mb-4"
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {group}
              </div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleClick(link.href)}
                      className="text-xs transition-colors duration-200 hover:text-white text-left"
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p
            className="text-[11px]"
            style={{
              color: "rgba(255,255,255,0.25)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            © {new Date().getFullYear()} Lean Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms"].map((item) => (
              <button
                key={item}
                className="text-[11px] transition-colors duration-200 hover:text-white"
                style={{
                  color: "rgba(255,255,255,0.25)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
