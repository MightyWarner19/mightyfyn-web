import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CreditCard,
  CheckCircle,
  Star,
  FileText,
  Smartphone,
  Brain,
  Play,
  Receipt,
  Car,
} from "lucide-react"
import Image from "next/image"

export default function ExpensesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#26426d] text-white mb-4 px-4 py-2">Expense Management</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                <span className="text-[#26426d]">AI-Powered</span> Expense Tracking
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Automate expense tracking, categorization, and reporting with MightyFyn's intelligent expense management
                solution. Save time, reduce errors, and gain valuable insights into your spending.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#26426d] to-[#961128] hover:from-[#1e3557] hover:to-[#7a0e20] text-white px-8 py-4"
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
                  <span className="font-semibold text-[#26426d]">8,500+</span> businesses use our expense tracking
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#26426d] to-[#961128] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-inner h-[400px] md:h-[550px]" >
                 
                  <Image
                    src="https://img.freepik.com/free-photo/person-office-analyzing-checking-finance-graphs_23-2150377136.jpg?uid=P80687482&ga=GA1.1.1317553474.1748540047&semt=ais_hybrid&w=740"
                    alt="Expense Management Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg !h-full"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-xs text-gray-500">AI Status</div>
                    <div className="text-sm font-semibold text-green-600">Processing</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Time Saved</div>
                <div className="text-xl font-bold text-[#26426d]">5.2 hrs/week</div>
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
              Powerful <span className="text-[#26426d]">Expense Management</span> Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive expense tracking solution includes everything you need to manage, track, and analyze
              your business expenses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Receipt,
                title: "Receipt Scanning",
                desc: "Capture receipts with your phone and our AI automatically extracts and categorizes the data.",
                color: "from-[#26426d] to-[#1e3557]",
              },
              {
                icon: Brain,
                title: "AI Categorization",
                desc: "Our machine learning algorithm automatically categorizes expenses with 99.7% accuracy.",
                color: "from-[#961128] to-[#7a0e20]",
              },
              {
                icon: CreditCard,
                title: "Card Integration",
                desc: "Connect your credit cards and bank accounts for automatic expense import and reconciliation.",
                color: "from-green-600 to-green-700",
              },
              {
                icon: Car,
                title: "Mileage Tracking",
                desc: "Track business mileage with GPS and automatically calculate deduction amounts.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: FileText,
                title: "Expense Reports",
                desc: "Generate detailed expense reports with custom filters, categories, and date ranges.",
                color: "from-purple-600 to-purple-700",
              },
              {
                icon: Smartphone,
                title: "Mobile Access",
                desc: "Manage expenses on the go with our mobile app for iOS and Android devices.",
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

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How Our <span className="text-[#26426d]">Expense Tracking</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track and manage expenses in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Capture Receipt",
                desc: "Take a photo of your receipt or forward email receipts to your dedicated address.",
                icon: Receipt,
              },
              {
                step: "02",
                title: "AI Processing",
                desc: "Our AI extracts all relevant data and automatically categorizes the expense.",
                icon: Brain,
              },
              {
                step: "03",
                title: "Review & Approve",
                desc: "Quickly review the extracted data and approve with a single tap.",
                icon: CheckCircle,
              },
              {
                step: "04",
                title: "Reporting & Insights",
                desc: "Generate reports and gain insights into your spending patterns.",
                icon: FileText,
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#26426d] to-[#961128] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#26426d] to-[#961128] rounded-3xl p-8 shadow-2xl h-100  ">
                <Image
                  src="https://img.freepik.com/free-photo/woman-cafe-with-laptop_1208-198.jpg?uid=P80687482&ga=GA1.1.1317553474.1748540047&semt=ais_hybrid&w=740"
                  alt="Expense Analytics Dashboard"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg h-full"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                The <span className="text-[#26426d]">Benefits</span> of AI-Powered Expense Management
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our intelligent expense tracking solution helps businesses of all sizes save time, reduce errors, and
                gain valuable insights into their spending.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Save Time",
                    desc: "Reduce manual data entry by up to 95% with automated receipt scanning and categorization.",
                  },
                  {
                    title: "Improve Accuracy",
                    desc: "Eliminate human error with AI-powered data extraction and verification.",
                  },
                  {
                    title: "Gain Insights",
                    desc: "Understand spending patterns and identify cost-saving opportunities with detailed analytics.",
                  },
                  {
                    title: "Ensure Compliance",
                    desc: "Maintain audit-ready records with digital receipt storage and policy enforcement.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#26426d] rounded-full p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-[#26426d] hover:bg-[#1e3557] text-white px-8 py-3">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="text-[#26426d]">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thousands of businesses trust MightyFyn for their expense management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The AI receipt scanning has saved our accounting team hours every week. It's incredibly accurate and easy to use.",
                name: "David Park",
                role: "Finance Director, TechCorp",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "As a consultant who travels frequently, the mileage tracking feature has been a game-changer for my expense reports.",
                name: "Lisa Wong",
                role: "Independent Consultant",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "The insights we've gained from the expense analytics have helped us identify several areas where we could cut costs.",
                name: "James Miller",
                role: "CEO, StartupX",
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
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
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
      <section className="py-24 bg-gradient-to-r from-[#26426d] to-[#961128]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Simplify Expense Management?</h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of businesses that have transformed their expense tracking with MightyFyn
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#26426d] hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-[#26426d] px-10 py-4 text-lg font-semibold"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-white/80 mt-8 text-sm">✓ 14-day free trial ✓ No credit card required ✓ Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
