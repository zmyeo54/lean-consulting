/**
 * TestimonialsSection — Lean Consulting
 * Style: Light cream background, testimonial cards
 * Brand: Burgundy accents, consistent typography
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
    <section id="testimonials" className="py-32 bg-[#FAF7F2]">
      <div className="container">
        <div className="mb-16">
          <div className="section-label mb-6">Client Results</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1513] leading-tight max-w-xl">
            What our clients say.
          </h2>
          <p className="mt-4 text-sm text-[#6B6158] max-w-sm font-light">
            We measure success by business outcomes, not project completion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover p-8 bg-white rounded-lg border-2 border-[#E6DFD5] hover:border-[#D4AF37] transition-all shadow-sm flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-5xl font-black leading-none mb-4 select-none text-[#8b0000] opacity-20">
                "
              </div>

              <blockquote className="text-sm text-[#6B6158] leading-relaxed flex-1 mb-6 font-light">
                {t.quote}
              </blockquote>

              <div className="border-t border-[#E6DFD5] pt-5">
                <div className="text-sm font-semibold text-[#1A1513]">
                  {t.name}
                </div>
                <div className="text-xs text-[#8b0000] mt-0.5 font-light">
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
