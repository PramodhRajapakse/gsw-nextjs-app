import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Mountain } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Golden State Warriors",
  description: "Official website of the Golden State Warriors basketball team",
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <Link href="/" className="flex items-center gap-2">
                  <Mountain className="h-6 w-6 text-[#1D428A]" />
                  <span className="font-bold text-xl">Warriors</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                  <Link
                    href="/"
                    className="text-sm font-medium hover:text-[#1D428A] hover:underline underline-offset-4"
                  >
                    Home
                  </Link>
                  <Link
                    href="/team"
                    className="text-sm font-medium hover:text-[#1D428A] hover:underline underline-offset-4"
                  >
                    Team
                  </Link>
                  <Link
                    href="/schedule"
                    className="text-sm font-medium hover:text-[#1D428A] hover:underline underline-offset-4"
                  >
                    Schedule
                  </Link>
                  <Link
                    href="/news"
                    className="text-sm font-medium hover:text-[#1D428A] hover:underline underline-offset-4"
                  >
                    News
                  </Link>
                  <Link
                    href="/tickets"
                    className="text-sm font-medium hover:text-[#1D428A] hover:underline underline-offset-4"
                  >
                    Tickets
                  </Link>
                </nav>
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
