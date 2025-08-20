import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  FileText,
  CreditCard,
  Calculator,
  BarChart3,
  Users,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Smartphone,
  Globe,
  Brain,
  Play,
  Download,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="bg-gradient-to-r from-[#961128] to-[#26426d] text-white mb-6 px-6 py-3 border-0">
            <Sparkles className="w-4 h-4 mr-2" />
            Complete Feature Suite
          </Badge>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for <span className="text-[#961128]">Modern Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Discover how MightyFyn's intelligent features can transform your accounting workflow and give you the
            insights you need to grow your business faster than ever before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#961128] to-[#26426d] hover:from-[#7a0e20] hover:to-[#1e3557] text-white px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#26426d] text-[#26426d] hover:bg-[#26426d] hover:text-white px-8 py-4"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </div>

          {/* Feature Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#961128] mb-2">50+</div>
              <div className="text-gray-600 font-medium">Features</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#26426d] mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#961128] mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#26426d] mb-2">150+</div>
              <div className="text-gray-600 font-medium">Integrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-24">
            {/* Smart Invoicing */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-[#961128] to-[#7a0e20] w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900">Smart Invoicing</h2>
                    <p className="text-lg text-[#961128] font-medium">AI-Powered & Automated</p>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Create professional invoices in seconds with AI-powered templates that adapt to your business.
                  Automated follow-ups, payment reminders, and multi-currency support included.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "AI-powered invoice templates",
                    "Automated payment reminders",
                    "Multi-currency support",
                    "Custom branding options",
                    "Recurring invoice automation",
                    "Payment gateway integration",
                  ].map((feature, index) => (
                  
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#26426d] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  
                  ))}

                <div className="flex items-center space-x-4 pt-4">
                  <Button className="bg-[#961128] hover:bg-[#7a0e20] text-white">
                    Try Invoicing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="#" className="text-[#961128] hover:text-[#7a0e20] font-medium flex items-center">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-3xl p-8 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Smart Invoicing Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-sm text-gray-500">Invoices Sent</div>
                  <div className="text-2xl font-bold text-[#961128]">1,247</div>
                  <div className="text-xs ">+23% this month</div>
                </div>
              </div>
            </div>

            {/* AI-Powered Expense Tracking */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="bg-gradient-to-br from-[#26426d] to-[#961128] rounded-3xl p-8 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Expense Tracking Interface"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-sm text-gray-500">AI Accuracy</div>
                  <div className="text-2xl font-bold text-[#26426d]">99.7%</div>
                  <div className="text-xs ">Expense categorization</div>
                </div>
              </div>

              <div className="space-y-8 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-[#26426d] to-[#1e3557] w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900">AI-Powered Expense Tracking</h2>
                    <p className="text-lg text-[#26426d] font-medium">Smart & Automatic</p>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Let AI automatically categorize your expenses, scan receipts, and track spending patterns. Never miss
                  a deduction again with intelligent expense management that learns from your business.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Automatic expense categorization",
                    "Receipt scanning with OCR",
                    "Mileage tracking",
                    "Credit card integration",
                    "Expense policy compliance",
                    "Real-time spending alerts",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#26426d] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <Button className="bg-[#26426d] hover:bg-[#1e3557] text-white">
                    Try Expense Tracking
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="#" className="text-[#26426d] hover:text-[#1e3557] font-medium flex items-center">
                    View Demo
                    <Play className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Tax Compliance & GST Ready */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calculator className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900">Tax Compliance & GST Ready</h2>
                    <p className="text-lg  font-medium">Always Compliant</p>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Stay compliant with automated tax calculations, GST filing, and real-time updates to tax regulations.
                  Built for businesses of all sizes with multi-jurisdiction support.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Automated GST calculations",
                    "Tax filing assistance",
                    "Compliance monitoring",
                    "Multi-jurisdiction support",
                    "Audit trail maintenance",
                    "Tax optimization suggestions",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#26426d] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="h-6 w-6 " />
                    <span className="font-semibold text-green-800">Compliance Guarantee</span>
                  </div>
                  <p className="text-green-700">We guarantee 100% tax compliance or we'll cover any penalties.</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Tax Compliance Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Real-Time Reports & Forecasting */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Reports and Analytics Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>

              <div className="space-y-8 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900">Real-Time Reports & Forecasting</h2>
                    <p className="text-lg text-purple-600 font-medium">Predictive Analytics</p>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Get instant insights with live dashboards, predictive analytics, and customizable reports. Make
                  data-driven decisions with confidence using our advanced forecasting algorithms.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Live financial dashboards",
                    "Predictive cash flow forecasting",
                    "Custom report builder",
                    "KPI tracking and alerts",
                    "Comparative analysis",
                    "Export to multiple formats",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#26426d] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Brain className="h-6 w-6 text-purple-600" />
                    <span className="font-semibold text-purple-800">AI-Powered Insights</span>
                  </div>
                  <p className="text-purple-700">
                    Our AI analyzes patterns and predicts future trends with 95% accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">And Much More...</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover additional features that make MightyFyn the complete solution for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile App",
                desc: "Full-featured mobile apps for iOS and Android with offline capabilities",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Globe,
                title: "Multi-Currency",
                desc: "Support for 100+ currencies with real-time exchange rates",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Brain,
                title: "AI Insights",
                desc: "Intelligent recommendations and predictive business insights",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Bank-grade security with SOC 2 Type II compliance",
                color: "from-red-500 to-red-600",
              },
              {
                icon: Zap,
                title: "API Integration",
                desc: "Connect with 1000+ business applications seamlessly",
                color: "from-yellow-500 to-yellow-600",
              },
              {
                icon: Clock,
                title: "Time Tracking",
                desc: "Built-in time tracking for service-based businesses",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                icon: FileText,
                title: "Document Management",
                desc: "Secure storage and organization of financial documents",
                color: "from-pink-500 to-pink-600",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                desc: "Advanced collaboration tools with role-based permissions",
                color: "from-teal-500 to-teal-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Seamless <span className="text-[#961128]">Integrations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect MightyFyn with your favorite business tools and streamline your entire workflow
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "Shopify",
              "Stripe",
              "PayPal",
              "Slack",
              "Zoom",
              "HubSpot",
              "Salesforce",
              "QuickBooks",
              "Xero",
              "Square",
              "WooCommerce",
              "Mailchimp",
            ].map((integration, i) => (
              <div key={i} className="flex justify-center hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-50 rounded-lg px-4 py-3 text-center border border-gray-100 hover:border-[#961128] transition-colors w-full">
                  <span className="font-medium text-gray-700 text-sm">{integration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#961128] text-[#961128] hover:bg-[#961128] hover:text-white">
              View All 150+ Integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#961128] to-[#26426d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-white/90 mb-10">
            Start your free trial today and see how MightyFyn can transform your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#961128] hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-[#961128] px-10 py-4 text-lg font-semibold"
            >
              Schedule Demo
              <Play className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            ✓ 14-day free trial ✓ No credit card required ✓ Full feature access ✓ Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
