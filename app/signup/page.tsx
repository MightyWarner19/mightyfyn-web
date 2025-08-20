import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, ArrowRight, Mail, Lock, User, Building, Chrome, Github, Shield, Zap, Star } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#961128] to-[#26426d] p-12 flex-col justify-center">
        <div className="max-w-md">
          <Link href="/" className="text-3xl font-bold text-white mb-8 block">
            MightyFyn
          </Link>
          <h1 className="text-4xl font-bold text-white mb-6">Start Your Financial Transformation Today</h1>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of businesses using MightyFyn to automate their finances, gain insights, and grow faster.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center text-white/80">
              <CheckCircle className="w-5 h-5 mr-3" />
              <span>14-day free trial - no credit card required</span>
            </div>
            <div className="flex items-center text-white/80">
              <CheckCircle className="w-5 h-5 mr-3" />
              <span>Setup in under 5 minutes</span>
            </div>
            <div className="flex items-center text-white/80">
              <CheckCircle className="w-5 h-5 mr-3" />
              <span>Cancel anytime with one click</span>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-sm">Rated 4.9/5 by 10,000+ users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link href="/" className="text-3xl font-bold text-[#961128]">
              MightyFyn
            </Link>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <Badge className="bg-[#961128] text-white mb-4 mx-auto">Free Trial</Badge>
              <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
              <p className="text-gray-600 mt-2">Start your 14-day free trial today</p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Social Signup */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full py-3 border-gray-300 hover:bg-gray-50">
                  <Chrome className="mr-2 h-4 w-4" />
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full py-3 border-gray-300 hover:bg-gray-50">
                  <Github className="mr-2 h-4 w-4" />
                  Continue with GitHub
                </Button>
              </div>

              <div className="relative">
                <Separator />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-4 text-sm text-gray-500">or sign up with email</span>
                </div>
              </div>

              {/* Email Signup Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input placeholder="John" className="pl-10 py-3" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input placeholder="Doe" className="pl-10 py-3" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input type="email" placeholder="john@company.com" className="pl-10 py-3" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Company Name</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Your Company" className="pl-10 py-3" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input type="password" placeholder="Create a strong password" className="pl-10 py-3" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Company Size</label>
                  <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#961128]">
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>200+ employees</option>
                  </select>
                </div>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 rounded border-gray-300 text-[#961128] focus:ring-[#961128]" />
                  <div className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#961128] hover:text-[#7a0e20]">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#961128] hover:text-[#7a0e20]">
                      Privacy Policy
                    </Link>
                  </div>
                </div>

                <Button className="w-full bg-[#961128] hover:bg-[#7a0e20] text-white py-3 text-lg font-semibold">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-[#961128] hover:text-[#7a0e20] font-semibold">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Security & Trust */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span>Bank-grade security</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                <span>Instant setup</span>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500">
              Your data is encrypted and secure. We never share your information with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
