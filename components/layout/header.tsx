"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronDown } from "lucide-react"

const mainNavItems = [
  {
    title: "Features",
    href: "/features",
    children: [
      {
        title: "Smart Invoicing",
        href: "/features/invoicing",
        description: "Create, send, and track professional invoices",
      },
      {
        title: "Expense Management",
        href: "/features/expenses",
        description: "Capture receipts and track spending automatically",
      },
      {
        title: "Financial Reporting",
        href: "/features/reporting",
        description: "Real-time dashboards and insights",
      },
      {
        title: "Tax Compliance",
        href: "/features/tax",
        description: "Automated tax calculations and filing",
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    children: [
      {
        title: "Small Business",
        href: "/solutions/small-business",
        description: "Perfect for growing businesses",
      },
      {
        title: "Enterprise",
        href: "/solutions/enterprise",
        description: "Advanced features for large organizations",
      },
      {
        title: "Accountants",
        href: "/solutions/accountants",
        description: "Tools for accounting professionals",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Resources",
    href: "#",
    children: [
      // {
      //   title: "Blog",
      //   href: "/blog",
      //   description: "Latest insights and tips",
      // },
      {
        title: "Help Center",
        href: "/help",
        description: "Get support and tutorials",
      },
      {
        title: "Case Studies",
        href: "/case-studies",
        description: "Customer success stories",
      },
    ],
  },
  {
    title: "Company",
    href: "/about",
    children: [
      {
        title: "About Us",
        href: "/about",
        description: "Our mission and team",
      },
      {
        title: "Contact",
        href: "/contact",
        description: "Get in touch with us",
      }
    ],
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm" : "bg-white/90 backdrop-blur-sm",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#961128] to-[#26426d] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
               
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#961128] to-[#26426d] bg-clip-text text-transparent">
                MightyFyn
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-[#961128] transition-colors font-medium py-2">
                      <span>{item.title}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {activeDropdown === item.title && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900 mb-1">{child.title}</div>
                            <div className="text-sm text-gray-500">{child.description}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} className="text-gray-700 hover:text-[#961128] transition-colors font-medium">
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - Auth & CTA */}
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="hidden md:block text-gray-700 hover:text-[#961128] transition-colors font-medium"
            >
              Sign In
            </Link>
            <Button className="bg-gradient-to-r from-[#961128] to-[#26426d] hover:from-[#7a0e20] hover:to-[#1e3557] text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Start Free Trial
            </Button>

            {/* Mobile menu button */}
            <button className="lg:hidden flex items-center p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="flex flex-col space-y-6">
              {mainNavItems.map((item) => (
                <div key={item.title}>
                  {item.children ? (
                    <div className="space-y-3">
                      <div className="font-medium text-gray-900 text-lg">{item.title}</div>
                      <div className="pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block text-gray-600 hover:text-[#961128] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-[#961128] transition-colors font-medium text-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="#"
                  className="block text-gray-700 hover:text-[#961128] transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
