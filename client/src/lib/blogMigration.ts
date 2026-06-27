/**
 * Blog Migration Utility
 * Migrates hardcoded blog posts to localStorage on first load
 */

export const EXISTING_BLOG_POSTS = [
  {
    id: 1000,
    title: "Why Standard ERP Configuration Beats Custom Development",
    slug: "why-standard-erp-configuration-beats-custom-development",
    categories: ["ERP Best Practices"],
    excerpt:
      "The temptation to customise ERP systems is understandable — but it often creates more problems than it solves. Here is why standard-first delivers better long-term outcomes.",
    content: `# Why Standard ERP Configuration Beats Custom Development

The temptation to customise ERP systems is understandable — but it often creates more problems than it solves. Here is why standard-first delivers better long-term outcomes.

## The Customization Trap

Many organizations believe that customizing their ERP system to match existing processes is the best approach. However, this often leads to:

- **Higher costs** during implementation and ongoing maintenance
- **Slower updates** and upgrades due to custom code conflicts
- **Knowledge silos** where only specific developers understand the system
- **Technical debt** that compounds over time

## The Standard-First Advantage

Standard ERP configurations are designed by industry experts and refined through thousands of implementations. They offer:

- **Proven best practices** built into the system
- **Easier upgrades** and access to new features
- **Better support** from vendors and the community
- **Lower total cost of ownership** over the system's lifetime

## Making the Transition

Adopting standard configurations often requires rethinking your processes, but the long-term benefits far outweigh the short-term adjustment period.`,
    readTime: 8,
    published: true,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 1001,
    title: "The ERP Implementation Checklist Every Business Needs",
    slug: "the-erp-implementation-checklist-every-business-needs",
    categories: ["ERP Implementation"],
    excerpt:
      "A practical, no-nonsense checklist covering everything from vendor selection to go-live and beyond. Built from real implementation experience.",
    content: `# The ERP Implementation Checklist Every Business Needs

A practical, no-nonsense checklist covering everything from vendor selection to go-live and beyond. Built from real implementation experience.

## Pre-Implementation Phase

- [ ] Define clear business objectives and success metrics
- [ ] Secure executive sponsorship and budget approval
- [ ] Assemble a cross-functional implementation team
- [ ] Conduct a thorough business process audit
- [ ] Evaluate and select the right ERP vendor

## Implementation Phase

- [ ] Establish detailed project timeline and milestones
- [ ] Configure the system according to best practices
- [ ] Perform data migration and cleansing
- [ ] Develop and execute comprehensive testing plans
- [ ] Provide training to all user groups

## Go-Live Phase

- [ ] Conduct final system validation
- [ ] Execute cutover procedures
- [ ] Monitor system performance closely
- [ ] Have rollback plans ready
- [ ] Provide immediate support to users

## Post-Go-Live Phase

- [ ] Gather feedback from users
- [ ] Address issues and optimize configurations
- [ ] Plan for continuous improvement
- [ ] Document lessons learned
- [ ] Plan for future enhancements`,
    readTime: 7,
    published: true,
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 1002,
    title: "Odoo 17: What the New AI Features Mean for Your Business",
    slug: "odoo-17-what-the-new-ai-features-mean-for-your-business",
    categories: ["AI in ERP"],
    excerpt:
      "Odoo's latest release includes significant AI capabilities. We break down what is genuinely useful versus what is marketing, and how to evaluate adoption for your business.",
    content: `# Odoo 17: What the New AI Features Mean for Your Business

Odoo's latest release includes significant AI capabilities. We break down what is genuinely useful versus what is marketing, and how to evaluate adoption for your business.

## The AI Features in Odoo 17

Odoo 17 introduces several AI-powered capabilities:

- **Intelligent document processing** for automated data extraction
- **Predictive analytics** for sales forecasting and inventory management
- **Smart email assistance** for faster communication
- **Automated workflow suggestions** based on historical patterns

## What's Actually Useful?

Not all AI features are created equal. Focus on those that directly impact your business:

- **Document processing** can save significant manual data entry time
- **Sales forecasting** helps with inventory and resource planning
- **Workflow automation** reduces repetitive tasks

## Implementation Considerations

Before adopting AI features:

1. Ensure data quality is high
2. Start with one module and expand
3. Train users on how to interpret AI recommendations
4. Maintain human oversight of critical decisions
5. Monitor results and adjust as needed

## The Bottom Line

AI in Odoo 17 is a powerful tool, but it's not a magic bullet. Success depends on thoughtful implementation and continuous optimization.`,
    readTime: 6,
    published: true,
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export function migrateExistingBlogPosts() {
  // Check if migration has already been done
  const migrationFlag = localStorage.getItem("blogPostsMigrated");
  if (migrationFlag === "true") {
    return;
  }

  // Get existing articles
  const existingArticles = localStorage.getItem("blogArticles");
  const articles = existingArticles ? JSON.parse(existingArticles) : [];

  // Check if any of the existing posts are already there
  const existingIds = articles.map((a: any) => a.id);
  const postsToAdd = EXISTING_BLOG_POSTS.filter((p) => !existingIds.includes(p.id));

  if (postsToAdd.length > 0) {
    const updated = [...articles, ...postsToAdd];
    localStorage.setItem("blogArticles", JSON.stringify(updated));
  }

  // Extract and save categories
  const allCategories = new Set<string>();
  EXISTING_BLOG_POSTS.forEach((post) => {
    post.categories.forEach((cat) => allCategories.add(cat));
  });

  const existingCategories = localStorage.getItem("blogCategories");
  const categories = existingCategories ? JSON.parse(existingCategories) : [];
  const categorySet = new Set([...categories, ...Array.from(allCategories)]);

  localStorage.setItem("blogCategories", JSON.stringify(Array.from(categorySet)));

  // Mark migration as complete
  localStorage.setItem("blogPostsMigrated", "true");
}
