"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"


export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo / Avatar */}
        <Link href="/">
          <div className="w-10 h-10 relative cursor-pointer">
            <Image
              src="/ghenai.jpg"
              alt="Logo"
              fill
              className="object-cover rounded-full border"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Project</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>

          {/* Contact Button (boxed in your sketch) */}
          <Link href="/contact">
            <Button variant="outline">Contact</Button>
          </Link>
        </div>

        {/* Theme Toggle */}
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {mounted && (
            theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )
          )}
        </Button>

      </nav>
    </header>
  )
}