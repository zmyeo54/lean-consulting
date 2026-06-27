/**
 * CTABannerSection — Lean Consulting
 * Style: Burgundy background, bold text, white CTA
 * Brand: Signature burgundy, high contrast
 */
export default function CTABannerSection() {
  return (
    <section className="py-20 bg-[#8b0000]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/50 mb-2">
              Standard-First · Integrity-Led
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              A different kind of ERP consultancy.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-press px-6 py-3 text-sm font-semibold text-[#8b0000] bg-white rounded-lg hover:bg-white/90 transition-all duration-200"
            >
              Book a Discovery Call
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-press px-6 py-3 text-sm font-semibold text-white border-2 border-white/30 rounded-lg hover:border-white/60 transition-all duration-200"
            >
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
