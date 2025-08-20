import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Calendar,
  Clock,
  Users,
  Video,
  CheckCircle,
  Star,
  Play,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#961128] text-white mb-4 px-4 py-2">Live Demo</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                See <span className="text-[#961128]">MightyFyn</span> in Action
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Book a personalized demo with our experts and discover how MightyFyn can transform your financial
                operations. See real features, ask questions, and get a custom solution for your business.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">30-minute personalized demo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Custom solution recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Q&A with financial experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">No sales pressure - just insights</span>
                </div>
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
                  <span className="font-semibold text-[#961128]">500+</span> demos completed this month
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#961128] to-[#26426d] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">demo.mightyfyn.com</div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Demo Preview"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="h-8 w-8 text-[#961128] ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-xs text-gray-500">Demo Status</div>
                    <div className="text-sm font-semibold text-green-600">Available Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Booking Form */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-6">
                <h2 className="text-3xl font-bold text-gray-900">Schedule Your Demo</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name *</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name *</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address *</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Company Name *</label>
                  <Input placeholder="Your Company" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Company Size</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#961128]">
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>200+ employees</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Preferred Demo Time</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#961128]">
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 5 PM)</option>
                    <option>Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">What would you like to see in the demo?</label>
                  <Textarea
                    placeholder="Tell us about your specific needs and what features you're most interested in..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-[#961128] hover:bg-[#7a0e20] text-white py-3 text-lg font-semibold">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule My Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We'll send you a calendar invite within 24 hours. No spam, we promise.
                </p>
              </CardContent>
            </Card>

            {/* Demo Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: Video,
                      title: "Live Screen Share",
                      desc: "See MightyFyn in action with a live demonstration of all key features and capabilities.",
                    },
                    {
                      icon: Users,
                      title: "Expert Guidance",
                      desc: "Our financial technology experts will guide you through the platform and answer your questions.",
                    },
                    {
                      icon: Clock,
                      title: "30-Minute Session",
                      desc: "Focused 30-minute session covering the features most relevant to your business needs.",
                    },
                    {
                      icon: MessageCircle,
                      title: "Custom Recommendations",
                      desc: "Get personalized recommendations on how MightyFyn can solve your specific challenges.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-[#961128] rounded-lg p-3 text-white">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-6">
                    "The demo was incredibly helpful. The team showed us exactly how MightyFyn could solve our specific
                    accounting challenges. We signed up immediately after the call!"
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Customer"
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">CFO, TechStart Inc</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Options */}
              <div className="bg-[#26426d] rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Need to Talk Sooner?</h3>
                <p className="text-white/90 mb-6">
                  Can't wait for a scheduled demo? Our team is available to help you right now.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <span>demo@mightyfyn.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5" />
                    <span>Live chat available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Demo FAQ</h2>
            <p className="text-xl text-gray-600">Common questions about our demo process</p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How long is the demo?",
                answer:
                  "Our demos typically last 30 minutes, but we can extend the session if you have additional questions or want to see specific features in more detail.",
              },
              {
                question: "Is this a sales call?",
                answer:
                  "While our team can discuss pricing and plans, the primary focus is on showing you how MightyFyn works and answering your questions. There's no pressure to make a decision during the call.",
              },
              {
                question: "Can I bring my team to the demo?",
                answer:
                  "We encourage you to invite relevant team members. The more people who see the demo, the better everyone will understand how MightyFyn can help your organization.",
              },
              {
                question: "What if I need to reschedule?",
                answer:
                  "No problem! You can reschedule your demo anytime by clicking the link in your confirmation email or contacting our team directly.",
              },
              {
                question: "Will I get a recording of the demo?",
                answer:
                  "Yes, we can provide a recording of your personalized demo session, along with any additional resources discussed during the call.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#961128] to-[#26426d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to See MightyFyn in Action?</h2>
          <p className="text-xl text-white/90 mb-10">
            Book your personalized demo today and discover how MightyFyn can transform your financial operations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#961128] hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Demo Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-[#961128] px-10 py-4 text-lg font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            ✓ No commitment required ✓ 30-minute session ✓ Expert guidance ✓ Custom recommendations
          </p>
        </div>
      </section>
    </div>
  )
}
