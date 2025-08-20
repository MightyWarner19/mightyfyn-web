import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  FileText,
  Calculator,
  Smartphone,
  Play,
  Target,
  Award,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SmallBusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#961128] text-white mb-4 px-4 py-2">
                Small Business Solution
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Built for{" "}
                <span className="text-[#961128]">Small Businesses</span> Like
                Yours
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Everything you need to manage your finances, from invoicing to
                expense tracking. Designed specifically for small businesses
                with simple pricing and powerful features.
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
                    25K+
                  </div>
                  <div className="text-sm text-gray-600">Small Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#26426d] mb-1">
                    4.9/5
                  </div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#961128] mb-1">
                    $29
                  </div>
                  <div className="text-sm text-gray-600">Starting Price</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-inner h-[400px] lg:h-[600px]">
                  <Image
                    src="https://img.freepik.com/premium-photo/successful-man-holds-money-his-hand-smiles_85574-11177.jpg?uid=P80687482&ga=GA1.1.1317553474.1748540047&semt=ais_hybrid&w=740"
                    alt="Small Business Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg h-full"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-[#961128]" />
                  <div>
                    <div className="text-xs text-gray-500">Team Size</div>
                    <div className="text-sm font-semibold text-gray-900">
                      1-10 Users
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">
                  Monthly Savings
                </div>
                <div className="text-xl font-bold text-green-600">$2,400</div>
                <div className="text-xs text-green-600">
                  vs traditional software
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Perfect for{" "}
              <span className="text-[#961128]">Growing Businesses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a startup, freelancer, or established small
              business, MightyFyn scales with your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Startups",
                desc: "Get your finances organized from day one with professional tools",
                businesses: "5,000+ startups",
              },
              {
                icon: Users,
                title: "Freelancers",
                desc: "Simple invoicing and expense tracking for independent professionals",
                businesses: "12,000+ freelancers",
              },
              {
                icon: Award,
                title: "Consultants",
                desc: "Time tracking, project billing, and client management in one place",
                businesses: "3,500+ consultants",
              },
              {
                icon: TrendingUp,
                title: "Retailers",
                desc: "Inventory tracking, sales reporting, and multi-location support",
                businesses: "4,500+ retailers",
              },
            ].map((type, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-2xl p-4 text-white mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                    <type.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{type.desc}</p>
                  <div className="text-sm text-[#961128] font-medium">
                    {type.businesses}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to{" "}
              <span className="text-[#961128]">Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All the essential features small businesses need, without the
              complexity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Professional Invoicing",
                desc: "Create and send professional invoices in minutes with automated follow-ups",
                features: [
                  "Custom templates",
                  "Auto reminders",
                  "Online payments",
                ],
              },
              {
                icon: Calculator,
                title: "Expense Tracking",
                desc: "Capture receipts and track expenses automatically with AI categorization",
                features: [
                  "Receipt scanning",
                  "Auto categorization",
                  "Mileage tracking",
                ],
              },
              {
                icon: TrendingUp,
                title: "Financial Reports",
                desc: "Get insights into your business performance with real-time dashboards",
                features: [
                  "P&L statements",
                  "Cash flow reports",
                  "Tax summaries",
                ],
              },
              {
                icon: DollarSign,
                title: "Payment Processing",
                desc: "Accept payments online and get paid faster with integrated payment solutions",
                features: [
                  "Credit cards",
                  "ACH transfers",
                  "PayPal integration",
                ],
              },
              {
                icon: Clock,
                title: "Time Tracking",
                desc: "Track billable hours and convert them to invoices automatically",
                features: [
                  "Project tracking",
                  "Team timesheets",
                  "Billing automation",
                ],
              },
              {
                icon: Smartphone,
                title: "Mobile Access",
                desc: "Manage your finances on the go with our mobile apps for iOS and Android",
                features: ["Native apps", "Offline access", "Real-time sync"],
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

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Small Business{" "}
              <span className="text-[#961128]">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600">
              See how other small businesses are growing with MightyFyn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                role: "Owner",
                company: "Rodriguez Consulting",
                content:
                  "MightyFyn helped me organize my finances and grow from a solo consultant to a team of 5. The time tracking and invoicing features are incredible.",
                rating: 5,
                metric: "300% revenue growth",
                image: "/placeholder.svg?height=80&width=80",
                results: [
                  "300% revenue growth",
                  "5 hours saved weekly",
                  "Zero late payments",
                ],
              },
              {
                name: "James Wilson",
                role: "Founder",
                company: "Wilson Design Studio",
                content:
                  "As a creative agency, we needed something simple but powerful. MightyFyn's project tracking and client billing features are perfect for our needs.",
                rating: 5,
                metric: "50% faster billing",
                image: "/placeholder.svg?height=80&width=80",
                results: [
                  "50% faster billing",
                  "15 new clients",
                  "100% payment accuracy",
                ],
              },
              {
                name: "Lisa Chen",
                role: "CEO",
                company: "TechStart Solutions",
                content:
                  "From startup to 20 employees, MightyFyn scaled with us. The financial insights helped us make better decisions and secure funding.",
                rating: 5,
                metric: "$500K funding raised",
                image: "/placeholder.svg?height=80&width=80",
                results: [
                  "$500K funding raised",
                  "20 employees hired",
                  "3x revenue growth",
                ],
              },
            ].map((story, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{story.content}"
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Image
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${story.name}`}
                        alt={story.name}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {story.name}
                        </p>
                        <p className="text-sm text-gray-600">{story.role}</p>
                        <p className="text-xs text-gray-500">{story.company}</p>
                      </div>
                    </div>

                    <div className="bg-[#961128]/5 rounded-lg p-4">
                      <div className="text-sm font-medium text-[#961128] mb-2">
                        Key Results:
                      </div>
                      <div className="space-y-1">
                        {story.results.map((result, i) => (
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

      {/* Pricing for Small Business */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="text-[#961128]">Affordable</span> Pricing for
              Small Business
            </h2>
            <p className="text-xl text-gray-600">
              Start small, scale as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="flex flex-col border-2 border-gray-200 hover:border-[#961128] transition-colors duration-300">
              <CardContent className="flex flex-col flex-grow p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Starter
                </h3>
                <p className="text-gray-600 mb-6">
                  Perfect for solo entrepreneurs
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {[
                    "Up to 5 users",
                    "Unlimited invoices",
                    "Expense tracking",
                    "Basic reports",
                    "Mobile app access",
                    "Email support",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Spacer div to push the button to the bottom */}
                <div className="mt-auto">
                  <Button className="w-full bg-[#961128] hover:bg-[#7a0e20] text-white flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

          <Card className="border-2 border-[#961128] shadow-xl relative flex flex-col justify-between">
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
    <Badge className="bg-[#961128] text-white px-6 py-2">
      <Star className="h-4 w-4 mr-1" />
      Most Popular
    </Badge>
  </div>

  <CardContent className="p-8 text-center pt-12 flex flex-col flex-1">
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
      <p className="text-gray-600 mb-6">For growing small businesses</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">$79</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-3 mb-8 text-left">
        {[
          "Up to 25 users",
          "Everything in Starter",
          "Advanced reports",
          "Time tracking",
          "Project management",
          "Priority support",
          "API access",
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

          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All plans include 14-day free trial • No credit card required
            </p>
            <Link href="/pricing">
              <Button
                variant="outline"
                className="border-[#961128] text-[#961128] hover:bg-[#961128] hover:text-white"
              >
                View All Plans & Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose MightyFyn */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Small Businesses Choose{" "}
                <span className="text-[#961128]">MightyFyn</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We understand the unique challenges small businesses face.
                That's why we've built a solution that's powerful yet simple,
                affordable yet feature-rich.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Quick Setup",
                    desc: "Get started in under 5 minutes with our guided setup process.",
                  },
                  {
                    icon: DollarSign,
                    title: "Affordable Pricing",
                    desc: "Transparent pricing that scales with your business growth.",
                  },
                  {
                    icon: Shield,
                    title: "Bank-Grade Security",
                    desc: "Your data is protected with enterprise-level security measures.",
                  },
                  {
                    icon: Users,
                    title: "Expert Support",
                    desc: "Get help from real humans who understand small business needs.",
                  },
                ].map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#961128] rounded-lg p-3 text-white">
                      <reason.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-3xl p-8 shadow-2xl h-[400px] lg:h-[700px]">
                <Image
                  src="https://img.freepik.com/free-photo/scenery-designers-work_23-2149741781.jpg?uid=P80687482&ga=GA1.1.1317553474.1748540047&semt=ais_hybrid&w=740"
                  alt="Small Business Benefits"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg h-full"
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
            Ready to Grow Your Small Business?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of small businesses that trust MightyFyn to manage
            their finances and fuel their growth
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
            ✓ 14-day free trial ✓ No credit card required ✓ Setup in 5 minutes ✓
            Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
