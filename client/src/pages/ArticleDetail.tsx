import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function ArticleDetail() {
  const [, params] = useRoute("/blog/:slug");
  const [, setLocation] = useLocation();
  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.slug) return;

    // Load article from localStorage
    const saved = localStorage.getItem("blogArticles");
    if (saved) {
      const allArticles = JSON.parse(saved);
      const found = allArticles.find(
        (a: any) => a.slug === params.slug && a.published
      );

      if (found) {
        setArticle(found);

        // Find related articles (same category, different article)
        const related = allArticles
          .filter(
            (a: any) =>
              a.published &&
              a.id !== found.id &&
              a.categories?.some((cat: string) =>
                found.categories?.includes(cat)
              )
          )
          .slice(0, 2);
        setRelatedArticles(related);
      }
    }
    setLoading(false);
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#6B6158]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-[#8b0000] hover:text-[#6b0000] mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold text-[#1A1513] mb-4">
              Article Not Found
            </h1>
            <p className="text-[#6B6158]">
              The article you're looking for doesn't exist or has been removed.
            </p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <div className="bg-[#1A1513] text-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-[#D4AF37] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>

          <div className="flex items-center gap-3 mb-4">
            {article.categories?.map((cat: string) => (
              <span
                key={cat}
                className="text-xs font-bold tracking-[0.12em] uppercase text-[#D4AF37]"
              >
                {cat}
              </span>
            ))}
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">{article.readTime} min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {article.title}
          </h1>

          <p className="text-lg text-gray-300">
            {article.excerpt}
          </p>

          <div className="mt-6 text-sm text-gray-400">
            Published{" "}
            {new Date(article.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <article className="prose prose-invert max-w-none">
            <div
              className="text-[#1A1513] leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{
                __html: renderMarkdown(article.content),
              }}
            />
          </article>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1A1513] mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((related) => (
                <Card
                  key={related.id}
                  className="p-6 border-2 border-[#E6DFD5] cursor-pointer hover:border-[#D4AF37] transition-all"
                  onClick={() => setLocation(`/blog/${related.slug}`)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#8b0000]">
                      {related.categories?.[0] || "Article"}
                    </span>
                    <span className="text-xs text-[#6B6158]">
                      {related.readTime} min
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1513] mb-2 hover:text-[#8b0000] transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-[#6B6158] line-clamp-2">
                    {related.excerpt}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Simple markdown renderer
function renderMarkdown(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*?)$/gm, "<h3 class='text-xl font-bold mt-6 mb-3'>$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2 class='text-2xl font-bold mt-8 mb-4'>$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1 class='text-3xl font-bold mt-8 mb-4'>$1</h1>");

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong class='font-bold'>$1</strong>");

  // Italic
  html = html.replace(/_(.*?)_/g, "<em class='italic'>$1</em>");

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2' class='text-[#8b0000] hover:underline'>$1</a>");

  // Lists
  html = html.replace(/^\- (.*?)$/gm, "<li class='ml-6 mb-2'>$1</li>");
  html = html.replace(/(<li[\s\S]*?<\/li>)/, "<ul class='list-disc space-y-2'>$1</ul>");

  // Paragraphs
  html = html
    .split("\n\n")
    .map((para) => {
      if (
        para.startsWith("<h") ||
        para.startsWith("<ul") ||
        para.startsWith("<ol")
      ) {
        return para;
      }
      return `<p class='mb-4'>${para}</p>`;
    })
    .join("");

  return html;
}
