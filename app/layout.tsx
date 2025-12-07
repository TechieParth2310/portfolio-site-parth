import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Parth Kothawade | Data Analyst & Developer",
  description:
    "Data analyst skilled in Python, SQL, and Excel with hands-on experience in data cleaning, EDA, dashboarding, and automation. VIT Vellore BTech student seeking opportunities.",
  keywords: ["Data Analyst", "Python", "SQL", "Machine Learning", "VIT Vellore", "Parth Kothawade"],
  authors: [{ name: "Parth Kothawade" }],
  openGraph: {
    title: "Parth Kothawade | Data Analyst & Developer",
    description: "Data analyst skilled in Python, SQL, and Excel. Transform raw datasets into actionable insights.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
