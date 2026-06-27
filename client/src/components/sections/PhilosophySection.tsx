/**
 * PhilosophySection — Lean Consulting
 * Style: Dark background, large headline, numbered principles grid
 * Brand: Deep crimson accent, near-black bg, white text
 */
const principles = [
  { num: "01", text: "Simplicity over complexity" },
  { num: "02", text: "Business value over technology" },
  { num: "03", text: "User adoption over feature count" },
  { num: "04", text: "Documentation over tribal knowledge" },
  { num: "05", text: "Sustainability over short-term wins" },
  { num: "06", text: "Low technical debt over quick fixes" },
];

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-24"
      style={{ backgroundColor: "oklch(0.12 0.005 285)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="section-label mb-6">The Standard-First Philosophy</div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Technology should simplify business — not complicate it.
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
              }}
            >
              Whenever possible, standard ERP capabilities should be maximised
              before recommending custom development. It is a discipline that
              lowers cost, raises adoption, and protects your business for years
              to come.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById("framework");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-press inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-sm hover:border-white/50 transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Explore the methodology
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right: Principles grid */}
          <div className="grid grid-cols-2 gap-3">
            {principles.map((p, i) => (
              <div
                key={p.num}
                className="card-hover p-5 rounded-sm"
                style={{
                  backgroundColor: "oklch(0.16 0.005 285)",
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="text-xs font-semibold mb-2"
                  style={{
                    color: "rgba(255,255,255,0.25)",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.num}
                </div>
                <div
                  className="text-sm font-medium text-white/80 leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {p.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
