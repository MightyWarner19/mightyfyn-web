import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  FileText,
  CheckCircle,
  Star,
  Clock,
  CreditCard,
  Repeat,
  Globe,
  Smartphone,
  Zap,
  Play,
} from "lucide-react"
import Image from "next/image"

export default function InvoicingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#961128] text-white mb-4 px-4 py-2">Smart Invoicing</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Professional <span className="text-[#961128]">Invoicing</span> Made Simple
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create, send, and track professional invoices in seconds. Automate payment reminders, accept online
                payments, and get paid faster with MightyFyn's smart invoicing solution.
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
                  <span className="font-semibold text-[#961128]">10,000+</span> businesses use our invoicing
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                 
                  <Image
                    src="https://img.freepik.com/free-photo/shipping-document-laptop-connection-homepage_53876-138115.jpg?uid=P80687482&ga=GA1.1.1317553474.1748540047&semt=ais_hybrid&w=740"
                    alt="Invoicing Dashboard"
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
                    <div className="text-xs text-gray-500">Payment Status</div>
                    <div className="text-sm font-semibold text-green-600">Received</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">Time Saved</div>
                <div className="text-xl font-bold text-[#961128]">4.5 hrs/week</div>
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
              Everything You Need for <span className="text-[#961128]">Professional Invoicing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive invoicing solution includes everything you need to create, send, and manage invoices
              efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Professional Templates",
                desc: "Choose from dozens of professionally designed invoice templates or create your own custom design.",
                color: "from-[#961128] to-[#7a0e20]",
              },
              {
                icon: Repeat,
                title: "Recurring Invoices",
                desc: "Set up automatic recurring invoices for subscription-based services and regular billing.",
                color: "from-[#26426d] to-[#1e3557]",
              },
              {
                icon: CreditCard,
                title: "Online Payments",
                desc: "Accept credit cards, ACH transfers, and other payment methods directly through your invoices.",
                color: "from-green-600 to-green-700",
              },
              {
                icon: Clock,
                title: "Automatic Reminders",
                desc: "Schedule automatic payment reminders to reduce late payments and improve cash flow.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Globe,
                title: "Multi-Currency",
                desc: "Create invoices in any currency with automatic exchange rate calculations.",
                color: "from-purple-600 to-purple-700",
              },
              {
                icon: Smartphone,
                title: "Mobile Invoicing",
                desc: "Create and send invoices on the go with our mobile app for iOS and Android.",
                color: "from-blue-500 to-blue-600",
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
              How Our <span className="text-[#961128]">Invoicing</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create and send professional invoices in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Create Invoice",
                desc: "Choose a template and add your products or services with prices.",
                icon: FileText,
              },
              {
                step: "02",
                title: "Customize & Brand",
                desc: "Add your logo, colors, and payment terms to match your brand.",
                icon: Zap,
              },
              {
                step: "03",
                title: "Send to Client",
                desc: "Email the invoice directly or generate a shareable link.",
                icon: Globe,
              },
              {
                step: "04",
                title: "Get Paid",
                desc: "Receive payments online and track payment status automatically.",
                icon: CreditCard,
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

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="text-[#961128]">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thousands of businesses trust MightyFyn for their invoicing needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "MightyFyn's invoicing has cut our billing time by 75%. The automated reminders have improved our cash flow dramatically.",
                name: "Sarah Johnson",
                role: "CFO, TechStart Inc",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "The recurring invoice feature is a game-changer for our subscription business. Set it once and forget it!",
                name: "Michael Chen",
                role: "CEO, GrowthCorp",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "Our clients love the professional invoices and the ability to pay online. It's made our business look more professional.",
                name: "Emily Rodriguez",
                role: "Owner, Design Studio",
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

      {/* Pricing Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple, <span className="text-[#961128]">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">All plans include our powerful invoicing features</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "/month",
                description: "For small businesses",
                features: [
                  "Up to 100 invoices/month",
                  "5 users",
                  "Basic templates",
                  "Online payments",
                  "Email support",
                ],
                popular: false,
                cta: "Start Free Trial",
              },
              {
                name: "Business",
                price: "$79",
                period: "/month",
                description: "For growing businesses",
                features: [
                  "Unlimited invoices",
                  "25 users",
                  "Custom templates",
                  "Recurring invoices",
                  "Priority support",
                ],
                popular: true,
                cta: "Start Free Trial",
              },
              {
                name: "Enterprise",
                price: "$199",
                period: "/month",
                description: "For large organizations",
                features: [
                  "Unlimited everything",
                  "Unlimited users",
                  "White-labeling",
                  "API access",
                  "Dedicated support",
                ],
                popular: false,
                cta: "Contact Sales",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`border-2 ${plan.popular ? "border-[#961128] shadow-xl" : "border-gray-200"} hover:shadow-lg transition-all duration-300 relative`}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
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
                  <Button
                    className={`w-full ${plan.popular ? "bg-[#961128] hover:bg-[#7a0e20]" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#961128] to-[#26426d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Streamline Your Invoicing?</h2>
          <p className="text-xl text-white/90 mb-10">
            Join thousands of businesses that have transformed their invoicing process with MightyFyn
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
          <p className="text-white/80 mt-8 text-sm">✓ 14-day free trial ✓ No credit card required ✓ Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
