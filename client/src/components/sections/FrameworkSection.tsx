/**
 * FrameworkSection — Lean Consulting
 * Style: Cream background, numbered step cards with gold accents
 * Brand: 5-phase implementation framework
 */

const phases = [
  {
    num: "01",
    title: "Discover",
    desc: "We take the time to understand your business, challenges, and goals before recommending any solution.",
  },
  {
    num: "02",
    title: "Configure",
    desc: "We configure Odoo using standard capabilities wherever possible, ensuring a simpler and more sustainable implementation.",
  },
  {
    num: "03",
    title: "Validate",
    desc: "We review the solution together, conduct testing, and refine configurations to ensure everything works as expected.",
  },
  {
    num: "04",
    title: "Enable",
    desc: "We train your team, provide documentation, and ensure users are confident before going live.",
  },
  {
    num: "05",
    title: "Support",
    desc: "We stay with you after go-live, providing continuous support, optimization, and guidance as your business grows.",
  },
];

export default function FrameworkSection() {
  return (
    <section
      id="framework"
      className="py-32"
      style={{ backgroundColor: "#FAF7F2" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <div>
            <div className="section-label mb-6">Implementation Framework</div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1513] leading-tight max-w-lg"
              style={{ fontFamily: "'Montserrat', 'Questrial', sans-serif" }}
            >
              A structured path to ERP success.
            </h2>
          </div>
          <p
            className="text-sm text-[#6B6158] max-w-xs leading-relaxed"
            style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif", fontWeight: 400 }}
          >
            Five phases — from discovery to lasting value. Each phase builds on the previous, 
            ensuring your team is prepared and your system is optimized.
          </p>
        </div>

        {/* Phase cards */}
        <div className="grid md:grid-cols-5 gap-4">
          {phases.map((phase, i) => (
            <div
              key={phase.num}
              className="card-hover relative p-7 bg-white rounded-lg border-2 border-[#E6DFD5] hover:border-[#D4AF37] transition-all duration-200 group"
            >
              {/* Connector line */}
              {i < phases.length - 1 && (
                <div
                  className="hidden md:block absolute top-12 -right-2 w-4 h-0.5 z-10"
                  style={{ backgroundColor: "#D4AF37", opacity: 0.3 }}
                />
              )}

              {/* Number */}
              <div
                className="text-xs font-bold mb-5 group-hover:text-[#D4AF37] transition-colors duration-200"
                style={{
                  color: "#D4AF37",
                  fontFamily: "'Inter', 'Noto Sans', sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                {phase.num}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold text-[#1A1513] mb-3"
                style={{ fontFamily: "'Montserrat', 'Questrial', sans-serif" }}
              >
                {phase.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm text-[#6B6158] leading-relaxed"
                style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif", fontWeight: 400 }}
              >
                {phase.desc}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ backgroundColor: "#8b0000" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
