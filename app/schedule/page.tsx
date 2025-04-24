import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SchedulePage() {
  // Sample schedule data
  const upcomingGames = [
    {
      id: 1,
      opponent: "Los Angeles Lakers",
      date: "April 25, 2025",
      time: "7:30 PM PT",
      location: "Chase Center, San Francisco",
      opponentLogo: "/placeholder.svg?height=80&width=80&text=Lakers",
    },
    {
      id: 2,
      opponent: "Phoenix Suns",
      date: "April 28, 2025",
      time: "6:00 PM PT",
      location: "Footprint Center, Phoenix",
      opponentLogo: "/placeholder.svg?height=80&width=80&text=Suns",
    },
    {
      id: 3,
      opponent: "Denver Nuggets",
      date: "May 1, 2025",
      time: "7:30 PM PT",
      location: "Chase Center, San Francisco",
      opponentLogo: "/placeholder.svg?height=80&width=80&text=Nuggets",
    },
    {
      id: 4,
      opponent: "Dallas Mavericks",
      date: "May 3, 2025",
      time: "5:30 PM PT",
      location: "American Airlines Center, Dallas",
      opponentLogo: "/placeholder.svg?height=80&width=80&text=Mavericks",
    },
    {
      id: 5,
      opponent: "Memphis Grizzlies",
      date: "May 5, 2025",
      time: "7:00 PM PT",
      location: "Chase Center, San Francisco",
      opponentLogo: "/placeholder.svg?height=80&width=80&text=Grizzlies",
    },
  ]

  const pastGames = [
    {
      id: 1,
      opponent: "Los Angeles Clippers",
      date: "April 20, 2025",
      result: "W 120-98",
      location: "Chase Center, San Francisco",
      opponentLogo: "/placeholder.svg?height=80&width=80&text=Clippers",
    },
    {
      id: 2,
      opponent: "Sacramento Kings",
      date: "April 18, 2025",
      result: "W 115-110",
      location: "Golden 1 Center, Sacramento",
      opponentLogo: "/placeholder.svg?height=80&width=80&text=Kings",
    },
    {
      id: 3,
      opponent: "Portland Trail Blazers",
      date: "April 15, 2025",
      result: "W 125-105",
      location: "Chase Center, San Francisco",
      opponentLogo: "/placeholder.svg?height=80&width=80&text=Blazers",
    },
    {
      id: 4,
      opponent: "Utah Jazz",
      date: "April 12, 2025",
      result: "L 108-112",
      location: "Vivint Arena, Salt Lake City",
      opponentLogo: "/placeholder.svg?height=80&width=80&text=Jazz",
    },
    {
      id: 5,
      opponent: "Oklahoma City Thunder",
      date: "April 10, 2025",
      result: "W 118-105",
      location: "Chase Center, San Francisco",
      opponentLogo: "/placeholder.svg?height=80&width=80&text=Thunder",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full py-6 bg-[#1D428A] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Game Schedule</h1>
            <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed">
              View the complete schedule for the Golden State Warriors.
            </p>
          </div>
        </div>
      </header>

      {/* Schedule Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming Games</TabsTrigger>
              <TabsTrigger value="past">Past Games</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="mt-8">
              <div className="grid gap-6">
                {upcomingGames.map((game) => (
                  <Card key={game.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex items-center p-6">
                        <div className="flex items-center flex-1">
                          <Image
                            src="/placeholder.svg?height=80&width=80&text=Warriors"
                            width={80}
                            height={80}
                            alt="Warriors Logo"
                            className="mr-4"
                          />
                          <div className="text-xl font-bold">vs</div>
                          <Image
                            src={game.opponentLogo || "/placeholder.svg"}
                            width={80}
                            height={80}
                            alt={`${game.opponent} Logo`}
                            className="mx-4"
                          />
                          <div>
                            <h3 className="font-bold">{game.opponent}</h3>
                            <p className="text-sm text-gray-500">
                              {game.date} • {game.time}
                            </p>
                            <p className="text-sm text-gray-500">{game.location}</p>
                          </div>
                        </div>
                        <Button className="bg-[#1D428A] hover:bg-[#1D428A]/90">Get Tickets</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="past" className="mt-8">
              <div className="grid gap-6">
                {pastGames.map((game) => (
                  <Card key={game.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex items-center p-6">
                        <div className="flex items-center flex-1">
                          <Image
                            src="/placeholder.svg?height=80&width=80&text=Warriors"
                            width={80}
                            height={80}
                            alt="Warriors Logo"
                            className="mr-4"
                          />
                          <div className="text-xl font-bold">vs</div>
                          <Image
                            src={game.opponentLogo || "/placeholder.svg"}
                            width={80}
                            height={80}
                            alt={`${game.opponent} Logo`}
                            className="mx-4"
                          />
                          <div>
                            <h3 className="font-bold">{game.opponent}</h3>
                            <p className="text-sm text-gray-500">{game.date}</p>
                            <p
                              className="text-sm font-medium"
                              style={{ color: game.result.startsWith("W") ? "#1D428A" : "red" }}
                            >
                              {game.result}
                            </p>
                            <p className="text-sm text-gray-500">{game.location}</p>
                          </div>
                        </div>
                        <Button variant="outline" className="border-[#1D428A] text-[#1D428A]">
                          View Recap
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Calendar Download */}
      <section className="w-full py-12 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl font-bold">Never Miss a Game</h2>
            <p className="max-w-[600px] text-gray-500">
              Download the Warriors schedule to your calendar and stay up to date with all the games.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-[#1D428A] hover:bg-[#1D428A]/90">Add to Google Calendar</Button>
              <Button variant="outline" className="border-[#1D428A] text-[#1D428A]">
                Download iCal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#1D428A] text-white mt-auto">
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
