import { useState, useEffect } from "react";
import { useLocation, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import HtmlEditor from "@/components/HtmlEditor";
import { ArrowLeft, Save } from "lucide-react";

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  categories: string[];
  readTime: number;
  published: boolean;
  featured: boolean;
  publishDate?: string;
}

export default function EditArticle() {
  const [, setLocation] = useLocation();
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    categories: [] as string[],
    readTime: 5,
    publishDate: new Date().toISOString().split("T")[0],
    featured: false,
  });
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    // Load article data
    const articles = JSON.parse(localStorage.getItem("blogArticles") || "[]");
    const foundArticle = articles.find((a: Article) => a.id === parseInt(id!));
    
    if (foundArticle) {
      setArticle(foundArticle);
      setFormData({
        title: foundArticle.title,
        slug: foundArticle.slug,
        excerpt: foundArticle.excerpt,
        content: foundArticle.content,
        categories: foundArticle.categories || [],
        readTime: foundArticle.readTime,
        publishDate: foundArticle.publishDate || new Date().toISOString().split("T")[0],
        featured: foundArticle.featured || false,
      });
    }

    // Load categories
    const savedCategories = JSON.parse(localStorage.getItem("blogCategories") || "[]");
    setCategories(savedCategories);
  }, [id]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      const updated = [...categories, newCategory];
      setCategories(updated);
      localStorage.setItem("blogCategories", JSON.stringify(updated));
      
      setFormData({
        ...formData,
        categories: [...formData.categories, newCategory],
      });
      setNewCategory("");
      setShowNewCategoryInput(false);
    }
  };

  const handleToggleCategory = (category: string) => {
    setFormData({
      ...formData,
      categories: formData.categories.includes(category)
        ? formData.categories.filter((c) => c !== category)
        : [...formData.categories, category],
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const articles = JSON.parse(localStorage.getItem("blogArticles") || "[]");
      const updated = articles.map((a: Article) =>
        a.id === parseInt(id!)
          ? {
              ...a,
              ...formData,
            }
          : a
      );
      localStorage.setItem("blogArticles", JSON.stringify(updated));
      setLocation("/admin/blog");
    } finally {
      setIsSaving(false);
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] py-12 flex items-center justify-center">
        <p className="text-[#6B6158]">Loading article...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            onClick={() => setLocation("/admin/blog")}
            variant="outline"
            size="sm"
            className="border-[#E6DFD5]"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Button>
          <h1 className="text-3xl font-bold text-[#1A1513]">Edit Article</h1>
        </div>

        {/* Main Content - Split View */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Editor */}
          <div className="space-y-6">
            <Card className="p-6 border-2 border-[#E6DFD5]">
              <h2 className="text-xl font-bold text-[#1A1513] mb-4">Article Details</h2>

              {/* Title */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-[#1A1513] mb-2">
                  Title
                </label>
                <Input
                  type="text"
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="border-[#E6DFD5]"
                  placeholder="Article title"
                />
              </div>

              {/* Slug */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-[#1A1513] mb-2">
                  URL Slug
                </label>
                <Input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="border-[#E6DFD5]"
                  placeholder="url-slug"
                />
                <p className="text-xs text-[#6B6158] mt-1">
                  Blog URL: /blog/{formData.slug}
                </p>
              </div>

              {/* Publish Date */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-[#1A1513] mb-2">
                  Publish Date
                </label>
                <Input
                  type="date"
                  value={formData.publishDate}
                  onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                  className="border-[#E6DFD5]"
                />
              </div>

              {/* Read Time */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-[#1A1513] mb-2">
                  Read Time (minutes)
                </label>
                <Input
                  type="number"
                  value={formData.readTime}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      readTime: parseInt(e.target.value) || 5,
                    })
                  }
                  min="1"
                  className="border-[#E6DFD5]"
                />
              </div>

              {/* Featured */}
              <div className="flex items-center gap-3 p-3 bg-[#FAF7F2] rounded-lg border-2 border-[#D4AF37] mb-4">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={() => setShowConfirm(true)}
                  className="w-5 h-5 cursor-pointer"
                />
                <label htmlFor="featured" className="font-semibold text-[#1A1513] cursor-pointer">
                  ⭐ Feature this post
                </label>
              </div>
              
              {/* Feature Confirmation Dialog */}
              {showConfirm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <Card className="p-6 max-w-sm">
                    <h3 className="text-lg font-bold text-[#1A1513] mb-4">
                      {formData.featured ? "Unfeature Post?" : "Feature This Post?"}
                    </h3>
                    <p className="text-[#6B6158] mb-6">
                      {formData.featured
                        ? "This post will no longer be featured on the homepage."
                        : "This post will be featured on the homepage with the next available ranking."}
                    </p>
                    <div className="flex gap-3">
                      <Button
                        onClick={() => {
                          setFormData({ ...formData, featured: !formData.featured });
                          setShowConfirm(false);
                        }}
                        className="flex-1 bg-[#8b0000] hover:bg-[#6b0000] text-white"
                      >
                        Confirm
                      </Button>
                      <Button
                        onClick={() => setShowConfirm(false)}
                        variant="outline"
                        className="flex-1 border-[#E6DFD5]"
                      >
                        Cancel
                      </Button>
                    </div>
                  </Card>
                </div>
              )}

              {/* Categories */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-[#1A1513] mb-2">
                  Categories
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {categories.map((cat) => (
                    <div key={cat} className="flex items-center gap-1">
                      <button
                        onClick={() => handleToggleCategory(cat)}
                        className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                          formData.categories.includes(cat)
                            ? "bg-[#D4AF37] text-[#1A1513]"
                            : "bg-[#E6DFD5] text-[#6B6158] hover:bg-[#D4AF37]"
                        }`}
                      >
                        {cat}
                      </button>
                      <button
                        onClick={() => {
                          const updatedCats = categories.filter((c) => c !== cat);
                          setCategories(updatedCats);
                          localStorage.setItem("blogCategories", JSON.stringify(updatedCats));
                          setFormData({
                            ...formData,
                            categories: formData.categories.filter((c) => c !== cat),
                          });
                        }}
                        className="text-red-600 hover:text-red-800 text-xs font-bold"
                        title="Delete category"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                {showNewCategoryInput ? (
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      placeholder="New category"
                      className="border-[#E6DFD5]"
                    />
                    <Button
                      onClick={handleAddCategory}
                      className="bg-[#D4AF37] hover:bg-[#C4A027] text-[#1A1513]"
                      size="sm"
                    >
                      Add
                    </Button>
                    <Button
                      onClick={() => setShowNewCategoryInput(false)}
                      variant="outline"
                      className="border-[#E6DFD5]"
                      size="sm"
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button
                    type="button"
                    onClick={() => setShowNewCategoryInput(true)}
                    variant="outline"
                    className="border-[#D4AF37] text-[#8b0000] hover:bg-[#FAF7F2]"
                    size="sm"
                  >
                    + Create New Category
                  </Button>
                )}
              </div>

              {/* Excerpt */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-[#1A1513] mb-2">
                  Excerpt
                </label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  placeholder="Brief summary of the article"
                  className="border-[#E6DFD5]"
                  rows={3}
                />
              </div>
            </Card>

            {/* Content Editor */}
            <Card className="p-6 border-2 border-[#E6DFD5]">
              <h2 className="text-xl font-bold text-[#1A1513] mb-4">Content</h2>
              <HtmlEditor
                value={formData.content}
                onChange={(content: string) => setFormData({ ...formData, content })}
              />
            </Card>

            {/* Save Button */}
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white"
              size="lg"
            >
              <Save size={18} className="mr-2" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>

          {/* Right: Live Preview */}
          <div className="sticky top-6 h-fit">
            <Card className="p-6 border-2 border-[#D4AF37] bg-white">
              <h2 className="text-xl font-bold text-[#1A1513] mb-4">Live Preview</h2>
              
              <div className="space-y-4">
                {/* Preview Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-[#D4AF37] uppercase">
                      {formData.categories.length > 0 ? formData.categories.join(", ") : "Article"}
                    </span>
                    <span className="text-xs text-[#6B6158]">• {formData.readTime} min read</span>
                  </div>
                  <h1 className="text-2xl font-bold text-[#1A1513] mb-2">{formData.title || "Article Title"}</h1>
                  <p className="text-sm text-[#6B6158] mb-4">{formData.excerpt || "Article excerpt will appear here..."}</p>
                </div>

                {/* Preview Divider */}
                <div className="border-t-2 border-[#E6DFD5] my-4" />

                {/* Preview Content */}
                <div
                  className="prose prose-sm max-w-none text-[#1A1513]"
                  dangerouslySetInnerHTML={{
                    __html: formData.content || "<p className='text-[#6B6158]'>Article content will appear here...</p>",
                  }}
                />

                {/* Preview Footer */}
                <div className="border-t-2 border-[#E6DFD5] mt-6 pt-4">
                  <p className="text-xs text-[#6B6158]">
                    Published: {new Date(formData.publishDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
