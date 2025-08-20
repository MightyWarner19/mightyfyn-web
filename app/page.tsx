import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Zap,
  Brain,
  Award,
  Globe,
  Clock,
  BarChart3,
  Rocket,
  TrendingUp,
  Smartphone,
  Play,
  ChevronRight,
  DollarSign,
  Target,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BannnerSlider from "@/components/slider/BannnerSlider";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Unique Custom Hero Section - Not AI Generated Look */}
      <HeroSection />


      {/* Trusted By Section */}
      {/* <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 mb-8">
              Trusted by industry leaders worldwide
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Award className="h-6 w-6 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">
                Winner: Best Financial Software 2024 - TechCrunch Disrupt
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {["Microsoft", "Google", "Amazon", "Tesla", "Apple", "Meta"].map(
              (company, i) => (
                <div
                  key={i}
                  className="flex justify-center hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-gray-50 rounded-lg px-6 py-4 text-center border border-gray-100 hover:border-[#961128] transition-colors">
                    <span className="font-semibold text-gray-700">
                      {company}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section> */}

      {/* Core Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#961128] text-white mb-6 px-4 py-2">
              Core Features
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to{" "}
              <span className="text-[#961128]">Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From AI-powered automation to real-time insights, MightyFyn
              provides all the tools you need to manage your finances like a
              pro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Automation",
                desc: "Let artificial intelligence handle repetitive tasks, categorize expenses, and provide intelligent insights automatically.",
                color: "from-purple-500 to-purple-600",
                features: [
                  "Auto expense categorization",
                  "Smart invoice matching",
                  "Predictive analytics",
                ],
                link: "/features/ai-automation",
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                desc: "Get instant insights into your financial performance with live dashboards and customizable reports.",
                color: "from-blue-500 to-blue-600",
                features: [
                  "Live dashboards",
                  "Custom reports",
                  "Performance metrics",
                ],
                link: "/features/reporting",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Bank-grade security with end-to-end encryption, multi-factor authentication, and compliance certifications.",
                color: "from-green-500 to-green-600",
                features: [
                  "256-bit encryption",
                  "SOC 2 certified",
                  "GDPR compliant",
                ],
                link: "/security",
              },
              {
                icon: Smartphone,
                title: "Mobile First",
                desc: "Access your financial data anywhere with our native mobile apps for iOS and Android.",
                color: "from-pink-500 to-pink-600",
                features: [
                  "Native mobile apps",
                  "Offline access",
                  "Push notifications",
                ],
                link: "/mobile",
              },
              {
                icon: Globe,
                title: "Global Ready",
                desc: "Support for 100+ currencies, international tax compliance, and multi-language interface.",
                color: "from-orange-500 to-orange-600",
                features: [
                  "100+ currencies",
                  "Multi-language",
                  "Global compliance",
                ],
                link: "/global",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Built on modern cloud infrastructure for instant loading and real-time synchronization.",
                color: "from-yellow-500 to-yellow-600",
                features: [
                  "Sub-second loading",
                  "Real-time sync",
                  "99.9% uptime",
                ],
                link: "/performance",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
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
                  <Link href={feature.link}>
                    <Button
                      variant="outline"
                      className="w-full border-[#961128] text-[#961128] hover:bg-[#961128] hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              How <span className="text-[#961128]">MightyFyn</span> Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes, not hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Connect Your Accounts",
                desc: "Securely link your bank accounts, credit cards, and existing financial tools in just a few clicks.",
                icon: Globe,
                link: "/integrations",
              },
              {
                step: "02",
                title: "AI Does the Work",
                desc: "Our intelligent system automatically categorizes transactions, matches invoices, and organizes your data.",
                icon: Brain,
                link: "/features/ai-automation",
              },
              {
                step: "03",
                title: "Get Insights & Grow",
                desc: "Access real-time dashboards, predictive analytics, and actionable insights to grow your business.",
                icon: TrendingUp,
                link: "/features/reporting",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#961128] to-[#26426d] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                    {step.step}
                  </div> */}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.desc}
                </p>
                <Link href={step.link}>
                  <Button
                    variant="outline"
                    className="border-[#961128] text-[#961128] hover:bg-[#961128] hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Success Stories from{" "}
              <span className="text-[#961128]">Our Community</span>
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses are transforming their financial operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                company: "TechStart Inc",
                content:
                  "MightyFyn transformed our financial workflow completely. The AI insights helped us identify cost savings we never knew existed, and the automation freed up our team to focus on growth.",
                rating: 5,
                metric: "40% time saved",
                image: "/placeholder.svg?height=80&width=80",
                results: [
                  "$50K annual savings",
                  "4 hours saved daily",
                  "99% accuracy",
                ],
              },
              {
                name: "Michael Chen",
                role: "CFO",
                company: "GrowthCorp",
                content:
                  "The predictive analytics feature is incredible. We can now forecast cash flow with 95% accuracy and make informed decisions about investments and expansion.",
                rating: 5,
                metric: "95% forecast accuracy",
                image: "/placeholder.svg?height=80&width=80",
                results: [
                  "95% forecast accuracy",
                  "30% faster reporting",
                  "Zero manual errors",
                ],
              },
              {
                name: "Emily Rodriguez",
                role: "Finance Director",
                company: "InnovateLab",
                content:
                  "Finally, a financial platform that our entire team actually enjoys using. The interface is intuitive, and the collaboration features have streamlined our approval processes.",
                rating: 5,
                metric: "100% team adoption",
                image: "/placeholder.svg?height=80&width=80",
                results: [
                  "100% team adoption",
                  "50% faster approvals",
                  "Zero training time",
                ],
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
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

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">
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

      {/* Pricing Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Simple, <span className="text-[#961128]">Transparent</span>{" "}
              Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "/month",
                description: "Perfect for small businesses",
                features: [
                  "Up to 5 users",
                  "Basic invoicing",
                  "Expense tracking",
                  "Email support",
                ],
                popular: false,
                cta: "Start Free Trial",
                link: "/signup",
              },
              {
                name: "Business",
                price: "$79",
                period: "/month",
                description: "Ideal for growing businesses",
                features: [
                  "Up to 25 users",
                  "AI automation",
                  "Advanced reports",
                  "Priority support",
                ],
                popular: true,
                cta: "Start Free Trial",
                link: "/signup",
              },
              {
                name: "Enterprise",
                price: "$199",
                period: "/month",
                description: "For large organizations",
                features: [
                  "Unlimited users",
                  "Custom integrations",
                  "Dedicated support",
                  "SLA guarantee",
                ],
                popular: false,
                cta: "Contact Sales",
                link: "/contact",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`border-2 ${
                  plan.popular
                    ? "border-[#961128] shadow-xl"
                    : "border-gray-200"
                } hover:shadow-lg transition-all duration-300 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#961128] text-white px-6 py-2">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.link}>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-[#961128] hover:bg-[#7a0e20]"
                          : "bg-gray-900 hover:bg-gray-800"
                      } text-white`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing">
              <Button
                variant="outline"
                className="border-[#961128] text-[#961128] hover:bg-[#961128] hover:text-white"
              >
                View All Plans & Features
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-[#961128] via-[#26426d] to-[#961128] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of businesses that have already revolutionized their
            financial management. Start your journey today with a 14-day free
            trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-white text-[#961128] hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-[#961128] px-10 py-4 text-lg font-semibold"
              >
                <Clock className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </Link>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            ✓ 14-day free trial ✓ No credit card required ✓ Full feature access
            ✓ Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
