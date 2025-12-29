import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Andrew Laskin - Website",
  description: "Software Engineer and Computer Science student at University of Florida",
  icons: {
    icon: 
      {
        url: "/icon.png",
        type: "image/svg+xml",
      },

  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
