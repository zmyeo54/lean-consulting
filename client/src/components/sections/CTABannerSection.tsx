/**
 * CTABannerSection — Lean Consulting
 * Style: Crimson background, bold text, white CTA
 * Brand: Signature crimson, high contrast
 */
export default function CTABannerSection() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: "oklch(0.28 0.14 20)" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/50 mb-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Standard-First · Integrity-Led
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A different kind of ERP consultancy.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-press px-6 py-3 text-sm font-semibold text-[oklch(0.28_0.14_20)] bg-white rounded-sm hover:bg-white/90 transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book a Discovery Call
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-press px-6 py-3 text-sm font-semibold text-white border border-white/30 rounded-sm hover:border-white/60 transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
