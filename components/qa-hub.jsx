"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import {
  Bold,
  ChevronDown,
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
} from "lucide-react";

export default function QAHub() {
  const [content, setContent] = useState("");
  const [votes, setVotes] = useState(0);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white p-6 font-mono">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Q&A Hub</h1>
          <p className="text-gray-400 text-lg">
            Dive into discussions! Solve issues, share insights, and give a
            thumbs up to top solutions in our comments section – your go-to for
            interactive learning.
          </p>
        </div>

        {/* Editor */}
        <div className="bg-[#1A1F2B] rounded-lg overflow-hidden shadow-xl border border-gray-800/50">
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

            <Button className="bg-orange-500 hover:bg-blue-700 transition-colors ml-2">
              Post
            </Button>
          </div>

          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your message here..."
            className="min-h-[200px] border-0 rounded-none bg-transparent focus-visible:ring-0 resize-none font-mono placeholder:text-gray-600"
          />
        </div>

        {/* Previous Chatter */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight mb-4">
            Previous Chatter
          </h2>
          <div className="space-y-4">
            <div className="bg-[#1A1F2B] rounded-lg shadow-xl border border-gray-800/50 overflow-hidden">
              <div className="p-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1 py-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors h-8 w-8 rounded-full"
                      onClick={() => setVotes(votes + 1)}
                    >
                      <ChevronDown className="h-4 w-4 rotate-180" />
                    </Button>
                    <span className="text-orange-500 font-medium">{votes}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors h-8 w-8 rounded-full"
                      onClick={() => setVotes(votes - 1)}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-10 w-10 border-2 border-gray-700">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gray-700 text-sm">
                          JS
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-gray-300 font-semibold">
                          j4jsmastery@gmail.com
                        </span>
                        <span className="text-gray-500 text-sm">
                          Wed Dec 04 2024
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Orm = Object-relational mapping
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-orange-500 hover:text-blue-300 hover:bg-blue-500/10 transition-colors"
                      >
                        Reply
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-gray-300 hover:bg-gray-700/50 transition-colors"
                      >
                        Share
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-gray-300 hover:bg-gray-700/50 transition-colors"
                      >
                        Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 px-4 py-3 bg-[#141824]">
                <Button
                  variant="ghost"
                  className="text-orange-500 hover:text-blue-300 hover:bg-blue-500/10 transition-colors text-sm"
                >
                  View all replies (3)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
