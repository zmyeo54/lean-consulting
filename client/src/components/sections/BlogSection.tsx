/*
 * BlogSection — Lean Consulting
 * Style: White background, article cards with category tags
 * Brand: Crimson category labels, clean editorial layout
 */

import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function BlogSection() {
  const [, setLocation] = useLocation();
  const [displayArticles, setDisplayArticles] = useState<any[]>([]);

  useEffect(() => {
    // Load published articles from localStorage
    const saved = localStorage.getItem("blogArticles");
    if (saved) {
      const allArticles = JSON.parse(saved);
      
      // Filter only published articles
      const published = allArticles.filter((a: any) => a.published === true);
      
      // Sort: Featured first, then by publish date (newest first)
      const sorted = published.sort((a: any, b: any) => {
        // Featured articles first
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        
        // Then by publish date (newest first)
        const dateA = new Date(a.publishDate || a.createdAt || 0).getTime();
        const dateB = new Date(b.publishDate || b.createdAt || 0).getTime();
        return dateB - dateA;
      });
      
      // Take top 3
      setDisplayArticles(sorted.slice(0, 3));
    }
  }, []);

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
          <button 
            onClick={() => setLocation("/#blog")}
            className="btn-press inline-flex items-center gap-2 text-sm font-semibold shrink-0 text-[#8b0000] hover:text-[#6b0000] transition-colors">
            Read the blog
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {displayArticles.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {displayArticles.map((art, index) => (
              <article
                key={art.id}
                onClick={() => setLocation(`/blog/${art.slug}`)}
                className="cursor-pointer group"
              >
                <div className="bg-[#FAF7F2] rounded-lg p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-wrap gap-2">
                      {art.categories && art.categories.length > 0 && (
                        <>
                          <span className="text-xs font-bold text-[#8b0000] uppercase">
                            {art.categories[0]}
                          </span>
                          {art.featured && (
                            <span className="text-xs font-bold text-purple-600 uppercase">
                              ⭐ Featured
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    <span className="text-xs text-[#6B6158]">#{index + 1}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#1A1513] mb-2 group-hover:text-[#8b0000] transition-colors">
                    {art.title}
                  </h3>
                  
                  <p className="text-sm text-[#6B6158] mb-4">
                    {art.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-[#6B6158]">
                    <span>{art.readTime} min read</span>
                    <span>
                      {new Date(art.publishDate || art.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocation(`/blog/${art.slug}`);
                    }}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8b0000] hover:text-[#6b0000] transition-colors"
                  >
                    Read Article
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7h10M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#6B6158]">No articles published yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
