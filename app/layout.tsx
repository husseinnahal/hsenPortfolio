import { Analytics } from "@vercel/analytics/next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { SnowEffect } from "@/components/snow-effect"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: "Hussein Nahhal - Full Stack Developer",
  description:
    "Portfolio of Hussein Nahhal - Full Stack Developer specializing in React, Next.js, and modern web technologies",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        <SnowEffect />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
