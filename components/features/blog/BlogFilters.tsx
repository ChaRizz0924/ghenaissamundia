"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { blogs } from "@/data/blogs"

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

// ✅ GET UNIQUE CATEGORIES
const categories = [...new Set(blogs.map((b) => b.category))]

// ✅ GET UNIQUE DATES
const dates = blogs.map((b) => {
  const d = new Date(b.date)

  return {
    year: d.getFullYear().toString(),
    month: String(d.getMonth() + 1).padStart(2, "0"),
    day: String(d.getDate()).padStart(2, "0"),
    label: d.toDateString(),
  }
})

// optional: remove duplicates
const uniqueDates = Array.from(
  new Map(dates.map((d) => [`${d.year}-${d.month}-${d.day}`, d])).values()
)

export default function BlogFilters() {
  const router = useRouter()

  return (
    <div className="flex flex-wrap gap-5 mb-10 max-w-6xl w-full mx-auto">

      {/* CATEGORY */}
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

      {/* DATE */}
      <Select
        onValueChange={(value) => {
          router.push(`/blog/date/${value}`)
        }}
      >
        <SelectTrigger className="w-60">
          <SelectValue placeholder="Filter by Date" />
        </SelectTrigger>

        <SelectContent>
          {/* YEAR */}
          {[...new Set(dates.map((d) => d.year))].map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}

          {/* FULL DATE */}
          {uniqueDates.map((d) => (
            <SelectItem
              key={`${d.year}-${d.month}-${d.day}`}
              value={`${d.year}/${d.month}/${d.day}`}
            >
              {d.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* RESET */}
      <Button
        variant="outline"
        onClick={() => router.push("/blog")}
      >
        Reset
      </Button>

    </div>
  )
}