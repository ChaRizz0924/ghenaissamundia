// components/features/blog/BlogFilters.tsx
"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"

const categories = ["tech", "programming"]

export default function BlogFilters() {
  const router = useRouter()

  return (
    <div className="flex flex-wrap gap-5 mb-10 max-w-6xl w-full mx-auto">
      
      {/* CATEGORY DROPDOWN */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline">Filter by Category</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {categories.map((cat) => (
            <Link key={cat} href={`/blog/category/${cat}`}>
              <DropdownMenuItem>
                {cat}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* DATE DROPDOWN */}
      <Select
        onValueChange={(value) => {
          router.push(`/blog/date/${value}`)
        }}
      >
        <SelectTrigger className="w-50">
          <SelectValue placeholder="Filter by Date" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="2026">2026</SelectItem>
          <SelectItem value="2026/03">March 2026</SelectItem>
          <SelectItem value="2026/03/25">March 25, 2026</SelectItem>
        </SelectContent>
      </Select>

      {/* RESET BUTTON */}
      <Button
        variant="ghost"
        onClick={() => router.push("/blog")}
      >
        Reset
      </Button>

    </div>
  )
}