"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings2, Star } from 'lucide-react'
import Link from "next/link"

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  useEffect(() => {
    // Example: Check if user is logged in
    const checkAuthStatus = () => {
      // Replace this with your actual auth check
      const user = localStorage.getItem('user')
      if (user) {
        setIsLoggedIn(true)
        setUsername(JSON.parse(user).name)
      }
    }

    checkAuthStatus()
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white p-6 font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Star className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              {isLoggedIn ? (
                <>
                  <h1 className="text-2xl font-bold mb-1">Welcome back, {username}</h1>
                  <p className="text-gray-400">
                    Find answers to your technical questions and help others answer theirs.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-2xl font-bold mb-1">Developer Q&A Hub</h1>
                  <p className="text-gray-400">
                    Join our community to ask questions, share knowledge, and learn from developers worldwide.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Link href="/qa">
                  <Button className="bg-orange-500 hover:bg-orange-600">Ask Question</Button>
                </Link>
                <Button 
                  variant="ghost" 
                  className="text-orange-500 hover:text-orange-500 hover:bg-orange-500/10"
                  onClick={() => {
                    // Add logout logic here
                    localStorage.removeItem('user')
                    setIsLoggedIn(false)
                    setUsername("")
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="text-orange-500 hover:text-orange-500 hover:bg-orange-500/10">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-orange-500 hover:bg-orange-600">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Reputation */}
              <Card className="bg-[#1A1F2B] border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-white">Reputation</CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-gray-400 mt-1">Earn reputation by Asking, Answering and Editing</p>
                </CardContent>
              </Card>

              {/* Badge Progress */}
              <Card className="bg-[#1A1F2B] border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-white">Badge progress</CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8 bg-orange-500">
                    <Settings2 className="h-4 w-4 " />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-blue-500 rounded-full" />
                    </div>
                    <span className="text-sm text-gray-400">0/1</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">First question with score of 1 or more</p>
                </CardContent>
              </Card>

              {/* Watched Tags */}
              <Card className="bg-[#1A1F2B] border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-white">Watched tags</CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8 bg-orange-500">
                    <Settings2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400">You&apos;re not watching any tags yet!</p>
                  <Button variant="outline" size="sm" className="mt-2 w-full cursor-pointer">
                    Customize your feed
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Questions Feed */}
            <Card className="bg-[#1A1F2B] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Interesting posts for you</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border-b border-gray-800 last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-orange-500 hover:text-blue-400 cursor-pointer">
                        How to implement authentication in Next.js 13?
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>0 votes</span>
                        <span>•</span>
                        <span>2 answers</span>
                      </div>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-300">next.js</span>
                      <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-300">auth</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <Card className="bg-[#1A1F2B] border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">The Overflow Blog</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium hover:text-blue-400 cursor-pointer text-orange-500">
                    Research roadmap update, February 2025
                  </h3>
                  <h3 className="font-medium hover:text-blue-400 cursor-pointer text-orange-500">
                    One quality every engineering manager should have? Empathy.
                  </h3>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1F2B] border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Featured on Meta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium hover:text-blue-400 cursor-pointer text-orange-500">
                    Join us for our first community-wide AMA
                  </h3>
                  <h3 className="font-medium hover:text-blue-400 cursor-pointer text-orange-500">
                    Stacks Editor development and testing
                  </h3>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1F2B] border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Featured on Meta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium hover:text-blue-400 cursor-pointer text-orange-500">
                    Join us for our first community-wide AMA
                  </h3>
                  <h3 className="font-medium hover:text-blue-400 cursor-pointer text-orange-500">
                    Stacks Editor development and testing
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

