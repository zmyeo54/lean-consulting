import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function AdminBlog() {
  const [, setLocation] = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [articles, setArticles] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
    readTime: 5,
  });

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("adminLoggedIn") === "true";
    if (!loggedIn) {
      setLocation("/admin/login");
    } else {
      setIsLoggedIn(true);
      // Load articles from localStorage
      const saved = localStorage.getItem("blogArticles");
      if (saved) {
        setArticles(JSON.parse(saved));
      }
    }
  }, [setLocation]);

  // Show loading while checking auth
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-[#1A1513] mb-4">Loading...</h1>
        </Card>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newArticle = {
      id: Date.now(),
      ...formData,
      published: false,
      createdAt: new Date().toISOString(),
    };

    const updated = [...articles, newArticle];
    setArticles(updated);
    localStorage.setItem("blogArticles", JSON.stringify(updated));

    // Reset form
    setFormData({
      title: "",
      slug: "",
      category: "",
      excerpt: "",
      content: "",
      readTime: 5,
    });
    setIsCreating(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    sessionStorage.removeItem("adminUsername");
    setLocation("/");
  };

  const handleDelete = (id: number) => {
    const updated = articles.filter((a) => a.id !== id);
    setArticles(updated);
    localStorage.setItem("blogArticles", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with Logout */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-[#1A1513] mb-2">Blog CMS</h1>
            <p className="text-[#6B6158]">Manage your blog articles and content</p>
          </div>
          <Button
            onClick={handleLogout}
            className="bg-[#8b0000] hover:bg-[#6b0000] text-white"
          >
            Logout
          </Button>
        </div>

        {/* Create Article Form */}
        {isCreating && (
          <Card className="p-8 mb-8 border-2 border-[#D4AF37]">
            <h2 className="text-2xl font-bold text-[#1A1513] mb-6">Create New Article</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1513] mb-2">Title</label>
                  <Input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Article title"
                    required
                    className="border-[#E6DFD5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1513] mb-2">Slug</label>
                  <Input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="article-slug"
                    required
                    className="border-[#E6DFD5]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1513] mb-2">Category</label>
                  <Input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., ERP, Implementation"
                    required
                    className="border-[#E6DFD5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1513] mb-2">Read Time (minutes)</label>
                  <Input
                    type="number"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: parseInt(e.target.value) || 5 })}
                    min="1"
                    className="border-[#E6DFD5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1513] mb-2">Excerpt</label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief summary of the article"
                  className="border-[#E6DFD5]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A1513] mb-2">Content</label>
                <Textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Full article content (supports markdown)"
                  required
                  rows={10}
                  className="border-[#E6DFD5]"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="bg-[#8b0000] hover:bg-[#6b0000]"
                >
                  Create Article
                </Button>
                <Button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  variant="outline"
                  className="border-[#E6DFD5]"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        )}

        {!isCreating && (
          <Button
            onClick={() => setIsCreating(true)}
            className="mb-8 bg-[#D4AF37] hover:bg-[#c9a030] text-[#1A1513]"
          >
            + Create New Article
          </Button>
        )}

        {/* Articles List */}
        <div>
          <h2 className="text-2xl font-bold text-[#1A1513] mb-6">Articles</h2>
          {articles.length > 0 ? (
            <div className="space-y-4">
              {articles.map((article) => (
                <Card key={article.id} className="p-6 border-2 border-[#E6DFD5]">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1513]">{article.title}</h3>
                      <p className="text-sm text-[#6B6158] mt-1">
                        {article.category} • {article.readTime} min read
                      </p>
                      <p className="text-sm text-[#8b0000] mt-2">
                        Status: {article.published ? "Published" : "Draft"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-[#E6DFD5]">
                        Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-[#E6DFD5] text-red-600"
                        onClick={() => handleDelete(article.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center">
              <p className="text-[#6B6158]">No articles yet. Create one to get started!</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
