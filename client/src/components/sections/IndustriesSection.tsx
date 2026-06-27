/**
 * IndustriesSection — Lean Consulting
 * Style: Dark charcoal background, gold accents, white text
 * Brand: Premium dark section with generous spacing
 */

const industries = [
  {
    num: "01",
    title: "Manufacturing",
    desc: "Production planning, work orders, BOMs, and quality — standardised for makers who need control without complexity.",
    points: ["Bill of Materials & routing", "Production orders & scheduling", "Quality management", "Inventory & warehouse"],
  },
  {
    num: "02",
    title: "Distribution",
    desc: "Inventory accuracy, multi-warehouse logistics, and replenishment built on proven standard flows.",
    points: ["Multi-warehouse management", "Purchase & vendor management", "Delivery & logistics", "Demand forecasting"],
  },
  {
    num: "03",
    title: "Retail",
    desc: "Unified point of sale, inventory synchronisation, customer loyalty, and e-commerce integration.",
    points: ["Point of Sale (POS)", "Inventory synchronisation", "Customer loyalty", "E-commerce integration"],
  },
  {
    num: "04",
    title: "Professional Services",
    desc: "Project delivery, timesheets, and billing aligned to how service businesses actually operate.",
    points: ["Project management", "Resource planning", "Time & expense tracking", "Professional billing"],
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-32"
      style={{ backgroundColor: "#1A1513" }}
    >
      <div className="container">
        <div className="mb-16">
          <div className="section-label mb-6">Sector Expertise</div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl"
            style={{ fontFamily: "'Montserrat', 'Questrial', sans-serif" }}
          >
            Sector expertise that matters.
          </h2>
          <p
            className="mt-6 text-base max-w-lg leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: "'Inter', 'Noto Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            ERP implementation is not one-size-fits-all. We bring deep sector knowledge to every engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.num}
              className="card-hover group p-8 rounded-lg border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-200"
              style={{ backgroundColor: "rgba(212, 175, 55, 0.03)" }}
            >
              {/* Number */}
              <div
                className="text-xs font-bold mb-5"
                style={{
                  color: "#D4AF37",
                  fontFamily: "'Inter', 'Noto Sans', sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                {ind.num}
              </div>

              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ fontFamily: "'Montserrat', 'Questrial', sans-serif" }}
              >
                {ind.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'Inter', 'Noto Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                {ind.desc}
              </p>

              <ul className="space-y-2">
                {ind.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-xs"
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "'Inter', 'Noto Sans', sans-serif",
                    }}
                  >
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: "#D4AF37" }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
