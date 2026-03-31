"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {

  const scrollToCredentials = () => {
    const section = document.getElementById("credentials")
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* LEFT */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">
          MUNDIA, <br /> Ghenaissa Marie J.
        </h1>

        <p className="mt-4 text-muted-foreground">
          I am a web developer passionate about building modern applications.
        </p>

        <Button className="mt-10" onClick={scrollToCredentials}>
          What's in my bag?
        </Button>
      </div>

      {/* RIGHT */}
      <div className="relative w-100 h-100 md:h-100">
        <Image
          src="/ghenai.jpg"
          alt="Hero"
          fill
          className="object-cover rounded-xl border"
        />
      </div>

    </section>
  )
}