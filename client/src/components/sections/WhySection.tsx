/**
 * WhySection — Lean Consulting
 * Style: Cream background, gold-accented cards
 * Brand: Premium card design with subtle borders
 */

const differentiators = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="9" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 20c0-4.5 4-7.5 9-7.5s9 3 9 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Platform Experts",
    desc: "Deep expertise from people who built and implemented Odoo, HubSpot, and Salesforce at the source.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Fast-Track Configs",
    desc: "We maximize proven capabilities before writing a single line of custom code.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16v14H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 10h6M9 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Documentation",
    desc: "Knowledge that stays with your business — not locked in someone's head.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v6M12 15v6M3 12h6M15 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "User Adoption",
    desc: "Role-based training and onboarding so your teams actually use the system.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C6.48 3 3 6.48 3 12s3.48 9 9 9 9-3.48 9-9-3.48-9-9-9z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Long-Term Partnership",
    desc: "Transparent consulting with no lock-in, aligned to your ongoing success.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 18l4-4 4 4 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Business Value First",
    desc: "Every recommendation is evaluated against genuine business outcomes, never hype.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="py-32 bg-white">
      <div className="container">
        <div className="mb-16">
          <div className="section-label mb-6">Why Lean Consulting</div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1A1513] leading-tight max-w-2xl"
            style={{ fontFamily: "'Montserrat', 'Questrial', sans-serif" }}
          >
            Built on expertise, integrity, and restraint.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              className="card-hover p-8 rounded-lg border-2 border-[#E6DFD5] bg-white hover:border-[#D4AF37]/40 transition-all duration-200"
            >
              <div
                className="mb-5"
                style={{ color: "#8b0000" }}
              >
                {item.icon}
              </div>
              <h3
                className="text-base font-bold text-[#1A1513] mb-3"
                style={{ fontFamily: "'Montserrat', 'Questrial', sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-[#6B6158] leading-relaxed"
                style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif", fontWeight: 400 }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
