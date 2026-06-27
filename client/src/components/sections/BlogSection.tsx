/**
 * BlogSection — Lean Consulting
 * Style: White background, article cards with category tags
 * Brand: Crimson category labels, clean editorial layout
 */

const articles = [
  {
    category: "ERP Best Practices",
    readTime: "8 min",
    title: "Why Standard ERP Configuration Beats Custom Development",
    desc: "The temptation to customise ERP systems is understandable — but it often creates more problems than it solves. Here is why standard-first delivers better long-term outcomes.",
  },
  {
    category: "ERP Implementation",
    readTime: "7 min",
    title: "The ERP Implementation Checklist Every Business Needs",
    desc: "A practical, no-nonsense checklist covering everything from vendor selection to go-live and beyond. Built from real implementation experience.",
  },
  {
    category: "AI in ERP",
    readTime: "6 min",
    title: "Odoo 17: What the New AI Features Mean for Your Business",
    desc: "Odoo's latest release includes significant AI capabilities. We break down what is genuinely useful versus what is marketing, and how to evaluate adoption for your business.",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <div className="section-label mb-4">Insights from the Field</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1513] leading-tight max-w-lg">
              Practical ERP guidance from the field.
            </h2>
          </div>
          <button className="btn-press inline-flex items-center gap-2 text-sm font-semibold shrink-0 text-[#8b0000] hover:text-[#6b0000] transition-colors">
            Read the blog
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <article
              key={art.title}
              className="card-hover group border-2 border-[#E6DFD5] rounded-lg overflow-hidden bg-white cursor-pointer hover:border-[#D4AF37] transition-all"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-[#8b0000]" />

              <div className="p-7">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#8b0000]">
                    {art.category}
                  </span>
                  <span className="text-[10px] text-[#E6DFD5]">·</span>
                  <span className="text-[10px] text-[#6B6158]">{art.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-[#1A1513] mb-3 leading-snug group-hover:text-[#8b0000] transition-colors duration-200">
                  {art.title}
                </h3>

                <p className="text-sm text-[#6B6158] leading-relaxed font-light">
                  {art.desc}
                </p>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#8b0000]">
                  Read article
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
