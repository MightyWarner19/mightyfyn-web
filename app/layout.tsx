import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Layout } from "@/components/layout/layout"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MightyFyn - Intelligent Financial Management",
  description:
    "Next-generation financial platform with AI-powered insights, automated workflows, and intelligent reporting.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
