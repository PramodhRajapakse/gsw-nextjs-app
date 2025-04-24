import Link from "next/link"
import Image from "next/image"
import { CalendarDays, ChevronRight, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1D428A] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Golden State Warriors
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  The official website of the Golden State Warriors. Get the latest news, scores, highlights, and
                  information about your favorite NBA team.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/schedule">
                  <Button className="bg-[#FFC72C] text-[#1D428A] hover:bg-[#FFD700]">View Schedule</Button>
                </Link>
                <Link href="/team">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Meet the Team
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Golden State Warriors Team"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Next Game Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Next Game</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't miss the action. Get your tickets now.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 text-center lg:text-left">
                <h3 className="text-xl font-bold">Warriors vs. Lakers</h3>
                <p className="text-gray-500 dark:text-gray-400">April 25, 2025 • 7:30 PM PT</p>
                <p className="text-gray-500 dark:text-gray-400">Chase Center, San Francisco</p>
                <div className="flex justify-center lg:justify-start pt-4">
                  <Button className="bg-[#1D428A] hover:bg-[#1D428A]/90">Get Tickets</Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    width={120}
                    height={120}
                    alt="Warriors Logo"
                    className="mx-auto mb-2"
                  />
                  <h4 className="font-bold">Warriors</h4>
                </div>
                <div className="text-2xl font-bold">VS</div>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    width={120}
                    height={120}
                    alt="Lakers Logo"
                    className="mx-auto mb-2"
                  />
                  <h4 className="font-bold">Lakers</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest News</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay up to date with the latest Warriors news and updates.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=News+${i}`}
                  width={400}
                  height={200}
                  alt={`News ${i}`}
                  className="aspect-video object-cover w-full"
                />
                <CardHeader>
                  <CardTitle>Warriors Win Against Clippers</CardTitle>
                  <CardDescription>April 20, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>The Warriors secured a decisive victory against the Clippers with a final score of 120-98.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-[#1D428A]">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/news">
              <Button variant="outline" className="border-[#1D428A] text-[#1D428A]">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1D428A] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Team Highlights</h2>
              <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out the best moments from our recent games.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="overflow-hidden rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=Highlight+${i}`}
                  width={300}
                  height={200}
                  alt={`Highlight ${i}`}
                  className="aspect-video object-cover w-full"
                />
                <div className="p-4">
                  <h3 className="font-bold">Amazing Three-Pointer</h3>
                  <p className="text-sm text-gray-200">Game vs. Lakers - April 15, 2025</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Team Stats</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out our performance this season.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <Trophy className="mx-auto h-8 w-8 text-[#FFC72C]" />
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl font-bold">7</h3>
                <p className="text-sm text-gray-500">NBA Championships</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <Users className="mx-auto h-8 w-8 text-[#1D428A]" />
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl font-bold">42-28</h3>
                <p className="text-sm text-gray-500">Season Record</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CalendarDays className="mx-auto h-8 w-8 text-[#1D428A]" />
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl font-bold">24-12</h3>
                <p className="text-sm text-gray-500">Home Record</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CalendarDays className="mx-auto h-8 w-8 text-[#FFC72C]" />
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl font-bold">18-16</h3>
                <p className="text-sm text-gray-500">Away Record</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/stats">
              <Button className="bg-[#1D428A] hover:bg-[#1D428A]/90">View Detailed Stats</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#1D428A] text-white">
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
