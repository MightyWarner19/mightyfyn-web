import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Award, Target, CheckCircle, Star, Building, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="bg-[#961128] text-white mb-6 px-4 py-2">Success Stories</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Real Results from <span className="text-[#961128]">Real Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Discover how businesses across industries are transforming their financial operations and achieving
            remarkable growth with MightyFyn.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#961128] mb-1">300%</div>
              <div className="text-sm text-gray-600">Average Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#26426d] mb-1">75%</div>
              <div className="text-sm text-gray-600">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#961128] mb-1">$2.4M</div>
              <div className="text-sm text-gray-600">Average Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#26426d] mb-1">98%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured <span className="text-[#961128]">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses like yours are achieving extraordinary results
            </p>
          </div>

          <div className="space-y-16">
            {/* Case Study 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-[#961128] to-[#7a0e20] w-16 h-16 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-green-100 text-green-800 mb-2">Growth Success</Badge>
                    <h3 className="text-3xl font-bold text-gray-900">TechStart Solutions</h3>
                    <p className="text-lg text-gray-600">SaaS Startup • 50 Employees</p>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  "MightyFyn transformed our financial operations from chaotic spreadsheets to a streamlined, AI-powered
                  system. We went from struggling with basic bookkeeping to having real-time insights that helped us
                  secure $5M in Series A funding."
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#961128] mb-1">500%</div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#26426d] mb-1">$5M</div>
                    <div className="text-sm text-gray-600">Funding Raised</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">80%</div>
                    <div className="text-sm text-gray-600">Time Saved</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Automated financial reporting for investors",
                    "Real-time cash flow forecasting",
                    "Streamlined expense management for remote team",
                    "Professional invoicing that impressed clients",
                  ].map((achievement, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>

                <Link href="/case-studies/techstart-solutions">
                  <Button className="bg-[#961128] hover:bg-[#7a0e20] text-white">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-3xl p-8 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="TechStart Solutions Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Monthly Recurring Revenue</div>
                  <div className="text-2xl font-bold text-green-600">$850K</div>
                  <div className="text-xs text-green-600">+500% growth</div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="bg-gradient-to-br from-[#26426d] to-[#961128] rounded-3xl p-8 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Global Manufacturing Corp Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Annual Cost Savings</div>
                  <div className="text-2xl font-bold text-green-600">$2.4M</div>
                  <div className="text-xs text-green-600">First year alone</div>
                </div>
              </div>

              <div className="space-y-8 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-[#26426d] to-[#1e3557] w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-blue-100 text-blue-800 mb-2">Enterprise Success</Badge>
                    <h3 className="text-3xl font-bold text-gray-900">Global Manufacturing Corp</h3>
                    <p className="text-lg text-gray-600">Manufacturing • 2,000+ Employees</p>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  "Managing finances across 15 countries was a nightmare until MightyFyn. The multi-entity management
                  and real-time consolidation features gave us visibility we never had before. We identified $2.4M in
                  cost savings in the first year alone."
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#26426d] mb-1">15</div>
                    <div className="text-sm text-gray-600">Countries Unified</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#961128] mb-1">$2.4M</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">60%</div>
                    <div className="text-sm text-gray-600">Faster Reporting</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Unified financial reporting across all entities",
                    "Automated inter-company reconciliation",
                    "Real-time currency conversion and consolidation",
                    "Compliance with local regulations in all countries",
                  ].map((achievement, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>

                <Link href="/case-studies/global-manufacturing">
                  <Button className="bg-[#26426d] hover:bg-[#1e3557] text-white">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-purple-100 text-purple-800 mb-2">Professional Services</Badge>
                    <h3 className="text-3xl font-bold text-gray-900">Martinez & Associates CPA</h3>
                    <p className="text-lg text-gray-600">Accounting Firm • 25 Employees</p>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  "As a growing CPA firm, we needed a solution that could scale with us. MightyFyn's multi-client
                  management and white-label features allowed us to serve 300+ clients efficiently while maintaining our
                  professional brand. Our client satisfaction scores increased to 98%."
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">300+</div>
                    <div className="text-sm text-gray-600">Clients Managed</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#961128] mb-1">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#26426d] mb-1">200%</div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Streamlined client onboarding process",
                    "Automated report generation and delivery",
                    "White-label client portals with firm branding",
                    "Integrated time tracking and billing",
                  ].map((achievement, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>

                <Link href="/case-studies/martinez-associates">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Martinez & Associates Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Client Satisfaction</div>
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-xs text-green-600">Industry leading</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Success */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Across <span className="text-[#961128]">All Industries</span>
            </h2>
            <p className="text-xl text-gray-600">MightyFyn delivers results for businesses of all types and sizes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                industry: "Technology",
                companies: "1,200+",
                avgGrowth: "400%",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Building,
                industry: "Manufacturing",
                companies: "800+",
                avgGrowth: "250%",
                color: "from-gray-600 to-gray-700",
              },
              {
                icon: Users,
                industry: "Professional Services",
                companies: "2,500+",
                avgGrowth: "300%",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Award,
                industry: "Healthcare",
                companies: "600+",
                avgGrowth: "180%",
                color: "from-red-500 to-red-600",
              },
            ].map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.industry}</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-[#961128]">{industry.companies}</div>
                    <div className="text-sm text-gray-600">Companies served</div>
                    <div className="text-lg font-semibold text-green-600">{industry.avgGrowth}</div>
                    <div className="text-sm text-gray-600">Average growth</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="text-[#961128]">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real feedback from real customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO",
                company: "TechStart Solutions",
                content:
                  "MightyFyn didn't just improve our accounting - it transformed our entire business. The insights we gained helped us make strategic decisions that led to our successful Series A.",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Michael Chen",
                role: "CFO",
                company: "Global Manufacturing Corp",
                content:
                  "The ROI was immediate. Within 3 months, we had identified cost savings that paid for the software for the next 5 years. The visibility across our global operations is unprecedented.",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Jennifer Martinez",
                role: "Managing Partner",
                company: "Martinez & Associates CPA",
                content:
                  "Our clients love the professional reports and portals. We've been able to increase our fees while providing better service. It's a win-win for everyone.",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of businesses that have transformed their financial operations with MightyFyn
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#961128] hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-xl"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-[#961128] px-10 py-4 text-lg font-semibold"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            ✓ 14-day free trial ✓ No credit card required ✓ Expert onboarding ✓ Proven results
          </p>
        </div>
      </section>
    </div>
  )
}
