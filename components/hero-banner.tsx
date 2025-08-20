"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Play, Rocket, TrendingUp, Brain } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#961128]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#26426d]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Premium Badge */}
            <div className="flex items-center space-x-4">
              <Badge className="bg-gradient-to-r from-[#961128] to-[#26426d] text-white px-6 py-3 text-sm font-semibold shadow-lg">
                Next-Generation Financial Platform
              </Badge>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-2 font-medium">4.9/5 from 10,000+ users</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Intelligent</span>
                <span className="bg-gradient-to-r from-[#961128] to-[#26426d] bg-clip-text text-transparent">
                  Financial
                </span>
                <span className="block">Management</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Experience the future of business finance with AI-powered insights, automated workflows, and intelligent
                reporting that scales with your ambitions.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">Cancel anytime</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#961128] to-[#26426d] hover:from-[#7a0e20] hover:to-[#1e3557] text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#26426d] text-[#26426d] hover:bg-[#26426d] hover:text-white px-10 py-4 text-lg font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof Numbers */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#961128]">50K+</div>
                <div className="text-sm text-gray-600 font-medium">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#26426d]">$5B+</div>
                <div className="text-sm text-gray-600 font-medium">Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#961128]">99.9%</div>
                <div className="text-sm text-gray-600 font-medium">Uptime</div>
              </div>
            </div>
          </motion.div>

          {/* Premium Dashboard Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Dashboard */}
              <div className="bg-gradient-to-br from-[#26426d] to-[#961128] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">app.mightyfyn.com</div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=500&width=700"
                    alt="MightyFyn Dashboard"
                    width={700}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-xs text-gray-500">AI Status</div>
                    <div className="text-sm font-semibold text-gray-900">Active</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: isVisible ? 0 : -20, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <div className="text-xs text-gray-500 mb-1">Monthly Savings</div>
                <div className="text-2xl font-bold text-green-600">$24,847</div>
                <div className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +23% this month
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-[#961128]" />
                  <div>
                    <div className="text-xs text-gray-500">AI Insights</div>
                    <div className="text-sm font-semibold text-gray-900">Ready</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
