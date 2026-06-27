import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import RichTextEditor from "@/components/RichTextEditor";
import { migrateExistingBlogPosts } from "@/lib/blogMigration";

export default function AdminBlog() {
  const [, setLocation] = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [articles, setArticles] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    categories: [] as string[],
    excerpt: "",
    content: "",
    readTime: 5,
    featured: false,
  });

  useEffect(() => {
    // Run migration first to import existing blog posts
    migrateExistingBlogPosts();

    const loggedIn = sessionStorage.getItem("adminLoggedIn") === "true";
    if (!loggedIn) {
      setLocation("/admin/login");
    } else {
      setIsLoggedIn(true);
      // Load articles and categories from localStorage
      const savedArticles = localStorage.getItem("blogArticles");
      if (savedArticles) {
        setArticles(JSON.parse(savedArticles));
      }
      const savedCategories = localStorage.getItem("blogCategories");
      if (savedCategories) {
        setCategories(JSON.parse(savedCategories));
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

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      const updated = [...categories, newCategory.trim()];
      setCategories(updated);
      localStorage.setItem("blogCategories", JSON.stringify(updated));
      setNewCategory("");
      setShowNewCategoryInput(false);
    }
  };

  const handleToggleCategory = (category: string) => {
    const updated = formData.categories.includes(category)
      ? formData.categories.filter((c) => c !== category)
      : [...formData.categories, category];
    setFormData({ ...formData, categories: updated });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditing) {
      // Update existing article
      const updated = articles.map((a) =>
        a.id === isEditing
          ? { ...a, ...formData, updatedAt: new Date().toISOString() }
          : a
      );
      setArticles(updated);
      localStorage.setItem("blogArticles", JSON.stringify(updated));
      setIsEditing(null);
    } else {
      // Create new article
      const newArticle = {
        id: Date.now(),
        ...formData,
        published: false,
        createdAt: new Date().toISOString(),
      };
      const updated = [...articles, newArticle];
      setArticles(updated);
      localStorage.setItem("blogArticles", JSON.stringify(updated));
    }

    // Reset form
    setFormData({
      title: "",
      slug: "",
      categories: [],
      excerpt: "",
      content: "",
      readTime: 5,
      featured: false,
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

  const handleTogglePublish = (id: number) => {
    const updated = articles.map((a) =>
      a.id === id ? { ...a, published: !a.published } : a
    );
    setArticles(updated);
    localStorage.setItem("blogArticles", JSON.stringify(updated));
  };

  const handleToggleFeatured = (id: number) => {
    const updated = articles.map((a) =>
      a.id === id ? { ...a, featured: !a.featured } : a
    );
    setArticles(updated);
    localStorage.setItem("blogArticles", JSON.stringify(updated));
  };

  const handleEdit = (article: any) => {
    setFormData({
      title: article.title,
      slug: article.slug,
      categories: article.categories || [],
      excerpt: article.excerpt,
      content: article.content,
      readTime: article.readTime,
      featured: article.featured || false,
    });
    setIsEditing(article.id);
    setIsCreating(true);
    // Scroll to form
    setTimeout(() => {
      document.querySelector('[data-form-section]')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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

        {/* Create/Edit Article Form */}
        {isCreating && (
          <Card className="p-8 mb-8 border-2 border-[#D4AF37]" data-form-section>
            <h2 className="text-2xl font-bold text-[#1A1513] mb-6">
              {isEditing ? "Edit Article" : "Create New Article"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1513] mb-2">
                    Title
                  </label>
                  <Input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="Article title"
                    required
                    className="border-[#E6DFD5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1513] mb-2">
                    Slug
                  </label>
                  <Input
                    type="text"
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData({ ...formData, slug: e.target.value })
                    }
                    placeholder="article-slug"
                    required
                    className="border-[#E6DFD5]"
                  />
                </div>
              </div>

              {/* Category Management */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1513] mb-3">
                  Categories (Select or Create New)
                </label>
                <div className="space-y-3">
                  {/* Existing Categories */}
                  {categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => handleToggleCategory(cat)}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                            formData.categories.includes(cat)
                              ? "bg-[#8b0000] text-white"
                              : "bg-[#E6DFD5] text-[#1A1513] hover:bg-[#D4AF37]"
                          }`}
                        >
                          {cat}
                          {formData.categories.includes(cat) && " ✓"}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Add New Category */}
                  {showNewCategoryInput ? (
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="New category name"
                        className="border-[#E6DFD5]"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddCategory();
                          }
                        }}
                      />
                      <Button
                        type="button"
                        onClick={handleAddCategory}
                        className="bg-[#D4AF37] hover:bg-[#c9a030] text-[#1A1513]"
                      >
                        Add
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          setShowNewCategoryInput(false);
                          setNewCategory("");
                        }}
                        variant="outline"
                        className="border-[#E6DFD5]"
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
                    >
                      + Create New Category
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
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
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#FAF7F2] rounded-lg border-2 border-[#D4AF37]">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                  className="w-5 h-5 cursor-pointer"
                />
                <label htmlFor="featured" className="font-semibold text-[#1A1513] cursor-pointer">
                  ⭐ Feature this post on the homepage
                </label>
              </div>

              <div>
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

              <div>
                <label className="block text-sm font-semibold text-[#1A1513] mb-2">
                  Content (Rich Text Editor)
                </label>
                <RichTextEditor
                  value={formData.content}
                  onChange={(content) =>
                    setFormData({ ...formData, content })
                  }
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="bg-[#8b0000] hover:bg-[#6b0000]"
                >
                  {isEditing ? "Update Article" : "Create Article"}
                </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setIsCreating(false);
                      setIsEditing(null);
                      setFormData({
                        title: "",
                        slug: "",
                        categories: [],
                        excerpt: "",
                        content: "",
                        readTime: 5,
                        featured: false,
                      });
                    }}
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
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-lg font-bold text-[#1A1513]">
                          {article.title}
                        </h3>
                        {article.featured && (
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
                            FEATURED
                          </span>
                        )}
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            article.published
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {article.published ? "PUBLISHED" : "DRAFT"}
                        </span>
                      </div>
                      <p className="text-sm text-[#6B6158] mb-2">
                        {article.categories?.join(", ") || "No categories"} •{" "}
                        {article.readTime} min read
                      </p>
                      <p className="text-sm text-[#6B6158] line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <Button
                        onClick={() => handleToggleFeatured(article.id)}
                        className={article.featured ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-400 hover:bg-gray-500"}
                        size="sm"
                      >
                        {article.featured ? "Unfeature" : "Feature"}
                      </Button>
                      <Button
                        onClick={() => handleTogglePublish(article.id)}
                        className={
                          article.published
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-yellow-600 hover:bg-yellow-700"
                        }
                        size="sm"
                      >
                        {article.published ? "Unpublish" : "Publish"}
                      </Button>
                      <Button
                        onClick={() => handleEdit(article)}
                        variant="outline"
                        size="sm"
                        className="border-[#E6DFD5]"
                      >
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
              <p className="text-[#6B6158]">
                No articles yet. Create one to get started!
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );

  function insertMarkdown(before: string, after: string, type: string) {
    const textarea = document.querySelector(
      'textarea[placeholder*="Full article"]'
    ) as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = formData.content;
    const selectedText = text.substring(start, end) || "text";

    let newText = "";
    if (type === "link") {
      newText =
        text.substring(0, start) +
        `[${selectedText}](url)` +
        text.substring(end);
    } else {
      newText =
        text.substring(0, start) +
        before +
        selectedText +
        after +
        text.substring(end);
    }

    setFormData({ ...formData, content: newText });
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = start + before.length;
      textarea.selectionEnd = start + before.length + selectedText.length;
    }, 0);
  }
}
