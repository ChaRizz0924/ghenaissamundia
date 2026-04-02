"use client"

import { Input } from "@/components/ui/input"
import { useState } from "react"

type Props = {
  onSearch: (value: string) => void
}

export default function ProjectSearch({ onSearch }: Props) {
  const [value, setValue] = useState("")

  return (
    <div className="max-w-5xl mx-auto mb-12">
      <Input
        className="h-12 text-base"
        placeholder="Search projects..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          onSearch(e.target.value)
        }}
      />
    </div>
  )
}