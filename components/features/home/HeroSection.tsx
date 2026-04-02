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
        <h1 className="text-7xl md:text-5xl font-bold">
          MUNDIA, <br /> Ghenaissa Marie J.
        </h1>

        <p className="mt-4 text-muted-foreground">
          I am a web developer passionate about building modern applications. I have experience in React, Next.js, and Node.js, and I enjoy creating user-friendly interfaces and efficient backends. I am always eager to learn new technologies and improve my skills. In my free time, I like to explore new frameworks, contribute to open-source projects, and write technical blogs. Feel free to explore my portfolio and get in touch if you&apos;d like to collaborate or learn more about my work!
        </p>

        <Button className="mt-10" onClick={scrollToCredentials}>
          What&apos;s in my bag?
        </Button>
      </div>

      {/* RIGHT */}
      <div className="relative w-130 h-100 md:h-120">
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