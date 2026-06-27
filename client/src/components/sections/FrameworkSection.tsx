/**
 * FrameworkSection — Lean Consulting
 * Style: Light gray background, numbered step cards
 * Content: Updated 5-phase implementation framework
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
      className="py-24"
      style={{ backgroundColor: "oklch(0.97 0.002 285)" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <div className="section-label mb-4">Implementation Framework</div>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A structured path to ERP success.
            </h2>
          </div>
          <p
            className="text-sm text-gray-500 max-w-xs leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            Lean Consulting follows a structured implementation methodology
            consisting of five phases — from discovery to lasting value.
          </p>
        </div>

        {/* Phase cards — horizontal timeline on desktop */}
        <div className="grid md:grid-cols-5 gap-4">
          {phases.map((phase, i) => (
            <div
              key={phase.num}
              className="card-hover relative p-6 bg-white rounded-sm border border-gray-100 shadow-sm group"
            >
              {/* Connector line */}
              {i < phases.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 -right-2 w-4 h-px z-10"
                  style={{ backgroundColor: "oklch(0.28 0.14 20)", opacity: 0.3 }}
                />
              )}

              {/* Number */}
              <div
                className="text-xs font-semibold mb-4 transition-colors duration-200 group-hover:text-[oklch(0.28_0.14_20)]"
                style={{
                  color: "rgba(0,0,0,0.2)",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                {phase.num}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold text-gray-900 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {phase.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                {phase.desc}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ backgroundColor: "oklch(0.28 0.14 20)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
