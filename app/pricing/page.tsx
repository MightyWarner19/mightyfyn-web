import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  ArrowRight,
  Check,
  Star,
  Users,
  Building,
  Zap,
  ChevronDown,
} from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-[#961128] text-white hover:bg-[#7a0e20] mb-6">
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Choose the Perfect Plan for Your Business
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Start with our 14-day free trial. No credit card required. Cancel
            anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
          
              {/* Starter Plan */}
              <Card className="border-2 border-gray-200 hover:border-[#961128] transition-colors duration-300 flex flex-col h-full">
                <CardHeader className="text-center pb-8">
                  <div className="flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-[#961128]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
                  <p className="text-gray-600 mt-2">
                    Perfect for small businesses and freelancers
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">
                      $29
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Billed monthly</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-between space-y-6">
                  <ul className="space-y-4">
                    {[
                      "Up to 5 users",
                      "Basic invoicing",
                      "Expense tracking",
                      "Bank reconciliation",
                      "Basic reports",
                      "Email support",
                      "Mobile app access",
                      "1GB storage",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto space-y-2">
                    <Button className="w-full bg-[#961128] hover:bg-[#7a0e20] text-white">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-center text-sm text-gray-500">
                      14-day free trial
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Business Plan - Most Popular */}
              <Card className="border-2 border-[#961128] relative shadow-xl flex flex-col h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#961128] text-white px-6 py-2">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="flex items-center justify-center mb-4">
                    <Building className="h-8 w-8 text-[#961128]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Business</h3>
                  <p className="text-gray-600 mt-2">
                    Ideal for growing businesses
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">
                      $79
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Billed monthly</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-between space-y-6">
                  <ul className="space-y-4">
                    {[
                      "Up to 25 users",
                      "Advanced invoicing & automation",
                      "AI-powered expense tracking",
                      "Multi-bank reconciliation",
                      "Advanced reports & forecasting",
                      "Priority support",
                      "Mobile app access",
                      "50GB storage",
                      "Custom integrations",
                      "Tax compliance tools",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto space-y-2">
                    <Button className="w-full bg-[#961128] hover:bg-[#7a0e20] text-white">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-center text-sm text-gray-500">
                      14-day free trial
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border-2 border-gray-200 hover:border-[#26426d] transition-colors duration-300 flex flex-col h-full">
                <CardHeader className="text-center pb-8">
                  <div className="flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-[#26426d]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Enterprise
                  </h3>
                  <p className="text-gray-600 mt-2">
                    For large organizations with complex needs
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">
                      $199
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Billed monthly</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-between space-y-6">
                  <ul className="space-y-4">
                    {[
                      "Unlimited users",
                      "Full feature suite",
                      "Advanced AI & automation",
                      "Multi-entity management",
                      "Custom reports & dashboards",
                      "24/7 dedicated support",
                      "White-label options",
                      "Unlimited storage",
                      "API access",
                      "Advanced security features",
                      "Custom training",
                      "SLA guarantee",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto space-y-2">
                    <Button className="w-full bg-[#26426d] hover:bg-[#1e3557] text-white">
                      Contact Sales
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-center text-sm text-gray-500">
                      Custom implementation
                    </p>
                  </div>
                </CardContent>
              </Card>
           
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare Plans & Features
            </h2>
            <p className="text-xl text-gray-600">
              See what's included in each plan
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Starter
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-[#961128] text-white">
                      Business
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      feature: "Number of Users",
                      starter: "5",
                      business: "25",
                      enterprise: "Unlimited",
                    },
                    {
                      feature: "Invoicing",
                      starter: "✓",
                      business: "✓",
                      enterprise: "✓",
                    },
                    {
                      feature: "Expense Tracking",
                      starter: "✓",
                      business: "✓",
                      enterprise: "✓",
                    },
                    {
                      feature: "Bank Reconciliation",
                      starter: "✓",
                      business: "✓",
                      enterprise: "✓",
                    },
                    {
                      feature: "AI Automation",
                      starter: "—",
                      business: "✓",
                      enterprise: "✓",
                    },
                    {
                      feature: "Advanced Reports",
                      starter: "—",
                      business: "✓",
                      enterprise: "✓",
                    },
                    {
                      feature: "Multi-Currency",
                      starter: "—",
                      business: "✓",
                      enterprise: "✓",
                    },
                    {
                      feature: "API Access",
                      starter: "—",
                      business: "—",
                      enterprise: "✓",
                    },
                    {
                      feature: "Custom Integrations",
                      starter: "—",
                      business: "✓",
                      enterprise: "✓",
                    },
                    {
                      feature: "Priority Support",
                      starter: "—",
                      business: "✓",
                      enterprise: "✓",
                    },
                    {
                      feature: "Storage",
                      starter: "1GB",
                      business: "50GB",
                      enterprise: "Unlimited",
                    },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-center">
                        {row.starter}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-center bg-red-50">
                        {row.business}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-center">
                        {row.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pricing FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our pricing
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Can I change my plan anytime?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly.",
              },
              {
                question: "What happens after the free trial?",
                answer:
                  "After your 14-day free trial, you'll be automatically enrolled in the plan you selected. You can cancel anytime during the trial with no charges.",
              },
              {
                question: "Do you offer discounts for annual billing?",
                answer:
                  "Yes, we offer a 20% discount when you choose annual billing. This applies to all our plans and can result in significant savings.",
              },
              {
                question: "Is there a setup fee?",
                answer:
                  "No, there are no setup fees for any of our plans. We also provide free data migration assistance for new customers.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and bank transfers for Enterprise customers. All payments are processed securely.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </div>
                  <p className="text-gray-600 mt-4">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#961128] to-[#26426d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of businesses already using MightyFyn to streamline
            their finances
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#961128] hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-[#961128] px-8 py-4 text-lg"
            >
              Contact Sales
            </Button>
          </div>
          <p className="text-white/80 mt-4 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
