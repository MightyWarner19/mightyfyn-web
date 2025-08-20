import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Calculator,
  Users,
  FileText,
  Clock,
  Shield,
  BarChart3,
  Briefcase,
  Play,
  Award,
  Target,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function AccountantsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#961128] text-white mb-4 px-4 py-2">
                For Accounting Professionals
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Built for{" "}
                <span className="text-[#961128]">Accounting Professionals</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Powerful tools designed specifically for accountants,
                bookkeepers, and accounting firms. Manage multiple clients,
                streamline workflows, and deliver exceptional service with
                MightyFyn.
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

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#961128] mb-1">
                    2,500+
                  </div>
                  <div className="text-sm text-gray-600">Accounting Firms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#26426d] mb-1">
                    50K+
                  </div>
                  <div className="text-sm text-gray-600">Clients Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#961128] mb-1">
                    40%
                  </div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  <Image
                    src="https://img.freepik.com/free-photo/coworkers-reviewing-some-reports_1098-363.jpg?ga=GA1.1.1500757870.1749927305&semt=ais_hybrid&w=740"
                    alt="Accountants Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg object-cover w-full h-96"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-[#961128]" />
                  <div>
                    <div className="text-xs text-gray-500">Active Clients</div>
                    <div className="text-sm font-semibold text-gray-900">
                      247
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Billable Hours</div>
                <div className="text-xl font-bold text-green-600">1,240</div>
                <div className="text-xs text-green-600">This month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Tools for{" "}
              <span className="text-[#961128]">Accounting Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage multiple clients efficiently and
              deliver exceptional accounting services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Multi-Client Management",
                desc: "Manage unlimited clients from a single dashboard with client-specific permissions and branding",
                features: [
                  "Client portals",
                  "Custom branding",
                  "Role-based access",
                ],
              },
              {
                icon: Clock,
                title: "Time Tracking & Billing",
                desc: "Track billable hours, manage projects, and generate professional invoices automatically",
                features: [
                  "Project tracking",
                  "Automated billing",
                  "Time reports",
                ],
              },
              {
                icon: FileText,
                title: "Document Management",
                desc: "Secure document storage and sharing with clients, including e-signature capabilities",
                features: ["Secure storage", "Client sharing", "E-signatures"],
              },
              {
                icon: BarChart3,
                title: "Advanced Reporting",
                desc: "Generate comprehensive financial reports for clients with white-label options",
                features: [
                  "Custom reports",
                  "White-labeling",
                  "Automated delivery",
                ],
              },
              {
                icon: Calculator,
                title: "Tax Preparation Tools",
                desc: "Streamlined tax preparation with automated calculations and compliance checking",
                features: [
                  "Tax forms",
                  "Compliance checks",
                  "Filing assistance",
                ],
              },
              {
                icon: Shield,
                title: "Professional Security",
                desc: "Bank-grade security with audit trails and compliance features for professional standards",
                features: [
                  "Audit trails",
                  "Compliance tools",
                  "Data encryption",
                ],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-2xl p-4 text-white mb-6 w-16 h-16 flex items-center justify-center">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.desc}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-600"
                      >
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

      {/* Workflow Benefits */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Streamline Your{" "}
              <span className="text-[#961128]">Accounting Workflow</span>
            </h2>
            <p className="text-xl text-gray-600">
              From client onboarding to final reporting, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Client Onboarding",
                desc: "Quick client setup with automated document collection and secure data import",
                icon: Target,
              },
              {
                step: "02",
                title: "Data Processing",
                desc: "AI-powered categorization and reconciliation with minimal manual intervention",
                icon: Zap,
              },
              {
                step: "03",
                title: "Review & Analysis",
                desc: "Comprehensive review tools with exception reporting and variance analysis",
                icon: BarChart3,
              },
              {
                step: "04",
                title: "Client Delivery",
                desc: "Professional reports and insights delivered through branded client portals",
                icon: Award,
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Accounting Professionals{" "}
              <span className="text-[#961128]">Love MightyFyn</span>
            </h2>
            <p className="text-xl text-gray-600">
              See how accounting firms are growing their practice with MightyFyn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer Martinez",
                role: "CPA, Managing Partner",
                company: "Martinez & Associates",
                content:
                  "MightyFyn has transformed our practice. We've increased our client capacity by 60% while reducing manual work. The client portals are a huge hit.",
                rating: 5,
                metric: "60% more clients",
                image: "/placeholder.svg?height=80&width=80",
                results: [
                  "60% more clients",
                  "40% time savings",
                  "95% client satisfaction",
                ],
              },
              {
                name: "Robert Kim",
                role: "Senior Accountant",
                company: "Kim Financial Services",
                content:
                  "The automation features are incredible. What used to take hours now takes minutes. I can focus on providing strategic advice rather than data entry.",
                rating: 5,
                metric: "75% time reduction",
                image: "/placeholder.svg?height=80&width=80",
                results: ["75% time reduction", "Zero errors", "Happy clients"],
              },
              {
                name: "Amanda Thompson",
                role: "Bookkeeping Specialist",
                company: "Thompson Bookkeeping",
                content:
                  "As a solo practitioner, MightyFyn gives me enterprise-level capabilities. My clients think I have a whole team behind me!",
                rating: 5,
                metric: "200% revenue growth",
                image: "/placeholder.svg?height=80&width=80",
                results: [
                  "200% revenue growth",
                  "Professional image",
                  "Scalable operations",
                ],
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

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
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#961128]/5 rounded-lg p-4">
                      <div className="text-sm font-medium text-[#961128] mb-2">
                        Key Results:
                      </div>
                      <div className="space-y-1">
                        {testimonial.results.map((result, i) => (
                          <div
                            key={i}
                            className="flex items-center text-sm text-gray-600"
                          >
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

      {/* Pricing for Accountants */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-[#961128]">Professional</span> Pricing for
              Accountants
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing that scales with your practice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Solo Practice */}
            <Card className="border-2 border-gray-200 hover:border-[#961128] transition-colors duration-300 flex flex-col h-full">
              <CardContent className="p-8 text-center flex flex-col flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Solo Practice
                  </h3>
                  <p className="text-gray-600 mb-6">
                    For individual accountants
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      $79
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {[
                      "Up to 25 clients",
                      "Time tracking & billing",
                      "Client portals",
                      "Basic reports",
                      "Email support",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Button className="w-full bg-[#961128] hover:bg-[#7a0e20] text-white">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Small Firm */}
            <Card className="border-2 border-[#961128] shadow-xl relative flex flex-col h-full transition-colors duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#961128] text-white px-6 py-2">
                  <Star className="h-4 w-4 mr-1" />
                  Most Popular
                </Badge>
              </div>
              <CardContent className="p-8 text-center pt-12 flex flex-col flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Small Firm
                  </h3>
                  <p className="text-gray-600 mb-6">
                    For growing accounting firms
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      $199
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {[
                      "Up to 100 clients",
                      "Everything in Solo",
                      "Advanced reporting",
                      "White-label options",
                      "Priority support",
                      "Team collaboration",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Button className="w-full bg-[#961128] hover:bg-[#7a0e20] text-white">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Firm */}
            <Card className="border-2 border-gray-200 hover:border-[#26426d] transition-colors duration-300 flex flex-col h-full">
              <CardContent className="p-8 text-center flex flex-col flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Enterprise Firm
                  </h3>
                  <p className="text-gray-600 mb-6">
                    For large accounting firms
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      Custom
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {[
                      "Unlimited clients",
                      "Everything in Small Firm",
                      "Custom integrations",
                      "Dedicated support",
                      "SLA guarantee",
                      "Custom training",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Button className="w-full bg-[#26426d] hover:bg-[#1e3557] text-white">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Professional <span className="text-[#961128]">Resources</span> &
                Support
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We provide comprehensive resources to help accounting
                professionals succeed with MightyFyn and serve their clients
                better.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Briefcase,
                    title: "Professional Training",
                    desc: "Comprehensive training programs and certification courses for accounting professionals.",
                  },
                  {
                    icon: Users,
                    title: "Partner Program",
                    desc: "Join our partner network and earn referral commissions while helping clients.",
                  },
                  {
                    icon: FileText,
                    title: "Marketing Resources",
                    desc: "Professional marketing materials and templates to promote your services.",
                  },
                  {
                    icon: Award,
                    title: "Expert Community",
                    desc: "Connect with other accounting professionals and share best practices.",
                  },
                ].map((resource, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#961128] rounded-lg p-3 text-white">
                      <resource.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600">{resource.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-3xl p-8 shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/7680687/pexels-photo-7680687.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="Professional Resources"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#961128] to-[#26426d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Accounting Practice?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of accounting professionals who trust MightyFyn to
            streamline their practice and delight their clients
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
            </Button>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            ✓ 14-day free trial ✓ No credit card required ✓ Professional support
            ✓ Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
