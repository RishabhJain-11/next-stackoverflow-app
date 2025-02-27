"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const QUESTIONS_PER_PAGE = 5

const MOCK_QUESTIONS = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  title: "How to implement authentication in Next.js 13?",
  votes: Math.floor(Math.random() * 50),
  answers: Math.floor(Math.random() * 5),
  tags: ["next.js", "auth"],
}))

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(MOCK_QUESTIONS.length / QUESTIONS_PER_PAGE)

  const getPageNumbers = (current, total) => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      range.push(i)
    }

    if (current - delta > 2) {
      rangeWithDots.push(1, "...")
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (current + delta < total - 1) {
      rangeWithDots.push("...", total)
    } else if (total > 1) {
      rangeWithDots.push(total)
    }

    return rangeWithDots
  }

  const paginatedQuestions = MOCK_QUESTIONS.slice(
    (currentPage - 1) * QUESTIONS_PER_PAGE,
    currentPage * QUESTIONS_PER_PAGE,
  )

  useEffect(() => {
    const checkAuthStatus = () => {
      const user = localStorage.getItem("user")
      if (user) {
        setIsLoggedIn(true)
        setUsername(JSON.parse(user).name)
      }
    }

    checkAuthStatus()
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white p-6 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            {isLoggedIn ? (
              <>
                <h1 className="text-2xl font-bold mb-1">Welcome back, {username}</h1>
                <p className="text-gray-400">Find answers to your technical questions and help others answer theirs.</p>
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
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Link href="/qa">
                  <Button className="bg-orange-500 hover:bg-orange-600">Ask Question</Button>
                </Link>
                <Button
                  variant="ghost"
                  className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10"
                  onClick={() => {
                    localStorage.removeItem("user")
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
                  <Button variant="ghost" className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10">
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

        <Card className="bg-[#1A1F2B] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Interesting posts for you</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {paginatedQuestions.map((question) => (
              <div key={question.id} className="border-b border-gray-800 last:border-0 pb-4 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <Link href={`/discussion/${question.id}`}>
                    <h3 className="font-medium text-orange-500 hover:text-orange-400 cursor-pointer">
                      {question.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{question.votes} votes</span>
                    <span>•</span>
                    <span>{question.answers} answers</span>
                  </div>
                </div>
                <div className="flex gap-2 text-sm">
                  {question.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-center justify-center gap-2 pt-4 border-t border-gray-800">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:text-orange-500"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {getPageNumbers(currentPage, totalPages).map((pageNum, idx) => (
                <Button
                  key={idx}
                  variant={pageNum === currentPage ? "default" : "ghost"}
                  size="sm"
                  className={`h-8 w-8 text-white ${
                    pageNum === currentPage ? "bg-orange-500 hover:bg-orange-600" : "hover:text-orange-500"
                  } ${pageNum === "..." ? "cursor-default hover:bg-transparent hover:text-white" : ""}`}
                  onClick={() => {
                    if (typeof pageNum === "number") {
                      setCurrentPage(pageNum)
                    }
                  }}
                  disabled={pageNum === "..."}
                >
                  {pageNum}
                </Button>
              ))}

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:text-orange-500"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

