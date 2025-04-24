import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"

export default function NewsPage() {
  // Sample news data
  const newsArticles = [
    {
      id: 1,
      title: "Warriors Win Against Clippers in Thrilling Overtime",
      date: "April 20, 2025",
      excerpt:
        "The Golden State Warriors secured a decisive victory against the LA Clippers with a final score of 120-98 in an exciting overtime finish.",
      image: "/placeholder.svg?height=200&width=400&text=News+1",
      category: "Game Recap",
    },
    {
      id: 2,
      title: "Stephen Curry Named Player of the Week",
      date: "April 18, 2025",
      excerpt:
        "Warriors star Stephen Curry has been named the Western Conference Player of the Week after averaging 32.5 points, 6.3 rebounds, and 7.8 assists.",
      image: "/placeholder.svg?height=200&width=400&text=News+2",
      category: "Awards",
    },
    {
      id: 3,
      title: "Warriors Announce Community Initiative",
      date: "April 15, 2025",
      excerpt:
        "The Golden State Warriors have announced a new community initiative aimed at supporting youth basketball programs in the Bay Area.",
      image: "/placeholder.svg?height=200&width=400&text=News+3",
      category: "Community",
    },
    {
      id: 4,
      title: "Klay Thompson's Return to Form",
      date: "April 12, 2025",
      excerpt:
        "After a challenging season, Klay Thompson is showing signs of returning to his All-Star form with impressive performances in recent games.",
      image: "/placeholder.svg?height=200&width=400&text=News+4",
      category: "Player Spotlight",
    },
    {
      id: 5,
      title: "Warriors Sign New Sponsorship Deal",
      date: "April 10, 2025",
      excerpt:
        "The Golden State Warriors have announced a new multi-year sponsorship deal with a major technology company based in Silicon Valley.",
      image: "/placeholder.svg?height=200&width=400&text=News+5",
      category: "Business",
    },
    {
      id: 6,
      title: "Chase Center to Host Special Event",
      date: "April 8, 2025",
      excerpt:
        "The Chase Center will host a special event featuring Warriors legends and current players to celebrate the team's rich history.",
      image: "/placeholder.svg?height=200&width=400&text=News+6",
      category: "Events",
    },
    {
      id: 7,
      title: "Rookie Showcase: Jonathan Kuminga",
      date: "April 5, 2025",
      excerpt:
        "Rookie Jonathan Kuminga has been turning heads with his athletic plays and defensive prowess in recent games for the Warriors.",
      image: "/placeholder.svg?height=200&width=400&text=News+7",
      category: "Player Spotlight",
    },
    {
      id: 8,
      title: "Warriors Playoff Scenarios Explained",
      date: "April 3, 2025",
      excerpt:
        "With the regular season winding down, we break down all the playoff scenarios for the Golden State Warriors.",
      image: "/placeholder.svg?height=200&width=400&text=News+8",
      category: "Analysis",
    },
    {
      id: 9,
      title: "Injury Update: Key Players Expected to Return",
      date: "April 1, 2025",
      excerpt:
        "The Warriors medical staff provides updates on injured players and their expected return dates as the team prepares for the playoff push.",
      image: "/placeholder.svg?height=200&width=400&text=News+9",
      category: "Team News",
    },
  ]

  // Categories for filtering
  const categories = [
    "All",
    "Game Recap",
    "Player Spotlight",
    "Team News",
    "Community",
    "Events",
    "Analysis",
    "Awards",
    "Business",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full py-6 bg-[#1D428A] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Warriors News</h1>
            <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed">
              Stay up to date with the latest news, updates, and stories about the Golden State Warriors.
            </p>
          </div>
        </div>
      </header>

      {/* Search and Filter */}
      <section className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/3">
              <Input type="search" placeholder="Search news..." className="w-full" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={
                    category === "All" ? "bg-[#1D428A] hover:bg-[#1D428A]/90" : "border-[#1D428A] text-[#1D428A]"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Featured+Article"
              width={600}
              height={400}
              alt="Featured Article"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-[#FFC72C] px-3 py-1 text-sm text-[#1D428A] font-medium">
                Featured
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Warriors Clinch Playoff Berth</h2>
              <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                The Golden State Warriors have officially clinched a playoff berth for the 2024-2025 NBA season with
                their recent victory over the Sacramento Kings. This marks the team's return to the playoffs after a
                challenging previous season.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Head coach Steve Kerr praised the team's resilience and determination throughout the season,
                highlighting the contributions of both veteran players and emerging talents.
              </p>
              <div className="flex gap-2">
                <Button className="bg-[#1D428A] hover:bg-[#1D428A]/90">Read Full Article</Button>
                <Button variant="outline" className="border-[#1D428A] text-[#1D428A]">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">Latest News</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  width={400}
                  height={200}
                  alt={article.title}
                  className="aspect-video object-cover w-full"
                />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block rounded-full bg-[#1D428A] px-2 py-1 text-xs text-white">
                      {article.category}
                    </span>
                    <CardDescription>{article.date}</CardDescription>
                  </div>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-[#1D428A]">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button className="bg-[#1D428A] hover:bg-[#1D428A]/90">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 bg-[#1D428A] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Warriors Updates</h2>
            <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed">
              Get the latest news, exclusive content, and special offers delivered directly to your inbox.
            </p>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 bg-white/10 text-white placeholder:text-gray-200"
                />
                <Button type="submit" className="bg-[#FFC72C] text-[#1D428A] hover:bg-[#FFD700]">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-200">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#1D428A] text-white border-t border-white/10 mt-auto">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Golden State Warriors</h3>
              <p className="text-sm text-gray-200">
                Chase Center
                <br />1 Warriors Way
                <br />
                San Francisco, CA 94158
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/schedule" className="hover:underline">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:underline">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:underline">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/stats" className="hover:underline">
                    Stats
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Fan Zone</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tickets" className="hover:underline">
                    Tickets
                  </Link>
                </li>
                <li>
                  <Link href="/merchandise" className="hover:underline">
                    Merchandise
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:underline">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/fan-club" className="hover:underline">
                    Fan Club
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="hover:underline">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:underline">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm">
            <p>© {new Date().getFullYear()} Golden State Warriors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
