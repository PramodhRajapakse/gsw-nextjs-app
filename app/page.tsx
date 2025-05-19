import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarDays, ChevronRight, Trophy, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/gsw-logo.svg?height=40&width=40"
              alt="GSW Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Warriors</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary">
              Team
            </Link>
            <Link href="#schedule" className="text-sm font-medium hover:text-primary">
              Schedule
            </Link>
            <Link href="#news" className="text-sm font-medium hover:text-primary">
              News
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-[#1D428A] hover:bg-[#1D428A]/90">
              Buy Tickets
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden bg-[#1D428A]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D428A]/90 to-transparent z-10"></div>
            <Image
            src="/gsw-logo.svg?height=540&width=960"
            alt="Warriors Team"
            fill
            className="object-contain"
            priority
            />
          <div className="container relative z-20 flex flex-col justify-center h-full text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Golden State Warriors</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              The Dynasty Continues. Follow the Warriors' journey through the NBA season.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#FFC72C] text-[#1D428A] hover:bg-[#FFC72C]/90 w-fit">
                Buy Tickets
              </Button>
              <Button size="lg" variant="outline" className="text-black hover:bg-white/10 w-fit">
                Season Schedule
              </Button>
            </div>
          </div>
        </section>

        {/* Next Game Section */}
        <section className="py-12 bg-[#FFC72C]">
          <div className="container">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Next Game</h2>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center">
                  <Image src="/placeholder.svg?height=80&width=80" alt="Warriors Logo" width={80} height={80} />
                  <span className="font-bold mt-2">Warriors</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold mb-2">VS</div>
                  <div className="bg-[#1D428A] text-white px-4 py-2 rounded-full text-sm">May 5, 2025 • 7:30 PM</div>
                  <div className="mt-2 text-sm">Chase Center, San Francisco</div>
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/placeholder.svg?height=80&width=80" alt="Lakers Logo" width={80} height={80} />
                  <span className="font-bold mt-2">Lakers</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-[#1D428A] hover:bg-[#1D428A]/90">Get Tickets</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold">Team Roster</h2>
                <p className="text-muted-foreground mt-2">Meet the Warriors squad for the 2024-25 season</p>
              </div>
              <Button variant="outline" className="gap-2">
                Full Roster <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { number: 30, name: "Stephen Curry", position: "PG" },
                { number: 11, name: "Klay Thompson", position: "SG" },
                { number: 23, name: "Draymond Green", position: "PF" },
                { number: 22, name: "Andrew Wiggins", position: "SF" },
                { number: 5, name: "Kevon Looney", position: "C" },
                { number: 3, name: "Jordan Poole", position: "SG" },
                { number: 1, name: "Jonathan Kuminga", position: "PF" },
                { number: 4, name: "Moses Moody", position: "SG" },
              ].map((player, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-48 bg-[#1D428A] relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=200&text=${player.name}`}
                      alt={player.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{player.position}</span>
                      <span className="font-bold text-xl text-[#1D428A]">#{player.number}</span>
                    </div>
                    <h3 className="font-bold text-lg mt-1">{player.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold">Upcoming Games</h2>
                <p className="text-muted-foreground mt-2">Warriors schedule for the next few weeks</p>
              </div>
              <Button variant="outline" className="gap-2">
                Full Schedule <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {[
                {
                  date: "May 5, 2025",
                  time: "7:30 PM",
                  opponent: "Los Angeles Lakers",
                  location: "Home",
                  logo: "/placeholder.svg?height=40&width=40",
                },
                {
                  date: "May 8, 2025",
                  time: "6:00 PM",
                  opponent: "Phoenix Suns",
                  location: "Away",
                  logo: "/placeholder.svg?height=40&width=40",
                },
                {
                  date: "May 10, 2025",
                  time: "5:30 PM",
                  opponent: "Sacramento Kings",
                  location: "Home",
                  logo: "/placeholder.svg?height=40&width=40",
                },
                {
                  date: "May 12, 2025",
                  time: "7:00 PM",
                  opponent: "Denver Nuggets",
                  location: "Away",
                  logo: "/placeholder.svg?height=40&width=40",
                },
              ].map((game, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-lg border"
                >
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <div className="bg-[#1D428A] text-white p-3 rounded-lg">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">{game.date}</div>
                      <div className="text-sm text-muted-foreground">{game.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4 sm:mb-0">
                    <Image src="/placeholder.svg?height=40&width=40" alt="Warriors Logo" width={40} height={40} />
                    <span className="font-bold">Warriors</span>
                    <span className="text-muted-foreground">vs</span>
                    <Image src={game.logo || "/placeholder.svg"} alt={`${game.opponent} Logo`} width={40} height={40} />
                    <span className="font-bold">{game.opponent}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${game.location === "Home" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}`}
                    >
                      {game.location}
                    </span>
                    <Button size="sm" className="bg-[#1D428A] hover:bg-[#1D428A]/90">
                      Tickets
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold">Latest News</h2>
                <p className="text-muted-foreground mt-2">Stay updated with Warriors news and highlights</p>
              </div>
              <Button variant="outline" className="gap-2">
                All News <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Warriors Clinch Playoff Spot with Win Over Clippers",
                  date: "April 28, 2025",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  title: "Curry Named Player of the Week for Third Time This Season",
                  date: "April 25, 2025",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  title: "Warriors Announce Community Initiative for Bay Area Youth",
                  date: "April 22, 2025",
                  image: "/placeholder.svg?height=200&width=400",
                },
              ].map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48 relative">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-muted-foreground mb-2">{article.date}</div>
                    <h3 className="font-bold text-lg mb-3">{article.title}</h3>
                    <Button variant="link" className="p-0 h-auto text-[#1D428A]">
                      Read More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#1D428A] text-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Warriors by the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-[#FFC72C] text-4xl font-bold mb-2">7</div>
                <div className="flex justify-center mb-4">
                  <Trophy className="h-8 w-8 text-[#FFC72C]" />
                </div>
                <div className="text-lg">NBA Championships</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-[#FFC72C] text-4xl font-bold mb-2">12</div>
                <div className="flex justify-center mb-4">
                  <Users className="h-8 w-8 text-[#FFC72C]" />
                </div>
                <div className="text-lg">Hall of Famers</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-[#FFC72C] text-4xl font-bold mb-2">6</div>
                <div className="flex justify-center mb-4">
                  <Trophy className="h-8 w-8 text-[#FFC72C]" />
                </div>
                <div className="text-lg">Conference Titles</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-[#FFC72C] text-4xl font-bold mb-2">1946</div>
                <div className="flex justify-center mb-4">
                  <CalendarDays className="h-8 w-8 text-[#FFC72C]" />
                </div>
                <div className="text-lg">Founded</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="bg-[#FFC72C] rounded-2xl p-8 md:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D428A]">Join Dub Nation</h2>
                <p className="text-lg mb-8">Sign up for Warriors updates, exclusive offers, and more!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-lg border-0 shadow-sm focus:ring-2 focus:ring-[#1D428A] w-full sm:max-w-xs"
                  />
                  <Button size="lg" className="bg-[#1D428A] hover:bg-[#1D428A]/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1D428A] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/gsw-logo.svg?height=40&width=40"
                  alt="GSW Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">Warriors</span>
              </div>
              <p className="text-sm text-white/80 mb-4">
                The official website of the Golden State Warriors. ©2025 Golden State Warriors.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Team</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Roster
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Stats
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Standings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    History
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Tickets</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Single Game
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Season Tickets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Group Tickets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Premium Seating
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">More</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Chase Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-sm text-white/60">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>© 2025 Golden State Warriors. All Rights Reserved.</div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
