import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Star,
  Clock,
  FileText,
  Download,
  Zap,
  Brain,
  Play,
  PieChart,
  LineChart,
  TrendingUp,
  Share2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ReportingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <Badge className="bg-[#961128] text-white mb-4 px-4 py-2">Financial Reporting</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                <span className="text-[#961128]">Intelligent</span> Financial Reporting
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your financial data into actionable insights with MightyFyn's powerful reporting and analytics
                tools. Make data-driven decisions with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#961128] to-[#26426d] hover:from-[#7a0e20] hover:to-[#1e3557] text-white px-8 py-4"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#26426d] text-[#26426d] hover:bg-[#26426d] hover:text-white px-8 py-4"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-[#961128]">12,000+</span> businesses use our reporting tools
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-inner h-[400px] lg:h-[570px]">
                 
                  <Image
                    src="https://img.freepik.com/free-photo/rear-view-man-seated-armchair-cafe-analyzing-diagrams-charts-before-presentation_1098-19128.jpg?uid=P80687482&ga=GA1.1.1317553474.1748540047&semt=ais_hybrid&w=740"
                    alt="Financial Reporting Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg h-full"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-xs text-gray-500">Forecast Accuracy</div>
                    <div className="text-sm font-semibold text-green-600">95.2%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Insights Generated</div>
                <div className="text-xl font-bold text-[#961128]">24 this month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful <span className="text-[#961128]">Reporting</span> Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive reporting solution includes everything you need to analyze, visualize, and understand
              your financial data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Interactive Dashboards",
                desc: "Customizable dashboards with drag-and-drop widgets to visualize your most important metrics.",
                color: "from-[#961128] to-[#7a0e20]",
              },
              {
                icon: Brain,
                title: "AI-Powered Insights",
                desc: "Our AI analyzes your data to identify trends, anomalies, and opportunities automatically.",
                color: "from-[#26426d] to-[#1e3557]",
              },
              {
                icon: PieChart,
                title: "Financial Statements",
                desc: "Generate professional P&L, balance sheets, and cash flow statements with a single click.",
                color: "from-green-600 to-green-700",
              },
              {
                icon: TrendingUp,
                title: "Forecasting",
                desc: "Predict future financial performance with our advanced forecasting algorithms.",
                color: "from-purple-600 to-purple-700",
              },
              {
                icon: LineChart,
                title: "Custom Reports",
                desc: "Build custom reports with our intuitive report builder - no technical skills required.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Share2,
                title: "Sharing & Export",
                desc: "Share reports with stakeholders or export to PDF, Excel, and other formats.",
                color: "from-orange-500 to-orange-600",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
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

      {/* Report Types */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Essential <span className="text-[#961128]">Financial Reports</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access all the reports you need to make informed business decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Profit & Loss Statement",
                desc: "Track your revenue, expenses, and profitability over any time period.",
                icon: BarChart3,
                color: "bg-[#961128]",
              },
              {
                title: "Balance Sheet",
                desc: "Get a snapshot of your assets, liabilities, and equity at any point in time.",
                icon: PieChart,
                color: "bg-[#26426d]",
              },
              {
                title: "Cash Flow Statement",
                desc: "Monitor the flow of cash in and out of your business to ensure liquidity.",
                icon: TrendingUp,
                color: "bg-green-600",
              },
              {
                title: "Accounts Receivable Aging",
                desc: "Track outstanding customer payments and manage your collections effectively.",
                icon: Clock,
                color: "bg-purple-600",
              },
              {
                title: "Expense Reports",
                desc: "Analyze spending patterns by category, vendor, or department.",
                icon: FileText,
                color: "bg-blue-500",
              },
              {
                title: "Sales Reports",
                desc: "Track sales performance by product, customer, or sales rep.",
                icon: LineChart,
                color: "bg-orange-500",
              },
              {
                title: "Tax Reports",
                desc: "Generate the reports you need for tax filing and compliance.",
                icon: FileText,
                color: "bg-teal-500",
              },
              {
                title: "Custom Reports",
                desc: "Build custom reports tailored to your specific business needs.",
                icon: Zap,
                color: "bg-indigo-500",
              },
            ].map((report, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className={`${report.color} rounded-xl p-3 text-white`}>
                  <report.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{report.title}</h3>
                  <p className="text-gray-600 mb-4">{report.desc}</p>
                  <Link href="#" className="text-[#961128] hover:text-[#7a0e20] font-medium flex items-center">
                    View Sample
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#961128] text-white mb-4 px-4 py-2">AI-Powered</Badge>
              <h2 className="text-4xl font-bold text-gray-900">
                <span className="text-[#961128]">Intelligent</span> Financial Insights
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our AI doesn't just present data—it analyzes it to uncover actionable insights that help you make better
                business decisions.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Anomaly Detection",
                    desc: "Automatically identify unusual transactions or spending patterns that require attention.",
                  },
                  {
                    title: "Trend Analysis",
                    desc: "Spot emerging trends in your financial data before they become obvious.",
                  },
                  {
                    title: "Predictive Analytics",
                    desc: "Forecast future financial performance based on historical data and market trends.",
                  },
                  {
                    title: "Cost-Saving Opportunities",
                    desc: "Identify areas where you can reduce expenses without impacting operations.",
                  },
                ].map((insight, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#961128] rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{insight.title}</h3>
                      <p className="text-gray-600">{insight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-[#961128] hover:bg-[#7a0e20] text-white px-8 py-3">
                See AI in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-3xl p-8 shadow-2xl">
                <Image
                  src="https://img.freepik.com/free-photo/teleworker-home-office-gathering-information-from-internet-seminar_482257-119301.jpg?uid=P80687482&ga=GA1.1.1317553474.1748540047&semt=ais_hybrid&w=740"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                  alt="AI Insights"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="text-[#961128]">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thousands of businesses rely on MightyFyn for their financial reporting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The AI insights have transformed how we make financial decisions. We identified cost-saving opportunities we never would have found on our own.",
                name: "Michael Chen",
                role: "CFO, GrowthCorp",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "As a small business owner, I don't have time to dig through financial data. MightyFyn does the analysis for me and presents insights I can actually use.",
                name: "Sarah Johnson",
                role: "Owner, Retail Shop",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "The forecasting accuracy is incredible. We've been able to plan our growth strategy with confidence based on MightyFyn's predictions.",
                name: "David Park",
                role: "CEO, Tech Startup",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Image
                      src={ `https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name} </p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#961128] to-[#26426d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Financial Reporting?</h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of businesses that use MightyFyn to gain valuable insights from their financial data
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
              <Download className="mr-2 h-5 w-5" />
              Sample Reports
            </Button>
          </div>
          <p className="text-white/80 mt-8 text-sm">✓ 14-day free trial ✓ No credit card required ✓ Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
