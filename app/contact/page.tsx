import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-[#961128] text-white hover:bg-[#7a0e20] mb-6">Get In Touch</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">We're Here to Help</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have questions about MightyFyn? Want to see a demo? Our team is ready to assist you. Reach out and let's
            discuss how we can help transform your accounting workflow.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-6">
                <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Company Name</label>
                  <Input placeholder="Your Company" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">How can we help you?</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#961128]">
                    <option>General Inquiry</option>
                    <option>Product Demo</option>
                    <option>Technical Support</option>
                    <option>Sales Question</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea placeholder="Tell us more about your needs..." rows={4} />
                </div>

                <Button className="w-full bg-[#961128] hover:bg-[#7a0e20] text-white py-3">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're here to help you succeed. Whether you need technical support, want to explore our features, or
                  have questions about pricing, our team is ready to assist.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-[#961128] shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#961128] w-10 h-10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                        <p className="text-gray-600">
                          123 Innovation Drive
                          <br />
                          San Francisco, CA 94105
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#26426d] shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#26426d] w-10 h-10 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                        <p className="text-gray-600">
                          +1 (555) 123-4567
                          <br />
                          <span className="text-sm text-gray-500">Mon-Fri, 9AM-6PM PST</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#961128] shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#961128] w-10 h-10 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                        <p className="text-gray-600">
                          support@mightyfyn.com
                          <br />
                          <span className="text-sm text-gray-500">We respond within 24 hours</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#26426d] shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#26426d] w-10 h-10 rounded-lg flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                        <p className="text-gray-600">
                          Available 24/7 on our website
                          <br />
                          <span className="text-sm text-gray-500">Instant support when you need it</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Live Chat Button */}
              <Card className="bg-gradient-to-r from-[#961128] to-[#26426d] text-white border-0">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                  <p className="mb-4 text-white/90">Chat with our support team right now</p>
                  <Button className="bg-white text-[#961128] hover:bg-gray-100">Start Live Chat</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of San Noida tech district</p>
          </div>

          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            
 <iframe
  className="w-full h-full rounded-lg border-0 shadow-lg "
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4697564433995!2d77.3637591!3d28.615679899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57e01bf4a85%3A0xab04f927469dbc94!2sMighty%20Warner%20Infoserve%20(OPC)%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1749928112066!5m2!1sen!2sin"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Office Hours & Support</h2>
            <p className="text-xl text-gray-600">When you can reach us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Clock className="h-12 w-12 text-[#961128] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM PST
                  </p>
                  <p>
                    <strong>Saturday:</strong> 10:00 AM - 2:00 PM PST
                  </p>
                  <p>
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-[#26426d] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Live Chat:</strong> Available 24/7
                  </p>
                  <p>
                    <strong>Email Support:</strong> Always monitored
                  </p>
                  <p>
                    <strong>Emergency Line:</strong> For critical issues
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
