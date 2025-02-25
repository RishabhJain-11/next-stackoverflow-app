"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  Bold,
  ChevronDown,
  ChevronUp,
  ImageIcon,
  Italic,
  LayoutGrid,
  LineChartIcon as LineHeight,
  Link2,
  List,
  ListOrdered,
  Maximize2,
  Table,
  Underline,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import Prism from "prismjs"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-javascript"

export default function DiscussionPage({ params }) {
  const [content, setContent] = useState("")
  const [votes, setVotes] = useState(10)
  const [answerVotes, setAnswerVotes] = useState(5)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white p-6 font-mono">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Question */}
        <Card className="bg-[#1A1F2B] border-gray-800">
          <CardContent className="p-6">
            <div className="flex gap-6">
              <div className="flex flex-col items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors h-10 w-10 rounded-full"
                  onClick={() => setVotes(votes + 1)}
                >
                  <ChevronUp className="h-6 w-6" />
                </Button>
                <span className="text-xl font-semibold text-orange-400">{votes}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors h-10 w-10 rounded-full"
                  onClick={() => setVotes(votes - 1)}
                >
                  <ChevronDown className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold mb-4 text-white">How to implement authentication in Next.js 13?</h1>
                <div className="prose prose-invert max-w-none mb-6">
                  <p className="text-gray-300 leading-relaxed">
                    I&apos;m trying to implement authentication in my Next.js 13 application using the new App Router.
                    I&apos;ve looked at several solutions including NextAuth.js, but I&apos;m not sure about the best
                    practices for handling authentication in the new routing system.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">Specifically, I need help with:</p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                    <li>Setting up protected routes</li>
                    <li>Handling authentication state</li>
                    <li>Implementing login/logout functionality</li>
                  </ul>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-8 w-8 border border-gray-700">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gray-700 text-xs">JS</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>john_doe</span>
                    <span>•</span>
                    <span>asked 2 hours ago</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">next.js</span>
                  <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">auth</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Answer */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Your Answer</h2>
          <Card className="bg-[#1A1F2B] border-gray-800">
            <CardContent className="p-0">
              <div className="border-b border-gray-800 p-2 flex flex-wrap gap-2 items-center bg-[#141824]">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                >
                  <Bold className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                >
                  <Italic className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                >
                  <Underline className="h-4 w-4" />
                </Button>

                <Select>
                  <SelectTrigger className="w-[140px] border-0 bg-[#0F1218] text-gray-400 hover:bg-[#1A1F2B] transition-colors">
                    <SelectValue placeholder="Block type" />
                  </SelectTrigger>
                  <SelectContent className="font-mono">
                    <SelectItem value="paragraph">Paragraph</SelectItem>
                    <SelectItem value="heading">Heading</SelectItem>
                    <SelectItem value="code">Code Block</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                >
                  <Table className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                >
                  <ListOrdered className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                >
                  <LineHeight className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>

                <div className="flex-1" />

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                >
                  <ImageIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                >
                  <Link2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>

              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your answer here..."
                className="min-h-[200px] border-0 rounded-none bg-transparent focus-visible:ring-0 resize-none font-mono placeholder:text-gray-600 text-white p-4"
              />

              <div className="p-4 bg-[#141824] flex justify-end">
                <Button className="bg-orange-500 hover:bg-orange-600">Post Your Answer</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Answers */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">2 Answers</h2>
          <Card className="bg-[#1A1F2B] border-gray-800">
            <CardContent className="p-6">
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors h-10 w-10 rounded-full"
                    onClick={() => setAnswerVotes(answerVotes + 1)}
                  >
                    <ChevronUp className="h-6 w-6" />
                  </Button>
                  <span className="text-xl font-semibold text-orange-400">{answerVotes}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors h-10 w-10 rounded-full"
                    onClick={() => setAnswerVotes(answerVotes - 1)}
                  >
                    <ChevronDown className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="prose prose-invert max-w-none mb-6">
                    <p className="text-gray-300 leading-relaxed">
                      Here&apos;s how you can implement authentication in Next.js 13 with the App Router:
                    </p>
                    <pre className="bg-[#141824] p-4 rounded-lg mt-4 overflow-x-auto language-typescript">
                      <code className="text-sm text-white">
                        {`// middleware.ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')  // Get token from cookies
  
  // Check if user is trying to access protected route
  if (!token && request.nextUrl.pathname.startsWith('/protected')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return NextResponse.next()
}`}
                      </code>
                    </pre>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 border border-gray-700">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gray-700 text-xs">AS</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>alice_smith</span>
                      <span>•</span>
                      <span>answered 1 hour ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

