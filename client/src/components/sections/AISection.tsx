/**
 * AISection — Lean Consulting
 * Style: White background, two-column layout with image
 * Brand: Burgundy accents, clean card grid
 */

const aiPoints = [
  "AI-powered demand forecasting and inventory optimisation",
  "Intelligent document processing and data extraction",
  "Automated workflows and approval routing",
  "Predictive maintenance and quality control",
  "Natural language reporting and business intelligence",
];

const aiCapabilities = [
  { label: "Forecasting", desc: "Demand and inventory prediction" },
  { label: "Automation", desc: "Intelligent workflow routing" },
  { label: "Analytics", desc: "Natural language BI queries" },
  { label: "Processing", desc: "Document and data extraction" },
];

export default function AISection() {
  return (
    <section id="ai" className="py-32 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="section-label mb-6">Practical AI Adoption</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1513] leading-tight mb-6">
              Practical AI adoption within your ERP.
            </h2>
            <p className="text-base text-[#6B6158] leading-relaxed mb-8 font-light">
              AI adoption should be driven by genuine business outcomes, not
              technology hype. We help you identify where AI adds real value
              within your ERP ecosystem and implement it responsibly.
            </p>

            <ul className="space-y-3 mb-8">
              {aiPoints.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-3 text-sm text-[#6B6158]"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[#8b0000]"
                  />
                  {pt}
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-press inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#8b0000] rounded-lg hover:bg-[#6b0000] transition-all duration-200"
            >
              Explore AI enablement
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right: Image + capability cards */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/manus-storage/ai-section_1cefdfd7.jpg"
                alt="AI in ERP"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {aiCapabilities.map((cap) => (
                <div
                  key={cap.label}
                  className="p-4 rounded-lg border-2 border-[#E6DFD5] bg-[#FAF7F2] hover:border-[#D4AF37] transition-all"
                >
                  <div className="text-xs font-bold tracking-wide mb-1 text-[#8b0000] uppercase">
                    {cap.label}
                  </div>
                  <div className="text-xs text-[#6B6158] font-light">
                    {cap.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
