/**
 * PhilosophySection — Lean Consulting
 * Style: Burgundy background, white text, gold accents
 * Brand: Premium dark section, generous padding
 */
const principles = [
  { num: "01", text: "Standard, not custom" },
  { num: "02", text: "Speed over complexity" },
  { num: "03", text: "Business value first" },
  { num: "04", text: "Zero engineering waste" },
  { num: "05", text: "Proven methodology" },
  { num: "06", text: "Long-term partnership" },
];

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-32"
      style={{ backgroundColor: "#1A1513" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <div className="section-label mb-8">Our Philosophy</div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "'Montserrat', 'Questrial', sans-serif" }}
            >
              Standard, Speed, Frictionless.
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontFamily: "'Inter', 'Noto Sans', sans-serif",
                fontWeight: 400,
              }}
            >
              We believe the best ERP implementations maximize standard capabilities 
              before recommending custom development. This discipline lowers cost, raises adoption, 
              and protects your business for years to come.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById("framework");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-press inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#1A1513] rounded-md hover:opacity-90 transition-all duration-200"
              style={{ backgroundColor: "#D4AF37", fontFamily: "'Inter', 'Noto Sans', sans-serif" }}
            >
              View Framework
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right: Principles grid */}
          <div className="grid grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <div
                key={p.num}
                className="card-hover p-6 rounded-lg border-2 border-[#D4AF37]/20"
                style={{
                  backgroundColor: "rgba(212, 175, 55, 0.05)",
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="text-xs font-bold mb-3"
                  style={{
                    color: "#D4AF37",
                    fontFamily: "'Inter', 'Noto Sans', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.num}
                </div>
                <div
                  className="text-sm font-semibold text-white/85 leading-snug"
                  style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif" }}
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
