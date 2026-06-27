/**
 * WhySection — Lean Consulting
 * Style: Light gray background, icon cards in grid
 * Brand: Crimson icons, DM Sans body, Playfair heading
 */

const differentiators = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 19c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Former Odoo Professionals",
    desc: "Deep, hands-on expertise from people who built and implemented Odoo at the source.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Standard-First Implementation",
    desc: "We maximise proven capabilities before writing a single line of custom code.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 4h14v14H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 9h6M8 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Comprehensive Documentation",
    desc: "Knowledge that stays with your business — not locked in someone's head.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Real User Adoption",
    desc: "Role-based training and onboarding so your teams actually use the system.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3C6.58 3 3 6.58 3 11s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 7v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Long-Term Partnership",
    desc: "Transparent consulting with no lock-in, aligned to your ongoing success.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17l4-4 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Business Value Before Technology",
    desc: "Every recommendation is evaluated against genuine business value. We never recommend complexity for its own sake.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="container">
        <div className="mb-14">
          <div className="section-label mb-4">Why Lean Consulting</div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Built on expertise, integrity, and restraint.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              className="card-hover p-7 rounded-sm border border-gray-100 bg-gray-50/60"
            >
              <div
                className="mb-4"
                style={{ color: "oklch(0.28 0.14 20)" }}
              >
                {item.icon}
              </div>
              <h3
                className="text-base font-semibold text-gray-900 mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
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
