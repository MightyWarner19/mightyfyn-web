import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, User, Search, TrendingUp, FileText, Calculator, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-[#961128] text-white hover:bg-[#7a0e20] mb-6">Resources & Insights</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">MightyFyn Blog</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Stay updated with the latest insights on accounting, finance, AI automation, and business growth strategies
            from our team of experts.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search articles..." className="pl-10 py-3" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Article */}
              <div className="mb-16">
                <Badge className="bg-[#961128] text-white mb-4">Featured Article</Badge>
                <Card className="border-0 shadow-xl overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="/placeholder.svg?height=300&width=800"
                      alt="Featured Article"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        December 15, 2024
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        Sarah Chen
                      </div>
                      <Badge variant="outline">AI & Automation</Badge>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      How AI is Revolutionizing Small Business Accounting in 2024
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Discover how artificial intelligence is transforming the way small businesses handle their
                      finances, from automated expense categorization to predictive cash flow analysis. Learn practical
                      tips to implement AI in your accounting workflow.
                    </p>
                    <Link href="/blog/ai-revolutionizing-accounting">
                      <Button className="bg-[#961128] hover:bg-[#7a0e20] text-white">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              {/* Article Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "10 Essential Financial Reports Every Business Owner Should Track",
                    excerpt:
                      "Learn about the key financial reports that provide insights into your business performance and help you make informed decisions.",
                    author: "Michael Rodriguez",
                    date: "December 12, 2024",
                    category: "Financial Reports",
                    icon: TrendingUp,
                    slug: "essential-financial-reports",
                  },
                  {
                    title: "Tax Season Preparation: A Complete Checklist for 2024",
                    excerpt:
                      "Get ready for tax season with our comprehensive checklist covering everything from document organization to deduction strategies.",
                    author: "Emily Johnson",
                    date: "December 10, 2024",
                    category: "Tax Planning",
                    icon: Calculator,
                    slug: "tax-season-preparation",
                  },
                  {
                    title: "Streamlining Invoice Management with Automation",
                    excerpt:
                      "Discover how automated invoicing can save time, reduce errors, and improve cash flow for your business.",
                    author: "David Park",
                    date: "December 8, 2024",
                    category: "Automation",
                    icon: Zap,
                    slug: "invoice-automation",
                  },
                  {
                    title: "Understanding Cash Flow: The Lifeblood of Your Business",
                    excerpt:
                      "Master the fundamentals of cash flow management and learn strategies to maintain healthy cash flow throughout the year.",
                    author: "Lisa Wong",
                    date: "December 5, 2024",
                    category: "Cash Flow",
                    icon: FileText,
                    slug: "understanding-cash-flow",
                  },
                  {
                    title: "Cloud Accounting vs Traditional Software: Making the Right Choice",
                    excerpt:
                      "Compare cloud-based and traditional accounting solutions to determine which option best fits your business needs.",
                    author: "James Miller",
                    date: "December 3, 2024",
                    category: "Technology",
                    icon: TrendingUp,
                    slug: "cloud-vs-traditional-accounting",
                  },
                  {
                    title: "Small Business Expense Tracking: Best Practices and Tools",
                    excerpt:
                      "Learn effective strategies for tracking business expenses and discover tools that can simplify the process.",
                    author: "Anna Thompson",
                    date: "December 1, 2024",
                    category: "Expense Management",
                    icon: Calculator,
                    slug: "expense-tracking-best-practices",
                  },
                ].map((article, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt={article.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </div>
                      </div>
                      <div className="flex items-center mb-3">
                        <article.icon className="h-5 w-5 text-[#961128] mr-2" />
                        <Badge variant="outline">{article.category}</Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                      <Link href={`/blog/${article.slug}`}>
                        <Button
                          variant="outline"
                          className="border-[#961128] text-[#961128] hover:bg-[#961128] hover:text-white"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  className="border-[#26426d] text-[#26426d] hover:bg-[#26426d] hover:text-white px-8 py-3"
                >
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#961128] to-[#26426d] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                  <p className="text-white/90 mb-4">Get the latest insights delivered to your inbox weekly.</p>
                  <div className="space-y-3">
                    <Input placeholder="Enter your email" className="bg-white text-gray-900" />
                    <Button className="w-full bg-white text-[#961128] hover:bg-gray-100">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-3">
                    {[
                      { name: "AI & Automation", count: 12 },
                      { name: "Financial Reports", count: 8 },
                      { name: "Tax Planning", count: 15 },
                      { name: "Cash Flow", count: 6 },
                      { name: "Technology", count: 10 },
                      { name: "Small Business", count: 20 },
                    ].map((category, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <Link
                          href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
                          className="text-gray-700 hover:text-[#961128] transition-colors"
                        >
                          {category.name}
                        </Link>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Posts</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "5 Ways AI Can Reduce Your Accounting Workload",
                        date: "Nov 28, 2024",
                      },
                      {
                        title: "Year-End Financial Planning Checklist",
                        date: "Nov 25, 2024",
                      },
                      {
                        title: "Common Bookkeeping Mistakes to Avoid",
                        date: "Nov 22, 2024",
                      },
                    ].map((post, index) => (
                      <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                        <Link
                          href="#"
                          className="text-sm font-medium text-gray-900 hover:text-[#961128] transition-colors line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Accounting",
                      "AI",
                      "Automation",
                      "Small Business",
                      "Tax",
                      "Cash Flow",
                      "Invoicing",
                      "Reports",
                      "Cloud",
                      "Finance",
                    ].map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="hover:bg-[#961128] hover:text-white cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
