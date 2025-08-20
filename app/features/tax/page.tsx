import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  CheckCircle,
  Star,
  Calculator,
  FileText,
  Clock,
  AlertTriangle,
  Play,
  Download,
  TrendingUp,
  Users,
  Building,
  Zap,
} from "lucide-react"
import Image from "next/image"

export default function TaxPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#26426d] text-white mb-4 px-4 py-2">Tax Compliance</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                <span className="text-[#26426d]">Stress-Free</span> Tax Compliance
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay compliant with automated tax calculations, filing assistance, and real-time updates to tax
                regulations. MightyFyn makes tax season simple and stress-free for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#961128] to-[#26426d] text-white px-8 py-4"
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

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="h-6 w-6 text-[#26426d]" />
                  <span className="font-semibold text-green-800">Compliance Guarantee</span>
                </div>
                <p className="text-green-700">
                  We guarantee 100% tax compliance or we'll cover any penalties. Your peace of mind is our priority.
                </p>
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
                  <span className="font-semibold text-[#26426d]">15,000+</span> businesses trust our tax compliance
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                 
                  <Image
                    src="https://img.freepik.com/free-photo/overworked-businesswoman-working-overtime-business-company-office-meeting-room-evening_482257-10541.jpg?uid=P80687482&ga=GA1.1.1317553474.1748540047&semt=ais_hybrid&w=740"
                    alt="Tax Compliance Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-xs text-gray-500">Tax Status</div>
                    <div className="text-sm font-semibold text-[#26426d]">Compliant</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Tax Savings</div>
                <div className="text-xl font-bold text-[#26426d]">$12,450</div>
                <div className="text-xs text-[#26426d]">This year</div>
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
              Comprehensive <span className="text-[#26426d]">Tax Management</span> Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our complete tax compliance solution includes everything you need to stay compliant and maximize your tax
              savings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator,
                title: "Automated Tax Calculations",
                desc: "Real-time tax calculations for all transactions with support for multiple tax jurisdictions and rates.",
                color: "from-[#26426d] to-green-700",
              },
              {
                icon: FileText,
                title: "GST & VAT Ready",
                desc: "Complete GST and VAT compliance with automated filing, returns, and reconciliation features.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Shield,
                title: "Compliance Monitoring",
                desc: "Continuous monitoring of tax regulations and automatic updates to keep you compliant.",
                color: "from-purple-600 to-purple-700",
              },
              {
                icon: TrendingUp,
                title: "Tax Optimization",
                desc: "AI-powered recommendations to minimize tax liability and maximize deductions legally.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Clock,
                title: "Deadline Tracking",
                desc: "Never miss a tax deadline with automated reminders and filing schedule management.",
                color: "from-red-500 to-red-600",
              },
              {
                icon: FileText,
                title: "Audit Support",
                desc: "Complete audit trail and documentation to support you during tax audits and reviews.",
                color: "from-indigo-500 to-indigo-600",
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

      {/* Tax Types Supported */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              All <span className="text-[#26426d]">Tax Types</span> Covered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From income tax to sales tax, we handle all types of business taxes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Income Tax",
                desc: "Corporate and business income tax calculations and filing",
                icon: Building,
                color: "bg-[#26426d]",
              },
              {
                title: "Sales Tax",
                desc: "Automated sales tax calculation and remittance for all states",
                icon: Calculator,
                color: "bg-blue-500",
              },
              {
                title: "GST/VAT",
                desc: "Global GST and VAT compliance for international businesses",
                icon: FileText,
                color: "bg-purple-600",
              },
              {
                title: "Payroll Tax",
                desc: "Employee payroll tax calculations and withholdings",
                icon: Users,
                color: "bg-orange-500",
              },
            ].map((tax, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div
                    className={`${tax.color} rounded-xl p-4 text-white mx-auto mb-6 w-16 h-16 flex items-center justify-center`}
                  >
                    <tax.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tax.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tax.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How Our <span className="text-[#26426d]">Tax Compliance</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay compliant with our automated tax management system
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Setup Tax Rules",
                desc: "Configure your tax settings based on your business location and type.",
                icon: Calculator,
              },
              {
                step: "02",
                title: "Automatic Calculations",
                desc: "All transactions are automatically calculated with the correct tax rates.",
                icon: Zap,
              },
              {
                step: "03",
                title: "Monitor Compliance",
                desc: "Real-time monitoring ensures you stay compliant with all regulations.",
                icon: Shield,
              },
              {
                step: "04",
                title: "File & Pay",
                desc: "Automated filing and payment reminders keep you on schedule.",
                icon: FileText,
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#961128] to-[#26426d] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose <span className="text-[#26426d]">MightyFyn</span> for Tax Compliance?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our comprehensive tax solution eliminates the stress and complexity of tax compliance, letting you focus
                on growing your business.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Save Time & Money",
                    desc: "Reduce tax preparation time by 90% and avoid costly penalties with automated compliance.",
                  },
                  {
                    title: "Expert Support",
                    desc: "Access to certified tax professionals and accountants for complex tax situations.",
                  },
                  {
                    title: "Always Up-to-Date",
                    desc: "Automatic updates to tax rates and regulations ensure you're always compliant.",
                  },
                  {
                    title: "Audit Protection",
                    desc: "Complete documentation and audit trail to protect you during tax audits.",
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

              <Button className="bg-[#26426d] hover:bg-green-700 text-white px-8 py-3">
                Learn More About Tax Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-3xl p-8 shadow-2xl">
                <Image
                  src="https://img.freepik.com/free-photo/group-coworkers-discussing-business_23-2147787526.jpg?uid=P80687482&ga=GA1.1.1317553474.1748540047&semt=ais_hybrid&w=740"
                  alt="Tax Compliance Benefits"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="text-[#26426d]">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thousands of businesses trust MightyFyn for their tax compliance needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "MightyFyn's tax compliance features have saved us thousands in penalties. The automated calculations are always accurate and up-to-date.",
                name: "Robert Wilson",
                role: "Tax Director, Manufacturing Corp",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "As a multi-state business, managing sales tax was a nightmare. MightyFyn handles everything automatically - it's been a game-changer.",
                name: "Jennifer Lee",
                role: "CFO, E-commerce Plus",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "The audit support feature gave us confidence during our recent tax audit. Everything was perfectly documented and organized.",
                name: "Mark Thompson",
                role: "Owner, Consulting Services",
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

      {/* Warning Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-red-200">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Don't Risk Tax Penalties</h2>
            <p className="text-xl text-gray-600 mb-8">
              The average business pays $3,000+ in tax penalties each year due to compliance errors. MightyFyn
              eliminates this risk with automated, accurate tax management.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">$3,000+</div>
                <div className="text-sm text-gray-600">Average annual penalties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">40%</div>
                <div className="text-sm text-gray-600">Of businesses face penalties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#26426d] mb-2">0%</div>
                <div className="text-sm text-gray-600">Penalties with MightyFyn</div>
              </div>
            </div>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4">
              Protect My Business Now
              <Shield className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#961128] to-[#26426d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Stress-Free Tax Compliance?</h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of businesses that trust MightyFyn for complete tax compliance and peace of mind
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
              className="border-2 border-white text-[#26426d] hover:text-[#355c97] px-10 py-4 text-lg font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Tax Guide
            </Button>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            ✓ 14-day free trial ✓ No credit card required ✓ Compliance guarantee ✓ Expert support
          </p>
        </div>
      </section>
    </div>
  )
}
