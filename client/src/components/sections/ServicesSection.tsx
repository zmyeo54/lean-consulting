/**
 * ServicesSection — Lean Consulting
 * Style: White background, burgundy category labels, gold accents
 * Brand: Clean card layout with premium spacing
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
    <section id="services" className="py-32 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <div>
            <div className="section-label mb-6">Our Services</div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1513] leading-tight max-w-lg"
              style={{ fontFamily: "'Montserrat', 'Questrial', sans-serif" }}
            >
              Consulting for the full ERP lifecycle.
            </h2>
          </div>
          <p
            className="text-sm text-[#6B6158] max-w-xs leading-relaxed"
            style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif", fontWeight: 400 }}
          >
            From initial advisory through to go-live and beyond — we provide the expertise 
            your business needs at every stage of the journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="card-hover group p-8 border-2 border-[#E6DFD5] rounded-lg hover:border-[#D4AF37] transition-all duration-200 bg-white"
            >
              {/* Category badge */}
              <div
                className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase mb-5 px-2.5 py-1.5 rounded-md"
                style={{
                  backgroundColor: "#8b0000",
                  color: "white",
                  fontFamily: "'Inter', 'Noto Sans', sans-serif",
                }}
              >
                {svc.category}
              </div>

              <h3
                className="text-lg font-bold text-[#1A1513] mb-3"
                style={{ fontFamily: "'Montserrat', 'Questrial', sans-serif" }}
              >
                {svc.title}
              </h3>

              <p
                className="text-sm text-[#6B6158] leading-relaxed"
                style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif", fontWeight: 400 }}
              >
                {svc.desc}
              </p>

              <div
                className="mt-6 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: "#8b0000", fontFamily: "'Inter', 'Noto Sans', sans-serif" }}
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
