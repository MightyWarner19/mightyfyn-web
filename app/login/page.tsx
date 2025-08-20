import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Eye, ArrowRight, Mail, Lock, Chrome, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#961128] to-[#26426d] p-12 flex-col justify-center">
        <div className="max-w-md">
          <Link href="/" className="text-3xl font-bold text-white mb-8 block">
            MightyFyn
          </Link>
          <h1 className="text-4xl font-bold text-white mb-6">Welcome back to the future of accounting</h1>
          <p className="text-xl text-white/90 mb-8">
            Sign in to access your intelligent financial dashboard and continue managing your business with AI-powered
            insights.
          </p>

          <div className="space-y-4">
            <div className="flex items-center text-white/80">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span>AI-powered expense categorization</span>
            </div>
            <div className="flex items-center text-white/80">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span>Real-time financial insights</span>
            </div>
            <div className="flex items-center text-white/80">
              <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
              <span>Automated invoice management</span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Dashboard Preview"
            width={400}
            height={300}
            className="rounded-lg shadow-2xl opacity-90"
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
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
              <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
              <p className="text-gray-600 mt-2">Access your MightyFyn dashboard</p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Social Login */}
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
                  <span className="bg-white px-4 text-sm text-gray-500">or continue with email</span>
                </div>
              </div>

              {/* Email Login Form */}
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input type="email" placeholder="john@company.com" className="pl-10 py-3" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input type="password" placeholder="Enter your password" className="pl-10 pr-10 py-3" />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-[#961128] focus:ring-[#961128]" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-[#961128] hover:text-[#7a0e20]">
                    Forgot password?
                  </Link>
                </div>

                <Button className="w-full bg-[#961128] hover:bg-[#7a0e20] text-white py-3">
                  Sign In
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-[#961128] hover:text-[#7a0e20] font-semibold">
                    Sign up for free
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Links */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              By signing in, you agree to our{" "}
              <Link href="/terms" className="text-[#961128] hover:text-[#7a0e20]">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#961128] hover:text-[#7a0e20]">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
