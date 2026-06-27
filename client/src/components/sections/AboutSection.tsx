/**
 * AboutSection — Lean Consulting
 * Style: White background, large text with crimson highlight, about image right
 */
export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <div className="section-label mb-6">Who We Are</div>
            <p
              className="text-3xl md:text-4xl font-light text-gray-800 leading-snug mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Lean Consulting is an independent ERP implementation consultancy
              founded by former Odoo professionals. We believe successful ERP is
              not about writing the most custom code — it is about{" "}
              <span style={{ color: "oklch(0.28 0.14 20)" }}>
                delivering maximum business value
              </span>{" "}
              with the least unnecessary complexity.
            </p>
            <p
              className="text-base text-gray-500 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              We are not a software reseller. We sell no licenses. Our only
              incentive is your long-term success — which is why we recommend
              standard capabilities first, and custom development only when it
              creates genuine value.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full border border-gray-200 rounded-sm"
              style={{ zIndex: 0 }}
            />
            <img
              src="/manus-storage/about-image_7b8d1082.jpg"
              alt="Lean Consulting team"
              className="relative w-full h-80 lg:h-96 object-cover rounded-sm shadow-lg"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
