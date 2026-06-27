/**
 * ContactSection — Lean Consulting
 * Style: Dark background, newsletter signup + CTA
 * Brand: Burgundy button, white text on dark
 */
import { useState } from "react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 bg-[#1A1513]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: CTA */}
          <div>
            <div className="section-label mb-6">Get in Touch</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to implement ERP the right way?
            </h2>
            <p className="text-base leading-relaxed mb-8 text-white/60 font-light">
              Book a no-obligation discovery call. We will take the time to
              understand your business before recommending anything.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@leanconsulting.com"
                className="btn-press inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#8b0000] rounded-lg hover:bg-[#6b0000] transition-all duration-200"
              >
                Book a Discovery Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="mailto:hello@leanconsulting.com"
                className="btn-press inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white/80 border-2 border-white/20 rounded-lg hover:border-white/40 transition-all duration-200"
              >
                Talk to an Expert
              </a>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="p-8 rounded-lg bg-white/5 border-2 border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">
              ERP insights, delivered monthly
            </h3>
            <p className="text-sm mb-6 text-white/50 font-light">
              Practical guidance on ERP implementation, business process
              optimisation, and technology adoption — written by practitioners.
              No spam. Unsubscribe at any time.
            </p>

            {submitted ? (
              <div className="flex items-center gap-2 text-sm text-[#D4AF37]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Thank you — you're subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2.5 text-sm rounded-lg bg-white/8 border-2 border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]/30 transition-colors"
                />
                <button
                  type="submit"
                  className="btn-press px-5 py-2.5 text-sm font-semibold text-white bg-[#8b0000] rounded-lg hover:bg-[#6b0000] transition-all duration-200 shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
