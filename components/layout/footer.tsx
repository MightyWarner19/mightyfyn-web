import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, Phone, CheckCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#26426d] text-white">
      {/* Main Footer */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Brand & Newsletter */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#961128] to-white rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-[#26426d] font-bold text-xl">M</span>
                </div>
                <span className="text-2xl font-bold">MightyFyn</span>
              </div>
              <p className="text-white/80 leading-relaxed max-w-md">
                Empowering businesses worldwide with intelligent financial management solutions. Built for the future,
                designed for today.
              </p>

              {/* Newsletter */}
              <div className="space-y-4">
                <p className="text-sm text-white/60">Stay updated with our latest insights</p>
                <div className="flex max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 bg-white border-0"
                  />
                  <Button className="bg-[#961128] hover:bg-[#7a0e20] rounded-l-none px-6 font-semibold">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-sm text-white/60 mb-3">Connect with us</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Youtube, href: "#", label: "YouTube" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <social.icon className="h-5 w-5 text-white" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-white/80">
                {[
                  { name: "Features", href: "/features" },
                  { name: "Pricing", href: "/pricing" },
                  { name: "Integrations", href: "/integrations" },
                  { name: "Security", href: "/security" },
                  { name: "API", href: "/api" },
                  { name: "Updates", href: "/updates" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Solutions</h4>
              <ul className="space-y-3 text-white/80">
                {[
                  { name: "Small Business", href: "/solutions/small-business" },
                  { name: "Enterprise", href: "/solutions/enterprise" },
                  { name: "Accountants", href: "/solutions/accountants" },
                  { name: "Startups", href: "/solutions/startups" },
                  { name: "Freelancers", href: "/solutions/freelancers" },
                  { name: "Industries", href: "/solutions/industries" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Contact */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-white/80 mb-8">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Careers", href: "/careers" },
                  // { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                  { name: "Press", href: "/press" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold mb-4 text-lg">Contact</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-white/60 flex-shrink-0" />
                  <span>support@mightyfyn.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-white/60 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-white/60 flex-shrink-0 mt-1" />
                  <span>
                    123 Finance Street
                    <br />
                    San Francisco, CA 94105
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">&copy; 2024 MightyFyn Inc. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-white/60">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
