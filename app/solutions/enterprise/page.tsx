import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Shield,
  Zap,
  Users,
  Globe,
  BarChart3,
  Lock,
  Phone,
  Play,
  Award,
  Target,
  Briefcase,
} from "lucide-react"
import Image from "next/image"

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#26426d] text-white mb-4 px-4 py-2">Enterprise Solution</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                <span className="text-[#26426d]">Enterprise-Grade</span> Financial Management
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Powerful, scalable financial solutions for large organizations. Advanced features, dedicated support,
                and enterprise-level security to meet your complex business needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#26426d] to-[#961128] hover:from-[#1e3557] hover:to-[#7a0e20] text-white px-8 py-4"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#26426d] text-[#26426d] hover:bg-[#26426d] hover:text-white px-8 py-4"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Enterprise Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#26426d] mb-1">500+</div>
                  <div className="text-sm text-gray-600">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#961128] mb-1">99.99%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#26426d] mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Dedicated Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#26426d] to-[#961128] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  
                  <Image
                    src="https://img.freepik.com/free-photo/coworkers-reviewing-some-reports_1098-363.jpg?uid=P80687482&ga=GA1.1.1317553474.1748540047&semt=ais_hybrid&w=740"
                    alt="Enterprise Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg object-cover w-full h-96"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="text-xs text-gray-500">Security</div>
                    <div className="text-sm font-semibold text-green-600">SOC 2 Certified</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Cost Savings</div>
                <div className="text-xl font-bold text-green-600">$2.4M</div>
                <div className="text-xs text-green-600">Annual average</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-[#26426d]">Enterprise-Grade</span> Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced capabilities designed for large organizations with complex financial requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Multi-Entity Management",
                desc: "Manage multiple subsidiaries, departments, and cost centers from a single platform",
                features: ["Consolidated reporting", "Inter-company transactions", "Entity-level permissions"],
              },
              {
                icon: Shield,
                title: "Advanced Security",
                desc: "Enterprise-grade security with SOC 2 Type II compliance and advanced access controls",
                features: ["SSO integration", "Role-based access", "Audit trails"],
              },
              {
                icon: BarChart3,
                title: "Custom Analytics",
                desc: "Build custom dashboards and reports tailored to your organization's specific needs",
                features: ["Custom KPIs", "Advanced forecasting", "Executive dashboards"],
              },
              {
                icon: Globe,
                title: "Global Operations",
                desc: "Support for multi-currency, multi-language, and international compliance requirements",
                features: ["100+ currencies", "Local compliance", "Multi-language UI"],
              },
              {
                icon: Zap,
                title: "API & Integrations",
                desc: "Extensive API access and pre-built integrations with enterprise software",
                features: ["REST API", "Webhook support", "Custom integrations"],
              },
              {
                icon: Users,
                title: "Dedicated Support",
                desc: "24/7 dedicated support team with guaranteed response times and SLA",
                features: ["Dedicated CSM", "Priority support", "Training programs"],
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-[#26426d] to-[#961128] rounded-2xl p-4 text-white mb-6 w-16 h-16 flex items-center justify-center">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.desc}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Clients */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-[#26426d]">Global Enterprises</span>
            </h2>
            <p className="text-xl text-gray-600">Leading organizations worldwide rely on MightyFyn</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 mb-16">
            {["Fortune 500", "Global Bank", "Tech Giant", "Retail Chain", "Manufacturing", "Healthcare"].map(
              (company, i) => (
                <div key={i} className="flex justify-center hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-lg px-6 py-4 text-center border border-gray-100 hover:border-[#26426d] transition-colors shadow-sm">
                    <span className="font-semibold text-gray-700 text-sm">{company}</span>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "David Chen",
                role: "CFO",
                company: "Global Manufacturing Corp",
                content:
                  "MightyFyn's enterprise solution transformed our financial operations across 15 countries. The multi-entity management and compliance features are exceptional.",
                rating: 5,
                metric: "$2.4M saved annually",
                image: "/placeholder.svg?height=80&width=80",
                results: ["$2.4M cost savings", "50% faster reporting", "100% compliance"],
              },
              {
                name: "Sarah Williams",
                role: "VP Finance",
                company: "TechCorp International",
                content:
                  "The scalability and security of MightyFyn allowed us to consolidate our financial systems globally. The dedicated support team is outstanding.",
                rating: 5,
                metric: "15 countries unified",
                image: "/placeholder.svg?height=80&width=80",
                results: ["15 countries unified", "60% efficiency gain", "Zero security incidents"],
              },
              {
                name: "Michael Rodriguez",
                role: "Director of Finance",
                company: "Retail Enterprises Ltd",
                content:
                  "Managing finances for 200+ locations was complex until MightyFyn. The real-time visibility and automated processes have been game-changing.",
                rating: 5,
                metric: "200+ locations managed",
                image: "/placeholder.svg?height=80&width=80",
                results: ["200+ locations", "Real-time visibility", "Automated processes"],
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

                  <div className="space-y-4">
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
                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="bg-[#26426d]/5 rounded-lg p-4">
                      <div className="text-sm font-medium text-[#26426d] mb-2">Key Results:</div>
                      <div className="space-y-1">
                        {testimonial.results.map((result, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Enterprise <span className="text-[#26426d]">Implementation</span> Process
            </h2>
            <p className="text-xl text-gray-600">White-glove implementation with dedicated support</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "Comprehensive analysis of your requirements and custom implementation plan",
                icon: Target,
                duration: "2-4 weeks",
              },
              {
                step: "02",
                title: "System Configuration",
                desc: "Custom setup, integrations, and security configuration for your organization",
                icon: Briefcase,
                duration: "4-8 weeks",
              },
              {
                step: "03",
                title: "Data Migration",
                desc: "Secure migration of your existing financial data with zero downtime",
                icon: Globe,
                duration: "2-4 weeks",
              },
              {
                step: "04",
                title: "Training & Go-Live",
                desc: "Comprehensive training and ongoing support for successful deployment",
                icon: Award,
                duration: "2-3 weeks",
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
                <p className="text-gray-600 leading-relaxed mb-3">{step.desc}</p>
                <div className="text-sm text-[#26426d] font-medium">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                <span className="text-[#26426d]">Enterprise-Grade</span> Security & Compliance
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your data security is our top priority. We maintain the highest standards of security and compliance to
                protect your sensitive financial information.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "SOC 2 Type II",
                    desc: "Certified for security, availability, and confidentiality",
                  },
                  {
                    icon: Lock,
                    title: "256-bit Encryption",
                    desc: "Bank-grade encryption for data at rest and in transit",
                  },
                  {
                    icon: Users,
                    title: "SSO Integration",
                    desc: "Single sign-on with SAML, OAuth, and Active Directory",
                  },
                  {
                    icon: BarChart3,
                    title: "Audit Trails",
                    desc: "Complete audit logs for all user actions and data changes",
                  },
                ].map((security, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <div className="bg-[#26426d] rounded-lg p-3 text-white mb-4 w-12 h-12 flex items-center justify-center">
                      <security.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{security.title}</h3>
                    <p className="text-gray-600 text-sm">{security.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-green-800">Compliance Guarantee</span>
                </div>
                <p className="text-green-700">
                  We guarantee compliance with GDPR, SOX, HIPAA, and other regulatory requirements.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#26426d] to-[#961128] rounded-3xl p-8 shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/4393517/pexels-photo-4393517.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Security Dashboard"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Sales */}
      <section className="py-24 bg-gradient-to-r from-[#26426d] to-[#961128]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-white/90 mb-10">
            Let's discuss how MightyFyn can meet your organization's unique financial management needs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#26426d] hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Sales Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white  hover:bg-white text-[#26426d] hover:text-[#355c97] px-10 py-4 text-lg font-semibold"
            >
              Schedule Enterprise Demo
            </Button>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            ✓ Custom implementation ✓ Dedicated support ✓ SLA guarantee ✓ White-glove onboarding
          </p>
        </div>
      </section>
    </div>
  )
}
