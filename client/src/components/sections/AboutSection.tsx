/**
 * AboutSection — Lean Consulting
 * Style: Cream background, generous padding, Montserrat headings
 * Brand: Burgundy accents, high-end whitespace
 */
export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left: Text */}
          <div>
            <div className="section-label mb-8">Who We Are</div>
            <p
              className="text-3xl md:text-4xl font-bold text-[#1A1513] leading-snug mb-8"
              style={{ fontFamily: "'Montserrat', 'Questrial', sans-serif" }}
            >
              Lean Consulting is a fast-growing, premium platform-implementation startup 
              specializing in 
              <span style={{ color: "#8b0000" }}> fast-track configurations</span> for Odoo, HubSpot, and Salesforce.
            </p>
            <p
              className="text-base text-[#6B6158] leading-relaxed"
              style={{ fontFamily: "'Inter', 'Noto Sans', sans-serif", fontWeight: 400 }}
            >
              Unlike traditional bloated agencies, our identity is built around speed, standard implementation, 
              and zero engineering waste. We deliver maximum business value with the least unnecessary complexity.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-full h-full border-2 border-[#E6DFD5] rounded-lg"
              style={{ zIndex: 0 }}
            />
            <img
              src="/manus-storage/about-image_7b8d1082.jpg"
              alt="Lean Consulting team"
              className="relative w-full h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
