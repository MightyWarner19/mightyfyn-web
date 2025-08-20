import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Search,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Video,
  Users,
  CheckCircle,
  Book,
  HelpCircle,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="bg-[#961128] text-white mb-6 px-4 py-2">Help Center</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">How Can We Help You?</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Find answers, get support, and learn how to make the most of MightyFyn
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-12">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for help articles, tutorials, or features..."
              className="pl-12 py-4 text-lg border-2 border-gray-200 focus:border-[#961128]"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#961128] hover:bg-[#7a0e20]">
              Search
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#961128] mb-1">500+</div>
              <div className="text-sm text-gray-600">Help Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#26426d] mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#961128] mb-1">&lt; 2 min</div>
              <div className="text-sm text-gray-600">Avg Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get <span className="text-[#961128]">Support</span> Your Way
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the support option that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                desc: "Get instant help from our support team",
                availability: "24/7 Available",
                action: "Start Chat",
                color: "from-[#961128] to-[#7a0e20]",
              },
              {
                icon: Phone,
                title: "Phone Support",
                desc: "Speak directly with our experts",
                availability: "Mon-Fri, 9AM-6PM",
                action: "Call Now",
                color: "from-[#26426d] to-[#1e3557]",
              },
              {
                icon: Mail,
                title: "Email Support",
                desc: "Send us a detailed message",
                availability: "Response within 2 hours",
                action: "Send Email",
                color: "from-green-600 to-green-700",
              },
              {
                icon: Video,
                title: "Screen Share",
                desc: "Get personalized help via screen sharing",
                availability: "By appointment",
                action: "Schedule Session",
                color: "from-purple-600 to-purple-700",
              },
            ].map((option, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.desc}</p>
                  <div className="text-sm text-gray-500 mb-6">{option.availability}</div>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    {option.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Help Topics */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Popular <span className="text-[#961128]">Help Topics</span>
            </h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Book,
                title: "Getting Started",
                articles: [
                  "How to set up your account",
                  "Connecting your bank accounts",
                  "Inviting team members",
                  "Basic navigation guide",
                ],
                color: "bg-[#961128]",
              },
              {
                icon: FileText,
                title: "Invoicing & Billing",
                articles: [
                  "Creating your first invoice",
                  "Setting up recurring invoices",
                  "Payment processing setup",
                  "Invoice customization",
                ],
                color: "bg-[#26426d]",
              },
              {
                icon: Users,
                title: "Team Management",
                articles: [
                  "Adding team members",
                  "Setting user permissions",
                  "Managing client access",
                  "Team collaboration features",
                ],
                color: "bg-green-600",
              },
              {
                icon: CheckCircle,
                title: "Expense Tracking",
                articles: [
                  "Scanning receipts with mobile app",
                  "Categorizing expenses",
                  "Mileage tracking setup",
                  "Expense report generation",
                ],
                color: "bg-purple-600",
              },
              {
                icon: HelpCircle,
                title: "Troubleshooting",
                articles: [
                  "Login and password issues",
                  "Bank connection problems",
                  "Data sync troubleshooting",
                  "Performance optimization",
                ],
                color: "bg-orange-500",
              },
              {
                icon: Lightbulb,
                title: "Tips & Best Practices",
                articles: [
                  "Maximizing automation features",
                  "Financial reporting best practices",
                  "Security recommendations",
                  "Workflow optimization tips",
                ],
                color: "bg-blue-500",
              },
            ].map((topic, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div
                    className={`${topic.color} rounded-xl p-4 text-white mb-6 w-16 h-16 flex items-center justify-center`}
                  >
                    <topic.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{topic.title}</h3>
                  <ul className="space-y-3">
                    {topic.articles.map((article, i) => (
                      <li key={i}>
                        <Link
                          href="#"
                          className="text-gray-600 hover:text-[#961128] transition-colors flex items-center"
                        >
                          <ArrowRight className="h-4 w-4 mr-2" />
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Video <span className="text-[#961128]">Tutorials</span>
            </h2>
            <p className="text-xl text-gray-600">Learn with step-by-step video guides</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "MightyFyn Overview",
                duration: "5:30",
                views: "12.5K",
                description: "Complete overview of MightyFyn features and capabilities",
              },
              {
                title: "Setting Up Your First Invoice",
                duration: "3:45",
                views: "8.2K",
                description: "Step-by-step guide to creating and sending your first invoice",
              },
              {
                title: "Expense Tracking Made Easy",
                duration: "4:20",
                views: "9.8K",
                description: "Learn how to track expenses efficiently with our mobile app",
              },
              {
                title: "Financial Reports Deep Dive",
                duration: "7:15",
                views: "6.3K",
                description: "Understanding and customizing financial reports for your business",
              },
              {
                title: "Team Collaboration Features",
                duration: "6:00",
                views: "5.1K",
                description: "How to collaborate effectively with your team using MightyFyn",
              },
              {
                title: "Advanced Automation Setup",
                duration: "8:30",
                views: "4.7K",
                description: "Setting up advanced automation rules to save time",
              },
            ].map((video, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#961128] to-[#26426d] flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Video className="h-8 w-8 text-white ml-1" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{video.views} views</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#961128] text-[#961128] hover:bg-[#961128] hover:text-white"
                    >
                      Watch Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 bg-gradient-to-r from-[#961128] to-[#26426d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
          <p className="text-xl text-white/90 mb-10">
            Our support team is here to help you succeed. Get in touch and we'll resolve your issue quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#961128] hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Live Chat
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-[#961128] px-10 py-4 text-lg font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Support
            </Button>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            ✓ 24/7 live chat support ✓ Expert help available ✓ Average response time under 2 minutes
          </p>
        </div>
      </section>
    </div>
  )
}
