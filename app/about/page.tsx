import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Award, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-[#961128] text-white hover:bg-[#7a0e20] mb-6">Our Story</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Revolutionizing Accounting with AI</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At MightyFyn, we believe that financial management should be intelligent, intuitive, and accessible to
            businesses of all sizes. Our mission is to transform how companies handle their accounting through the power
            of artificial intelligence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#961128]">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020 by a team of financial experts and technology innovators, MightyFyn was born from a
                  simple observation: traditional accounting software was holding businesses back instead of propelling
                  them forward.
                </p>
                <p>
                  We witnessed countless entrepreneurs and finance teams spending hours on manual data entry, struggling
                  with complex interfaces, and missing critical insights buried in their financial data. We knew there
                  had to be a better way.
                </p>
                <p>
                  That's when we decided to build MightyFyn – an AI-powered accounting platform that doesn't just store
                  your financial data, but actively helps you understand it, optimize it, and use it to grow your
                  business.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="h-[450px] lg:h-[600px]">
                <Image
                src="https://img.freepik.com/free-photo/people-leaning-desk-standing_23-2147650958.jpg?ga=GA1.1.1500757870.1749927305&semt=ais_hybrid&w=740"
                alt="MightyFyn Office"
                width={600}
                height={400}
                className="rounded-lg shadow-xl h-full"
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#961128] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#961128]">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To democratize intelligent financial management by making AI-powered accounting tools accessible to
                  businesses of all sizes. We're committed to eliminating the complexity and tedium from financial
                  operations, allowing entrepreneurs and finance teams to focus on what they do best – growing their
                  businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-[#26426d] text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-[#26426d]" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  To become the world's most trusted AI-powered financial platform, where every business decision is
                  backed by intelligent insights and every financial process is optimized for efficiency and accuracy.
                  We envision a future where accounting is proactive, predictive, and perfectly aligned with business
                  growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Built MightyFyn */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why We Built MightyFyn</h2>
            <p className="text-xl text-gray-600">The problems we set out to solve</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Manual Processes",
                description:
                  "Traditional accounting software requires too much manual work, leading to errors and wasted time.",
              },
              {
                title: "Lack of Insights",
                description:
                  "Most platforms store data but don't provide actionable insights to help businesses make better decisions.",
              },
              {
                title: "Complex Interfaces",
                description:
                  "Existing solutions are often complicated and require extensive training to use effectively.",
              },
              {
                title: "Limited Scalability",
                description:
                  "Many accounting tools can't grow with businesses, forcing costly migrations and disruptions.",
              },
            ].map((problem, index) => (
              <Card key={index} className="border-l-4 border-l-[#961128] shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">The visionaries behind MightyFyn</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO & Co-Founder",
                bio: "Former VP of Finance at TechCorp with 15+ years in financial technology. Stanford MBA and CPA.",
                image: "/placeholder.svg?height=300&width=300",
                linkedin: "#",
                twitter: "#",
              },
              {
                name: "Michael Rodriguez",
                role: "CTO & Co-Founder",
                bio: "Ex-Google AI engineer with expertise in machine learning and financial systems. MIT Computer Science PhD.",
                image: "/placeholder.svg?height=300&width=300",
                linkedin: "#",
                twitter: "#",
              },
              {
                name: "Emily Johnson",
                role: "VP of Product",
                bio: "Product leader with 12+ years building fintech solutions. Former Head of Product at QuickBooks.",
                image: "/placeholder.svg?height=300&width=300",
                linkedin: "#",
                twitter: "#",
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Image
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#961128] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Link href={member.linkedin} className="text-gray-400 hover:text-[#26426d] transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href={member.twitter} className="text-gray-400 hover:text-[#26426d] transition-colors">
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth</p>
          </div>

          <div className="space-y-8">
            {[
              {
                year: "2020",
                title: "Company Founded",
                description: "MightyFyn was founded with a vision to revolutionize accounting through AI.",
              },
              {
                year: "2021",
                title: "Seed Funding",
                description: "Raised $5M in seed funding from leading fintech investors.",
              },
              {
                year: "2022",
                title: "Product Launch",
                description: "Launched our MVP with 100 beta customers and achieved product-market fit.",
              },
              {
                year: "2023",
                title: "Series A",
                description: "Closed $25M Series A round and expanded to 5,000+ customers.",
              },
              {
                year: "2024",
                title: "AI Revolution",
                description: "Launched advanced AI features and reached 10,000+ active businesses.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-[#961128] text-white w-16 h-16 rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#26426d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-white/90">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible in financial technology.",
              },
              {
                title: "Transparency",
                description: "We believe in honest communication and clear, straightforward pricing.",
              },
              {
                title: "Customer Success",
                description: "Our customers' success is our success. We're committed to their growth.",
              },
              {
                title: "Excellence",
                description: "We strive for excellence in everything we build and every service we provide.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#961128] to-[#26426d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Our Mission?</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the future of accounting and see why thousands of businesses trust MightyFyn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#961128] hover:bg-gray-100 px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-[#961128] px-8 py-4 text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
