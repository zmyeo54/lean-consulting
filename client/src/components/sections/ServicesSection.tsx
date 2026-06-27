/**
 * ServicesSection — Lean Consulting
 * Style: White background, labeled service cards
 * Brand: Crimson category labels, clean card layout
 */

const services = [
  {
    category: "Advisory",
    title: "ERP Advisory",
    desc: "Independent guidance on whether, when, and how to adopt ERP — grounded in your business goals, not a software vendor's roadmap.",
  },
  {
    category: "Delivery",
    title: "ERP Implementation",
    desc: "End-to-end Odoo implementation delivered with a standard-first discipline, comprehensive documentation, and real user adoption.",
  },
  {
    category: "Consulting",
    title: "Business Process Optimisation",
    desc: "We review and improve your business processes before and after ERP implementation to maximise adoption and ROI.",
  },
  {
    category: "Assessment",
    title: "ERP Health Check",
    desc: "A structured diagnostic of an existing ERP implementation — surfacing risk, technical debt, and optimisation opportunities.",
  },
  {
    category: "Improvement",
    title: "ERP Optimisation",
    desc: "Continuous improvement of your live ERP — replacing fragile customisations with standard capabilities over time.",
  },
  {
    category: "Enablement",
    title: "User Training",
    desc: "Role-based training that turns software into daily habit — the single biggest factor in ERP success.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <div className="section-label mb-4">Our Services</div>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Consulting for the full ERP lifecycle.
            </h2>
          </div>
          <p
            className="text-sm text-gray-500 max-w-xs leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            From initial advisory through to go-live and beyond — we provide
            the expertise your business needs at every stage of the journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="card-hover group p-7 border border-gray-100 rounded-sm hover:border-gray-200 transition-all duration-200 bg-white"
            >
              {/* Category badge */}
              <div
                className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase mb-4 px-2 py-1 rounded-sm"
                style={{
                  color: "oklch(0.28 0.14 20)",
                  backgroundColor: "oklch(0.28 0.14 20 / 0.07)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {svc.category}
              </div>

              <h3
                className="text-lg font-bold text-gray-900 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {svc.title}
              </h3>

              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                {svc.desc}
              </p>

              <div
                className="mt-5 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: "oklch(0.28 0.14 20)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Learn more
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
