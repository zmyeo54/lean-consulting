/**
 * TestimonialsSection — Lean Consulting
 * Style: Light gray background, large quote cards
 * Brand: Crimson quote marks, Playfair quote text
 */

const testimonials = [
  {
    quote:
      "Lean Consulting took the time to understand our business before touching any software. Their standard-first approach saved us months of unnecessary customisation and delivered a system our team actually uses.",
    name: "Sarah Chen",
    role: "Operations Director, Pacific Distribution Co.",
  },
  {
    quote:
      "What sets Lean apart is their honesty. They told us what we needed to hear, not what we wanted to hear. The documentation they produced has been invaluable for onboarding new staff.",
    name: "Michael Tan",
    role: "Managing Director, Meridian Manufacturing",
  },
  {
    quote:
      "We'd had a failed ERP implementation before. Lean Consulting's methodical approach and focus on user adoption made all the difference. Our team was genuinely confident from day one.",
    name: "Rachel Lim",
    role: "Finance Manager, Apex Retail Group",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24"
      style={{ backgroundColor: "oklch(0.97 0.002 285)" }}
    >
      <div className="container">
        <div className="mb-14">
          <div className="section-label mb-4">Client Results</div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What our clients say.
          </h2>
          <p
            className="mt-4 text-sm text-gray-500 max-w-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            We measure success by business outcomes, not project completion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card-hover p-8 bg-white rounded-sm border border-gray-100 shadow-sm flex flex-col"
            >
              {/* Quote mark */}
              <div
                className="text-5xl font-black leading-none mb-4 select-none"
                style={{
                  color: "oklch(0.28 0.14 20)",
                  fontFamily: "'Playfair Display', serif",
                  opacity: 0.25,
                }}
              >
                "
              </div>

              <blockquote
                className="text-sm text-gray-700 leading-relaxed flex-1 mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                {t.quote}
              </blockquote>

              <div className="border-t border-gray-100 pt-5">
                <div
                  className="text-sm font-semibold text-gray-900"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-xs text-gray-400 mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
