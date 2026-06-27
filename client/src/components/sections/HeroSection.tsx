/**
 * HeroSection — Lean Consulting
 * Style: Dark overlay, Montserrat headline, Gold accent, generous spacing
 * Brand: Premium, fast-track ERP positioning
 */
export default function HeroSection() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url('/manus-storage/hero-bg_e59b378b.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(20,10,10,0.85) 60%, rgba(40,5,5,0.75) 100%)" }}
      />

      <div className="container relative z-10 py-24">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="animate-fade-up mb-8">
            <span
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ color: "#D4AF37", fontFamily: "'Inter', 'Noto Sans', sans-serif" }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#D4AF37" }}
              />
              Fast-Track ERP Implementation
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up animate-fade-up-delay-1 text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8"
            style={{ fontFamily: "'Montserrat', 'Questrial', sans-serif" }}
          >
            We build the flow.
            <br />
            <span style={{ color: "#D4AF37" }}>You scale and grow.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-up animate-fade-up-delay-2 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed mb-12"
            style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif", fontWeight: 400 }}
          >
            Premium platform implementation for Odoo, HubSpot, and Salesforce. 
            Fast-track configurations. Zero engineering waste. Standard-first discipline.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up animate-fade-up-delay-3 flex flex-wrap gap-4">
            <button
              onClick={() => handleScroll("contact")}
              className="btn-press inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#1A1513] rounded-md transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#D4AF37",
                fontFamily: "'Inter', 'Noto Sans', sans-serif",
              }}
            >
              Get Started
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => handleScroll("philosophy")}
              className="btn-press inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white/90 border-2 border-white/30 rounded-md transition-all duration-200 hover:border-white/60 hover:text-white"
              style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif" }}
            >
              Learn More
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Key points */}
          <div className="animate-fade-up animate-fade-up-delay-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
            {[
              "Fast-track configs",
              "Zero waste approach",
              "Platform experts",
              "Proven methodology",
            ].map((point) => (
              <div key={point} className="flex items-start gap-2">
                <span
                  className="mt-1 w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: "#D4AF37" }}
                />
                <span
                  className="text-xs text-white/60 leading-snug"
                  style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif" }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-white/30 tracking-widest uppercase" style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif" }}>
          Scroll
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/30">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
