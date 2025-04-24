import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TeamPage() {
  // Sample player data
  const players = [
    {
      id: 1,
      name: "Stephen Curry",
      number: 30,
      position: "Point Guard",
      image: "/placeholder.svg?height=300&width=300&text=Curry",
      bio: "Stephen Curry is an American professional basketball player for the Golden State Warriors. He is considered one of the greatest shooters in NBA history.",
    },
    {
      id: 2,
      name: "Klay Thompson",
      number: 11,
      position: "Shooting Guard",
      image: "/placeholder.svg?height=300&width=300&text=Thompson",
      bio: "Klay Thompson is an American professional basketball player for the Golden State Warriors. He is a five-time NBA All-Star and a three-time NBA champion.",
    },
    {
      id: 3,
      name: "Draymond Green",
      number: 23,
      position: "Power Forward",
      image: "/placeholder.svg?height=300&width=300&text=Green",
      bio: "Draymond Green is an American professional basketball player for the Golden State Warriors. He is a four-time NBA All-Star and a four-time NBA champion.",
    },
    {
      id: 4,
      name: "Andrew Wiggins",
      number: 22,
      position: "Small Forward",
      image: "/placeholder.svg?height=300&width=300&text=Wiggins",
      bio: "Andrew Wiggins is a Canadian professional basketball player for the Golden State Warriors. He was the first overall pick in the 2014 NBA draft.",
    },
    {
      id: 5,
      name: "Kevon Looney",
      number: 5,
      position: "Center",
      image: "/placeholder.svg?height=300&width=300&text=Looney",
      bio: "Kevon Looney is an American professional basketball player for the Golden State Warriors. He has won three NBA championships with the Warriors.",
    },
    {
      id: 6,
      name: "Jonathan Kuminga",
      number: 0,
      position: "Forward",
      image: "/placeholder.svg?height=300&width=300&text=Kuminga",
      bio: "Jonathan Kuminga is a Congolese professional basketball player for the Golden State Warriors. He was selected seventh overall in the 2021 NBA draft.",
    },
    {
      id: 7,
      name: "Moses Moody",
      number: 4,
      position: "Shooting Guard",
      image: "/placeholder.svg?height=300&width=300&text=Moody",
      bio: "Moses Moody is an American professional basketball player for the Golden State Warriors. He was selected 14th overall in the 2021 NBA draft.",
    },
    {
      id: 8,
      name: "Gary Payton II",
      number: 0,
      position: "Point Guard",
      image: "/placeholder.svg?height=300&width=300&text=Payton",
      bio: "Gary Payton II is an American professional basketball player for the Golden State Warriors. He is the son of NBA Hall of Famer Gary Payton.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full py-6 bg-[#1D428A] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Team</h1>
            <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed">
              Get to know the players who make up the Golden State Warriors roster.
            </p>
          </div>
        </div>
      </header>

      {/* Team Roster */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {players.map((player) => (
              <Card key={player.id} className="overflow-hidden">
                <Image
                  src={player.image || "/placeholder.svg"}
                  width={300}
                  height={300}
                  alt={player.name}
                  className="aspect-square object-cover w-full"
                />
                <CardHeader>
                  <CardTitle>{player.name}</CardTitle>
                  <CardDescription>
                    #{player.number} • {player.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{player.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="icon" className="text-[#1D428A]">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-[#1D428A]">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Link href={`/team/${player.id}`}>
                    <Button variant="outline" className="border-[#1D428A] text-[#1D428A]">
                      View Profile
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Staff */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Coaching Staff</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Meet the coaches who lead the Golden State Warriors to victory.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Steve Kerr", position: "Head Coach", image: "/placeholder.svg?height=200&width=200&text=Kerr" },
              {
                name: "Mike Brown",
                position: "Assistant Coach",
                image: "/placeholder.svg?height=200&width=200&text=Brown",
              },
              {
                name: "Kenny Atkinson",
                position: "Assistant Coach",
                image: "/placeholder.svg?height=200&width=200&text=Atkinson",
              },
            ].map((coach, i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={coach.image || "/placeholder.svg"}
                  width={200}
                  height={200}
                  alt={coach.name}
                  className="aspect-square object-cover w-full"
                />
                <CardHeader>
                  <CardTitle>{coach.name}</CardTitle>
                  <CardDescription>{coach.position}</CardDescription>
                </CardHeader>
              </Card>
            ))}
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
